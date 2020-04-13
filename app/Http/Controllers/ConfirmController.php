<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ConfirmController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('guest', ['except' => 'destroy']);
    // }

    public function index()
    {
        return view('users.confirm');
    }

    public function create()
    {
        // return view('sessions.login');
    }

    public function store(Request $request)
    {
        \Log::info($request->all());
        $user = \App\User::whereConfirmCode($request->confirm_code)->first();

        if (!$user) {
            flash('입력하신 코드가 올바르지 않습니다. 다시 입력해 주세요.');
            return redirect('/confirm');
        }
        auth()->login($user);
        flash(auth()->user()->name . '님, 환영합니다. 가입 확인되었습니다.');

        return redirect('/');
    }
}
