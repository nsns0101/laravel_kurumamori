@extends('layouts.app')

@section('content')
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<!-- 연도, 월 선택 메뉴 -->
<section id="intro" class="section intro" style="padding: 50px 0px 0px 0px;">
<div class="col-md-2">
    <div class="form-group {{ $errors->has('drive_date') ? 'has-error' : '' }}">
        <!-- 시작시 기본 날짜 설정은 value를 이용 -->
        <input id="datepicker" type="text" name="drive_date" class="form-control datePicker"  value="{{$date ? $date : date("Y-m-d")}}" readonly>
    </div>
</div> 
    <!-- chart.blade -->
    @include('bigdata.bigdata_chart.chart')
@endsection

@section('script')
<script>
    // datepicker
    $(function() {	
        $('#datepicker').datepicker({
            format: "yyyy-mm-dd",	//데이터 포맷 형식
            autoclose : true,	//사용자가 날짜를 클릭하면 자동 캘린더가 닫히는 옵션
            calendarWeeks : false, //캘린더 옆에 몇 주차인지 보여주는 옵션
            clearBtn : false, //날짜 선택한 값 초기화 해주는 버튼 보여주는 옵션 기본값 false 보여주려면 true
            disableTouchKeyboard : false,	//모바일에서 플러그인 작동 여부 기본값 false 가 작동 true가 작동 안함.
            immediateUpdates: false,	//사용자가 보는 화면으로 바로바로 날짜를 변경할지 여부 기본값 :false 
            multidate : false, //여러 날짜 선택할 수 있게 하는 옵션 기본값 :false 
            multidateSeparator :",", //여러 날짜를 선택했을 때 사이에 나타나는 글짜 2019-05-01,2019-06-01
            templates : {
                leftArrow: '&laquo;',
                rightArrow: '&raquo;'
            }, //다음달 이전달로 넘어가는 화살표 모양 커스텀 마이징 
            showWeekDays : true ,// 위에 요일 보여주는 옵션 기본값 : true
            title: "날짜선택",
            todayHighlight : true,
            toggleActive : true,	//이미 선택된 날짜 선택하면 기본값 : false인경우 그대로 유지 true인 경우 날짜 삭제
            weekStart : 0 ,//달력 시작 요일 선택하는 것 기본값은 0인 일요일 
            language : "ko"	//달력의 언어 선택, 그에 맞는 js로 교체해줘야한다.
        });
    });//ready end
</script>

<!-- chart.js파일 불러오기 -->
<script src="/js/bigdata/bigdata-chart.js"></script>
@endsection