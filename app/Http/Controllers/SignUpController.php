<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;

class SignUpController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'destroy']);
    }
    //로그인, 회원가입 페이지
    public function index()
    {
        return view('users.signup');
    }

    //회원가입 요청
    public function create()
    {
        // return view('sessions.login');
    }

    //로그인 요청
    public function store(\App\Http\Requests\UsersRequest $request)
    {
        $user = \App\User::create([
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'name' => $request->input('name'),
            'age' => $request->input('age'),
            'gender' => $request->input('gender'),
            'phone' => $request->input('phone'),
            'rember_token' => Str::random(10),
            'confirm_code' => Str::random(10),  //컨펌코드
        ]);

        // //이메일
        event(new \App\Events\UserCreated($user));
            
        
        flash('가입하신 메일 계정으로 가입 확인 URL을 보내드렸습니다. 
            확인하시고 로그인해주세요.');
        
        return redirect('/auth/login');
    }

    public function confirm($code)
    {
        $user = \App\User::whereConfirmCode($code)->first();

        if (!$user) {
            return $this->respondError('URL이 정확하지 않습니다.');
        }
        // \App\User::update([
        //     'confirm_code' => null
        // ]);

        auth()->login($user);
        flash(auth()->user()->name . '님, 환영합니다. 가입 확인되었습니다.');

        return redirect('/');
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
