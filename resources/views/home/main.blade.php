@extends('layouts.app')

@section('content')
{{-- <section id="main-slider">
    <!-- 캐러셀 기능 -->
    <div class="owl-carousel">
        <div class="item" style="background-image: url(images/main_image.png); background-size: 2115px  700px;">
            <div class="slider-inner">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="carousel-content">
                                <h2>진짜 좋음 이거</h2>
                                <h3>사실?</h3>
                                <a class="btn btn-primary btn-lg" href="#package">구매하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/.owl-carousel-->
</section> --}}
<br />
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style="width:100%">
    <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-100" src="/images/main_image.png" alt="First slide"
                style="width:2115px; height:715px;">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="/images/main_image.png" alt="Second slide"
                style="width:2115px; height:715px;">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="/images/main_image.png" alt="Third slide"
                style="width:2115px; height:715px;">
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
<!-- intro section -->
<section id="intro" class="section intro">
    <div class="container">
        <div class="col-md-12 col-md-offset-2 text-center">
            <h3>주요 기능들</h3>
            <p>좋은 기능들 많이 있으니까 보세요</p>
        </div>
        <div class="row">
            <div class="col-sm-4 col-md-4">
                <div class="thumbnail">
                    <img src="images/예방.png" alt="img">
                    <div class="caption">
                        <h3>사고 예방</h3>
                        <p>이거 캠으로 사고예방 가능함</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 col-md-4">
                <div class="thumbnail">
                    <img src="images/신고.png" alt="img">
                    <div class="caption">
                        <h3>자동 신고</h3>
                        <p>이거 신고나면 충돌센서로 자동으로 신고함</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-4 col-md-4">
                <div class="thumbnail">
                    <img src="images/전방주시.png" alt="img">
                    <div class="caption">
                        <h3>전방주시 관리</h3>
                        <p>앞에 보고있는지 검사해서 운전실력 상승도 가능</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- intro section -->
@endsection