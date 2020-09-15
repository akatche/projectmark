<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
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
        $currentPage = request()->get('page',1);

        $posts = Cache::rememberForever('homepage-posts'. '_page_' . $currentPage, function () {

            $posts = Post::orderByDesc('publication_date')->paginate(3);

            $posts->getCollection()->transform(function($post) {
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'description' => html_entity_decode($post->description),
                    'date' => $post->publication_date->toFormattedDateString(),
                    'datetime' => $post->publication_date->toAtomString(),
                    'author' => $post->author->name,
                    'views' => $post->views,
                    'url' => "/post/{$post->url}"
                ];
            });

            return $posts;

        });

        return Inertia::render('Homepage', [
            'posts' => function () use ($posts) {
                return $posts;
            }
        ]);
    }
}
