@extends('layouts.app')

@section('content')
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<section id="main-navigation">
    <header id="header" style="background-color:black">
        <div class="header-content clearfix">
            <a class="logo" href="/" style="padding-bottom:0px">
                <image src="/icon/logo_curumamori.png" width="170px"></image>
            </a>
            <nav class="navigation" role="navigation">
                <ul class="primary-nav">
                    <li><a style="font-size:20px; color:" href="#">제품 소개</a></li>
                    <li><a style="font-size:20px; color:white" href="#">제품 구매</a></li>
                    <li><a style="font-size:20px; color:white" href="#">고객 문의</a></li>
                    <li><a style="font-size:20px; color:white; margin-left:80px; margin-right:20px"
                            href="/auth/login">로그인 </a> </li>
                </ul>
            </nav> <a href="#" class="nav-toggle">Menu<span></span></a>
        </div>
    </header>
</section>
@endsection