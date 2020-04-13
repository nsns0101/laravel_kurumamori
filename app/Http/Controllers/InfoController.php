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
        $questions = \App\Question::whereUser_id(auth()->user()->id)->orderBy('id', 'desc')->paginate(5);
        $product = \App\Product::whereUser_id(auth()->user()->id)->first();
        $question = \App\Question::whereUser_id(auth()->user()->id)->first();
        // \Log::info($question->comments()->get());

        return view('info.index', compact('user', 'reports', 'questions', 'product'));
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
