import React, { useEffect, useState, useContext } from "react";
import {AppContext} from "../../components/App";
import Axios from 'axios';
import MedicalView from "./MedicalView";


export default () => {
    const { user } = useContext(AppContext);
    const [res, setRes] = useState("");
    
    //기저질환 관련(past_sickness)
    const [past_sickness_name, setPast_sickness_name] = useState("");
    const [past_sickness_supplementation, setPast_sickness_supplementation] = useState("");
   
    //현재질환 관련(sickness)
    const [sickness_name, setSickness_name] = useState("");
    const [medicine, setMedicine] = useState("");
    const [symptom, setSymptom] = useState("");
    const [hospital, setHospital] = useState("");

    //기본 의료정보(medical_info)
    const [blood_type, setBlood_type] = useState("");
    const [disability_status, setDisability_status] = useState("");
    const [report_request, setReport_request] = useState("");
    const [guardian_phone, setGuardian_phone] = useState("");

    //보험사 정보(insurance)
    const [insurance_bool, setInsurance_bool] = useState("");
    const [insurance_name, setInsurance_name] = useState("");
    const [subscription_date, setSubscription_date] = useState("");
    const [expiration_date, setExpiration_date] = useState("");

    
    //값 받기
    useEffect(()=>{
        Axios.get(`/info/medical_info/${user.id}`).then(res => {
            setRes(res);
            // console.log(res.data.past_sickness.past_sickness_name);
            // setPast_sickness_name(...res.data.past_sickness.past_sickness_name);
        })
    }, [user]);

    console.log(res);
    console.log(past_sickness_name);
    const medical_update = () => {
        console.log("update");
    }
    
    return (
    <MedicalView
        user={user}
        res={res}
        setRes={setRes}
        medical_update={medical_update}

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
    />)
}