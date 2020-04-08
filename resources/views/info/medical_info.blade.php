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
                                @include('info.partial.medical_dummy')
                            </div>
                            <hr style="background-color:darkgray" />
                            {{-- 현재 질환 --}}
                            <div class="row">
                                @include('info.partial.medical_dummy')
                                @include('info.partial.medical_dummy')
                                @include('info.partial.medical_dummy')
                            <div class="row">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="text-center card-header" style="background-color:green; color:white">
                            진료 의료기관
                        </div>
                        <br/>
                        <div class="row">
                            <div class="col-md-2 text-center">
                                <p style="font-size:24px;margin-top:13px; color:blue;font-weight:800;">
                                기관 명
                                </p>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group {{ $errors->has('past_sickness') ? 'has-error' : '' }}">
                                    <input style="font-size:24px"type="text" name="past_sickness" class="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{ old('past_sickness') }}"/>
                                    {!! $errors->first('past_sickness', '<span class="form-error">:message</span>') !!}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</section>

@stop

@section('script')
<script>
    $(".dropdown-menu li a").click(function(){
        $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
        $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
    });


</script>
@stop