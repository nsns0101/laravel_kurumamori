@extends('layouts.app')

@section('content')
<div class="wrapper">

    <div class="signup_box">

        <form action="{{ route('signup.store') }}" method="POST" role="form" class="signup_form">
            {!! csrf_field() !!}

            <div class="page-header">
                <a class="logo" href="/">
                    <image src="/icon/logo_curumamori.png" width="350px"></image>
                </a>
                <h2>회원가입</h2>

            </div>
            <h5 style="color:black">로그인 정보</h5>
            <div class="form-group">
                <input type="email" name="email" class="form-control" placeholder="이메일" value="{{ old('email') }}" />
            </div>

            <div class="form-group">
                <input type="password" name="password" class="form-control" placeholder="비밀번호" />
            </div>

            <div class="form-group">
                <input type="password" name="password_confirmation" class="form-control" placeholder="비밀번호 확인" />
            </div>

            <h5 style="color:black">유저 정보</h5>

            <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="이름" value="{{ old('name') }}" autofocus />
            </div>

            <div class="form-group">
                <input type="text" name="age" class="form-control" placeholder="나이" value="{{ old('age') }}"  />
            </div>



            <div class="form-group">
                <input type="text" name="phone" class="form-control" placeholder="휴대폰 번호" value="{{ old('phone') }}"  />
            </div>
            <div class="form-group">

            <fieldset>
              남성
              <input type="radio" name="gender" id="gender1"/>
              여성
              <input type="radio" name="gender" id="gender2"/>
            </fieldset>
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-lg btn-block" type="submit">
                    가입하기
                </button>
            </div>
        </form>
    </div>

</div>

@stop
@section('style')
<style>
    .wrapper {
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .signup_box {
        margin-top: 150px;
        text-align: center;
        border: 1px solid #e6e6e6;
        border-radius: 0px;
        background-color: white;
        width: 100%;
        max-width: 500px;
    }

    .signup_form {
        padding: 40px;
        padding-bottom: 30px;
        margin-bottom: 15px;
    }
</style>
@endsection
