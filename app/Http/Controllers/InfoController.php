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

        //
        $product_use_key = \App\Product_buy::whereUse_key(false)->get();

        // \Log::info($product_use_key);

        return view('info.index', compact('user', 'reports', 'questions', 'product', 'product_use_key'));
    }

    //회원가입 요청
    public function create()
    {
        // return view('sessions.login');
    }

    //로그인 요청
    public function store(Request $request, \App\User $user)
    {
        // \Log::info($request->product_key);
        $product = \App\Product_buy::whereProduct_key($request->product_key)->first();

        if (!$product) {
            // flash()->error("잘못된 키입니다. 다시 입력해주세요");
            return response()->json([], 204);

        }

        $product_use = \App\Product::whereProduct_key($product->product_key)->first();
        // \Log::info($product_use);
        if ($product_use) {
            // flash()->error("이미 사용한 키입니다.");
            return response()->json([], 204);
        }

        $create_product = \App\Product::create([
            'user_id' => auth()->user()->id,
            'product_name' => $product->product_name,
            'product_key' => $request->product_key,
            'date_buy' => $product->created_at,
            'date_as' => date("Y-m-d", strtotime("{$product->created_at} +1 years")),
        ]);
        return response()->json([$create_product], 200);
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
