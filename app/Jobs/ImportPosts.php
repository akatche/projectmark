<?php

namespace App\Jobs;

use App\Models\Post;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;


class ImportPosts implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $posts = collect(Http::get(config('services.posts_import.url'))['data']);

        $admin = User::where('email','admin@projectmark.com')->first();

        $posts->each(function ($post) use($admin) {
            Post::create([
                'title' => e($post['title']),
                'description' => e($post['description']),
                'publication_date' => Carbon::parse($post['publication_date']),
                'user_id' => $admin->id
            ]);
        });
    }
}
