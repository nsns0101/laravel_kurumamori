import React, { useState, useContext } from "react";
import Dropdown from "react-dropdown";
import {AppContext} from "../../../components/App";
import {MedicalContext} from "../MedicalContainer";
export default () => {
    const {
        sickness_list,
        past_sickness_name,
        setPast_sickness_name,
        past_sickness_supplementation,
        setPast_sickness_supplementation,
     } = useContext(MedicalContext);
    //드롭다운 옵션
    // console.log(past_sickness_name);
    // console.log(past_sickness_supplementation);
    const { t } = useContext(AppContext);

    const add_past_sickness = () => {
        if(past_sickness_name.length < 3){
            setPast_sickness_name(past_sickness_name => [...past_sickness_name, null]);
            setPast_sickness_supplementation(past_sickness_supplementation => [...past_sickness_supplementation, null]);
        }
    }
    const minus_past_sickness = (index) => {
        // const index = 1;
        if(index != 0){
            setPast_sickness_name(past_sickness_name.slice(0, index).concat(past_sickness_name.slice(index+1, past_sickness_name.length)));
            setPast_sickness_supplementation(past_sickness_supplementation.slice(0, index).concat(past_sickness_supplementation.slice(index+1, past_sickness_supplementation.length)));

        }
        
    }

    if(!past_sickness_name.length){
        past_sickness_name.push("");
    }
    // console.log(past_sickness_name);
    return (
        <div>
            {past_sickness_name && past_sickness_name !="" ? past_sickness_name.map( (value, index) => {
                return (
                    <div key={index} className="row" style={{display:"flex"}}>
                        <div className="col-md-1">
                            {/* {index == 0 ? 
                                <img src="/icon/button_plus.png" className="btn_plus_minus" onClick={() => add_past_sickness()}/>
                            :
                                <img src="/icon/button_minus.png" className="btn_plus_minus" onClick={() => minus_past_sickness(index)}/>
                            } */}
                            <img src="/icon/button_menu.png" className="btn_plus_minus"/>

                        </div>
                        <hr/>
                        <div className="col-md-2">
                            <div className="show_title_p">{t("과거 병력")}{index + 1}</div>
                        </div>
                        {/* {{-- 드롭다운버튼 --}} */}
                        <div className="col-md-2 text-center">
                            <p className="show_dropdown_p">{t(past_sickness_name[index])}</p>
                        </div>
                        <div className="col-md-1">
                            <p className="show_title_p">{t("보충설명")}</p>
                        </div>
                        {/* // {{--  --}} */}
                        <div className="col-md-5">
                            <div className="form-group">
                                <input className="form-control show_input_p" type="text" value={past_sickness_supplementation[index]} readOnly/> 
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    )
                }) : (
                    <div>
                        <p className="text-center text-danger">
                            {t("과거 병력이 없습니다.")}
                        </p>
                    </div>
                )
            }
            <hr/>
        </div>
    )
}