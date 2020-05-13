@extends('layouts.app')

@section('content')
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    @if($option == 'sleep')
        @include('bigdata.chart.sleep')
    @elseif($option == 'sudden')
        @include('bigdata.chart.sudden')
    @elseif($option == 'accident')
        @include('bigdata.chart.accident')
    @endif

    <div class="row">
        {{-- 구글맵 --}}
        <div class="col-xl-5 col-lg-5 col-md-5">
            <div id="map" style="width:100%; height:500px;"></div>
            <img src="/icon/orange_map_icon.png">급가속 구간
            <img src="/icon/green_map_icon.png">급감속 구간
            <img src="/icon/blue_map_icon.png">졸음 구간
            <img src="/icon/red_map_icon.png">신고 구간
        </div>
    </div>
@endsection

@section('script')
<script>
var bigdata_age = <?php echo json_encode($bigdata_age) ?>;
var bigdata_time = <?php echo json_encode($bigdata_time) ?>;
var day_7 = <?php echo json_encode($day_7) ?>;
var time_set = <?php echo json_encode($time_set) ?>;
</script>

<!-- chart.js파일 불러오기 -->
<script>
//구글맵 API
var map;
function initMap() {
    var location = new Array();
    var location_color = new Array();
    //사고 = 빨간색
    //졸음 = 주황색
    //급가속 = 파랑색
    //급감속 = 초록색
    var drive_detection_7 = <?php echo json_encode($drive_detection_7) ?>;
    //점
    for(var i = 0; i < drive_detection_7.length; i++){
        if(drive_detection_7[i] != null){
            for(var j = 0; j < drive_detection_7[i].length; j++){

                
                if(drive_detection_7[i][j].bool_sleep){
                    location.push(new google.maps.LatLng(drive_detection_7[i][j].latitude, drive_detection_7[i][j].longitude));
                    location_color.push("blue");              //졸음 : blue
                } 
                // if(drive_detection_7[i][j].bool_report) location_color.push("red");                     //신고 : red
                // if(drive_detection_7[i][j].bool_sudden_acceleration) location_color.push("orange");  //가속 : orange
                // if(drive_detection_7[i][j].bool_sudden_stop) location_color.push("green");         //감속 : green
            }
        }
        
    }
    // console.log(location);
    // console.log(location_color);
    var mapCanvas = document.getElementById("map");
    var mapOptions = {center: location[0], zoom: 10}; //location[0]을 기준으로 12번 확대
    var map = new google.maps.Map(mapCanvas,mapOptions);

    for(var i = 0; i < location.length; i++){
        var marker = new google.maps.Marker({
            position : location[i],
            icon: `/icon/${location_color[i]}_map_icon.png`,
            draggable: false,
            map: map
        });
        marker.setMap(map);
        
    }
}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key={{env('GCP_API_KEY')}}&callback=initMap&center" async defer></script>
<script src="/js/bigdata/chart_sleep.js"></script>
<script src="/js/bigdata/chart_sudden.js"></script>
<script src="/js/bigdata/chart_accident.js"></script>
@endsection