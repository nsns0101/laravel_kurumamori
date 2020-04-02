<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SignUpController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'destroy']);
    }
    //로그인, 회원가입 페이지
    public function index()
    {
        return view('sessions.signup');
    }

    //회원가입 요청
    public function create()
    {
        // return view('sessions.login');
    }

    //로그인 요청
    public function store(Request $request)
    {
        \Log::info($request);
        $messages = [
            'email.required' => '이메일을 입력해주세요',
            'email.unique' => '이미 가입된 이메일입니다.',
            'password.required' => '비밀번호를 입력해주세요',
            'password.confirmed' => '비밀번호 확인이 맞지 않습니다.',
            'min.required' => '비밀번호는 최소 :min글자를 적어주세요',
            'name.required' => '이름을 입력해주세요',
            'age.required' => '나이를 입력해주세요',
            'age.integer' => '숫자를 입력하세요',
            'gender.required' => '성별을 체크해주세요',
            'phone.required' => '휴대폰 번호를 입력해주세요',
            'phone.min' => '최소 :min글자 이상 적어주세요',
            'phone.unique' => '이미 가입된 번호입니다.',

        ];
        $this->validate($request, [
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|confirmed|min:6',
            'name' => 'required',
            'age' => 'required|integer',
            'gender' => 'required',
            'phone' => 'required|min:11|unique:users',
        ], $messages);

        \App\User::create([
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'name' => $request->input('name'),
            'age' => $request->input('age'),
            'gender' => $request->input('gender'),
            'phone' => $request->input('phone'),
        ]);

        flash("가입이 완료되었습니다! 로그인해주세요.");
        return redirect('/auth/login');
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
