<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

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

        $token = JWTAuth::fromUser($user);

        // return response()->json([
        //     'success' => true,
        //     'data' => $user
        // ], 201);
        
        return response()->json(compact('user','token'),201);

    }

    //로그인
    public function login(Request $request){
        //이메일과 비밀번호를 받음
        $credentials = $request->json()->all();        
        try {
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 400);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        return response()->json( compact('token') );

    }

    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        return response()->json(compact('user'));
    }

}