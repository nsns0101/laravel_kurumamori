<p class="text-danger" style="font-size:20px; margin-left:180px;">총 점수는 급 가속, 급 감속, 졸음, 사고를 포함한 점수입니다.</p>
<div class="row">
    <div class="col-xs-12 col-sm-12 col-md-1"></div>

    <div class="col-xs-12 col-sm-12 col-md-3">
        <div class="card btn btn-primary text-dark"> <!-- 총 점수 -->
            <div class="pt-3 pb-3">
                {{-- @if --}}
                <img src="/icon/모범.png">
            </div>
            <h1 class="pb-3" style="color:#222222">
                총 점수
            </h1>
        <h1>{{$score[0]}}</h1>
        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3">
        <div class="card btn btn-primary text-dark"> <!-- 급 가속 점수 -->
            <div class="pt-3 pb-3">
                {{-- @if --}}
                <img src="/icon/양호.png">
            </div>
            <h1 class="pb-3" style="color:#222222">
                급 가속 점수
            </h1>
            <h1>{{$score[1]}}</h1>

        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3">
        <div class="card btn btn-primary text-dark"> <!-- 급 감속 점수 -->
            <div class="pt-3 pb-3">
                {{-- @if --}}
                <img src="/icon/주의.png">
            </div>
            <h1 class="pb-3" style="color:#222222">
                급 감속 점수
            </h1>
            <h1>{{$score[2]}}</h1>

        </div>
    </div>
    <div class="col-xs-12 col-sm-12 col-md-2"></div>
</div>
<br/>