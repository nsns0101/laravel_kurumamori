@extends('layouts.app')

@section('content')
<style>
    .app-main{
        /* background-color: aquamarine; */
    }
    .test1{
        padding: 15px;
    }
    .test2{
        background-image: url(https://static.inven.co.kr/image_2011/site_image/game/minidata/84/character_1501_c1.jpg);
        background-size: cover;
    }
    .test3{
        background-color: green;
    }
    .card{
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        background-color: #fff;
        background-clip: border-box;
        border: 1px solid rgba(26, 54, 126, 0.125);
        border-radius: 0.25rem;
        text-align: center;
        padding: 1rem;
    }
    
</style>

<section id="main-qna">

</section>
<!-- intro section -->
@endsection