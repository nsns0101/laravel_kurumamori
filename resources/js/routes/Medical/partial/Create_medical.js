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
        <div className="card" style={{padding:"20px 20px 0 20px"}}>
            <p style={{color:"blue", fontWeight:"bold"}}>{t("질병 정보")}</p>
            <div style={{maxHeight:"250px", overflow:"scroll"}}>
                {/* {{-- 과거 질환 --}} */}
                <Past_sickness/>
                {/* {{-- 현재 질환 --}} */}
                <Sickness/>
            </div>
        </div>
        ) : null

    )
}
