<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InfoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    //로그인, 회원가입 페이지
    public function index()
    {
        //현재 로그인 중인 유저의 정보
        $user = \App\User::whereId(auth()->user()->id)->first();
        $reports = \App\Report::whereUser_id(auth()->user()->id)->orderBy('id', 'desc')->paginate(5);
        $questions = \App\Question::whereUser_id(auth()->user()->id)->orderBy('id', 'desc')->paginate(5);
        $product = \App\Product::whereUser_id(auth()->user()->id)->first();
        \Log::info($user);
        $product_use = \App\Product_buy::whereUse_key(true)->get();
        // $product_key = Arr::pluck($product_use, 'id');
        // $product_key = Arr::pluck('id');
        return view('info.index', compact('user', 'reports', 'questions', 'product', 'product_use'));
    }

    //회원가입 요청
    public function create()
    {
        // return view('sessions.login');
    }

    //로그인 요청
    public function store(Request $request)
    {
    }

    // public function destroy()
    // {
    // }

    // protected function respondError($message)
    // {
    // }

    // protected function respondCreated($message)
    // {
    // }
}
