{{--  --}}
<div class="col-md-2 text-center">
    <p class="past_sickness_p">과거 질환</p>
</div>
{{-- 드롭다운버튼 --}}
<div class="col-md-2">
    <button 
        class="btn btn-default dropdown-toggle past_sickness_btn" type="button" data-toggle="dropdown"
        aria-haspopup="true" aria-expanded="true">
        선택
        <span class="caret"></span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
        <li><a class="dropdown-past_sickness" href="#" style="color:black">당뇨</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black">허리디스크</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black">장준혁</a></li>
        <li><a class="dropdown-past_sickness" href="#" style="color:black">위암</a></li>
    </ul>
</div>
{{--  --}}
<div class="col-md-7">
    <div class="form-group {{ $errors->has('past_sickness') ? 'has-error' : '' }}">
        <input style="font-size:24px"type="text" name="past_sickness" class="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{ old('past_sickness') }}"/>
        {!! $errors->first('past_sickness', '<span class="form-error">:message</span>') !!}
    </div>
</div>

<style>
    .past_sickness_p {
        font-size:24px; 
        margin-top:13px; 
        color:blue; 
        font-weight:800;
    }
    .past_sickness_btn {
        width:120px; 
        height:40px; 
        border: solid 1px black; 
        margin-top:2px; 
        margin-right:20px;
    }
</style>