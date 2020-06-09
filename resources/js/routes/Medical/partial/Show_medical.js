import React, {useContext} from "react";
import {AppContext} from "../../../components/App";
import {MedicalContext} from "../MedicalContainer";
import {Link} from "react-router-dom";

export default () => {
    const { user } = useContext(AppContext);
    const {
        setForm,
        medical_id,
        past_sickness_name,
        past_sickness_supplementation,
        sickness_name,
        medicine,
        symptom,
        hospital,
        blood_type,
        disability_status,
        report_request,
        guardian_phone,
        insurance_bool,
        insurance_name,
        insurance_phone,
        subscription_date,
        expiration_date 
    } = useContext(MedicalContext);

    // console.log(past_sickness_name);
    // console.log(past_sickness_supplementation);
    // console.log(sickness_name);
    // console.log(medicine);
    // console.log(symptom);
    // console.log(hospital);
    // console.log(blood_type);
    // console.log(disability_status);
    // console.log(report_request);
    // console.log(guardian_phone);
    // console.log(insurance_bool);
    // console.log(insurance_name);
    // console.log(subscription_date);
    // console.log(expiration_date);

    return (
        <div>
            {/* <a className="btn btn-success" href={`/info/medical_info/${medical_id}/edit`}>의료정보 수정</a> */}
            <Link to={`/info/medical_info/${medical_id}/edit`} className="btn btn-success" onClick={() => setForm("update")}>의료정보 수정</Link>
            <br/>
            <br/>
            
            <div className="row">
                <div className="col-sm-6 col-md-3">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3 className="text-center">과거 병력</h3>
                            <hr style={{background:"darkgrey"}}/>
                            {past_sickness_name.length ? past_sickness_name.map( (value,index) => {
                                return (
                                <div key={index}>
                                    <p>과거 병력{index + 1} : {past_sickness_name[index]}</p>
                                    <p>과거 병력{index + 1} 보충 설명 : {past_sickness_supplementation[index] ? past_sickness_supplementation[index] : "없음"}</p>
                                </div>
                                )
                            }) : (                            
                                <p className="text-center text-danger">이력이 없습니다.</p>
                            )}
                            <hr style={{background:"darkgrey"}}/>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-3">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3 className="text-center">기저 병력</h3>
                            <hr style={{background:"darkgrey"}}/>
                            {sickness_name.length ? sickness_name.map( (value,index) => {
                                return (
                                <div key={index}>
                                    <p>기저 질환{index + 1} : {sickness_name[index]}</p>
                                    <p>복용중인 약{index + 1} : {medicine[index] ? medicine[index] : "없음"}</p>
                                    <p>증상{index + 1} : {symptom[index] ? symptom[index] : "없음"}</p>
                                    <p>다니는 병원{index + 1} : {hospital[index] ? hospital[index] : "없음"}</p>
                                </div>
                                )
                            }) : (                            
                                <p className="text-center text-danger">이력이 없습니다.</p>
                            )}
                            <hr style={{background:"darkgrey"}}/>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3 className="text-center">기타 정보</h3>
                            <hr style={{background:"darkgrey"}}/>
                            <p>보호자 휴대폰 : {guardian_phone ? guardian_phone : "없음"}</p>
                            <p>혈액형 : {blood_type}</p>
                            <p>장애 여부 : {disability_status}</p>
                            <p>신고시 요청사항 : {report_request ? report_request : "없음"}</p>
                            <hr style={{background:"darkgrey"}} />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-3">
                    <div className="thumbnail">
                        <div className="caption">
                            <h3 className="text-center">보험 정보</h3>
                            <hr style={{background:"darkgrey"}}/>
                            {insurance_name ? (
                                <div>
                                    <p>보험사 명 : {insurance_name}</p>
                                    <p>보험사 전화번호 : {insurance_phone}</p>
                                    <p>가입일 : {subscription_date}</p>
                                    <p>만기일 : {expiration_date}</p>
                                </div>
                            ) : (
                                <p className="text-center text-danger">이력이 없습니다.</p>
                            )}

                            <hr style={{background:"darkgrey"}} />
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-danger">위의 작성하신 의료정보는 운전 중 사고발생시 119센터에 보내는 메시지입니다.</p>
            <p className="text-danger">작성한 정보에 틀린 점이 없는지 확인해 주세요.</p>
        </div>


    )
}