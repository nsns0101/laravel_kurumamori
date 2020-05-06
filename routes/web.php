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
    return view('home.main');
});

Route::get('logout',function(){
    Auth::logout();
    return view('home.main');
});

//로그인 컨트롤러
Route::resource('/auth/login', 'LoginController');

//컨펌코드
// Route::get('auth/confirm/{code}', [
//     'as' => 'signup.confirm',
//     'uses' => 'SignUpController@confirm',
// ]);
//회원가입 컨트롤러
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
Route::get('info/{date}/drive_score', [ //{{slug}}값에 들어온 것은 index메서드로 넘김
    'as' => 'date.drive',
    'uses' => 'DriveController@index',
]);

//정인식 제품 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
Route::resource('/products','ProductController');

Route::resource('/buy','BuyController');
//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//김도형 Q&A ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// Route::resource('/qna','QnaController');

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ Q&A ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
Route::resource('/questions','QuestionsController');

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 유저리뷰 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
Route::resource('/reviews','ReviewsController');


//팽진솔 빅데이터 페이지 ㅡㅡㅡㅡㅡㅡㅡㅡ
// Route::get('/bigdata', function() {
//     return view('bigdata.big_chart');
// });

Route::resource('/bigdata', 'BigdataController');