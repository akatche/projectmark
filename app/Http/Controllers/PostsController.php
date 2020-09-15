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
        $posts = \auth()->user()->posts()->paginate(5);

        $posts->getCollection()->transform(function($post) {
            return [
                'url' => $post->url,
                'title' => $post->title,
                'publication_date' => $post->publication_date->toDateTimeString(),
                'views' => $post->views
            ];
        });

        return Inertia::render('Post/Index', [
            'posts' => $posts
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
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

        //Increment views using a queued job so it doesn´t afect loading time
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

        return Inertia::render('Post/Show', [
            'post' => $postCache
        ]);
    }
}
