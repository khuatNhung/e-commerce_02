<?php

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

Auth::routes();

/*
|--------------------------------------------------------------------------
|
|--------------------------------------------------------------------------
*/
Route::group([
    'as' => 'admin.',
    'prefix' => 'admin',
    'namespace' => 'Admin',
], function () {
    Route::get('/', function () {
        return view('admin.index');
    })->name('admin.index');
    // Route::resource('categories', 'CategoriesController', ['except' => 'show']);
});

Route::resource('/home', 'User\HomeController');
Route::resource('/product', 'User\ProductController');
Route::resource('/rating', 'User\RatingController');
/*Route::group(['namespace' => 'User', 'prefix' => ''], function (){
    Route::resource('/home', 'User\HomeController');
});*/
