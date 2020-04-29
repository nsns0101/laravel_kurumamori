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
    <div onload="jusoCallBack('roadFullAddr','zipNo');">
        <input type="button" value="주소검색" onclick="goPopup();"> 
    </div>
    <input id ="roadFullAddr" name="to_address">
    {!! $errors->first('to_address', '<span class="form-error">:message</span>') !!}
    <label for="">우편번호</label>
    <input id ="zipNo" name="to_zipcode">
    {!! $errors->first('to_zipcode', '<span class="form-error">:message</span>') !!}
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

//주소 api
    function jusoCallBack(roadFullAddr,zipNo){
        document.getElementById('roadFullAddr').value = roadFullAddr;
        // document.getElementById('roadAddr').value = roadAddr;
        // document.getElementById('addrDetail').value = addrDetail;
        // document.getElementById('jibunAddr').value = jibunAddr;
        document.getElementById('zipNo').value = zipNo;
        // document.getElementById('admCd').value = admCd;
        // document.getElementById('rnMgtSn').value = rnMgtSn;
        // document.getElementById('bdKdcd').value = bdKdcd;
        // document.getElementById('siNm').value = siNm;
        // document.getElementById('sggNm').value = sggNm;
        // document.getElementById('emdNm').value = emdNm;
        // document.getElementById('liNm').value = liNm;
        // document.getElementById('rn').value = rn;
        // document.getElementById('udrtYn').value = udrtYn;
        // document.getElementById('buldMnnm').value = buldMnnm;
        // document.getElementById('buldSlno').value = buldSlno;
        // document.getElementById('mtYn').value = mtYn;
        // document.getElementById('lnbrMnnm').value = lnbrMnnm;
        // document.getElementById('lnbrSlno').value = lnbrSlno;
        // document.getElementById('korAddr').value = korAddr;
}
    function goPopup(){
        // 주소검색을 수행할 팝업 페이지를 호출합니다.
        // 호출된 페이지(jusopopup.jsp)에서 실제 주소검색URL(http://www.juso.go.kr/addrlink/addrEngUrl.do)를 호출하게 됩니다.
        var api_key = "{{env("JUSO_API_KEY")}}";
        var pop = window.open("/jusoPopup_utf8.blade.php?val=>" + api_key,"pop","width=570,height=420, scrollbars=yes, resizable=yes"); 
    }
// 주소 api end

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
    #roadFullAddr{
        width:500px;
    }
</style>
@stop