{{--  --}}
<div class="col-md-2 text-center">
    <p style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">과거 질환</p>
</div>
{{-- 드롭다운버튼 --}}
<div class="col-md-2">
    <button 
        class="btn btn-default dropdown-toggle past_sickness_btn" type="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="true">
        선택
        <span class="caret"></span>
    </button>
    <div class="form-group {{ $errors->has('past_sickness') ? 'has-error' : '' }}">
        <input id="past_sickness" style="font-size:10px" type="hidden" name="past_sickness" class="form-control"/>
        {!! $errors->first('past_sickness', '<span class="form-error">:message</span>') !!}
    </div>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">없음</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">고혈압</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">당뇨</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">결핵</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">심장질환</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">알러지</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">천식</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">심부전증</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">페렴</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">디스크</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">간경화</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">관절염</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">협심증</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">암</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">갑상선염</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">고지혈증</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">골다공증</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">과민성 대장</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">기관지염</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">뇌졸중</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">신장질환</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">간암</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black; font-size:18px;">기타질환</a></li>
    </ul>
</div>
{{--  --}}
<div class="col-md-7">
    <div class="form-group {{ $errors->has('past_sickness_supplementation') ? 'has-error' : '' }}">
        <input style="font-size:24px"type="text" name="past_sickness_supplementation" class="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{ old('past_sickness_supplementation') }}"/>
        {!! $errors->first('past_sickness_supplementation', '<span class="form-error">:message</span>') !!}
    </div>
</div>

<style>

    .past_sickness_btn {
        width:120px; 
        height:40px; 
        border: solid 1px black; 
        margin-top:2px; 
        margin-right:20px;
    }
</style>