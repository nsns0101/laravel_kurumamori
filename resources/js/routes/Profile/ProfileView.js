import React, {useEffect, useState, useContext} from "react";
import {AppContext} from "../../components/App";
import {ProfileContext} from "./ProfileContainer";
import Loader from "../../components/Loader";
import "./Profile.css";
import Product_User from "./partial/Profile_User";


export default () => {
    const { user, setUser, t } = useContext(AppContext);
    const { data } = useContext(ProfileContext);
    return data && user.id ? (
        <div>
            <div className="row mt-5 mb-5">
                {/* 여백 */}
                <div className="col-md-1"></div>
                
                {/* 내용 */}
                <div className="col-md-10">
                    <section id="intro" className="section intro">
                        <div className="row">
                            <div className="col-md-3">
                                <Product_User/> 
                            </div>
                            <div className="col-md-9">

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