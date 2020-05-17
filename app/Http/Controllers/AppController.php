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
      $email = "dl@wodud";
      //회원정보
      $app_user = \App\User::whereEmail($email)->first();
      //현재 질환
      $app_sickness_info = \App\Sickness::whereUser_id($app_user->id)->first();
      //비상연락망
      $app_phone = \App\Medical_info::whereUser_id($app_user->id)->first()->guardian_phone;
      //손해보험사
      $app_insurance = \App\Insurance::whereUser_id($app_user->id)->first();

      $profile = [$app_user, $app_sickness_info, $app_phone, $app_insurance];

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


      //로그인 로직
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

      elseif($request->_option == 1){
        //회원정보
        $app_user = \App\User::whereId($request->_key)->first();
        //비상연락망
        $app_phone = \App\Medical_info::whereUser_id($app_user->id)->first()->guardian_phone;
        //현재 질환
        $app_sickness_info = \App\Sickness::whereUser_id($app_user->id)->first();
        //손해보험사
        $app_insurance = \App\Insurance::whereUser_id($app_user->id)->first();
        $app_insurance_name = \App\Insurance_list::whereId($app_insurance->insurance_list_id)->first();

        $profile = [$app_user, $app_phone, $app_sickness_info, $app_insurance_name, $app_insurance];

        return response()->json($profile);
      }

      elseif($request->_option == 2){
        //제품정보
        $app_product = \App\Product::whereId($request->_key)->first();
        $app_product_buy = \App\Product_buy::whereProduct_key($app_product->product_key)->first();

        return response()->json($app_product_buy);

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
