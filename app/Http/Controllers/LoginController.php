<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'destroy']);
    }
    //로그인, 회원가입 페이지
    public function index()
    {
        return view('sessions.login');
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
