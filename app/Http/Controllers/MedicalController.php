<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MedicalController extends Controller
{
    public function __construct()
    {
        // $this->middleware('auth');
    }
    public function index()
    {
        return view('home.main');
        // return view('info.medical_info', compact('medical_info', 'insurance', 'update_form','sickness_list'));
    
    }
    public function show(Request $request, $user_id){
        $medical_info = \App\Medical_info::whereUser_id($user_id)->first();
        // \Log::info($medical_info);
        $insurance = \App\Insurance::whereUser_id($user_id)->first();
        // $insurance_list = \App\Insurance::get()->id;
        $insurance_list_my = $insurance ? \App\Insurance_list::whereId($insurance->insurance_list_id)->first() : null;
        $insurance_list = \App\Insurance_list::get();

        $update_form = false;
        $sickness_list = ["없음", "고혈압", "당뇨", "결핵", "심장질환", "알러지", "천식", "심부전증", "페렴", "디스크", "간경화", "관절염", "협심증", "암", "갑상선염", "고지혈증", "골다공증", "과민성 대장", "기관지염", "뇌졸중", "신장질환", "간암"];

        $past_sickness = $medical_info ? \App\Past_sickness::whereUser_id($user_id)->get() : null;
        $sickness = $medical_info ? \App\Sickness::whereUser_id($user_id)->get() : null;
        // \Log::info($past_sickness);
        // \Log::info($sickness);
        return response()->json([
            'medical_info' => $medical_info,
            'insurance' => $insurance,
            'insurance_list_my' => $insurance_list_my,
            'insurance_list'=> $insurance_list,
            'sickness_list' => $sickness_list,
            'past_sickness' => $past_sickness,
            'sickness' => $sickness,
            'status' => true,
        ]);
    }
    //회원가입 요청
    public function create()
    {
        // return view('sessions.login');
    }

    public function store(\App\Http\Requests\Medical_infoRequest $request)
    {
        \Log::info($request->all());
        //보험 "예'를 체크 했는데 값을 안넣었을 경우 
        if($request->insurance_bool){
            $messages = [
                'insurance_name.required' => '보험 명을 입력해주세요',
                // 'insurance_phone.required' => '보험사 번호를 입력해주세요.',
                'subscription_date.required' => '보험 가입날짜를 입력해주세요',
                'expiration_date.required' => '보험 만기날짜를 입력해주세요',
                'expiration_date.after' => '만기날짜를 다시 확인해주세요'
            ];
            $this->validate($request, [
                'insurance_name' => 'required',
                // 'insurance_phone' => 'required',
                'subscription_date' => 'required',
                'expiration_date' => "required|after:{$request->subscription_date}",
            ], $messages);
        }
        //medical_info DB create
        \App\Medical_info::create([
            'user_id' => $user_id,
            'guardian_phone' => $request->guardian_phone,
            'blood_type' => $request->blood_type,
            'disability_status' => $request->disability_status,
            // 'hospital' => $request->hospital,
            // 'hospital_menu' => $request->hospital_menu,
            'report_request' => $request->report_request,
        ]);
        $medical_info = \App\Medical_info::whereUser_id($user_id)->first();
        $medical_id = \App\Medical_info::whereUser_id($user_id)->first()->id;
        $past_sickness_count = 0;
        $sickness_count = 0;

        //past_sickness DB create
        // for($i = 1; $i <= count($request->past_sickness_name); $i++){
        for($i = 1; $i <= 1; $i++){
            if($request->past_sickness_name[$i] && $request->past_sickness_name[$i]!="없음"){
                \App\Past_sickness::create([
                    'user_id' => $user_id,
                    'medical_id' => $medical_id,
                    'past_sickness_name' => $request->past_sickness_name[$i],
                    'past_sickness_supplementation' => $request->past_sickness_supplementation[$i]
                    ]);
                $past_sickness_count++;
            }
        }
        //sickness DB create
        // for($i = 1; $i <= count($request->sickness_name); $i++){
        for($i = 1; $i <= 1; $i++){
            \Log::info("i" . $i);
            if($request->sickness_name[$i] && $request->sickness_name[$i]!="없음"){
                \Log::info("성공");
                \App\Sickness::create([
                    'user_id' => $user_id,
                    'medical_id' => $medical_id,
                    'sickness_name' => $request->sickness_name[$i],
                    'medicine' => $request->medicine[$i],
                    'symptom' => $request->symptom[$i],
                    'hospital' => $request->hospital[$i],
                    ]);
                $sickness_count++;
            }
        }
        // \Log::info(error)
        //insurance DB create
        if($request->insurance_bool){
            $insurance_list_id = \App\Insurance_list::whereInsurance_name($request->insurance_name)->first()->id;
            \App\Insurance::create([
                'user_id' => $user_id,
                'medical_id' => $medical_id,
                'insurance_list_id' => $insurance_list_id,
                // 'insurance_name' => $insurance_name->insurance_name,
                // 'insurance_phone' => $request->insurance_phone,
                'subscription_date' => $request->subscription_date,
                'expiration_date' => $request->expiration_date,

            ]);
        }
        return redirect('/info/medical_info');
    }
    public function edit()
    {
        $medical_info = \App\Medical_info::whereUser_id($user_id)->first();
        $medical_id = \App\Medical_info::whereUser_id($user_id)->first()->id;
        $past_sickness = \App\Past_sickness::whereUser_id($user_id)->get();
        $sickness = \App\Sickness::whereUser_id($user_id)->get();

        // \Log::info($past_sickness);
        $sickness_list = ["없음", "고혈압", "당뇨", "결핵", "심장질환", "알러지", "천식", "심부전증", "페렴", "디스크", "간경화", "관절염", "협심증", "암", "갑상선염", "고지혈증", "골다공증", "과민성 대장", "기관지염", "뇌졸중", "신장질환", "간암"];
        \Log::info(count($sickness_list));
        $insurance = \App\Insurance::whereUser_id($user_id)->first();
        $insurance_list_my = $insurance ? \App\Insurance_list::whereId($insurance->insurance_list_id)->first() : null;
        $insurance_list = \App\Insurance_list::get();

        $update_form = true;
        return view('info.medical_info', compact('medical_info', 'insurance', 'insurance_list_my', 'insurance_list', 'update_form','past_sickness', 'sickness', 'sickness_list'));
    }

    public function update(Request $request, \App\Medical_info $medical_info){
         //보험 "예'를 체크 했는데 값을 안넣었을 경우 
         if($request->insurance_bool){
            $messages = [
                'insurance_name.required' => '보험 명을 입력해주세요',
                // 'insurance_phone.required' => '보험사 번호를 입력해주세요.',
                'subscription_date.required' => '보험 가입날짜를 입력해주세요',
                'expiration_date.required' => '보험 만기날짜를 입력해주세요',
                'expiration_date.after' => '만기날짜를 다시 확인해주세요'
            ];
            $this->validate($request, [
                'insurance_name' => 'required',
                // 'insurance_phone' => 'required',
                'subscription_date' => 'required',
                'expiration_date' => "required|after:{$request->subscription_date}",
            ], $messages);
        }
        
        \Log::info($request->all());
        // \Log::info($request->past_sickness_name[1]);
        
        $medical_id = \App\Medical_info::whereUser_id($user_id)->first()->id;
        $past_sickness = \App\Past_sickness::whereUser_id($user_id)->get();
        $sickness = \App\Sickness::whereUser_id($user_id)->get();
        $past_sickness_count = 0;
        $sickness_count = 0;
        // \Log::info(count($request->past_sickness_name));
        // \Log::info(count($request->sickness_name));

        //past_sickness DB Update
        for($i = 1; $i <= count($request->past_sickness_name); $i++){
            // \Log::info(count($request->past_sickness_name));
            //input창에 넣은 값이 있고 "없음"이 아닐 때
            if($request->past_sickness_name[$i] && $request->past_sickness_name[$i]!="없음"){
                if($i > count($past_sickness)){
                    \Log::info($i);
                    \Log::info(count($past_sickness));
                    //새로 생성
                    \App\Past_sickness::create([
                        'user_id' => $user_id,
                        'medical_id' => $medical_id,
                        'past_sickness_name' => $request->past_sickness_name[$i],
                        'past_sickness_supplementation' => $request->past_sickness_supplementation[$i]
                    ]);
                }
                //업데이트
                else{
                    $past_sickness[$past_sickness_count]->update([
                        'user_id' => $user_id,
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
                        'user_id' => $user_id,
                        'medical_id' => $medical_id,
                        'sickness_name' => $request->sickness_name[$i],
                        'medicine' => $request->medicine[$i],
                        'symptom' => $request->symptom[$i],
                        'hospital' => $request->hospital[$i],
                    ]);
                }
                else{
                    $sickness[$sickness_count]->update([
                        'user_id' => $user_id,
                        'sickness_name' => $request->sickness_name[$i],
                        'medicine' => $request->medicine[$i],
                        'symptom' => $request->symptom[$i],
                        'hospital' => $request->hospital[$i],

                    ]);
                }
               
            }
            //수정창에서 지운 경우
            elseif(isset($sickness[$i-1])){
                $sickness[$i-1]->delete();
            }
            $sickness_count++;
        }
        // \Log::info($error);
        //medical_info DB Update
        $medical_info ->update([
            'user_id' => $user_id,
            'guardian_phone' => $request->guardian_phone,
            'blood_type' => $request->blood_type,
            'disability_status' => $request->disability_status,
            // 'hospital' => $request->hospital,
            // 'hospital_menu' => $request->hospital_menu,
            'report_request' => $request->report_request,
        ]);

        //insurances DB Update
        $insurance = \App\Insurance::whereUser_id($user_id)->first();

        if($request->insurance_bool){
            $insurance_list_id = \App\Insurance_list::whereInsurance_name($request->insurance_name)->first()->id;
            \Log::info($insurance);
            if($insurance){
                $insurance->update([
                    'user_id' => $user_id,
                    'medical_id' => $medical_id,
                    'insurance_list_id' => $insurance_list_id,
                    'subscription_date' => $request->input("subscription_date"),
                    'expiration_date' => $request->input("expiration_date"),
    
                ]);
            }
            else{
                \App\Insurance::create([
                    'user_id' => $user_id,
                    'medical_id' => $medical_id,
                    'insurance_list_id' => $insurance_list_id,
                    'subscription_date' => $request->input("subscription_date"),
                    'expiration_date' => $request->input("expiration_date"),
    
                ]);
            }
        }
        //DB에 있는데 input창에서 없음을 고를 때 삭제
        elseif($insurance){
            $insurance->delete();
        }
        return redirect('/info/medical_info');

    }
    // public function show()
    // {
    //     $medical_info = \App\Medical_info::whereUser_id($user_id)->first();
    //     $insurance = \App\Insurance::whereUser_id($user_id)->first();
    //     $update_form = false;
    //     return view('info.medical_info', compact('medical_info', 'insurance', 'update_form'));
    // }
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
