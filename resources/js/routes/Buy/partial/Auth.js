import React, {Fragment,useContext, useState, useEffect } from "react";
import { Route, Link, BrowserRouter} from "react-router-dom";
import {AppContext} from "../../../components/App";

export default () => {
    const {t} = useContext(AppContext);
    return (
        // css 개선 
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-sm-10 col-lg-10 py-5 text-center">
                    <div className="row justify-content-center" style={{padding:"3em"}}>
                        <div className="col-sm-12 col-lg-12 py-3">
                            <h4 style={{fontSize:"5em"}}>login</h4>
                        </div>
                        <div className="col-sm-12 col-lg-12 py-2">
                            <div className="text-center">
                                <h4>{t("로그인이 필요한 서비스 입니다.")}</h4>
                                <Link to="/auth/login" className="nav-link">{t("로그인")}</Link>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-12 py-2">
                            <h4>{t("혹시 아이디가 없으신가요?")}</h4>
                            <Link to="/auth/register" className="nav-link" >{t("회원가입")}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}