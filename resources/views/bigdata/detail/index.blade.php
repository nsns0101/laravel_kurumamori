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
@endsection

@section('script')
<script>
var bigdata_age = <?php echo json_encode($bigdata_age) ?>;
var bigdata_time = <?php echo json_encode($bigdata_time) ?>;
var day_7 = <?php echo json_encode($day_7) ?>;
var time_set = <?php echo json_encode($time_set) ?>;
</script>

<!-- chart.js파일 불러오기 -->
<script src="/js/bigdata/chart_sleep.js"></script>
<script src="/js/bigdata/chart_sudden.js"></script>
<script src="/js/bigdata/chart_accident.js"></script>
@endsection