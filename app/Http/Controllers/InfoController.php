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
        //신고 이력
        $reports = \App\Report::whereUser_id(auth()->user()->id)->orderBy('id', 'desc')->paginate(5);
        //게시판 최근 5개
        $boards = \App\Board::whereUser_id(auth()->user()->id)->orderBy('id', 'desc')->paginate(5);
        //게시판 카테고리
        $board_categories = array();
        for($i = 0; $i < count($boards); $i++){
            array_push($board_categories, \App\CateGory::whereId($boards[$i]->category_id)->first());
        }
        //게시판 대답여부
        $board_comment = array();
        for($i = 0; $i < count($boards); $i++){
            array_push($board_comment, \App\Comment::whereBoardId($boards[$i]->id)->first());
        }
        \Log::info($board_comment);
        $product = \App\Product::whereUser_id(auth()->user()->id)->first();
        $product_buy = $product ? \App\Product_buy::whereProduct_key($product->product_key)->first() : null;
        // \Log::info($board_categories[0][0]->id);
        return view('info.index', compact('user', 'reports', 'product', 'boards', 'board_categories', 'board_comment','product_buy'));
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
