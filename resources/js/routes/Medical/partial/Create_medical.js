import React from "react";
import Past_sickness from "./Past_sickness";
import Sickness from "./Sickness";

const data = null;
export default ({
    res,
    setRes,
    past_sickness_name,
    setPast_sickness_name,
    past_sickness_supplementation,
    setPast_sickness_supplementation,
    sickness_name,
    setSickness_name,
    medicine,
    setMedicine,
    symptom,
    setSymptom,
    hospital,
    setHospital,
    blood_type,
    setBlood_type,
    disability_status,
    setDisability_status,
    report_request,
    setReport_request,
    guardian_phone,
    setGuardian_phone,
    insurance_bool,
    setInsurance_bool,
    insurance_name,
    setInsurance_name,
    subscription_date,
    setSubscription_date,
    expiration_date,
    setExpiration_date,
}) => {
    return (
        <form action="{{ route('medical_info.update',$medical_info->id) }}" method="POST" role="form">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="text-center card-header card-main" style={{color:"white", background:"blue"}}>
                            질병 사항
                        </div>
                        <div className="dropdown">
                            <br/>
                            {/* {{-- 과거 질환 --}} */}
                            <Past_sickness
                                res={res}
                                setRes={setRes}
                                past_sickness_name={past_sickness_name}
                                setPast_sickness_name={setPast_sickness_name}
                                past_sickness_supplementation={past_sickness_supplementation}
                                setPast_sickness_supplementation={setPast_sickness_supplementation}
                            />
                            <hr style={{background:"darkgray"}}/>
                            {/* {{-- 현재 질환 --}} */}
                            <Sickness
                                res={res}
                                setRes={setRes}
                                sickness_name={sickness_name}
                                setSickness_name={setSickness_name}
                                medicine={medicine}
                                setMedicine={setMedicine}
                                symptom={symptom}
                                setSymptom={setSymptom}
                                hospital={hospital}
                                setHospital={setHospital}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* {{-- 신청자 인적사항 --}} */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="text-center card-header card-main" style={{color:"white", background:"blue"}}>
                            신청자 인적사항
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-2 text-center">
                                {/* {{-- 혈액형 --}} */}
                                <span style={{color:"red", fontSize:"30px"}}>*</span>
                                <span className="medical_text"style={{fontSize:"24px", marginTop:"13px"}}>
                                    혈액형
                                </span>
                            </div>
                            <button 
                            className="btn btn-default dropdown-toggle blood_type_btn dropdown_btn" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="true">
                            {/* {{-- {{$medical_info && $medical_info->blood_type ? $medical_info->blood_type : old('blood_type',"선택")}} --}} */}
                            {/* {{$medical_info && $medical_info->blood_type ? $medical_info->blood_type : old('blood_type',"A형")}} */}

                                <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li><a className="dropdown-blood_type" href="#" style={{color:"black", fontSize:"18px"}}>A형</a></li>
                                <li><a className="dropdown-blood_type" href="#" style={{color:"black", fontSize:"18px"}}>B형</a></li>
                                <li><a className="dropdown-blood_type" href="#" style={{color:"black", fontSize:"18px"}}>AB형</a></li>
                                <li><a className="dropdown-blood_type" href="#" style={{color:"black", fontSize:"18px"}}>O형</a></li>
                            </ul>
                            <br/>
                            <div className="form-group {{ $errors->has('blood_type') ? 'has-error' : '' }}">
                                {/* {{-- <input id="blood_type" style={{fontSize:"24px"}} type="hidden" name="blood_type" className="form-control" value="{{$medical_info && $medical_info->blood_type ? old('blood_type',$medical_info->blood_type) :  old('blood_type')}}"/> --}} */}
                                <input id="blood_type" style={{fontSize:"24px"}} type="hidden" name="blood_type" className=""/>
                                <span style={{color:"red"}}>
                                {/* {!! $errors->first('blood_type', '<span className="form-error">:message</span>') !!} */}
                                </span>
                            </div>
                            {/* {{-- 장애 여부 --}} */}
                            <div className="col-md-2 text-center">
                                <span style={{color:"red", fontSize:"30px"}}>*</span>
                                <span className="medical_text" style={{fontSize:"24px", marginTop:"13px"}}>
                                    장애여부
                                </span>
                            </div>
                                
                            <div className="col-md-4">
                                <div className="form-group {{$errors->has('disability_status') ? 'has-error' : ''}}">
                                    <fieldset style={{fontSize:"20px", marginTop:"6px"}}>
                                        예
                                        <input type="radio" name="disability_status" id="disability_status_yes" value="yes"/>
                                        아니오
                                        <input type="radio" name="disability_status" id="disability_status_no" value="no"/>
                                    </fieldset>
                                    <span style={{color:"red"}}>
                                        {/* {!! $errors->first('disability_status', '<span className="form-error">:message</span>')!!} */}
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-3 text-center">
                                <span className="medical_text" style={{fontSize:"24px", marginTop:"13px", marginRight:"15px"}}>
                                신고시 요청사항
                                </span>
                            </div>
                            <div className="col-md-7">
                                <div className="form-group {{ $errors->has('report_request') ? 'has-error' : '' }}">
                                    {/* {{-- <input style={{fontSize:"24px"}} type="text" name="report_request" className="form-control" placeholder="○○를 가져와주세요!" value="{{ $medical_info ? old('report_request',$medical_info->report_request) :  old('report_request') }}"/> --}} */}
                                    <input style={{fontSize:"24px"}} type="text" name="report_request" className="form-control" placeholder="○○를 가져와주세요!"/>
                                    {/* {!! $errors->first('report_request', '<span className="form-error">:message</span>') !!} */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}