import React, {useContext} from "react";
import Dropdown from "react-dropdown";
import DataPicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from "moment"
import { useForm } from "react-hook-form";
import Past_sickness from "./Past_sickness";
import Sickness from "./Sickness";
import {AppContext} from "../../../components/App";
import {MedicalContext} from "../MedicalContainer";

export default () => {
    const { user, t } = useContext(AppContext);
    const {
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

    const { handleSubmit, register, errors, watch } = useForm();


    return (
        insurance_name_list ? (
            <div>
                <div className="card" style={{padding:"20px 20px 0 20px"}}>
                    <p className="no_scroll_p">{t("질병 사항")}</p>
                    {/* <div style={{maxHeight:"237px", overflowY:"auto", overflowX:"hidden"}}> */}
                    <div>
                        {/* {{-- 과거 질환 --}} */}
                        <Past_sickness/>
                        {/* {{-- 현재 질환 --}} */}
                        <Sickness/>
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
                                <div className="medical_title_p">
                                    {t("혈액형")}
                                    <span style={{color:"red"}}>*</span>
                                </div>
                            </div>
                            {/* 혈액형 드롭다운버튼 */}
                            <div className="col-md-2 text-center medical_dropdown_p">
                                <Dropdown options={blood_type_list} name="blood_type"
                                    onChange={
                                        (data) => {
                                            setBlood_type(data.value);
                                        }
                                    } value={blood_type ? t(blood_type) : ""} placeholder={t("선택")} style={{width:"200px"}}
                                    
                                    />
                                    <div className="text-danger">
                                        {blood_type_message}
                                    </div>
                            </div>                
                            {/* {{-- 장애 여부 글--}} */}
                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                {/* <span style={{color:"red", fontSize:"30px"}}>*</span> */}
                                <div className="medical_title_p">
                                    {t("장애여부")}
                                </div>
                            </div>
                            {/* 장애 여부 선택 */}
                            <div className="col-md-4">
                                <div className="form-group" style={{marginTop:"10px"}}>
                                    {disability_status ? (
                                        <fieldset key="1">
                                            <span className="btn_radio">{t("예")}</span>
                                            <input type="radio" onChange={()=> setDisability_status(true)} checked={true}/>
                                            <span className="btn_radio">{t("아니오")}</span>
                                            <input type="radio" onChange={()=> setDisability_status(false)}/>
                                        </fieldset>
                                    ) : (
                                        <fieldset key="2">
                                            <span className="btn_radio">{t("예")}</span>
                                            <input type="radio" onChange={()=> setDisability_status(true)}/>
                                            <span className="btn_radio">{t("아니오")}</span>
                                            <input type="radio" onChange={()=> setDisability_status(false)} checked={true}/>
                                        </fieldset>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1"></div>
                            {/* 신고시 요청사항 글*/}
                            <div className="col-md-2">
                                <div className="medical_title_p">
                                {t("신고시 요청사항")}
                                </div>
                            </div>
                            {/* 신고시 요청사항 글 */}
                            <div className="col-md-7">
                                <div className="form-group medical_input_p">
                                    <input type="text" className="form-control" placeholder={t("○○를 가져와주세요!")}
                                    onChange={(e) => setReport_request(e.target.value)}
                                    value={report_request ? report_request : ""}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card" style={{padding:"20px 20px 0 20px", marginTop:"20px"}}>
                    <p className="no_scroll_p">{t("보험 정보")}</p>
                    {/* <div style={{maxHeight:"235px", overflowY:"auto", overflowX:"hidden"}}> */}
                    <div>
                        {/* 보험 여부 */}
                        <div className="row">
                            <div className="col-md-1"></div>
                            <div className="col-md-2">
                                <div className="medical_title_p">
                                    {t("보험 여부")}
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group" style={{marginTop:"10px"}}>
                                    {insurance_bool ? (
                                        <fieldset key="3">
                                            <span className="btn_radio">{t("예")}</span>
                                            <input type="radio" onChange={()=> setInsurance_bool(true)} checked={true}/>
                                            <span className="btn_radio">{t("아니오")}</span>
                                            <input type="radio" onChange={()=> setInsurance_bool(false)}/>
                                        </fieldset>
                                    ) : (
                                        <fieldset key="4">
                                            <span className="btn_radio">{t("예")}</span>
                                            <input type="radio" onChange={()=> setInsurance_bool(true)}/>
                                            <span className="btn_radio">{t("아니오")}</span>
                                            <input type="radio" onChange={()=> setInsurance_bool(false)} checked={true}/>
                                        </fieldset>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-2" style={insurance_bool ? {display:"flex"} : {display:"none"} }>
                                <div className="medical_title_p">
                                    {t("보험사 명")}
                                    <span style={{color:"red"}}>*</span>
                                </div>
                            </div>
                            <div className="col-md-3 text-center medical_dropdown_p" style={insurance_bool ? {display:"flex"} : {display:"none"} }>
                                <Dropdown options={insurance_name_list} 
                                    onChange={
                                        (data) => {
                                            setInsurance_name(data.value);
                                        }
                                    } value={insurance_name ? t(insurance_name) : ""} placeholder={t("선택")} style={{width:"200px"}}/>
                                <div className="text-danger text-center">
                                    {insurance_name_message}
                                </div>
                            </div>
                        </div>
                        {/* 보험 가입, 만기 일 */}
                        <div className="row" id="insurance_table" style={insurance_bool ? {display:"flex"} : {display:"none"} }>              
                            <div className="col-md-1"/>
                            <div className="col-md-2">
                                <span className="medical_title_p">
                                    {t("보험 가입일")}
                                    <span style={{color:"red"}}>*</span>
                                </span>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                    <DataPicker onChange={(date) => setSubscription_date(moment(date).format("YYYY-MM-DD"))} value={subscription_date}/>
                                    <div className="text-danger">
                                        {subscription_date_message}
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-2">
                                <div className="medical_title_p">
                                    {t("보험 만기일")}
                                    <span style={{color:"red"}}>*</span>
                                </div> 
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                    <DataPicker onChange={(date) => setExpiration_date(moment(date).format("YYYY-MM-DD"))} value={expiration_date}/>
                                    <div className="text-danger">
                                    {expiration_date_message}
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        ) : null

    )
}
