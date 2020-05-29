<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Facades\JWTFactory;
use Tymon\JWTAuth\Facades\JWTException;
use Tymon\JWTAuth\Facades\JWTSubject;
use Tymon\JWTAuth\PayloadFactory;
use Tymon\JWTAuth\JWTManager as JWT;




class UsersController extends Controller
{
    //뷰
    public function index()
    {
        return view('home.main');
    }

    //회원가입
    public function register(Request $request){
        $user = \App\User::create([
            'email' => $request->input('email'),
            'password' => \Hash::make($request->input('password')),
            'name' => $request->input('name'),
            'birth' => $request->input('birth'),
            'gender' => $request->input('gender'),
            'phone' => $request->input('phone'),
            'confirm_code' => rand(1000,9999),  //컨펌코드
        ]);

        // $token = JWTAuth::fromUser($user);

        return response()->json([
            'success' => true,
            'data' => $user
        ], 201);

    }

    //로그인
    public function login(Request $request){
        //이메일과 비밀번호를 받음
        $credentials = $request->json()->all();
        
        try {
            //이메일과 비밀번호가 맞지 않으면
            if(!$token = JWTAuth::attempt(['email' => $request->email, 'password' => $request->password])){
                return response()->json([
                    'success' => false,
                    'error' => 'invalid_credentials'
                ], 400);
            }
        //토큰 생성이 안되면
        }catch(JWTException $e){
            return response()-json([
                'success' => false,
                'error' => 'could_not_create_token'
            ], 500);
        }
        \Log::info(\Auth::user());
        
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => \Auth::guard('api')->factory()->getTTL() * 60
        ]);

    }

    public function getAuthenticatedUser(){
        try{
            if(!$user = JWTAuth::parseToken()->authenticate()){
                return response()->json(['user_not_found'], 404);
            }
        }catch(Tymon\JWTAuth\Exceptions\TokenExpiredException $e){
            return reposnse()->json(['token_expired'], $e->getStatusCode());
        }catch(Tymon\JWTAuth\Exceptions\TokenInvalidException $e){
            return reposnse()->json(['token_invalid'], $e->getStatusCode());
        }catch(Tymon\JWTAuth\Exceptions\JWTException $e){
            return reposnse()->json(['token_absent'], $e->getStatusCode());
        }
        if($user){
            return response()->json(compact('user'));
        }
        else{
            return null;
        }
    }

}
