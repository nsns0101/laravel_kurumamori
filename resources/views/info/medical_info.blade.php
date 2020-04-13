@extends('layouts.app')
{{-- @extends('layouts.partial.info_menu') --}}

@section('content')


<!-- intro section -->
<section id="intro" class="section intro" style="padding: 50px 0px 0px 0px;">
    <div class="row">
        <div class="col-md-3">
            @include('layouts.partial.info_menu')
        </div>
        <div class="col-md-7">
            <br />
            <br />
            <h3 style="color:forestgreen">의료 정보</h3>
            {{-- 의료정보 있을 경우의 페이지 --}}
            @if($medical_info)
                @include('info.medical_info.yes_medical')
            @else
                @include('info.medical_info.no_medical')
            @endif

        </div>
    </div>
</section>

@stop

@section('script')
<script>
    //예전 질병
    $(".dropdown-past_sickness").click(function(){
        
        $('.past_sickness_btn').html($(this).text() + ' <span class="caret"></span>');
        // $('.past_sickness_btn').val($(this).data('value'));
        $('#past_sickness').val($('.past_sickness_btn').text());
    });
    //현재 질병
    $(".dropdown-sickness").click(function(){
        
        $('.sickness_btn').html($(this).text() + ' <span class="caret"></span>');
        // $('.sickness_btn').val($(this).data('value'));
        $('#sickness').val($('.sickness_btn').text());

    });
    //혈액형
    $(".dropdown-blood_type").click(function(){
        //
        $('.blood_type_btn').html($(this).text() + ' <span class="caret"></span>');
        // $('.blood_type_btn').val($(this).data('value'));
        $('#blood_type').val($('.blood_type_btn').text());

    });


</script>
@stop

@section('style')
<style>
    .blood_type_btn {
        width:120px; 
        height:40px; 
        border: solid 1px black; 
        margin-top:2px; 
        margin-right:20px;
    }
</style>
@endsection