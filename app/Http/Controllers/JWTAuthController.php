<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class JWTAuthController extends Controller
{
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
            'auth_token' => '',
            'confirm_code' => rand(1000,9999),  //컨펌코드
        ]);
        // //이메일
        event(new \App\Events\UserCreated($user));
        return response()->json([
            'status' => 'success',
            'data' => $user
        ],201);
    }

    //로그인
    public function login(Request $request) {
        if (! $token = \Auth::guard('api')->attempt(['email' => $request->email, 'password' => $request->password])) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        return $this->respondWithToken($token);
    }
    
    protected function respondWithToken($token) {
        return response()->json([
            'success' => true,
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => \Auth::guard('api')->factory()->getTTL() * 60
            // 'data'=>['id'=>$user->id,'auth_token'=>$user->auth_token,'name'=>$user->name, 'email'=>$user->email]
        ]);
    }

    public function user() {
        return response()->json(\Auth::guard('api')->user());
    }
}
