@extends('layouts.app')

@section('content')
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    @if($option == 'sleep')
        <br>
        <br>
        <br>
        <br>
        <h5>sleep sleep</h5>
    @elseif($option == 'sudden')
        <br>
        <br>
        <br>
        <br>
        <h5>sudden sudden</h5>
    @else
        <br>
        <br>
        <br>
        <br>
        <h5>accident accident</h5>
    @endif
    @include('bigdata.chart.chart')
@endsection

@section('script')
<script>
var a = <?php echo json_encode($a); ?>;
</script>

<!-- chart.js파일 불러오기 -->
<script src="/js/bigdata/chart_sleep.js"></script>
<script src="/js/bigdata/chart_sudden.js"></script>
<script src="/js/bigdata/chart_accident.js"></script>
@endsection