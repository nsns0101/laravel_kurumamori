@extends('layouts.app')

@section('content')
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    @if($option == 'sleep')
        @include('bigdata.chart.sleep')
    @elseif($option == 'sudden')
        @include('bigdata.chart.sudden')
    @else
        @include('bigdata.chart.accident')
    @endif
@endsection

@section('script')
<script>
var bigdata_chart = <?php echo json_encode($bigdata_chart) ?>;
var day_7 = <?php echo json_encode($day_7)?>;
</script>

<!-- chart.js파일 불러오기 -->
<script src="/js/bigdata/chart_sleep.js"></script>
<script src="/js/bigdata/chart_sudden.js"></script>
<script src="/js/bigdata/chart_accident.js"></script>
@endsection