@extends('layouts.app')

@section('content')
<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
<!-- home.blade -->
@include('bigdata.main')
@endsection

@section('script')
<script>
    //자세히 보기 버튼 click event
    $("#sleep-detail").on("click", function() {
        var option = 'sleep';
        console.log(option);
        $.ajax({
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},  
            type: 'GET',
            url: `/bigdata/${option}`,
        }).then(function(data){
            console.log("성공");
            window.location.href =`/bigdata/${option}`;
        });
    });

    $("#sudden-detail").on("click", function() {
        var option = 'sudden';
        console.log(option);
        $.ajax({
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},  
            type: 'GET',
            url: `/bigdata/${option}`,
        }).then(function(data){
            console.log("성공");
            window.location.href =`/bigdata/${option}`;
        });
    });

    $("#accident-detail").on("click", function() {
        var option = 'accident';
        console.log(option);
        $.ajax({
            headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},  
            type: 'GET',
            url: `/bigdata/${option}`,
        }).then(function(data){
            console.log("성공");
            window.location.href =`/bigdata/${option}`;
        });
    });
</script>
<!-- chart.js파일 불러오기 -->
<script src="/js/bigdata/bigdata-chart.js"></script>
@endsection