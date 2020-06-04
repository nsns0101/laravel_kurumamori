import React, {useContext} from "react";
import Info_menu from "../../layuot/Info_menu";
import Show_medical from "./partial/Show_medical.js";
import Create_medical from "./partial/Create_medical.js";
import "./good.css";
import {AppContext} from "../../components/App";
import { MedicalContext } from "./MedicalContainer";

export default () => {
    const { user } = useContext(AppContext);
    const { res, form } = useContext(MedicalContext);

    return (
        <div>
            {user && user.id && form &&  res && res.config.url == `/info/medical_info/${user.id}` ? (
                
            <section id="intro" className="section intro" style={{padding: "50px 0px 0px 0px", background: "#f7f7f7"}}>
            <div className="row">
                <div className="col-md-2 col-xs-2 col-sm-2">
                    <Info_menu/>
                </div>
                <div className="col-md-7 col-xs-7 col-sm-7">
                    <br />
                    <br />
                    <h3 style={{color:"blue"}}>의료 정보</h3>
                    {res  && res.data.medical_info && form != "update" ? (
                        <Show_medical/>
                    ) : (
                        <Create_medical/>
                    )}
                </div>

            </div>
        </section>
        ) : null}
        </div>
    )
}