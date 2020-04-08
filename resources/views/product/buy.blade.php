@extends('layouts.app')

@section('content')
<br>
<br>
<br>
<br>
<br>
<h1>주문 결제</h1>
<div class=buy-product>
    <div>
        <img class="img-product" onclick="product()" src="product/titleImg.jpg"></img>
    </div>
    <div>
        <h3 onclick=product()>kurumamori</h3>
        <p>대충 엄청 대단하고 개쩌는 제품입니다 라는 소개 글</p>
        <label for="">가격</label>
        <label for="">49900</label>
    </div>
</div>
<form action="{{route('buy.store')}}" method="post">
    {!! csrf_field() !!}
    <input type="number" value="1" name='ea'> 개
    {!! $errors->first('ea', '<span class="form-error">:message</span>') !!}
    
    <h2>받으시는 분</h2>
    <div>
        <label for="">이름</label>
        <input name="to_name" type="text">
        {!! $errors->first('to_name', '<span class="form-error">:message</span>') !!}
    </div>
    <div>
        <label for="">휴대폰 번호</label>
        <input name='to_phone' type="text">
        {!! $errors->first('to_phone', '<span class="form-error">:message</span>') !!}
    </div>
    <div>
        <label for="">주소</label>
        <input name='to_address' type="text">
        {!! $errors->first('to_address', '<span class="form-error">:message</span>') !!}
    </div>
    <div>
        <label for="">우편번호</label>
        <input name='to_zipcode' type="text">
        {!! $errors->first('to_zipcode', '<span class="form-error">:message</span>') !!}
    </div>
    <div>
        <label for="">배송 메시지</label>
        <input name='to_msg' type="text">
    </div>
    <h3>결제 수단</h3>
    <div>
        <input type="radio" name="payment" value="신용카드">신용카드
        <input type="radio" name="payment" value="가상계좌">가상계좌
        <input type="radio" name="payment" value="카카오페이">카카오페이
    </div>
    {!! $errors->first('payment', '<span class="form-error">:message</span>') !!}
    <div>
        <button>구매하기</button>
    </div>
</div>   
</form>
<br>
<br>
<br>
<br>
<br>
@stop
@section('script')
<script>
    function product(){
        console.log("제품 상세보기 페이지로");
    }
</script>
@stop
@section('style')
<style>
    .img-product{
        width:300px;
        height:200px;
    }
    .buy-product{
        display:flex;
    }
    p{
        color:black;
    }
</style>
@stop