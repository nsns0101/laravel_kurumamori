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
    public function index()
    {
      return response()->json(["index"],200);
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
      // ------------------------------
      // $email = "dl@wodud";

      // //회원정보
      // $app_user = \App\User::whereEmail($email)->first();
      // //의료정보
      // $app_medical_info = \App\Medical_info::whereUser_id($app_user->id)->first();
      // //비상연락망
      // $app_phone = $app_medical_info->guardian_phone;
      // //손해보험사
      // $app_insurance = \App\Insurance::whereUser_id($app_user->id)->first();

      // \Log::info($app_user);
      // \Log::info($app_medical_info);
      // \Log::info($app_phone);
      // \Log::info($app_insurance);
      // ------------------------------

      $user = \App\User::whereEmail($request->_email)->first();
      // $request->_email;
      $str = $request->_email;
      // return $request;
      // return $str;
      return response()->json($user);
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
