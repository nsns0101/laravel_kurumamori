{{--  --}}
<div class="col-md-2 text-center">
    <p style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">현재 질환</p>
</div>
{{-- 드롭다운버튼 --}}
<div class="col-md-2">
    <button 
        class="btn btn-default dropdown-toggle sickness_btn" type="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="true">
        {{$medical_info ? $medical_info->sickness : "선택"}}
        <span class="caret"></span>
    </button>
    <div class="form-group {{ $errors->has('sickness') ? 'has-error' : '' }}">
        <input id="sickness" style="font-size:10px"type="hidden" name="sickness" class="form-control" value="{{ $medical_info ?old('sickness',$medical_info->sickness) :  old('sickness')}}"/>
        {!! $errors->first('sickness', '<span class="form-error">:message</span>') !!}
    </div>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">        
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">없음</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">고혈압</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">당뇨</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">결핵</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">심장질환</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">알러지</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">천식</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">심부전증</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">페렴</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">디스크</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">간경화</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">관절염</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">협심증</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">암</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">갑상선염</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">고지혈증</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">골다공증</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">과민성 대장</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">기관지염</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">뇌졸중</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">신장질환</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">간암</a></li>
        <li><a class="dropdown-sickness" href="#" style="color:black; font-size:18px;">기타질환</a></li>
    </ul>
</div>
{{--  --}}
<div class="col-md-2 text-center">
    <p style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">복용중인 약</p>
</div>
<div class="col-md-5">
    <div class="form-group {{ $errors->has('medicine') ? 'has-error' : '' }}">
        <input style="font-size:24px"type="text" name="medicine" class="form-control" placeholder="복용 중이신 약물" value="{{ $medical_info ? old('past_sickness_supplementation',$medical_info->medicine) : old('medicine') }}"/>
        {!! $errors->first('medicine', '<span class="form-error">:message</span>') !!}
    </div>
</div>
<div class="col-md-2 text-center">
    <p style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">증상</p>
</div>
<div class="col-md-9">
    <div class="form-group {{ $errors->has('symptom') ? 'has-error' : '' }}">
        <input style="font-size:24px"type="text" name="symptom" class="form-control" placeholder="증상(아픈 곳을 구체적으로 적어주세요!)" value="{{ $medical_info ? old('past_sickness_supplementation',$medical_info->symptom) : old('symptom') }}"/>
        {!! $errors->first('symptom', '<span class="form-error">:message</span>') !!}
        <p class="text-danger" style="font-size:18px">증상은 최대한 자세히 적어주세요!</p>
    </div>
</div>

<style>

    .sickness_btn {
        width:120px; 
        height:40px; 
        border: solid 1px black; font-size:18px;; 
        margin-top:2px; 
        margin-right:20px;
    }
</style>