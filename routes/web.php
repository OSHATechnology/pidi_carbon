<?php

use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('components-latest.dashboard');
});

Route::get('/the-dashboard', function () {
    return view('components-new.dashboard');
});

Route::get('/latest-dashboard', function () {
    return view('components-latest.dashboard');
});
