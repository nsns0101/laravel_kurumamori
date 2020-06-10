import React, {useContext} from "react";
import Info_menu from "../../layout/Info_menu";
import Show_medical from "./partial/Show_medical.js";
import Create_medical from "./partial/Create_medical.js";
import "./good.css";
import {AppContext} from "../../components/App";
import { MedicalContext } from "./MedicalContainer";

export default () => {
    const { user } = useContext(AppContext);
    const { form } = useContext(MedicalContext);
    return (
        <div>
            {user && user.id && form  ? (
                
            <section id="intro" className="section intro" style={{background: "#f7f7f7"}}>
            <Info_menu/>
            <div className="row">
                <div className="col-md-2 col-xs-2 col-sm-2"/>
                <div className="col-md-8 col-xs-8 col-sm-8">
                    <h3 style={{color:"blue"}}>의료 정보</h3>
                    {form == "view" ? (
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