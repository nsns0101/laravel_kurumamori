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

        $medical_id = \App\Medical_info::whereUser_id(auth()->user()->id)->first()->id;
        $past_sicknesses = \App\Past_sickness::whereMedical_id($medical_id)->get();
        $sicknesses = \App\Sickness::whereMedical_id($medical_id)->get();
        \Log::info($past_sicknesses);
        \Log::info($sicknesses);
        return view('info.medical_info', compact('medical_info', 'insurance', 'update_form','past_sicknesses','sicknesses'));
    
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
        $medical_id = \App\Medical_info::whereUser_id(auth()->user()->id)->first()->id;
        $past_sickness = \App\Past_sickness::whereMedical_id($medical_id)->get();
        $sickness = \App\Sickness::whereMedical_id($medical_id)->get();

        // \Log::info($past_sickness);
        $sickness_list = ["없음", "고혈압", "당뇨", "결핵", "심장질환", "알러지", "천식", "심부전증", "페렴", "디스크", "간경화", "관절염", "협심증", "암", "갑상선염", "고지혈증", "골다공증", "과민성 대장", "기관지염", "뇌졸중", "신장질환", "간암"];
        \Log::info(count($sickness_list));
        $insurance = \App\Insurance::whereUser_id(auth()->user()->id)->first();
        $update_form = true;
        return view('info.medical_info', compact('medical_info', 'insurance', 'update_form','past_sickness', 'sickness', 'sickness_list'));
    }

    public function update(Request $request, \App\Medical_info $medical_info){

        \Log::info($request->all());
        $past_sickness_length = 0;
        $past_sickness = [$request->past_sickness3, $request->past_sickness2, $request->past_sickness1];
        for($i = 0; $i < count($past_sickness); $i++){
            if($past_sickness[$i]){
                $past_sickness_length++;
            }
        }
        // if($request->past_sickness3){
        //     $past_sickness_length = 3;
        // }
        // elseif($request->past_sickness2){
        //     $past_sickness_length = 2;
        // }
        // elseif($request->past_sickness1){
        //     $past_sickness_length = 1;
        // }
        // else{
        //     $past_sickness_length = 0;
        // }
        // \Log::info( "$request->guardian_phone");
        \Log::info("$request->past_sickness[$i]");
        // $request->input("insurance_name").

        \Log::info($past_sickness_lengths);
        $medical_id = \App\Medical_info::whereUser_id(auth()->user()->id)->first()->id;
        $past_sickness = \App\Past_sickness::whereMedical_id($medical_id)->get();
        for($i = 0; $i < $past_sickness_length; $i++){
            $past_sickness[$i]->update([
            'medical_id' => \App\Medical_info::whereUser_id(auth()->user()->id)->first()->id,
            'past_sickness_name' => "$request->past_sickness{$i}",
            'past_sickness_supplementation' => "$request->past_sickness_supplementation{$i}"
            ]);
        }
        // 의료정보
        $medical_info ->update([
            'user_id' => auth()->user()->id,
            // 'past_sickness'=> $request->input("past_sickness{$i}"),
            // 'past_sickness_supplementation' =>  $request->input("past_sickness_supplementation,
            // 'sickness' => $request->sickness,
            // 'medicine' => $request->medicine,
            // 'symptom' => $request->symptom,
            'guardian_phone' => $request->guardian_phone,
            'blood_type' => $request->blood_type,
            'disability_status' => $request->disability_status,
            'hospital' => $request->hospital,
            'hospital_menu' => $request->hospital_menu,
            'report_request' => $request->report_request,
        ]);
        //과거질환
        // $past_sickness = \App\Past_sickness::whereUser_id(auth()->user()->id)->get();
        $medical_id = \App\Medical_info::whereUser_id(auth()->user()->id)->first();
        $past_sickness = \App\Past_sickness::whereMedical_id($medical_id)->get();
        \Log::info($past_sickness);
        // for($i = 1; $i <= $past_sickness_length; $i++){

        // }

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
                    'insurance_name' => $request->input("insurance_name"),
                    'insurance_phone' => $request->input("insurance_phone"),
                    'subscription_date' => $request->input("subscription_date"),
                    'expiration_date' => $request->input("expiration_date"),
    
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
