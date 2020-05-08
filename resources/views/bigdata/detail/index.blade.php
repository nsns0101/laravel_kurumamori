@extends('layouts.app')

@section('content')
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    @if($option == 'sleep')
        @include('bigdata.chart.chart')
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
@endsection

@section('script')
<!-- chart.js파일 불러오기 -->
<script src="/js/bigdata/chart.js"></script>
@endsection