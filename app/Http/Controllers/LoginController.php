<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use JWTAuthException;

class LoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest', ['except' => 'destroy']);
    }
    //로그인, 회원가입 페이지
    public function index()
    {

        return view('home.main');
    }

    //회원가입 요청
    public function create()
    {

    }
    //로그인 요청
    public function store(Request $request)
    {
        // $messages = [
        //     'email.required' => '이메일을 입력해주세요',
        //     'password.required' => '비밀번호를 입력해주세요',
        //     'password.min' => '비밀번호는 최소 6글자 이상 입력해 주세요',
        // ];
        // $this->validate($request, [
        //     'email' => 'required|email',
        //     'password' => 'required|min:6',
        // ], $messages);

        // if (!auth()->attempt($request->only('email', 'password'), $request->has('remember'))) {
        //     flash()->error('이메일 또는 비밀번호가 맞지 않습니다.');
        //     # back 이전페이지로 가기
        //     return back()->withInput();
        // }
        // if (auth()->user()->confirm_code) {
        //     auth()->logout();
        //     flash()->error('이메일로 가입을 확인해주세요!');
        //     return redirect('/confirm');
        // }

        // flash(auth()->user()->name . '님, 환영합니다.');
        // return redirect('/');
        $user = \App\User::where('email', $request->email)->get()->first(); //이메일이 맞는지
        if ($user && \Hash::check($request->password, $user->password)) //비밀번호가 맞는지
        {
            //토큰 생성
            $token = self::getToken($request->email, $request->password);
            //$user의 auth_token객체에 토큰 부여
            $user->rember_token = $token;
            $user->save();
            
            $response = ['success'=>true, 'data'=>['id'=>$user->id,'rember_token'=>$user->rember_token,'name'=>$user->name, 'email'=>$user->email]];           
        }
        //이메일이나 비밀번호가 맞지않으면
        else{
            $response = ['success'=>false, 'data'=>'Record doesnt exists'];
        }
      
        return response()->json($response, 201);
    }



    //토큰 생성
    private function getToken($email, $password){
        $token = null;
        
        try {
            if (!$token = JWTAuth::attempt( ['email'=>$email, 'password'=>$password])) {
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

    //회원가입
    public function register(Request $request)
    { 
        $payload = [
            'email' => $request->input('email'),
            'password' => \Hash::make($request->input('password')),
            'name' => $request->input('name'),
            'birth' => $request->input('birth'),
            'gender' => $request->input('gender'),
            'phone' => $request->input('phone'),
            'rember_token' => '',
            'confirm_code' => rand(1000,9999),  //컨펌코드
        ];
                  
        $user = new \App\User($payload);

        //회원가입에 성공하면
        if ($user->save())
        {
            //토큰 생성
            $token = self::getToken($request->email, $request->password);
            
            //토큰이 문자열이 아니면(토큰 생성에 실패하면)
            if (!is_string($token)){
                return response()->json(['success'=>false,'data'=>'Token generation failed'], 201);
            }  
            
            //해당 이메일을 가진 유저를 찾음
            $user = \App\User::where('email', $request->email)->get()->first();
            //유저에 토큰을 저장
            $user->rember_token = $token;
            $user->save();
            
            $response = ['success'=>true, 'data'=>['name'=>$user->name,'id'=>$user->id,'email'=>$request->email,'rember_token'=>$token]];        
        }
        else{
            $response = ['success'=>false, 'data'=>'Couldnt register user'];
        }
        return response()->json($response, 201);
    }


    //로그아웃
    public function destroy()
    {
        auth()->logout();
        flash('또 방문해 주세요.');
        return redirect('/');
    }
}
