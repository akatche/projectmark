<?php

namespace Tests\Feature;

use App\Jobs\ImportPosts;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;

class ImportBlogPostsTest extends TestCase
{
    use RefreshDatabase;

    protected $fakeData;

    /**
     *
     */
    protected function setUp() : void
    {
        parent::setUp();

        $this->fakeData = [
            [
                'title' => 'First post title',
                'description' => 'First post description',
                "publication_date" => '2020-09-14 09:42:57'
            ],
            [
                'title' => 'Second post title',
                'description' => 'Second post description',
                "publication_date" => '2020-09-15 09:42:57'
            ],
            [
                'title' => 'Third post title',
                'description' => 'Third post description',
                "publication_date" => '2020-09-16 09:42:57'
            ]
        ];
    }

    /**
     * Generates fake data
     */
    private function fakeUrlData(){

        $fakeData = [
            'data' => $this->fakeData
        ];

        Http::fake([
            config('services.posts_import.url') => Http::response($fakeData, 200),
        ]);
    }

    /**
     * Test if the command sends the import posts job to the queue
     * @test
     * @return void
     */
    public function commandSendsImportPostsJobToTheQueue()
    {
        $this->fakeUrlData();

        Queue::fake();

        $this->artisan('blog:import-posts')
            ->expectsOutput('Importing posts...')
            ->expectsOutput('Posts have been correctly imported into the platform.');

        Queue::assertPushed(ImportPosts::class);
    }

    /**
     * Test if the job inserts the queued jobs once executed
     * @test
     * @return void
     */
    public function queuedJobInsertsPostsInPostTable()
    {
        $this->seed();

        $this->fakeUrlData();

        $job = new ImportPosts();
        $job->handle();

        $admin = User::where('email','admin@projectmark.com')->first();

        $this->assertDatabaseCount('posts',3);

        foreach ($this->fakeData as $data){
            $data['user_id'] = $admin->id;
            $this->assertDatabaseHas('posts', $data);
        }

    }

}
