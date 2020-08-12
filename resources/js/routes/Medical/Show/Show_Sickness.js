import React, { useState, useContext } from "react";
import Dropdown from "react-dropdown";
import {AppContext} from "../../../components/App";
import {MedicalContext} from "../MedicalContainer";

export default () => {
    const { user, t } = useContext(AppContext);
    const { 
        sickness_list,
        sickness_name,
        setSickness_name,
        medicine,
        setMedicine,
        symptom,
        setSymptom,
        hospital,
        setHospital
     } = useContext(MedicalContext);
    //  console.log(sickness_name);
    //  console.log(medicine);
    //  console.log(symptom);
    //  console.log(hospital);
     
     const add_sickness = () => {
        if(sickness_name.length < 3){
            
            setMedicine(medicine => [...medicine, null]);
            setSickness_name(sickness_name => [...sickness_name, null]);
            setSymptom(symptom => [...symptom, null]);
            setHospital(hospital => [...hospital, null]);
        }
    }
    const minus_sickness = (index) => {
        // const index = 1;
        if(index != 0){
            setSickness_name(sickness_name.slice(0, index).concat(sickness_name.slice(index+1, sickness_name.length)));
            setMedicine(medicine.slice(0, index).concat(medicine.slice(index+1, medicine.length)));
            setSymptom(symptom.slice(0, index).concat(symptom.slice(index+1, symptom.length)));
            setHospital(hospital.slice(0, index).concat(hospital.slice(index+1, hospital.length)));

        }
    }
    if(!sickness_name.length){
        sickness_name.push("");
    }
    return (
        sickness_name ? sickness_name.map( (value, index) => {
            return (
                <div key={index}>
                    <div className="row">
                        {/* +,- 아이콘 */}
                        <div className="col-md-1" >
                            {/* {index == 0 ? 
                                <img src="/icon/button_plus.png" className="btn_plus_minus" onClick={() => add_sickness()}/>
                            :
                                <img src="/icon/button_minus.png" className="btn_plus_minus" onClick={() => minus_sickness(index)}/>
                            } */}
                            <img src="/icon/button_menu.png" className="btn_plus_minus"/>

                        </div>
                        {/* 현재질환 글자 */}
                        <div className="col-md-2">
                            <div className="show_title_p">{t("현재 질환") + (index + 1)}</div>
                        </div>
                        {/* 현재 질환 드롭다운버튼 */}
                        <div className="col-md-2 text-center">
                            <p className="show_dropdown_p">{t(sickness_name[index])}</p>
                        </div>
                        {/* 복용중인 약 글자 */}
                        <div className="col-md-2 text-center">
                            <div className="show_title_p">{t("복용중인 약")}</div>
                        </div>
                        {/* 복용중인 약 input */}
                        <div className="col-md-4">
                            <div className="form-group">
                                <input className="form-control show_input_p" type="text" value={medicine[index]} readOnly/> 
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="row">
                        {/* 증상 글*/}
                        <div className="col-md-1"></div>
                        <div className="col-md-2">
                            <div className="show_title_p">{t("증상")}</div>
                        </div>
                        {/* 증상 input */}
                        <div className="col-md-8">
                            <div className="form-group">
                                <input type="text" className="form-control show_input_p" value={symptom[index]} readOnly/>
                            </div>
                                {/* <span className="text-danger" style={{fontSize:"16px"}}>
                                    {t("증상은 최대한 자세히 적어주세요!")}
                                </span> */}
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-1"></div>
                        {/* 진료기관 글 */}
                        <div className="col-md-2">
                            <div className="show_title_p">{t("진료기관")}</div>
                        </div>
                        {/* 진료기관 input */}
                        <div className="col-md-8">
                            <div className="form-group">
                                <input type="text" className="form-control show_input_p" value={hospital[index]} readOnly/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }) : null
    )
}