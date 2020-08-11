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
    return (
        past_sickness_name ? past_sickness_name.map( (value, index) => {
            return (
                <div key={index} className="row" style={{display:"flex"}}>
                    <div className="col-md-1">
                        {index == 0 ? 
                            <img src="/icon/button_plus.png" style={{marginLeft:"50%"}} onClick={() => add_past_sickness()}/>
                        :
                            <img src="/icon/button_minus.png" style={{marginLeft:"50%"}} onClick={() => minus_past_sickness(index)}/>
                        }
                    </div>
                    <div className="col-md-2 text-center">
                        <div className="medical_title_p">{t("과거 병력")}{index + 1}</div>
                    </div>
                    {/* {{-- 드롭다운버튼 --}} */}
                    <div className="col-md-2 text-center medical_dropdown_p">
                        <Dropdown options={sickness_list} 
                            onChange={
                                (data) => {
                                    // console.log(data.value);
                                    let newArr = [...past_sickness_name];
                                    newArr[index] = data.value;
                                    setPast_sickness_name(newArr);
                                }
                            } value={past_sickness_name[index] ? t(past_sickness_name[index]) : ""} placeholder={t("선택")} style={{width:"200px"}}/>
                    </div>
                    {/* // {{--  --}} */}
                    <div className="col-md-6">
                        <div className="form-group">
                            {/* {{-- <input className="past_sickness_supplementation" style="font-size:24px; width:100%;"type="text"  */}
                                {/* name="past_sickness_supplementation[]" className="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{isset($past_sickness[$i-1]) ? old("past_sickness_supplementation.$i" ,$past_sickness[$i-1]->past_sickness_supplementation) :  old("past_sickness_supplementation.$i") }}"/> --}} */}
                                <input style={{fontSize:"20px", width:"100%"}} type="text" 
                                value={past_sickness_supplementation[index] ? past_sickness_supplementation[index] : ""}
                                onChange={
                                    (e) => {
                                        let newArr = [...past_sickness_supplementation];
                                        newArr[index] = e.target.value;
                                        setPast_sickness_supplementation(newArr);
                                    }
                                }
                                 className="form-control" placeholder={t("보충설명(복용 약물, 기간)")}/> 
                            {/* {!! $errors->first('past_sickness_supplementation', '<span className="form-error">:message</span>') !!} */}
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            )
        } ) : null
    )
}