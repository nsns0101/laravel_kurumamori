<p style="color:red"> *가 있는 곳은 반드시 입력해주세요!</p>
<p style="color:red"> *과거 질환과 현재 질환은 3개까지 등록가능합니다.</p>
{{-- 질병 사항 --}}
@if($update_form)
<form action="{{ route('medical_info.update',$medical_info->id) }}" method="POST" role="form">
    {{ method_field('PUT') }}

@else
<form action="{{ route('medical_info.store') }}" method="POST" role="form">
@endif
    {!! csrf_field() !!}
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="text-center card-header" style="background-color:green; color:white">
                    질병 사항
                </div>
                <div class="dropdown">
                    <br/>
                    {{-- 과거 질환 --}}
                    @include('info.medical_info.past_sickness')
                    <hr style="background-color:darkgray" />
                    {{-- 현재 질환 --}}
                    @include('info.medical_info.sickness')
                </div>
            </div>
        </div>
    </div>
    {{-- 진료 의료기관 --}}
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="text-center card-header" style="background-color:green; color:white">
                    진료 의료기관
                </div>
                <br/>
                {{--  --}}
                <div class="row">
                    <div class="col-md-2 text-center">
                        <p style="font-size:24px;margin-top:13px; color:blue;font-weight:800;">
                        기관 명
                        </p>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group {{ $errors->has('hospital') ? 'has-error' : '' }}">
                            <input style="font-size:24px"type="text" name="hospital" class="form-control" placeholder="다니시는 병원" value="{{ $medical_info ?old('hospital',$medical_info->hospital) :  old('hospital')}}"/>
                            {!! $errors->first('hospital', '<span class="form-error">:message</span>') !!}
                        </div>
                    </div>
                    {{--  --}}
                    <div class="col-md-2 text-center">
                        <p style="font-size:24px;margin-top:13px; color:blue;font-weight:800;">
                        진료 과목
                        </p>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group {{ $errors->has('hospital_menu') ? 'has-error' : '' }}">
                            <input style="font-size:24px"type="text" name="hospital_menu" class="form-control" placeholder="진료하시는 과목" value="{{$medical_info ? old('hospital',$medical_info->hospital_menu) :  old('hospital')}}" }}"/>
                            {!! $errors->first('hospital_menu', '<span class="form-error">:message</span>') !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- 신청자 인적사항 --}}
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="text-center card-header" style="background-color:green; color:white">
                    신청자 인적사항
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-2 text-center">
                        {{-- 혈액형 --}}
                        <span style="color:red; font-size:30px;">*</span>
                        <span style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">
                            혈액형
                        </span>
                    </div>
                    <button 
                    class="btn btn-default dropdown-toggle blood_type_btn" type="button" data-toggle="dropdown"
                    aria-haspopup="true" aria-expanded="true">
                    {{$medical_info ? $medical_info->blood_type : "선택"}}

                        <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li><a class="dropdown-blood_type" href="#" style="color:black; font-size:18px;">A형</a></li>
                        <li><a class="dropdown-blood_type" href="#" style="color:black; font-size:18px;">B형</a></li>
                        <li><a class="dropdown-blood_type" href="#" style="color:black; font-size:18px;">AB형</a></li>
                        <li><a class="dropdown-blood_type" href="#" style="color:black; font-size:18px;">O형</a></li>
                    </ul>
                    <br/>
                    <div class="form-group {{ $errors->has('blood_type') ? 'has-error' : '' }}">
                        <input id="blood_type" style="font-size:24px"type="hidden" name="blood_type" class="form-control" placeholder="○○를 가져와주세요!" value="{{$medical_info ? old('blood_type',$medical_info->hospital) :  old('blood_type')}}" }}"/>
                        <p style="color:red">

                        {!! $errors->first('blood_type', '<span class="form-error">:message</span>') !!}
                        </p>
                    </div>
                    {{-- 장애 여부 --}}
                    <div class="col-md-2 text-center">
                        <span style="color:red; font-size:30px;">*</span>
                        <span style="font-size:24px; margin-top:13px; color:blue;font-weight:800;">
                            장애여부
                        </span>
                    </div>
                        
                    <div class="col-md-4">
                        <div class="form-group {{$errors->has('disability_status') ? 'has-error' : ''}}">
                            <fieldset style="font-size:20px; margin-top:6px;">
                                예
                            @if($medical_info->disability_status == "yes" )
                                <input type="radio" name="disability_status" id="disability_status_yes" value="yes" checked/>
                                아니오
                                <input type="radio" name="disability_status" id="disability_status_no" value="no"/>
                            @else
                                <input type="radio" name="disability_status" id="disability_status_yes" value="yes" />
                                    아니오
                                    <input type="radio" name="disability_status" id="disability_status_no" value="no" checked/>
                                </fieldset>
                            @endif
                            <p style="color:red">
                                {!! $errors->first('disability_status', '<span class="form-error">:message</span>')!!}
                            </p>

                        </div>
                    </div>
                    <div class="col-md-3 text-center">
                        <p style="font-size:24px;margin-top:13px; margin-right:15px;color:blue;font-weight:800;">
                        신고시 요청사항
                        </p>
                    </div>
                    <div class="col-md-7">
                        <div class="form-group {{ $errors->has('report_request') ? 'has-error' : '' }}">
                            <input style="font-size:24px"type="text" name="report_request" class="form-control" placeholder="○○를 가져와주세요!" value="{{ $medical_info ? old('report_request',$medical_info->report_request) :  old('report_request') }}"/>
                            {!! $errors->first('report_request', '<span class="form-error">:message</span>') !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- 보호자 정보 --}}
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="text-center card-header" style="background-color:green; color:white">
                    보호자 정보
                </div>
                <br/>
                <div class="row">
                    {{--  --}}
                    <div class="col-md-2 text-center">
                        <p style="font-size:24px;margin-top:13px; margin-right:15px;color:blue;font-weight:800;">
                        보호자 번호
                        </p>
                    </div>
                    <br/>
                    <div class="col-md-5">
                        <div class="form-group {{ $errors->has('guardian_phone') ? 'has-error' : '' }}">
                            <input style="font-size:24px"type="text" name="guardian_phone" class="form-control" placeholder="응급시 연락가능한 보호자 휴대폰 번호" value="{{ $medical_info ? old('guardian_phone',$medical_info->guardian_phone) :  old('guardian_phone') }}"/>
                            {!! $errors->first('guardian_phone', '<span class="form-error">:message</span>') !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="text-center card-header" style="background-color:darkgray; color:white">
                    보험 정보
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-2 text-center">
                        <span style="color:red; font-size:30px;">*</span>
                        <span style="font-size:24px; margin-top:13px; color:blue;font-weight:800;margin-right:25px;">
                            보험 여부
                        </span>
                    </div>
                        
                    <div class="col-md-2">
                        <div class="form-group {{$errors->has('insurance_bool') ? 'has-error' : ''}}">
                            <fieldset style="font-size:20px; margin-top:6px;">
                                예
                                @if($insurance)
                                    <input type="radio" name="insurance_bool" id="insurance_bool_yes" value="{{true}}" checked/>
                                    아니오 
                                    <input type="radio" name="insurance_bool" id="insurance_bool_no" value="{{false}}" />
                                @else
                                    <input type="radio" name="insurance_bool" id="insurance_bool_yes" value="{{true}}" />
                                    아니오 
                                    <input type="radio" name="insurance_bool" id="insurance_bool_no" value="{{false}}" checked/>
                                @endif
                                </fieldset>
                            <p style="color:red">
                                {!! $errors->first('insurance_bool', '<span class="form-error">:message</span>')!!}
                            </p>

                        </div>
                    </div>
                    <div class="col-md-8"></div>
                </div>
            <div class="row" id="insurance_table" style="{{$insurance ? "display:flex" : "display:none;" }}">
                    <div class="col-md-2 text-center">
                        <p style="font-size:24px;margin-top:13px; margin-right:15px;color:blue;font-weight:800;">
                        보험사 명
                        </p>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group {{ $errors->has('insurance_name') ? 'has-error' : '' }}">
                            <input style="font-size:24px"type="text" name="insurance_name" class="form-control" placeholder="보험사 명" value="{{ $insurance ? old('insurance_name',$insurance->insurance_name) :  old('insurance_name') }}"/>
                            {!! $errors->first('insurance_name', '<span class="form-error">:message</span>') !!}
                        </div>
                    </div>
                    <div class="col-md-2 text-center">
                        <p style="font-size:24px;margin-top:13px; margin-right:15px;color:blue;font-weight:800;">
                        보험사 번호
                        </p>
                    </div>
                    <div class="col-md-3">
                        <div class="form-group {{ $errors->has('insurance_phone') ? 'has-error' : '' }}">
                            <input style="font-size:24px"type="text" name="insurance_phone" class="form-control" placeholder="보험사 번호" value="{{ $insurance ? old('insurance_phone',$insurance->insurance_phone) :  old('insurance_phone') }}"/>
                            {!! $errors->first('insurance_phone', '<span class="form-error">:message</span>') !!}
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                    {{--  --}}
                    <div class="col-md-2 text-center">
                        <p style="font-size:24px;margin-top:13px; margin-right:15px;color:blue;font-weight:800;">
                        보험 가입일
                        </p>
                    </div>
                    <br/>
                    <div class="col-md-3">
                        <div class="form-group {{ $errors->has('subscription_date') ? 'has-error' : '' }}">
	                        <input type="text" name="subscription_date" class="form-control datePicker" value="{{ $insurance ? old('subscription_date',$insurance->subscription_date) :  old('subscription_date') }}" readonly>
                            {!! $errors->first('subscription_date', '<span class="form-error">:message</span>') !!}
                        </div>
                    </div>
                    <div class="col-md-2 text-center">
                        <p style="font-size:24px;margin-top:13px; margin-right:15px;color:blue;font-weight:800;">
                        보험 만기일
                        </p>
                    </div>
                    <br/>
                    <div class="col-md-3">
                        <div class="form-group {{ $errors->has('expiration_date') ? 'has-error' : '' }}">
                            <!-- 시작시 기본 날짜 설정은 value를 이용 -->
	                        <input type="text" name="expiration_date" class="form-control datePicker" value="{{ $insurance ? old('expiration_date',$insurance->expiration_date) :  old('expiration_date') }}" readonly>
                            {!! $errors->first('expiration_date', '<span class="form-error">:message</span>') !!}
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>

    <br/>
    <br/>
    <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-2">
            <div class="form-group">
                <button class="btn btn-success btn-lg btn-block" type="submit" style="width:150px;">
                    등록하기
                </button>
            </div>
        </div>
        <div class="col-md-5"></div>
    </div>
</form>