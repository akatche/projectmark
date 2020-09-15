<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomePageController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Inertia\Response
     */
    public function __invoke(Request $request)
    {
        $posts = Post::all()->transform(function($post) {
            return [
                'id' => $post->id,
                'title' => $post->title,
                'description' => $post->description,
                'date' => $post->publication_date->toFormattedDateString(),
                'datetime' => $post->publication_date->toAtomString(),
                'author' => $post->author->name,
                'views' => $post->views,
                'url' => url("/posts/{$post->url}")
            ];
        });

        return Inertia::render('Homepage', [
            'posts' => function () use($posts) {
                return $posts;
            }
        ]);
    }
}
