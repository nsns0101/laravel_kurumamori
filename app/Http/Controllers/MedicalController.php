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
        $sickness_list = ["없음", "고혈압", "당뇨", "결핵", "심장질환", "알러지", "천식", "심부전증", "페렴", "디스크", "간경화", "관절염", "협심증", "암", "갑상선염", "고지혈증", "골다공증", "과민성 대장", "기관지염", "뇌졸중", "신장질환", "간암"];

        if(isset(\App\Medical_info::whereUser_id(auth()->user()->id)->first()->id)){
            $medical_id = \App\Medical_info::whereUser_id(auth()->user()->id)->first()->id;
            $past_sicknesses = \App\Past_sickness::whereMedical_id($medical_id)->get();
            $sicknesses = \App\Sickness::whereMedical_id($medical_id)->get();
            \Log::info($past_sicknesses);
            \Log::info($sicknesses);
            return view('info.medical_info', compact('medical_info', 'insurance', 'update_form','past_sicknesses','sicknesses'));
        }
        return view('info.medical_info', compact('medical_info', 'insurance', 'update_form','sickness_list'));
    
    }

    //회원가입 요청
    public function create()
    {
        // return view('sessions.login');
    }

    public function store(\App\Http\Requests\Medical_infoRequest $request)
    {
        //보험 "예'를 체크 했는데 값을 안넣었을 경우 
        if($request->insurance_bool){
            $messages = [
                'insurance_name.required' => '보험 명을 입력해주세요',
                'insurance_phone.required' => '보험사 번호를 입력해주세요.',
                'subscription_date.required' => '보험 가입날짜를 입력해주세요',
                'expiration_date.required' => '보험 만기날짜를 입력해주세요',
                'expiration_date.after' => '만기날짜를 다시 확인해주세요'
            ];
            $this->validate($request, [
                'insurance_name' => 'required',
                'insurance_phone' => 'required',
                'subscription_date' => 'required',
                'expiration_date' => "required|after:{$request->subscription_date}",
            ], $messages);
        }
        \Log::info($request->all());
        //medical_info DB create
        \App\Medical_info::create([
            'user_id' => auth()->user()->id,
            'guardian_phone' => $request->guardian_phone,
            'blood_type' => $request->blood_type,
            'disability_status' => $request->disability_status,
            'hospital' => $request->hospital,
            'hospital_menu' => $request->hospital_menu,
            'report_request' => $request->report_request,
        ]);
        $medical_info = \App\Medical_info::whereUser_id(auth()->user()->id)->first();
        $medical_id = \App\Medical_info::whereUser_id(auth()->user()->id)->first()->id;
        $past_sickness_count = 0;
        $sickness_count = 0;

        //past_sickness DB create
        for($i = 1; $i <= count($request->past_sickness_name); $i++){
            if($request->past_sickness_name[$i] && $request->past_sickness_name[$i]!="없음"){
                \App\Past_sickness::create([
                    'medical_id' => $medical_id,
                    'past_sickness_name' => $request->past_sickness_name[$i],
                    'past_sickness_supplementation' => $request->past_sickness_supplementation[$i]
                    ]);
                $past_sickness_count++;
            }
        }
        //sickness DB create
        for($i = 1; $i <= count($request->sickness_name); $i++){
            \Log::info("i" . $i);
            if($request->sickness_name[$i] && $request->sickness_name[$i]!="없음"){
                \Log::info("성공");
                \App\Sickness::create([
                    'medical_id' => $medical_id,
                    'sickness_name' => $request->sickness_name[$i],
                    'medicine' => $request->medicine[$i],
                    'symptom' => $request->symptom[$i]
                    ]);
                $sickness_count++;
            }
        }
        //insurance DB create
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
        // \Log::info($request->past_sickness_name[1]);
        
        $medical_id = \App\Medical_info::whereUser_id(auth()->user()->id)->first()->id;
        $past_sickness = \App\Past_sickness::whereMedical_id($medical_id)->get();
        $sickness = \App\Sickness::whereMedical_id($medical_id)->get();
        $past_sickness_count = 0;
        $sickness_count = 0;
        // \Log::info(count($request->past_sickness_name));
        // \Log::info(count($request->sickness_name));
        //past_sickness DB Update

        for($i = 1; $i <= count($request->past_sickness_name); $i++){
            // \Log::info(count($request->past_sickness_name));
            //input창에 넣은 값이 있고 "없음"이 아닐 때
            if($request->past_sickness_name[$i] && $request->past_sickness_name[$i]!="없음"){
                \Log::info("good" . $i);
                if($i > count($past_sickness)){
                    \App\Past_sickness::create([
                        'medical_id' => $medical_id,
                        'past_sickness_name' => $request->past_sickness_name[$i],
                        'past_sickness_supplementation' => $request->past_sickness_supplementation[$i]
                    ]);
                }
                else{
                    $past_sickness[$past_sickness_count]->update([
                        'medical_id' => $medical_id,
                        'past_sickness_name' => $request->past_sickness_name[$i],
                        'past_sickness_supplementation' => $request->past_sickness_supplementation[$i]
                    ]);
    
                }
            }
            //수정창에서 지운 경우
            elseif(isset($past_sickness[$i-1])){
                $past_sickness[$i-1]->delete();
            }
            $past_sickness_count++;
        }
        // \Log::info($error);
        //sickness DB Update
        for($i = 1; $i <= count($request->sickness_name); $i++){
            if($request->sickness_name[$i] && $request->sickness_name[$i]!="없음"){
                if($i > count($sickness)){
                    \App\Sickness::create([
                        'medical_id' => $medical_id,
                        'sickness_name' => $request->sickness_name[$i],
                        'medicine' => $request->medicine[$i],
                        'symptom' => $request->symptom[$i]
                    ]);
                }
                else{
                    $sickness[$sickness_count]->update([
                        'medical_id' => $medical_id,
                        'sickness_name' => $request->sickness_name[$i],
                        'medicine' => $request->medicine[$i],
                        'symptom' => $request->symptom[$i]
                    ]);
                }
               
            }
            //수정창에서 지운 경우
            elseif(isset($sickness[$i-1])){
                $sickness[$i-1]->delete();
            }
            $sickness_count++;
        }
        //medical_info DB Update
        $medical_info ->update([
            'user_id' => auth()->user()->id,
            'guardian_phone' => $request->guardian_phone,
            'blood_type' => $request->blood_type,
            'disability_status' => $request->disability_status,
            'hospital' => $request->hospital,
            'hospital_menu' => $request->hospital_menu,
            'report_request' => $request->report_request,
        ]);

        //insurances DB Update
        $insurance = \App\Insurance::whereUser_id(auth()->user()->id)->first();
        
        if($request->insurance_bool){
            \Log::info($insurance);
            if($insurance){
                $insurance->update([
                    'user_id' => auth()->user()->id,
                    'insurance_name' => $request->input("insurance_name"),
                    'insurance_phone' => $request->input("insurance_phone"),
                    'subscription_date' => $request->input("subscription_date"),
                    'expiration_date' => $request->input("expiration_date"),
    
                ]);
            }
            else{
                \App\Insurance::create([
                    'user_id' => auth()->user()->id,
                    'insurance_name' => $request->input("insurance_name"),
                    'insurance_phone' => $request->input("insurance_phone"),
                    'subscription_date' => $request->input("subscription_date"),
                    'expiration_date' => $request->input("expiration_date"),
    
                ]);
            }
        }
        //DB에 있는데 input창에서 없음을 고를 때 삭제
        elseif($insurance){
            $insurance->delete();
        }
        // \Log::info($error);
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
