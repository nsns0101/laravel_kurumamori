import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import {AppContext} from "../../components/App";
import { MedicalContext } from "./MedicalContainer";
import Loader from "../../components/Loader";
import moment from "moment";
import Profile_User from "../../components/Profile_User";
import Info_menu from "../../layout/Info_menu";
import Show_medical from "./partial/Show_medical.js";
import Create_medical from "./partial/Create_medical.js";
import "./Medical.css";


export default ({history}) => {
    const { user, setUser, t } = useContext(AppContext);
    const { form } = useContext(MedicalContext);

    return user.id ? (
        <div style={{backgroundColor:"rgb(240, 240, 240)"}}>
            <div className="row" style={{padding:"50px 0 50px 0"}}>
                {/* 여백 */}
                <div className="col-md-1"></div>
                
                {/* 내용 */}
                <div className="col-md-10">
                    <section id="intro" className="section intro">
                        <div className="row">
                            <div className="col-md-3">
                                <Profile_User/> 
                            </div>
                            <div className="col-md-9">
                                <Info_menu/>
                                <div className="" style={{maxHeight:"635px", overflowY:"auto", marginTop:"30px"}}>
                                {user && user.id && form  ? (
                                    <div className="card-body">
                                            {form == "view" ? (
                                                <Show_medical/>
                                            ) : (
                                                <Create_medical/>
                                            )}
                                    </div>
                                ) : <Loader/>}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 여백 */}
                <div className="col-md-1"></div>
            </div>
        </div>
    ) : <Loader/>;
}