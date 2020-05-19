<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AppController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
      $app_user = \App\User::whereId(1)->first();
      //비상연락망
      $app_phone = \App\Medical_info::whereUser_id($app_user->id)->first()->guardian_phone;
      //현재 질환
      $app_sickness_info = \App\Sickness::whereUser_id($app_user->id)->first();
      //손해보험사
      $app_insurance = \App\Insurance::whereUser_id($app_user->id)->first();
      
      $app_insurance_name = $app_insurance ? \App\Insurance_list::whereId($app_insurance->insurance_list_id)->first() : null;

      $profile = [$app_user, $app_phone, $app_sickness_info, $app_insurance_name, $app_insurance];

      return response()->json($profile);

      // return response()->json(["index"],200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
      return response()->json(["create"],200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {


      //로그인 로직(받는 것 : email, password)
      if($request->_option == 0){
        if (!auth()->attempt(["email"=>"{$request->_email}","password"=>"{$request->_password}"], $request->has('remember'))) {
          return response()->json(["비밀번호가 틀립니다."],200);
        }
        if (auth()->user()->confirm_code) {
          return response()->json(["이메일로 가입을 확인해주세요."],200);
        }
        $user = \App\User::whereEmail($request->_email)->first();
        return response()->json($user);
      }
      //정보 로직(받는 것 : user_id)
      elseif($request->_option == 1){
        //회원정보
        $app_user = \App\User::whereId($request->_key)->first();
        //비상연락망
        $app_phone = \App\Medical_info::whereUser_id($app_user->id)->first()->guardian_phone;
        //현재 질환
        $app_sickness_info = \App\Sickness::whereUser_id($app_user->id)->first();
        //손해보험사
        $app_insurance = \App\Insurance::whereUser_id($app_user->id)->first();
        $app_insurance_name = $app_insurance ? \App\Insurance_list::whereId($app_insurance->insurance_list_id)->first() : null;
        $profile = [$app_user, $app_phone, $app_sickness_info, $app_insurance_name, $app_insurance];

        return response()->json($profile);
      }


      //제품정보 로직(받는 것 : user_id)
      elseif($request->_option == 2){
        $app_product = \App\Product::whereUser_Id($request->_key)->first();
        $app_product_buy = \App\Product_buy::whereProduct_key($app_product->product_key)->first();

        return response()->json($app_product_buy);

      }

      //운전시작 : 운전 테이블 생성(받는 것 : user_id)
      elseif($request->_option == 3){
        $drive_start = \App\Drive::create([
          'user_id' => $request->_key,
          'drive_score' => null,
          'sleep_count' => null,
          'sudden_stop_count' => null,
          'sudden_acceleration_count' => null,
          'start_time' => date("Y-m-d hh:mm:ss"),
        ]);
        return response()->json($drive_start);
      }

      //운전종료 : 운전 테이블 업데이트(받는 것 : user_id, drive_id, 각각 카운트)
      elseif($request->_option == 4){
        $drive_end = \App\Drive::whereId($request->drive_id)->update([
          // 'user_id' => $request->id,
          // 'drive_score' => null,
          'sleep_count' => $request->_sleep_count,
          'sudden_stop_count' => $request->_sudden_stop_count,
          'sudden_acceleration_count' => $request->_sudden_acceleration_count,
          // 'start_time' => date("Y-m-d hh:mm:ss"),
        ]);
        return response()->json($drive_end);
      }

      //위험감지 테이블 생성(받는 것 : drive_id, user_id, latitude, longitude, $arr[급가속여부, 사고여부 등등])
      elseif($request->_option == 5){
        $arr = [
          $request->_bool_report,
          $request->_bool_sudden_acceleration,
          $request->_bool_sudden_stop,
          $request->_bool_sleep
        ];
        $drive = \App\Drive_detection::create([
          'drive_id' => $request->_drive_id,
          'user_id' => $request->_user_id,
          'latitude' => $request->_latitude,
          'longitude' => $request->_longitude,
          'bool_report' => $arr[0],
          'bool_sudden_acceleration' => $arr[1],
          'bool_sudden_stop' => $arr[2],
          'bool_sleep' => $arr[3],
        ]);
      }

      //신고 프로세스
      elseif($request->_option == 6){
      }
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
      return response()->json(["show"],200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
      return response()->json(["edit"],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
      return response()->json(["update"],200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
      return response()->json(["destroy"],200);
    }
}
