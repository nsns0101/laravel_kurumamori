{{-- @extends('layouts.app')

@section('content')
<br />
<br />
<div class="row">

    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="width:100%">
        <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img onclick="func1()" class="d-block w-100" src="/images/main_image.png" alt="First slide"
                    style="width:2115px; height:870px;">
            </div>
            <div class="carousel-item">
                <img onclick="func2()" class="d-block w-100" src="/images/ppt_main_image.png" alt="Second slide"
                    style="width:2115px; height:870px;">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div> --}}

{{-- 주요 기능 --}}
{{-- @include('home.partial.functions')
@include('home.partial.functions2') --}}
{{-- 팀 소개 --}}
{{-- @include('home.partial.team')
@endsection
@section('script')
<script>
    function func1(){
        document.getElementById('function1').scrollIntoView({ behavior: 'smooth'});
    }
    function func2(){
        document.getElementById('function2').scrollIntoView({ behavior: 'smooth'});
    }
</script>
@endsection --}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>くるまもり9</title>
        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="/css/flexslider.css">
        <link rel="stylesheet" href="/css/font-icon.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.0.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="/css/font.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
        </script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
        </script>

        {{-- 날짜관련 js, css --}}
        <script src="/js/bootstrap-datepicker.js"></script>
        <link rel="stylesheet" href="/css/bootstrap-datepicker.css">
        <meta name="description" content="{{ config('project.description') }}">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">

    </head>
    <body>
        <div id="app"></div>
        <script src="/js/app.js"></script>
    </body>
</html>