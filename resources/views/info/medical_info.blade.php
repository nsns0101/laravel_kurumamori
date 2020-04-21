@extends('layouts.app')

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
            @if($update_form)
                @include('info.medical_info.no_medical')
            @elseif($medical_info)
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
    var past_sickness_count = 2;

    function add_past_sickness(){
        if(past_sickness_count < 4){
            console.log(past_sickness_count);
            const add = `
                <div class="col-md-1" >
                    <img id="add__past_sickness"src="/icon/add.png" style="margin-left:50%" onclick="add_past_sickness()"/>
                </div>
                <div class="col-md-2 text-center">
                    <p class="add__past_sickness"style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">과거 질환${past_sickness_count}</p>
                </div>
                {{-- 드롭다운버튼 --}}
                <div class="col-md-2">
                    <button 
                        class="btn btn-default dropdown-toggle past_sickness_btn${past_sickness_count} dropdown_btn" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="true">
                            선택
                        <span class="caret"></span>
                    </button>
                    <div class="form-group {{ $errors->has('past_sickness${past_sickness_count}') ? 'has-error' : '' }}">
                        <input class="past_sickness${past_sickness_count}" style="font-size:10px"  name="past_sickness${past_sickness_count}" class="form-control"value="{{ old('past_sickness${past_sickness_count}')}}"/>
                        {!! $errors->first('past_sickness${past_sickness_count}', '<span class="form-error">:message</span>') !!}
                    </div>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">없음</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">고혈압</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">당뇨</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">결핵</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">심장질환</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">알러지</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">천식</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">심부전증</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">페렴</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">디스크</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">간경화</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">관절염</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">협심증</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">암</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">갑상선염</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">고지혈증</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">골다공증</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">과민성 대장</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">기관지염</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">뇌졸중</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">신장질환</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">간암</a></li>
                        <li><a class="dropdown-past_sickness${past_sickness_count}" href="#" style="color:black; font-size:18px;">기타질환</a></li>
                    </ul>
                </div>
                {{--  --}}
                <div class="col-md-6">
                    <div class="form-group {{ $errors->has('past_sickness_supplementation${past_sickness_count}') ? 'has-error' : '' }}">
                        <input class="past_sickness_supplementation${past_sickness_count}" style="font-size:24px; width:100%;"type="text" name="past_sickness_supplementation${past_sickness_count}" class="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{ old('past_sickness_supplementation1') }}"/>
                        {!! $errors->first('past_sickness_supplementation${past_sickness_count}', '<span class="form-error">:message</span>') !!}
                    </div>
                </div>
                <div class="col-md-1"></div>`;
            // $(".abcde").text("aa");
            // console.log( $(".abcde")[0]);
            $("#form__past_sickness").append(add);
            past_sickness_count++;
        }
    }
    //예전 질병
    // for(var i = 1; i <= 3; i++){
        $(`.dropdown-past_sickness1`).click(function(){
            console.log("dropdown-past_sickness1");
            $(`.past_sickness_btn1`).html($(this).text() + ' <span class="caret"></span>');
            console.log
            // $('.past_sickness_btn').val($(this).data('value'));
            $(`.past_sickness1`).val($(`.past_sickness_btn1`).text());
        });
        $(`.dropdown-past_sickness2`).click(function(){
            console.log("dropdown-past_sickness2");
            $(`.past_sickness_btn2`).html($(this).text() + ' <span class="caret"></span>');
            console.log
            // $('.past_sickness_btn').val($(this).data('value'));
            $(`.past_sickness2`).val($(`.past_sickness_btn2`).text());
        });
        $(`.dropdown-past_sickness3`).click(function(){
            console.log("dropdown-past_sickness3");
            $(`.past_sickness_btn3`).html($(this).text() + ' <span class="caret"></span>');
            console.log
            // $('.past_sickness_btn').val($(this).data('value'));
            $(`.past_sickness3`).val($(`.past_sickness_btn3`).text());
        });
    // }
   
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
    $("#insurance_bool_yes").click(function(){
        // console.log($('#insurance_bool_yes').val());
        $('#insurance_table').css("display","flex");
    });

    $("#insurance_bool_no").click(function(){
        // console.log($('#insurance_bool_no').val());
        $('#insurance_table').css("display","none");
    });

    
    

    //
    $(function() {	
		$('.datePicker').datepicker({
		    format: "yyyy-mm-dd",	//데이터 포맷 형식(yyyy : 년 mm : 월 dd : 일 )
		    // startDate: '-10d',	//달력에서 선택 할 수 있는 가장 빠른 날짜. 이전으로는 선택 불가능 ( d : 일 m : 달 y : 년 w : 주)
		    // endDate: '+10d',	//달력에서 선택 할 수 있는 가장 느린 날짜. 이후로 선택 불가 ( d : 일 m : 달 y : 년 w : 주)
		    autoclose : true,	//사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
		    calendarWeeks : false, //캘린더 옆에 몇 주차인지 보여주는 옵션 기본값 false 보여주려면 true
		    clearBtn : false, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
		    // datesDisabled : ['2019-06-24','2019-06-26'],//선택 불가능한 일 설정 하는 배열 위에 있는 format 과 형식이 같아야함.
		    //daysOfWeekDisabled : [0,6],	//선택 불가능한 요일 설정 0 : 일요일 ~ 6 : 토요일
		    //daysOfWeekHighlighted : [3], //강조 되어야 하는 요일 설정
		    disableTouchKeyboard : false,	//모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
		    immediateUpdates: false,	//사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
		    multidate : false, //여러 날짜 선택할 수 있게 하는 옵션 기본값 :false 
		    multidateSeparator :",", //여러 날짜를 선택했을 때 사이에 나타나는 글짜 2019-05-01,2019-06-01
		    templates : {
		        leftArrow: '&laquo;',
		        rightArrow: '&raquo;'
		    }, //다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징 
		    showWeekDays : true ,// 위에 요일 보여주는 옵션 기본값 : true
		    title: "제목",	//캘린더 상단에 보여주는 타이틀
		    todayHighlight : true ,	//오늘 날짜에 하이라이팅 기능 기본값 :false 
		    toggleActive : true,	//이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
		    weekStart : 0 ,//달력 시작 요일 선택하는 것 기본값은 0인 일요일 
		    language : "ko"	//달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
		    
		});//datepicker end
	});//ready end
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