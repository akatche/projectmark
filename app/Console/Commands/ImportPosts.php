<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class ImportPosts extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'blog:import-posts';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import posts from external blogging platform';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $this->info('Importing posts...');

        \App\Jobs\ImportPosts::dispatch();

        $this->info('Posts have been correctly imported into the platform.');
    }
}
