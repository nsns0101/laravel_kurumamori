{{--  --}}
@for($i = 1; $i <=3; $i++)
<div class="row" id="form__past_sickness{{$i}}" style="{{$i == 1 ? "display:flex" : "display:none"}}">

    <div class="col-md-1" >
        @if($i == 1)
        <img id="add__past_sickness"src="/icon/add.png" style="margin-left:50%" onclick="add_past_sickness()"/>
        @endif
    </div>
    <div class="col-md-2 text-center">
        <p class="add__past_sickness"style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">과거 질환{{$i}}</p>
    </div>
    {{-- 드롭다운버튼 --}}
    <div class="col-md-2">
        <button 
            class="btn btn-default dropdown-toggle past_sickness_btn{{$i}} dropdown_btn" type="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="true">
            {{$medical_info ? $medical_info->past_sickness : "선택"}}
            <span class="caret"></span>
        </button>
        <div class="form-group {{ $errors->has("past_sickness$i") ? 'has-error' : '' }}">
            <input class="past_sickness{{$i}}" style="font-size:10px"  name="past_sickness{{$i}}" class="form-control"value="{{ $medical_info ?old("past_sickness$i",$medical_info->past_sickness) :  old("past_sickness$i")}}"/>
            {!! $errors->first('past_sickness{{$i}}', '<span class="form-error">:message</span>') !!}
        </div>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">없음</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">고혈압</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">당뇨</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">결핵</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">심장질환</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">알러지</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">천식</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">심부전증</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">페렴</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">디스크</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">간경화</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">관절염</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">협심증</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">암</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">갑상선염</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">고지혈증</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">골다공증</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">과민성 대장</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">기관지염</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">뇌졸중</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">신장질환</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">간암</a></li>
            <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">기타질환</a></li>
        </ul>
    </div>
    {{--  --}}
    <div class="col-md-6">
        <div class="form-group {{ $errors->has("past_sickness_supplementation$i") ? 'has-error' : '' }}">
            <input class="past_sickness_supplementation{{$i}}" style="font-size:24px; width:100%;"type="text" name="past_sickness_supplementation{{$i}}" class="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{$medical_info ? old("past_sickness_supplementation$i" ,$medical_info->past_sickness_supplementation) :  old("past_sickness_supplementation$i") }}"/>
            {!! $errors->first('past_sickness_supplementation{{$i}}', '<span class="form-error">:message</span>') !!}
        </div>
    </div>

    <div class="col-md-1"></div>
</div>
@endfor
