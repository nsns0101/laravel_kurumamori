@extends('layouts.app')

@section('content')
<br>
<br>
<br>
<br>
<br>
<h2>주문 / 결제</h2>
<div class=buy-product>
    <div style="display:flex; text-align:center;">
        <label for="" style="border:1px black solid; width:25%;">제품사진</label>
        <label for="" style="border:1px black solid; width:25%;">제품명</label>
        <label for="" style="border:1px black solid; width:25%;">제품 설명</label>
        <label for="" style="border:1px black solid; width:25%;">가격</label>
    </div>
    <div style="display:flex; border:1px black solid;">
        <img class="img-product" src="product/titleImg.jpg" style="width:25%;"></img>
        <h3 style="width:25%; margin-top:70px; text-align:center;">kurumamori</h3>
        <p class="card-text" style="width:25%; margin-top:70px; text-align:center;">내 차가 사고를 스스로 신고한다! (5초, 간단설치)</p>
        <label for="" class="card-text" style="width:25%; margin-top:70px; text-align:center;">49900</label>
    </div>
</div>
<form action="{{route('buy.store')}}" method="post">
    {!! csrf_field() !!}
    <div style="display:flex; margin-top:30px;">
        <h3>받으시는 분</h3>
        <div style="margin-left:150px; margin-right:50px;" class="flex-div">
            <div>
                <label for="">수령인</label>
            </div>
            <div>
                <label for="">연락처</label>
            </div>
            <div> 
                <label for="">배송지 주소</label>
            </div>
            <div> 
                <label for="">배송 메시지</label>
            </div>
        </div>
        <div class="flex-div"> 
            <div>
                <input name="to_name" type="text">
                {!! $errors->first('to_name', '<span class="form-error">:message</span>') !!}
            </div>
            <div>
                <input name='to_phone' type="text">
                {!! $errors->first('to_phone', '<span class="form-error">:message</span>') !!}
            </div>
            <div>
                <input type="button" value="주소 검색" onclick="goPopup();"> 
                <input id ="roadFullAddr" name="to_address">
                {!! $errors->first('to_address', '<span class="form-error">:message</span>') !!}
                <label for="">우편번호</label>
                <input id ="zipNo" name="to_zipcode">
                {!! $errors->first('to_zipcode', '<span class="form-error">:message</span>') !!}
            </div>
            <div>
                <input name='to_msg' type="text" placeholder="요청사항을 입력해 주세요. ex)현관앞에 둬주세요." style="width:600px;">
            </div>
        </div>
    </div>
    <hr/>
    <div style="display:flex; margin-top:30px;">
        <h3>구매 정보</h3>
        <div style="margin-left:175px; margin-right:70px;" class="flex-div">
            <div>
                <label for="">구매 개수</label>
            </div>
            <div>
                <label for="">결제 수단</label> 
            </div>
        </div>
        <div  class="flex-div">
            <div>
                <input type="number" value="1" name='ea'> 개
                {!! $errors->first('ea', '<span class="form-error">:message</span>') !!}
            </div>
            <div>
                <input type="radio" name="payment" value="신용카드">신용카드
                <input type="radio" name="payment" value="가상계좌">가상계좌
                <input type="radio" name="payment" value="카카오페이">카카오페이
            </div>
        </div>
    </div>
    <hr/>
    <!-- <div style="text-align:center;"> 
        <h2 >받으시는 분</h2>
        <div>
            <label for="">수령인</label>
            <input name="to_name" type="text">
            {!! $errors->first('to_name', '<span class="form-error">:message</span>') !!}
        </div>
        <div>
            <label for="">연락처</label>
            <input name='to_phone' type="text">
            {!! $errors->first('to_phone', '<span class="form-error">:message</span>') !!}
        </div>
        <div onload="jusoCallBack('roadFullAddr','zipNo');">
            <label for="">배송지 주소</label>
            <input type="button" value="주소 검색" onclick="goPopup();"> 
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
    </div>
    <div style="text-align:center;">
        <h3>구매 정보</h3>
        <label for="">구매 개수</label>
        <input type="number" value="1" name='ea'> 개
        {!! $errors->first('ea', '<span class="form-error">:message</span>') !!}
        <div>
            <label for="">결제 수단</label> 
            <input type="radio" name="payment" value="신용카드">신용카드
            <input type="radio" name="payment" value="가상계좌">가상계좌
            <input type="radio" name="payment" value="카카오페이">카카오페이
        </div>
        {!! $errors->first('payment', '<span class="form-error">:message</span>') !!}
    </div> -->
    <div style="text-align:center;">
        <button class="btn-buy">구매하기</button>
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
    p{
        color:black;
    }
    #roadFullAddr{
        width:500px;
    }
    .flex-div>div{
        margin-top:20px;
    }
    .btn-buy{
        width: 200px;
        height: 50px;
        border:1px black solid;
        background-color: white;
        border-radius: 10px;
        margin:20px;
    }
    .btn-buy:hover{
        background-color: black;
        color:white;
    }
</style>
@stop