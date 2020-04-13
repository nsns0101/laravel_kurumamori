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

    public function store(\App\Http\Requests\Medical_infoRequest $request)
    {
        \Log::info($request->all());
        \Log::info($request->sickness);

        // 의료정보
        \App\Medical_info::create([
            'user_id' => auth()->user()->id,
            'past_sickness'=> $request->past_sickness,
            'past_sickness_supplementation' => $request->past_sickness_supplementation,
            'sickness' => $request->sickness,
            'medicine' => $request->medicine,
            'symptom' => $request->symptom,
            'guardian_phone' => $request->guardian_phone,
            'blood_type' => $request->blood_type,
            'disability_status' => $request->disability_status,
            'hospital' => $request->hospital,
            'hospital_menu' => $request->hospital_menu,
            'report_request' => $request->report_request,
        ]);
        
        // 보험 정보
        if($request->insurance_bool){
            \App\Insurance::create([
                'user_id' => auth()->user()->id,
                'insurance_name' => $request->insurance_name,
                'insurance_phone' => $request->insurance_phone,
                'subscription_date' => $request->subscription_date,
                'expiration_date' => $request->expiration_date,

            ]);
        }
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
