<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'destroy']);
    }
    //로그인, 회원가입 페이지
    public function index()
    {

        return view('home.main');
    }

    //회원가입 요청
    public function create()
    {

    }
    //로그인 요청
    public function store(Request $request)
    {
        $messages = [
            'email.required' => '이메일을 입력해주세요',
            'password.required' => '비밀번호를 입력해주세요',
            'password.min' => '비밀번호는 최소 6글자 이상 입력해 주세요',
        ];
        $this->validate($request, [
            'email' => 'required|email',
            'password' => 'required|min:6',
        ], $messages);
        if (!auth()->attempt($request->only('email', 'password'), $request->has('remember'))) {
            flash()->error('이메일 또는 비밀번호가 맞지 않습니다.');
            # back 이전페이지로 가기
            return back()->withInput();
        }
        if (auth()->user()->confirm_code) {
            auth()->logout();
            flash()->error('이메일로 가입을 확인해주세요!');
            return redirect('/confirm');
        }

        // flash(auth()->user()->name . '님, 환영합니다.');
        return redirect('/');
    }

    public function destroy()
    {
        auth()->logout();
        flash('또 방문해 주세요.');
        return redirect('/');
    }

}
