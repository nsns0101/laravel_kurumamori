<a class="btn btn-primary" href="/info/medical_info/{{$medical_info->id}}/edit">안녕</a>
<div class="row">
    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <div class="caption">
                <h3 class="text-center">병 이력</h3>
                <hr style="background-color:darkgrey;">
                <p>예전에 걸린 병 : {{$medical_info->past_sickness}}</p>
                <p>예전에 걸린 병 보충 설명 : {{$medical_info->past_sickness_supplementation}}</p>
                <p>현재 병 : {{$medical_info->sickness}}</p>
                <p>복용중인 약 : {{$medical_info->medicine}}</p>
                <p>증상 : {{$medical_info->symptom}}</p>
                <hr style="background-color:darkgrey;" />
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <div class="caption">
                <h3 class="text-center">현재 병</h3>
                <hr style="background-color:darkgrey;"/>  
                <p>보호자 휴대폰 : {{$medical_info->guardian_phone}}</p>
                <p>혈액형 : {{$medical_info->blood_type}}</p>
                <p>장애 여부 : {{$medical_info->disability_status}}</p>
                <p>다니는 병원 : {{$medical_info->hospital}}</p>
                <p>진료 과목 : {{$medical_info->hospital_menu}}</p>
                <p>신고시 요청사항 : {{$medical_info->report_request}}</p>
                <hr style="background-color:darkgrey;" />
            </div>
        </div>
    </div>

    <div class="col-sm-6 col-md-3">
        <div class="thumbnail">
            <div class="caption">
                <h3 class="text-center">보험 정보</h3>
                <hr style="background-color:darkgrey;"/>
                @if($insurance)
                <p>보험사 명 : {{$insurance->insurance_name}}</p>
                <p>보험사 전화번호 : {{$insurance->insurance_phone}}</p>
                <p>가입일 : {{$insurance->subscription_date}}</p>
                <p>만기일 : {{$insurance->expiration_date}}</p>
                @else
                <p class="text-center text-danger">이력이 없습니다.</p>
                @endif
                <hr style="background-color:darkgrey;" />
            </div>
        </div>
    </div>
</div>

