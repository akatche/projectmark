<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class AuthorController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param User $author
     * @return \Inertia\Response
     */
    public function __invoke(User $author)
    {

        $currentPage = request()->get('page',1);

        $authorPosts = Cache::rememberForever('author-posts-'. $author->id .'_page_' . $currentPage, function () use($author) {

            $posts = $author->posts()->orderByDesc('publication_date')->paginate(3);

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

        return Inertia::render('Author', [
            'posts' => function () use ($authorPosts) {
                return $authorPosts;
            },
            'author' => function () use ($author) {
                return $author->only('name');
            },
        ]);
    }
}
