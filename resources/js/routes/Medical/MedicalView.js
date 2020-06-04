import React from "react";
import Info_menu from "../../layuot/Info_menu";
import Show_medical from "./partial/Show_medical.js";
import Create_medical from "./partial/Create_medical.js";
import "./good.css";


export default ({
    user, 
    res,
    setRes,
    medical_update,
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
        <div>
            {user && user.id && res && res.config.url == `/info/medical_info/${user.id}` ? (
                
            <section id="intro" className="section intro" style={{padding: "50px 0px 0px 0px", background: "#f7f7f7"}}>
            <div className="row">
                <div className="col-md-2 col-xs-2 col-sm-2">
                    <Info_menu/>
                </div>
                <div className="col-md-7 col-xs-7 col-sm-7">
                    <br />
                    <br />
                    <h3 style={{color:"blue"}}>의료 정보</h3>
                    {res  && res.data.medical_info ? (
                        <Show_medical
                            data={res.data}
                            medical_update={medical_update}
                            past_sickness_name = {past_sickness_name}
                            past_sickness_supplementation = {past_sickness_supplementation}
                            sickness_name = {sickness_name}
                            medicine = {medicine} 
                            symptom = {symptom} 
                            hospital = {hospital}
                            blood_type = {blood_type}
                            disability_status = {disability_status}
                            report_request = {report_request}
                            guardian_phone = {guardian_phone}
                            insurance_bool = {insurance_bool}
                            insurance_name = {insurance_name}
                            subscription_date = {subscription_date}
                            expiration_date = {expiration_date}
                        />
                    ) : (
                        <Create_medical
                            user={user}
                            res={res}
                            setRes={setRes}
                            past_sickness_name = {past_sickness_name}
                            setPast_sickness_name = {setPast_sickness_name}
                            past_sickness_supplementation = {past_sickness_supplementation}
                            setPast_sickness_supplementation = {setPast_sickness_supplementation}
                            sickness_name = {sickness_name}
                            setSickness_name = {setSickness_name}
                            medicine = {medicine}
                            setMedicine = {setMedicine}
                            symptom = {symptom}
                            setSymptom = {setSymptom}
                            hospital = {hospital}
                            setHospital = {setHospital}
                            blood_type = {blood_type}
                            setBlood_type = {setBlood_type}
                            disability_status = {disability_status}
                            setDisability_status = {setDisability_status}
                            report_request = {report_request}
                            setReport_request = {setReport_request}
                            guardian_phone = {guardian_phone}
                            setGuardian_phone = {setGuardian_phone}
                            insurance_bool = {insurance_bool}
                            setInsurance_bool = {setInsurance_bool}
                            insurance_name = {insurance_name}
                            setInsurance_name = {setInsurance_name}
                            subscription_date = {subscription_date}
                            setSubscription_date = {setSubscription_date}
                            expiration_date = {expiration_date}
                            setExpiration_date = {setExpiration_date}  
                        />
                    )}
                </div>

            </div>
        </section>
        ) : null}
        </div>
    )
}