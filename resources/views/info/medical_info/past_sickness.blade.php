{{--  --}}
@for($i = 1; $i <=3; $i++)
@if($update_form && $i != 1)
<div class="row" id="form__past_sickness{{$i}}" style="{{isset($past_sickness[$i-1]) ? "display:flex" : "display:none"}}">
@else
<div class="row" id="form__past_sickness{{$i}}" style="{{$i == 1 ? "display:flex" : "display:none"}}">
@endif
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
            {{isset($past_sickness[$i-1]) ? $past_sickness[$i-1]->past_sickness_name : old("past_sickness_name.$i", "선택")}}
            <span class="caret"></span>
        </button>
        <div class="form-group {{ $errors->has("past_sickness_name[$i]") ? 'has-error' : '' }}">
            <input class="past_sickness_name{{$i}}" type="hidden"style="font-size:10px"  name="past_sickness_name[{{$i}}]" class="form-control"value="{{ isset($past_sickness[$i-1]) ? old("past_sickness_name[$i]",$past_sickness[$i-1]->past_sickness_name) :  old("past_sickness_name.$i")}}"/>
            {!! $errors->first('past_sickness_name[{{$i}}]', '<span class="form-error">:message</span>') !!}
        </div>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
            @for($j = 0; $j < count($sickness_list); $j++)
        <li><a class="dropdown-past_sickness{{$i}}" href="#" style="color:black; font-size:18px;">{{$sickness_list[$j]}}</a></li>
            @endfor
           
        </ul>
    </div>
    {{--  --}}
    <div class="col-md-6">
        <div class="form-group {{ $errors->has("past_sickness_supplementation$i") ? 'has-error' : '' }}">
            <input class="past_sickness_supplementation{{$i}}" style="font-size:24px; width:100%;"type="text" 
                name="past_sickness_supplementation[{{$i}}]" class="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{isset($past_sickness[$i-1]) ? old("past_sickness_supplementation.$i" ,$past_sickness[$i-1]->past_sickness_supplementation) :  old("past_sickness_supplementation.$i") }}"/>
            {!! $errors->first('past_sickness_supplementation{{$i}}', '<span class="form-error">:message</span>') !!}
        </div>
    </div>

    <div class="col-md-1"></div>
</div>
@endfor
