<?php

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

Route::get('/', function () {
    return view('home');
});

//로그인 컨트롤러
Route::resource('/auth/login', 'LoginController');

//회원가입 컨트롤러
Route::resource('/auth/signup', 'SignUpController');

Route::resource('/info', 'InfoController');
