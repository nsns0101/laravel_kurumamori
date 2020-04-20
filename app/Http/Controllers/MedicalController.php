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
        $insurance = \App\Insurance::whereUser_id(auth()->user()->id)->first();
        $update_form = false;
        return view('info.medical_info', compact('medical_info', 'insurance', 'update_form'));
    
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
    public function edit()
    {
        $medical_info = \App\Medical_info::whereUser_id(auth()->user()->id)->first();
        $insurance = \App\Insurance::whereUser_id(auth()->user()->id)->first();
        $update_form = true;
        return view('info.medical_info', compact('medical_info', 'insurance', 'update_form'));
    }

    public function update(Request $request, \App\Medical_info $medical_info){
        // 의료정보
        $medical_info ->update([
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
        \Log::info($request->all());
        //보험 여부란에 yes를 체크하면
        if($request->insurance_bool){
            //현재 유저가 가지고 있는 보험정보를 모두 획득
            $insurances = \App\Insurance::whereUser_id(auth()->user()->id)->get();
            for($i = 0; $i < count($insurances); $i++){
                // \Log::info("insurance_name{$i}");
                $insurances[$i]->update([
                    'user_id' => auth()->user()->id,
                    'insurance_name' => $request->input("insurance_name{$i}"),
                    'insurance_phone' => $request->input("insurance_phone{$i}"),
                    'subscription_date' => $request->input("subscription_date{$i}"),
                    'expiration_date' => $request->input("expiration_date{$i}"),
    
                ]);
            }
               
        }

        return redirect('/info/medical_info');

    }
    public function show()
    {
        $medical_info = \App\Medical_info::whereUser_id(auth()->user()->id)->first();
        $insurance = \App\Insurance::whereUser_id(auth()->user()->id)->first();
        $update_form = false;
        return view('info.medical_info', compact('medical_info', 'insurance', 'update_form'));
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
