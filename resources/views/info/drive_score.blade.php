@extends('layouts.app')

@section('content')
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

<section id="intro" class="section intro" style="padding: 50px 0px 0px 0px;">
<!-- Content Row -->
<div class="row">
    
    <!-- Page Heading -->
    <div class="col-md-2">
        @include('layouts.partial.info_menu')
    </div>
    <div class="col-md-10">
        <br />
        <br />
        <br />
        <h3> 운전 점수 확인</h3>
        <div class="row">
            <div class="col-md-6"></div>

            <div class="col-md-2 text-center">
                <p style="font-size:24px;margin-top:13px; margin-right:15px;color:green;font-weight:800;">
                운전날짜 검색
                </p>
            </div>
            <br/>
            <div class="col-md-2">
                <div class="form-group {{ $errors->has('drive_date') ? 'has-error' : '' }}">
                    <!-- 시작시 기본 날짜 설정은 value를 이용 -->
                <input id="drive_date"type="text" name="drive_date" class="form-control datePicker"  value="디폴트로 현재날짜 입력할거임" readonly>
                    <p style="color:red">
                        {!! $errors->first('drive_date', '<span class="form-error">:message</span>') !!}
                    </p>
                </div>
            </div>
            <div class="col-md-1"></div>
            <br/>
        </div>
    @if($drive)
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-3">
                <div class="card btn btn-dark text-dark"> <!-- 아직 미구현 -->
                    <div class="">
                        icon
                    </div>
                    <h1 class="">
                        FAQ
                    </h1>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3">
                <div class="card btn btn-dark text-dark"> <!-- 아직 미구현 -->
                    <div class="">
                        icon
                    </div>
                    <h1 class="">
                        전체질문
                    </h1>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3">
                <div class="card btn btn-dark text-dark"> <!-- 아직 미구현 -->
                    <div class="">
                        icon
                    </div>
                    <h1 class="">
                        공지사항
                    </h1>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3">
                <div class="card btn btn-dark text-dark"> <!-- 아직 미구현 -->
                    <div class="">
                        icon
                    </div>
                    <h1 class="">
                        업데이트
                    </h1>
                </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-4">

                <!-- Area Chart -->
                <div class="card shadow" style="width:600px">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Area Chart</h6>
                    </div>
                    <div class="card-body">
                        <div class="chart-area">
                            <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                    <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                    <div class=""></div>
                                </div>
                            </div>
                            <canvas id="myAreaChart" width="693" height="320" class="chartjs-render-monitor"
                                style="display: block; width: 693px; height: 320px;"></canvas>
                        </div>
                        <hr>
                        Styling for the area chart can be found in the <code>/js/demo/chart-area-demo.js</code> file.
                    </div>
                </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-4">

                <!-- Bar Chart -->
                <div class="card shadow" style="width:600px">
                    <div class="card-header py-3">
                        <h6 class="m-0 font-weight-bold text-primary">Bar Chart</h6>
                    </div>
                    <div class="card-body">
                        <div class="chart-bar">
                            <div class="chartjs-size-monitor">
                                <div class="chartjs-size-monitor-expand">
                                    <div class=""></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink">
                                    <div class=""></div>
                                </div>
                            </div>
                            <canvas id="myBarChart" width="693" height="320" class="chartjs-render-monitor"
                                style="display: block; width: 693px; height: 320px;"></canvas>
                        </div>
                        <hr>
                        Styling for the bar chart can be found in the <code>/js/demo/chart-bar-demo.js</code> file.
                    </div>
                </div>
            </div>
            <div class="col-xl-8 col-lg-7 col-md-4">

                <!-- Donut Chart -->
                <div class="col-xl-4 col-lg-5">
                    <div class="card shadow mb-4">
                        <!-- Card Header - Dropdown -->
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Donut Chart</h6>
                        </div>
                        <!-- Card Body -->
                        <div class="card-body">
                            <div class="chart-pie pt-4">
                                <div class="chartjs-size-monitor">
                                    <div class="chartjs-size-monitor-expand">
                                        <div class=""></div>
                                    </div>
                                    <div class="chartjs-size-monitor-shrink">
                                        <div class=""></div>
                                    </div>
                                </div>
                                <canvas id="myPieChart" width="313" height="253" class="chartjs-render-monitor"
                                    style="display: block; width: 313px; height: 253px;"></canvas>
                            </div>
                            <hr>
                            Styling for the donut chart can be found in the <code>/js/demo/chart-pie-demo.js</code>
                            file.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endif
    </div>
</section>
@endsection

@section('script')
<script src="/js/demo/chart-area-demo.js"></script>
<script src="/js/demo/chart-bar-demo.js"></script>
<script src="/js/demo/chart-pie-demo.js"></script>
<script>
    // $("#drive_date").val(new Date());

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


//예전 jQuery라면 on이 아니라 bind나 live 
$("#drive_date").on("propertychange change keyup paste input", function() {
    console.log("key 작동");
    var drive_date = $('#drive_date').val();
    $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},  
        type: 'GET',
        url: `/info/${drive_date}/drive_score/`,
    }).then(function(data){
        console.log("asdf");
        window.location.href =`/info/${drive_date}/drive_score`;
    });
});
</script>
@stop