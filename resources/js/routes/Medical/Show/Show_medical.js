import React, {useContext} from "react";
import Dropdown from "react-dropdown";
import DataPicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from "moment"
import { useForm } from "react-hook-form";
import Show_Past_sickness from "./Show_Past_sickness";
import Show_Sickness from "./Show_Sickness";
import {AppContext} from "../../../components/App";
import {MedicalContext} from "../MedicalContainer";
import { Link } from "react-router-dom";

export default () => {
    const { user, t } = useContext(AppContext);
    const {
        setForm,
        medical_id,
        blood_type_list,
        insurance_name_list,
        // insurance_phone_list,
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
        insurance_phone,
        setInsurance_phone,
        setInsurance_name,
        subscription_date,
        setSubscription_date,
        expiration_date,
        setExpiration_date,
        validation,
        blood_type_message,
        insurance_name_message,
        subscription_date_message,
        expiration_date_message
    } = useContext(MedicalContext);

    return (
        <div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-10">
                    <Link to={`/info/medical_info/${medical_id}/edit`} onClick={() => setForm("update")}>
                        <button className="btn btn-success btn-lg btn-block" type="submit" style={{width:"100px", fontSize:"12px", float:"right"}}>
                            {t("수정하기")}
                        </button>
                    </Link>
                </div>
            </div>
            <div className="" style={{maxHeight:"535px", overflowY:"auto", marginTop:"10px"}}>
                {insurance_name_list ? (
                    <div>
                        <div className="card" style={{padding:"20px 20px 0 20px"}}>
                            <div className="row">
                                <div className="col-md-2">
                                    <p className="no_scroll_p">{t("질병 사항")}</p>
                                </div>
                            </div>
                            {/* <div style={{maxHeight:"237px", overflowY:"auto", overflowX:"hidden"}}> */}
                            <div>
                                {/* {{-- 과거 질환 --}} */}
                                <Show_Past_sickness/>
                                {/* {{-- 현재 질환 --}} */}
                                <Show_Sickness/>
                            </div>
                        </div>
                
                        {/* {{-- 신청자 인적사항 --}} */}
                        <div className="card" style={{padding:"20px 20px 0 20px", marginTop:"20px"}}>
                            <p className="no_scroll_p">{t("신청자 인적사항")}</p>
                            {/* <div style={{maxHeight:"150px", overflowY:"auto", overflowX:"hidden"}}> */}
                            <div>
                                {/* 혈액형, 장애 유무 */}
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    {/* 혈액형 글 */}
                                    <div className="col-md-2">
                                        <div className="show_title_p">
                                            {t("혈액형")}
                                            {/* <span style={{color:"red"}}>*</span> */}
                                        </div>
                                    </div>
                                    {/* 혈액형 드롭다운버튼 */}
                                    <div className="col-md-2 text-center">
                                            <p className="show_dropdown_p">{t(blood_type)}</p>
                                            <div className="text-danger">
                                                {blood_type_message}
                                            </div>
                                    </div>                
                                    {/* {{-- 장애 여부 글--}} */}
                                    <div className="col-md-1"></div>
                                    <div className="col-md-2">
                                        {/* <span style={{color:"red", fontSize:"30px"}}>*</span> */}
                                        <div className="show_title_p">
                                            {t("장애여부")}
                                        </div>
                                    </div>
                                    {/* 장애 여부 선택 */}
                                    <div className="col-md-4">
                                        <div className="form-group" style={{marginTop:"10px"}}>
                                            {disability_status ? (
                                                <div>
                                                    <span className="btn_radio">{t("예")}</span>
                                                    <input type="radio" checked={true}/>
                                                </div>
                                            ) : (
                                                <div>
                                                    <span className="btn_radio">{t("아니오")}</span>
                                                    <input type="radio" checked={true}/>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    {/* 신고시 요청사항 글*/}
                                    <div className="col-md-2">
                                        <div className="show_title_p">
                                        {t("신고시 요청사항")}
                                        </div>
                                    </div>
                                    {/* 신고시 요청사항 글 */}
                                    <div className="col-md-7">
                                        <div className="form-group">
                                            <input type="text" className="form-control show_input_p" value={report_request} readOnly/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card" style={{padding:"20px 20px 0 20px", marginTop:"20px", marginBottom:"20px"}}>
                            <p className="no_scroll_p">{t("보험 정보")}</p>
                            {/* <div style={{maxHeight:"235px", overflowY:"auto", overflowX:"hidden"}}> */}
                            <div>
                                {/* 보험 여부 */}
                                <div className="row">
                                    <div className="col-md-1"></div>
                                    <div className="col-md-2" style={insurance_bool ? {display:"block"} : {display:"none"} }>
                                        <div className="show_title_p">
                                            {t("보험사 명")}
                                            {/* <span style={{color:"red"}}>*</span> */}
                                        </div>
                                    </div>
                                    <div className="col-md-3 text-center">
                                        <p className="show_dropdown_p">{t(insurance_name)}</p>
                                    </div>
                                </div>
                                {/* 보험 가입, 만기 일 */}
                                <div className="row" id="insurance_table" style={insurance_bool ? {display:"flex"} : {display:"none"} }>              
                                    <div className="col-md-1"/>
                                    <div className="col-md-2">
                                        <span className="show_title_p">
                                            {t("보험 가입일")}
                                        </span>
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group text-center">
                                            <input type="text" className="form-control show_input_p" value={subscription_date} readOnly/>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="show_title_p">
                                            {t("보험 만기일")}
                                        </div> 
                                    </div>

                                    <div className="col-md-3">
                                        <div className="form-group text-center">
                                            <input type="text" className="form-control show_input_p" value={expiration_date} readOnly/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    )
}
