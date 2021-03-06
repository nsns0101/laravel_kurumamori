import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import {AppContext} from "../../components/App";
import { MedicalContext } from "./MedicalContainer";
import Loader from "../../components/Loader";
import moment from "moment";
import Profile_User from "../../components/Profile_User";
import Info_menu from "../../layout/Info_menu";
import Show_medical from "./Show/Show_medical.js";
import Create_medical from "./Create/Create_medical.js";
import "./Medical.css";
import { useForm } from "react-hook-form";



export default ({history}) => {
    const { user, setUser, t } = useContext(AppContext);
    const { form, validation } = useContext(MedicalContext);
    const { handleSubmit, register, errors, watch } = useForm();

    return user.id ? (
        <div style={{backgroundColor:"white"}}>
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
                                {user && user.id && form  ? (
                                    <div>
                                        {form == "view" ? (
                                            <div className="" style={{maxHeight:"665px", overflowX:"hidden",  overflowY:"auto", marginTop:"30px"}}>
                                                <Show_medical/>
                                            </div>
                                        ) : (
                                            <div className="" style={{maxHeight:"654px", marginTop:"30px"}}>
                                                <Create_medical/>    
                                            </div> 
                                        )}
                                    </div>
                                ) :  (
                                    <div className="" style={{height:"654px", overflowX:"hidden",  overflowY:"auto", marginTop:"30px"}}>
                                        <Loader/>
                                    </div>
                                )
                            }
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