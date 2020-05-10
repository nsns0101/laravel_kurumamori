@extends('layouts.app')

@section('content')
<br>
<br>
<br>
<br>
<br>
<div id="product">
    <div style="display:flex; justify-content:center; margin-bottom:30px;">
        <label class="btn-intro" @click='checkTrue'>제품소개</label>
        <label class="btn-intro" @click='checkFalse'>제품구매</label>
    </div>

    <div v-if='check'>
        <div class="div-main">
        <h2>서비스 소개</h2>
        <img src="product/title.jpg"></img>
        <div class="div-intro">
            <p style="color:black; margin-top:20px;">디바이스에 장착된 센서가 사고를 스스로 감지하여 30초 이내에 119에 SMS를 통해 자동으로 사고를 접수한다.
목숨을 위협하는 사고 발생 시 사고자가 직접 사고 신고를 하는 것은 거의 불가능하다.
목숨이 경각에 달린 긴급 사고가 발생할 경우 신속한 초동대처가 필수적인데 빠른 대처를 위해서는 사고 즉시 신고가 접수 될 수 있도록 해야 한다.
Baton SOS의 자동 신고 시스템은 초동 대처를 용이하게 하여 사고자의 골든 타임을 놓치지 않아 생존 가능성을 비약적으로 높일 수 있다.</p>
        </div>
        <div class="div-product">
            <img class="div-good" src="product/good.jpg"></img>
            <img class="img-product" src="product/titleImg.jpg"></img>
        </div>
        <h2>기능 설명</h2>
        <div class="div-func">
            <img src="product/product.jpg" class="img-func"></img>
            <p>기능 설명 적는 곳</p>
        </div>
        <h2>작동 원리</h2>
        <div>
            <img src="product/work.jpg" class="img-work"></img>
            <img src="product/work2.jpg" class="img-work"></img>
        </div>
    </div>
    </div>
    <div v-else>
        <div>
        <h2 class="buy-title">제품 구매</h2>
        <div class="buy-main">
            <div>
                <img src="product/product.jpg" class="buy-img"></img>
            </div>
            <div>
                <form action="buy" method="GET">
                    <h2 class="buy-title">Kurumamori</h2>
                    <p class="buy-intro">제품 설명</p>
                    <h4 class="my-price">49,900원</h4>
                    <button class="btn-buy">구매하기</button>
                </form>
            </div>
        </div>
    </div>
    </div>
</div>
<br>
<br>
<br>
<br>
<br>

@stop
@section('script')
<script src="https://unpkg.com/vue"></script> <!-- Vue.js 라이브러리 import-->

<script>
        const webStore= new Vue(
            {
                el:"#product",
                data:{
                    check:true,
                },
                methods:{
                    checkTrue: function(){
                        this.check = true; 
                        console.log("True: ",this.check);
                    },
                    checkFalse:function(){
                        this.check = false;
                        console.log("False",this.check);
                    }
                }
            }
        )
    </script>
@stop
@section('style')
<style>
    /* 구매화면 css */
    .buy-main{
    display: flex;
    }
    .buy-img{
        width: 700px;
        margin-right: 30px;
        margin-top: 10px;
        margin-left: 100px;
    }
    .buy-intro{
        height: 380px;
        color:black;

    }
    .btn-intro{
        width:100px;
        height:40px;
        line-height:40px;
        text-align:center;
        background-color: white;
        border: 1px solid black;
        border-radius: 5px;
        margin-right:10px;
    }
    .btn-intro:hover{
        background-color: black;
        color:white;
    }
    .btn-buy{
        width: 200px;
        height: 50px;
        background-color: white;
        border: 1px solid black;
        border-radius: 10px;
    }
    .btn-buy:hover{
        background-color: black;
        color:white;
    }
    .buy-title{
        text-align: center;
    }

    /* 소개화면 css */
    .div-main{
    text-align: center;
    }
    .div-intro{
        /* border:1px solid black;
        border-radius: 10px; */
        margin-left: 50px;
        margin-right: 50px;
        align-self: center;
        text-align: center;
    }
    .img-product{
        width: 700px;
        /* height: 500px; */
        margin-bottom: 20px;
    }
    .img-func{
        width: 700px;
        margin-left: 50px;
    }
    .div-product{
        display: flex;
    }
    .div-good{
        /* border:1px solid black; */
        /* border-radius: 10px; */
        width: 800px;
        /* margin-right: 20px; */
    }
    .div-func{
        display: flex;
    }
    .div-func>p{
    margin-left: 30px;
    }
    .img-work{
        width: 90%;
    }
</style>