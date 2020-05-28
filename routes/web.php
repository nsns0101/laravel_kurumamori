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

Route::resource('/app', 'AppController');

Route::get('/', function () {
    return view('home.main');
});

Route::get('logout',function(){
    Auth::logout();
    return view('home.main');
});

// Route::post('auth/login', 'LoginController@login');
// Route::post('auth/signup', 'LoginController@register');
// 로그인 컨트롤러
Route::resource('/auth/login', 'LoginController');
// 회원가입 컨트롤러
Route::resource('/auth/signup', 'SignUpController');

//메일관련 컨트롤러
Route::resource('/confirm', 'ConfirmController');

Route::get('/info/drive_score', function () {
    return view('info.drive_score');
});

//내정보
Route::resource('/info/index', 'InfoController');
Route::resource('/info/medical_info', 'MedicalController');
// Route::resource('/info/product', 'ProductController');

//운전점수
Route::resource('/info/drive_score', 'DriveController');

//운전점수 날짜별 검색
Route::get('info/{date}/drive_score', [ //{date}값에 들어온 것은 index메서드로 넘김
    'as' => 'date.drive',
    'uses' => 'DriveController@index',
]);

//정인식 제품 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
Route::resource('/products','ProductController');

Route::resource('/buy','BuyController');
Route::get('/thanks', function () {
    return view('product.thanks');
});
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ Q&A ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
Route::resource('/boards/questions','QuestionsController');
Route::resource('/boards/questions/comments','CommentsController');

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 유저리뷰 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
Route::resource('/boards/reviews','ReviewsController');


//ㅡㅡㅡㅡㅡㅡㅡㅡ 빅데이터 페이지 ㅡㅡㅡㅡㅡㅡㅡㅡ
Route::resource('/bigdata', 'BigdataController');

// Route::get('/bigdata/{option}', 'BigdataController@show');

//월별 빅데이터 조회
// Route::get('bigdata/{bigdata_date}/search', [ //{bigdata_date}값에 들어온 것은 index메서드로 넘김
//     'as' => 'bigdata.date',
//     'uses' => 'BigdataController@index',
// ]);

Route::resource('/app', 'AppController');
Route::resource('/smstest', 'TestController');


// Route::get('/auth/login', 'JWTAuthController@index');
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