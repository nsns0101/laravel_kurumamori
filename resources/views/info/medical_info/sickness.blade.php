{{--  --}}
<div class="col-md-2 text-center">
    <p class="sickness_p">현재 질환</p>
</div>
{{-- 드롭다운버튼 --}}
<div class="col-md-2">
    <button 
        class="btn btn-default dropdown-toggle sickness_btn" type="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="true">
        선택
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">        
        <li><a class="dropdown-sickness" href="#" style="color:black">없음</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">고혈압</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">당뇨</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">결핵</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">심장질환</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">알러지</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">천식</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">심부전증</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">페렴</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">디스크</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">간경화</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">관절염</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">협심증</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">암</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">갑상선염</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">고지혈증</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">골다공증</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">과민성 대장</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">기관지염</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">뇌졸중</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">신장질환</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">간암</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black">기타질환</a></li>
    </ul>
</div>
{{--  --}}
<div class="col-md-2 text-center">
    <p class="sickness_p">복용중인 약</p>
</div>
<div class="col-md-5">
    <div class="form-group {{ $errors->has('past_sickness') ? 'has-error' : '' }}">
        <input style="font-size:24px"type="text" name="past_sickness" class="form-control" placeholder="복용 중이신 약물" value="{{ old('past_sickness') }}"/>
        {!! $errors->first('past_sickness', '<span class="form-error">:message</span>') !!}
    </div>
</div>
<div class="col-md-2 text-center">
    <p class="past_sickness_p">증상</p>
</div>
<div class="col-md-9">
    <div class="form-group {{ $errors->has('past_sickness') ? 'has-error' : '' }}">
        <input style="font-size:24px"type="text" name="past_sickness" class="form-control" placeholder="증상(아픈 곳을 구체적으로 적어주세요!)" value="{{ old('past_sickness') }}"/>
        {!! $errors->first('past_sickness', '<span class="form-error">:message</span>') !!}
        <p class="text-danger" style="font-size:18px">증상은 최대한 자세히 적어주세요!</p>
    </div>
</div>

<style>
    .sickness_p {
        font-size:24px; 
        margin-top:13px; 
        color:blue; 
        font-weight:800;
    }
    .sickness_btn {
        width:120px; 
        height:40px; 
        border: solid 1px black; 
        margin-top:2px; 
        margin-right:20px;
    }
</style>