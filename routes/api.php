<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Route::post('/auth/signup', 'JWTAuthController@register')->name('api.jwt.register');
// Route::post('/auth/login', 'JWTAuthController@login')->name('api.jwt.login');
// Route::get('unauthorized', function() {
//     return response()->json([
//         'status' => 'error',
//         'message' => 'Unauthorized'
//     ], 401);
// })->name('api.jwt.unauthorized');

// Route::group(['middleware' => 'auth:api'], function(){
//     Route::get('user', 'JWTAuthController@user')->name('api.jwt.user');
// });

Route::post('register', 'UsersController@register');
Route::post('login', 'UsersController@login');
Route::get('profile', 'UsersController@getAuthenticatedUser');
// Route::get('info/index', 'InfoController@index');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
// Route::middleware('jwt.auth')->get('users', function (Request $request) {
//     return auth()->user();
// });











// Route::group(['middleware' => ['jwt.auth','api-header']], function () {
//     Route::resource('/info/index', 'InfoController');

//     // all routes to protected resources are registered here  
//     Route::get('users/list', function(){
//         $users = App\User::all();
        
//         $response = ['success'=>true, 'data'=>$users];
//         return response()->json($response, 201);
//     });
// });

// Route::group([
//     'middleware' => 'api',
//     'namespace' => 'App\Http\Controllers',
//     'prefix' => 'auth'
// ], function ($router) {

//     // 로그인 컨트롤러
//     Route::resource('/auth/login', 'LoginController');
//     // 회원가입 컨트롤러
//     Route::resource('/auth/signup', 'SignUpController');
//     Route::resource('/info/index', 'InfoController');

// });



// Route::group(['middleware' => 'api-header'], function () {
  
//     // The registration and login requests doesn't come with tokens 
//     // as users at that point have not been authenticated yet
//     // Therefore the jwtMiddleware will be exclusive of them

//     // Route::post('auth/login', 'LoginController@login');
//     // Route::post('auth/signup', 'LoginController@register');
//     // 로그인 컨트롤러
//     Route::resource('/auth/login', 'LoginController');
//     // 회원가입 컨트롤러
//     Route::resource('/auth/signup', 'SignUpController');
//     Route::resource('/info/index', 'InfoController');

// });