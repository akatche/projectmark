<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return Inertia\Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified'])
    ->get('/posts', [PostsController::class, 'index'])
    ->name('posts');

Route::middleware(['auth:sanctum', 'verified'])
    ->get('/dashboard/posts/create', [PostsController::class, 'create'])
    ->name('posts.create');

Route::middleware(['auth:sanctum', 'verified'])
    ->get('/dashboard/posts/{post}', [PostsController::class, 'show'])
    ->name('posts.show');