{{--  --}}
@for($i = 1; $i <=3; $i++)
@if($update_form && $i != 1))
<div class="row" id="form__sickness{{$i}}" style="{{isset($sickness[$i-1]) ? "display:flex" : "display:none"}}">
@else
<div class="row" id="form__sickness{{$i}}" style="{{$i == 1 ? "display:flex" : "display:none"}}">
@endif    
    <div class="col-md-1" >
        @if($i == 1)
        <img id="add__sickness" src="/icon/add.png" style="margin-left:50%" onclick="add_sickness()"/>
        @endif
    </div>
    <div class="col-md-2 text-center">
        <p style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">현재 질환{{$i}}</p>
    </div>
    {{-- 드롭다운버튼 --}}
    <div class="col-md-2">
        <button 
            class="btn btn-default dropdown-toggle sickness_btn{{$i}} dropdown_btn" type="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="true">
            {{isset($sickness[$i-1]) ? $sickness[$i-1]->sickness_name : old("sickness_name.$i","선택")}}
            <span class="caret"></span>
        </button>
        <div class="form-group {{ $errors->has("sickness_name.$i") ? 'has-error' : '' }}">
        <input id="sickness_name{{$i}}" style="font-size:10px"type="hidden" name="sickness_name[{{$i}}]" class="form-control" value="{{ isset($sickness[$i-1]) ?old("sickness_name.$i",$sickness[$i-1]->sickness_name) :  old("sickness_name.$i")}}"/>
            {!! $errors->first('sickness_name.{{$i}}', '<span class="form-error">:message</span>') !!}
        </div>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">        
            @for($j = 0; $j < count($sickness_list); $j++)
        <li><a class="dropdown-sickness{{$i}}" href="#" style="color:black; font-size:18px;">{{$sickness_list[$j]}}</a></li>
            @endfor
        </ul>
    </div>
    {{--  --}}
    <div class="col-md-2 text-center">
        <p style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">복용중인 약</p>
    </div>
    <div class="col-md-4">
        <div class="form-group {{ $errors->has("medicine.$i") ? 'has-error' : '' }}">
            <input style="font-size:24px"type="text" name="medicine[{{$i}}]" class="form-control" placeholder="복용 중이신 약물" value="{{isset($sickness[$i-1]) ? old("medicine.$i",$sickness[$i-1]->medicine) : old("medicine.$i") }}"/>
            {!! $errors->first('medicine.{{$i}}', '<span class="form-error">:message</span>') !!}
        </div>
    </div>
    <div class="col-md-1" ></div>
    {{--  --}}
    <div class="col-md-1" ></div>
    <div class="col-md-2 text-center">
        <p style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">증상</p>
    </div>
    <div class="col-md-8">
        <div class="form-group {{ $errors->has("symptom.$i") ? 'has-error' : '' }}">
        <input style="font-size:24px"type="text" name="symptom[{{$i}}]" class="form-control" placeholder="증상(아픈 곳을 구체적으로 적어주세요!)" value="{{ isset($sickness[$i-1]) ? old("symptom.$i",$sickness[$i-1]->symptom) : old("symptom.$i") }}"/>
            {!! $errors->first('symptom.{{$i}}', '<span class="form-error">:message</span>') !!}
            <p class="text-danger" style="font-size:18px">증상은 최대한 자세히 적어주세요!</p>
        </div>
    </div>
    <div class="col-md-1" ></div>
    {{--  --}}
    <div class="col-md-2" ></div>

    <div class="col-md-2 text-center">
        <p style="font-size:24px;margin-top:13px; color:blue;font-weight:800;">
        진료기관 명
        </p>
    </div>
    <div class="col-md-4">
        <div class="form-group {{ $errors->has("hospital.$i") ? 'has-error' : '' }}">
            <input style="font-size:24px"type="text" name="hospital[{{$i}}]" class="form-control" placeholder="다니시는 병원" value="{{ isset($sickness[$i-1]) ?old("hospital.$i",$sickness[$i-1]->hospital) :  old("hospital.$i")}}"/>
            {!! $errors->first('hospital.{{$i}}', '<span class="form-error">:message</span>') !!}
        </div>
    </div>
</div>

@endfor


