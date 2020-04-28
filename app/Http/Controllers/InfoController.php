<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class InfoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index()
    {
        $user = \App\User::whereId(auth()->user()->id)->first();
        $reports = \App\Report::whereUser_id(auth()->user()->id)->orderBy('id', 'desc')->paginate(5);
        // $questions = \App\Question::whereUser_id(auth()->user()->id)->orderBy('id', 'desc')->paginate(5);
        // $question = \App\Question::whereUser_id(auth()->user()->id)->first();
        $product = \App\Product::whereUser_id(auth()->user()->id)->first();
        $product_buy = $product ? \App\Product_buy::whereProduct_key($product->product_key)->first() : null;
        \Log::info($product_buy);

        return view('info.index', compact('user', 'reports', 'product', 'product_buy'));
    }

    public function create()
    {
        // return view('sessions.login');
    }

    public function store()
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
