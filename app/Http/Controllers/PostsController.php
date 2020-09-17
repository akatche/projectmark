<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogPost;
use App\Jobs\IncrementPostViews;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Bus;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;


class PostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $posts = \auth()->user()->posts();

        if(request()->has('views')){
            $posts = $posts->orderBy('views',request()->get('views'));
        }

        if(request()->has('publication_date')){
            $posts = $posts->orderBy('publication_date',request()->get('publication_date','desc'));
        }else{
            $posts = $posts->orderBy('publication_date','desc');
        }

        $posts = $posts->paginate(5);

        $posts->getCollection()->transform(function($post) {
            return [
                'url' => $post->url,
                'title' => $post->title,
                'publication_date' => $post->publication_date->toDateTimeString(),
                'publication_date_timestamp' => $post->publication_date->timestamp,
                'views' => $post->views
            ];
        });

        return Inertia::render('Post/Index', [
            'posts' => function() use($posts) {
                return $posts;
            }
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Inertia\Response
     */
    public function create()
    {
        return Inertia::render('Post/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreBlogPost $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(StoreBlogPost $request)
    {
        $post = $request->validated();

        Auth::user()->posts()->create(
            [
                'title' => e($post['title']),
                'description' => e($post['description']),
                'publication_date' => Carbon::now(),
                'user_id' => \auth()->user()->id
            ]
        );

        //Flush cache for homepage posts and also from the author posts page
        Cache::tags(['homepage_posts','author_posts_' . \auth()->user()->id])->flush();

        return Redirect::route('posts.index')->with('success', 'Post created.');
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Models\Post $post
     * @return \Inertia\Response
     * @throws \Throwable
     */
    public function show(Post $post)
    {
        //Increment views using a queued job so it doesn´t affect loading time
        IncrementPostViews::dispatch($post);

        $postCache = Cache::rememberForever('post'. $post->id, function () use($post) {
            return [
              'id' => $post->id,
              'title' => $post->title,
              'description' => html_entity_decode($post->description),
              'date' => $post->publication_date->toFormattedDateString(),
              'datetime' => $post->publication_date->toAtomString(),
              'author' => $post->author->only(['id','name']),
              'views' => $post->views
            ];
        });

        $viewsCache = Cache::remember('post'. $post->id . '-cache', 600, function () use($post) {
            return [
                'views' => $post->views
            ];
        });

        return Inertia::render('Post/Show', [
            'post' => array_merge($postCache,$viewsCache)
        ]);
    }
}
