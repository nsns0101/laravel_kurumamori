@extends('layouts.app')

@section('content')

@php $action = true; @endphp

<div class="wrapper">

    <div class="login_box">
        <form action="{{ route('login.store') }}" method="POST" role="form" class="login_form">
            {!! csrf_field() !!}

            <div class="page-header">
                <a class="logo" href="/">
                    <image src="/icon/logo_curumamori.png" width="350px"></image>
                </a>
                <h2>로그인</h2>

            </div>

            <div class="form-group {{ $errors->has('email') ? 'has-error' : '' }}">
                <input type="email" name="email" class="form-control" placeholder="이메일" value="{{ old('email') }}"
                    autofocus />
                <!-- <input type="email" name="email" class="form-control" placeholder="이메일" value="admin@mail.com" autofocus /> -->
                {!! $errors->first('email', '<span class="form-error">:message</span>') !!}
            </div>

            <div class="form-group {{ $errors->has('password') ? 'has-error' : '' }}">
                <input type="password" name="password" class="form-control" placeholder="비밀번호">
                <!-- <input type="password" name="password" class="form-control" placeholder="비밀번호" value="secret"> -->
                {!! $errors->first('password', '<span class="form-error">:message</span>')!!}
            </div>

            <div class="form-group">
                <div class="checkbox">
                    <label>
                        <input type="checkbox" name="remember" value="{{ old('remember', 1) }}" checked>
                        로그인 기억하기
                        <span class="text-danger">
                            (공용 컴퓨터에서는 사용하지 마세요!)
                        </span>
                    </label>
                </div>
            </div>

            <div class="form-group">
                <button class="btn btn-primary btn-lg btn-block" type="submit">
                    로그인
                </button>
            </div>

            <div>
                <p style="color:black">
                    회원이 아니라면?
                    <a style="color:blue" href="{{ route('signup.index')}}"> 가입하세요 </a> </p>
            </div>
        </form>
    </div>
</div>
@endsection
@section('style')
<style>
    .wrapper {
        min-height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .login_box {
        margin-top: 150px;

        text-align: center;
        border: 1px solid #e6e6e6;
        border-radius: 1px;
        background-color: white;
        width: 100%;
        max-width: 550px;
    }

    .login_form {
        padding: 40px;
    }
</style>
@endsection