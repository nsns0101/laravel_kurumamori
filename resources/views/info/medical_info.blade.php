@extends('layouts.app')
{{-- @extends('layouts.partial.info_menu') --}}

@section('content')

<br />

<!-- intro section -->
<section id="" class="section">
    <div class="row">
        <div class="col-md-2">
            @include('layouts.partial.info_menu')
        </div>
        <div class="col-md-7">
            <br />
            <br />
            <h3 style="color:forestgreen">의료 정보</h3>
            {{-- 질병 사항 --}}
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="text-center card-header" style="background-color:green; color:white">
                            질병 사항
                        </div>
                        <div class="dropdown">
                            <br/>
                            {{-- 과거 질환 --}}
                            <div class="row">
                                @include('info.medical_info.past_sickness')
                            </div>
                            <hr style="background-color:darkgray" />
                            {{-- 현재 질환 --}}
                            <div class="row">
                                @include('info.medical_info.sickness')
                            </div>
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
                                    <input style="font-size:24px"type="text" name="hospital" class="form-control" placeholder="다니시는 병원" value="{{ old('hospital') }}"/>
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
                                    <input style="font-size:24px"type="text" name="hospital_menu" class="form-control" placeholder="진료하시는 과목" value="{{ old('hospital_menu') }}"/>
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
                        {{--  --}}
                        <div class="row">
                            <div class="col-md-2 text-center">
                                <p style="font-size:24px;margin-top:13px; color:blue;font-weight:800;">
                                혈액형
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group {{ $errors->has('blood_type') ? 'has-error' : '' }}">
                                    <input style="font-size:24px"type="text" name="blood_type" class="form-control" placeholder="혈액형" value="{{ old('blood_type') }}"/>
                                    {!! $errors->first('blood_type', '<span class="form-error">:message</span>') !!}
                                </div>
                            </div>
                            <div class="col-md-2 text-center">
                                <p style="font-size:24px; margin-top:13px; margin-left:25px; color:blue;font-weight:800;">
                                장애여부
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group {{$errors->has('gender') ? 'has-error' : ''}}">
                                    <fieldset>
                                        예
                                        <input type="radio" name="gender" id="gender1" />
                                        아니오
                                        <input type="radio" name="gender" id="gender2" />
                                    </fieldset>
                                    {!! $errors->first('gender', '<span class="form-error">:message</span>')!!}
                                </div>
                            </div>
                            <div class="col-md-3 text-center">
                                <p style="font-size:24px;margin-top:13px; margin-right:15px;color:blue;font-weight:800;">
                                신고시 요청사항
                                </p>
                            </div>
                            <div class="col-md-7">
                                <div class="form-group {{ $errors->has('report_request') ? 'has-error' : '' }}">
                                    <input style="font-size:24px"type="text" name="report_request" class="form-control" placeholder="○○를 가져와주세요!" value="{{ old('report_request') }}"/>
                                    {!! $errors->first('report_request', '<span class="form-error">:message</span>') !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                <div class="form-group {{ $errors->has('past_sickness') ? 'has-error' : '' }}">
                                    <input style="font-size:24px"type="text" name="past_sickness" class="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{ old('past_sickness') }}"/>
                                    {!! $errors->first('past_sickness', '<span class="form-error">:message</span>') !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        </div>
    </div>
</section>

@stop

@section('script')
<script>
    //예전 질병
    $(".dropdown-past_sickness").click(function(){
        // $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        // $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        $('.past_sickness_btn').html($(this).text() + ' <span class="caret"></span>');
        $('.past_sickness_btn').val($(this).data('value'));
    });
    //현재 질병
    $(".dropdown-sickness").click(function(){
        // $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        // $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
        $('.sickness_btn').html($(this).text() + ' <span class="caret"></span>');
        $('.sickness_btn').val($(this).data('value'));
    });


</script>
@stop