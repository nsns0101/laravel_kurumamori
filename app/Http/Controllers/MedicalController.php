<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MedicalController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('guest', ['except' => 'destroy']);
    // }
    //로그인, 회원가입 페이지
    public function index()
    {
        $medical_info = \App\Medical_info::whereUser_id(auth()->user()->id)->first();
        \Log::info($medical_info);

        return view('info.medical_info', compact('medical_info'));
    }

    //회원가입 요청
    public function create()
    {
        // return view('sessions.login');
    }

    //로그인 요청
    public function store(\App\Http\Requests\Medical_infoRequest $request)
    {
        \Log::info($request->all());
        \Log::info($request->sickness);
        \App\Medical_info::create([
            'user_id' => auth()->user()->id,
            'past_sickness'=> $request->past_sickness,
            'blood_type' => $request->blood_type,
            'disability_status' => $request->disability_status
        ]);
        return redirect('/info/medical_info');
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
