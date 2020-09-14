<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBlogPost;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
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
        return Inertia::render('Post/Index', [
            'posts' => Post::paginate(5)->transform(function ($post) {
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'publication_date' => $post->publication_date->toDateTimeString(),
                    'views' => $post->views
                ];
            }),
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
        Auth::user()->posts()->create(
            array_merge(
                $request->validated(),
                [
                    'publication_date' => Carbon::now()
                ]
            )
        );

        return Redirect::route('posts.index')->with('success', 'Post created.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Post  $post
     * @return \Illuminate\Http\Response
     */
    public function show(Post $post)
    {
        //
    }
}
