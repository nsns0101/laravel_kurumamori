import React, { useEffect, useState, useContext, createContext } from "react";
import {AppContext} from "../../components/App";
import Axios from 'axios';
import MedicalView from "./MedicalView";

export const MedicalContext = createContext();

export default () => {
    const { user } = useContext(AppContext);
    const [res, setRes] = useState("");
    let form = "create";
    if(location.pathname.split('/')[4] == "edit"){
        form = "update";
    }
    //drop_down list
    const sickness_list = ["없음", "고혈압", "당뇨", "결핵", "심장질환", "알러지", "천식", "심부전증", "페렴", "디스크", "간경화", "관절염", "협심증", "암", "갑상선염", "고지혈증", "골다공증", "과민성 대장", "기관지염", "뇌졸중", "신장질환", "간암"];
    const blood_type_list = ["A형", "B형", "AB형", "O형"];
    const [insurance_name_list, setInsurance_name_list]= useState("");
    // const [insurance_phone_list, setInsurance_phone_list]= useState("");
    
    //기저질환 관련(past_sickness)
    const [past_sickness_name, setPast_sickness_name] = useState("");
    const [past_sickness_supplementation, setPast_sickness_supplementation] = useState("");
   
    //현재질환 관련(sickness)
    const [sickness_name, setSickness_name] = useState("");
    const [medicine, setMedicine] = useState("");
    const [symptom, setSymptom] = useState("");
    const [hospital, setHospital] = useState("");

    //기본 의료정보(medical_info)
    const [medical_id, setMedical_id] = useState("");
    const [blood_type, setBlood_type] = useState("");
    const [disability_status, setDisability_status] = useState(false);
    const [report_request, setReport_request] = useState("");
    const [guardian_phone, setGuardian_phone] = useState("");
    //보험사 정보(insurance)
    const [insurance_bool, setInsurance_bool] = useState(false);
    const [insurance_phone, setInsurance_phone] = useState(false);
    const [insurance_name, setInsurance_name] = useState("");
    const [subscription_date, setSubscription_date] = useState("");
    const [expiration_date, setExpiration_date] = useState("");


    //에러 메시지
    const [blood_type_message, setBlood_type_message] = useState("");
    // const [subscription_date_message, setSubscription_date_message] = useState("");
    // const [expiration_date_message, setExpiration_date_message] = useState("");

    const onSubmit = () => {
        if(!blood_type){
            setBlood_type_message("필수 항목입니다.");
            return null;
        }
        if(insurance_bool){
            if(!subscription_date){
                setSubscription_date_message("필수 항목입니다.");
            }
            else if(!expiration_date){
                setExpiration_date_message("필수 항목입니다.")
            }
        }
        const body = {
            user_id : user.id,
            past_sickness_name,
            past_sickness_supplementation,
            sickness_name,
            medicine,
            symptom,
            hospital,
            medical_id,
            blood_type,
            disability_status,
            report_request,
            guardian_phone,
            insurance_bool,
            insurance_name,
            subscription_date,
            expiration_date
        }
        const config = {
            headers : {
                'Content-Type' : 'application/json'
            }
        }
        console.log(form);

        if(form == "create"){
            const url = "/info/medical_info"
            return Axios.post(url, body, config).then( res => {
                console.log(res);
            })
        }else{
            console.log(medical_id);
            const url = `/info/medical_info/${medical_id}`;
            return Axios.put(url, body, config).then( res => {
                console.log(res);
            })
        }

    }
    //값 받기
    useEffect(()=>{
        Axios.get(`/info/medical_info/${user.id}`).then(res => {
            setRes(res);

            const arr_insurance_name_list = [];
            // const arr_insurance_phone_list = [];
            
            for(var i = 0; i < res.data.insurance_list.length; i++){
                arr_insurance_name_list.push(res.data.insurance_list[i].insurance_name);
                // arr_insurance_phone_list.push(res.data.insurance_list[i].insurance_phone);
            }
            setInsurance_name_list(arr_insurance_name_list);
            // setInsurance_phone_list(arr_insurance_phone_list);
            //past_sickness
            if(res.data.past_sickness){
                const arr_past_sickness_name = [];
                const arr_past_sickness_supplementation = [];
                for(var i = 0; i < res.data.past_sickness.length; i++){
                    arr_past_sickness_name.push(res.data.past_sickness[i].past_sickness_name);
                    arr_past_sickness_supplementation.push(res.data.past_sickness[i].past_sickness_supplementation);
                }
                setPast_sickness_name(arr_past_sickness_name);
                setPast_sickness_supplementation(arr_past_sickness_supplementation);
            }

            //sickness
            if(res.data.sickness){
                const arr_sickness_name = [];
                const arr_medicine = [];
                const arr_symptom = [];
                const arr_hosptial = [];
                for(var i = 0; i < res.data.sickness.length; i++){
                    arr_sickness_name.push(res.data.sickness[i].sickness_name);
                    arr_medicine.push(res.data.sickness[i].medicine);
                    arr_symptom.push(res.data.sickness[i].symptom);
                    arr_hosptial.push(res.data.sickness[i].hospital);
                }
                setSickness_name(arr_sickness_name);
                setMedicine(arr_medicine);
                setSymptom(arr_symptom);
                setHospital(arr_hosptial);
            }

            //medical_info
            if(res.data.medical_info){
                setMedical_id(res.data.medical_info.id);
                setBlood_type(res.data.medical_info.blood_type);
                setDisability_status(res.data.medical_info.disability_status);
                setReport_request(res.data.medical_info.report_request);
                setGuardian_phone(res.data.medical_info.guardian_phone);
            }

            //insurance
            if(res.data.insurance){
                setInsurance_bool(true);
                setInsurance_name(res.data.insurance_list_my.insurance_name);
                setInsurance_phone(res.data.insurance_list_my.insurance_phone);
                setSubscription_date(res.data.insurance.subscription_date);
                setExpiration_date(res.data.insurance.expiration_date);
            }


        })
    }, [user]);
    // const medical_update = () => {
    //     console.log("update");
    // }
    // console.log(res);
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
        <MedicalContext.Provider value={{
            res,
            setRes,
            form,
            sickness_list,
            blood_type_list,
            insurance_name_list,
            // insurance_phone_list,
            medical_id,            
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
            insurance_phone,
            setInsurance_phone,
            subscription_date,
            setSubscription_date,
            expiration_date,
            setExpiration_date,
            onSubmit,
            blood_type_message
        }}>
        <MedicalView/>
    </MedicalContext.Provider>
    )
}