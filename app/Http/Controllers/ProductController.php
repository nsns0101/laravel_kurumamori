<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }
    //로그인, 회원가입 페이지
    public function index()
    {
        return view('product.product');
    }

    //회원가입 요청
    public function create(Request $request)
    {

    }

    //로그인 요청
    public function store(Request $request)
    {
        // $product_use = \App\Product_buy::whereUse_key(true)->get();
        // \Log::info($request->all());
        // return response()->json([], 200);

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
