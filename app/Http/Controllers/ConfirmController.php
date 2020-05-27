<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use JWTAuth;
use JWTAuthException;

class ConfirmController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('guest', ['except' => 'destroy']);
    // }

    public function index()
    {
        return view('home.main');
        // return view('users.confirm');
    }

    public function create()
    {
        // return view('sessions.login');
    }

    public function store(Request $request)
    {
        // \Log::info($request->all());
        $user = \App\User::whereConfirmCode($request->confirm_code)->first();

        if (!$user) {
            // flash('입력하신 코드가 올바르지 않습니다. 다시 입력해 주세요.');
            $response = ['success'=>false];        

        }
        else{
            //토큰 생성
            $token = self::getToken($request->email, $request->password);
            
            //토큰이 문자열이 아니면(토큰 생성에 실패하면)
            if (!is_string($token)){
                return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            }  
            
            //해당 이메일을 가진 유저를 찾음
            $user = \App\User::where('email', $request->email)->get()->first();
            //유저에 토큰을 저장
            $user->auth_token = $token;
            $user->save();
            
            $user->update([
                'confirm_code' => null
            ]);

            $response = ['success'=>true, 'data'=>['id'=>$user->id,'auth_token'=>$user->auth_token,'name'=>$user->name, 'email'=>$user->email]];           
        }

        return response()->json($response, 201);
    }

    //토큰 생성
    private function getToken($email, $password){
        $token = null;
        
        try {
            if (!$token = JWTAuth::attempt(['email'=>$email, 'password'=>$password])) {
                return response()->json([
                    'response' => 'error',
                    'message' => 'Password or email is invalid',
                    'token'=>$token
                ]);
            }
        } catch (JWTAuthException $e) {
            return response()->json([
                'response' => 'error',
                'message' => 'Token creation failed',
            ]);
        }
        return $token;
    }
}

