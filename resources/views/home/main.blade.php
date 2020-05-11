@extends('layouts.app')

@section('content')
<br />
<div class="row">

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="width:100%">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-100" src="/images/main_image.png" alt="First slide"
                style="width:2115px; height:1070px;">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="/images/main_image.png" alt="Second slide"
                style="width:2115px; height:1070px;">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="/images/main_image.png" alt="Third slide"
                style="width:2115px; height:1070px;">
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
</div>

{{-- 주요 기능 --}}
@include('home.partial.functions')
{{-- 팀 소개 --}}
@include('home.partial.team')
@endsection