import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import {AppContext} from "../components/App";
// import styled from "styled-components";
import {Dropdown} from "react-bootstrap";
import i18next from "../config/lang/i18n.js";
import "./Header.css";

export default  () => {
    const {user, t} = useContext(AppContext);
    // console.log(isLoggedIn);

    const [path_url, setPath_url] = useState(location.pathname.split('/')[1]); 
    // console.log("------------------------------------------------");
    console.log(path_url);
    // console.log("------------------------------------------------");

    //언어 제목
    const [languageTitle, setLanguageTitle] = useState(
        localStorage.getItem("lang") == "ko" ? "한국어" : "日本語"
    );

    //언어 체인지
    const change_language = (lang_arr) => {
        //언어 변경
        i18next.changeLanguage(lang_arr.split(',')[0]);
        //이름 변경
        setLanguageTitle(lang_arr.split(',')[1]);

        //새로고침해도 유지되게 localStorage에 등록
        localStorage.setItem("lang", lang_arr.split(',')[0]);
    };

    return (
        <nav id="main-navigation">
            <div className="row" style={{background:"#002ef0", opacity:1, display: "flex", height:"65px", borderBottom:"solid blue 1px"}}>
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <nav className="navbar navbar-expand-lg px-0 py-0">
                        <Link to="/" className="navbar-brand" style={{marginRight:"50px"}} onClick={()=>setPath_url("")}>
                            <img className="img mx-4" src="/icon/logo_kurumamori.png" alt="logo" style={{width:150}}/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <img className="search-img" src="../icon/list.png" 
                                style={{display: "inline-block",
                                verticalAlign: "middle",
                                width:"60%",
                                height: "60%"}}
                            ></img>
                        </button>
                        <div className="collapse navbar-collapse px-4" id="main_navbar" style={{background:"#002ef0", zIndex:1000}}>
                            <ul className="navbar-nav mr-auto col-auto">
                                <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <Link to="/" className={`nav-link good_nav ${location.pathname.split('/')[1] == "" ? "active" : ""}`} onClick={()=>setPath_url("")}>{t("홈")}</Link>
                                </li>
                                <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <Link to="/products" className={`nav-link good_nav ${location.pathname.split('/')[1] == 'products' ? "active" : ""}`} onClick={()=>setPath_url("product")}>{t("제품")}</Link>
                                </li>
                                <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <Link to="/bigdata" className={`nav-link good_nav ${location.pathname.split('/')[1] == 'bigdata' ? "active" : ""}`} onClick={()=>setPath_url("bigdata")}>{t("빅데이터 자료실")}</Link>
                                </li>

                                <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <Link to="/boards/questions/all" className={`nav-link good_nav ${location.pathname.split('/')[2] == 'questions' ? "active" : ""}`} onClick={()=>setPath_url("questions")}>{t("고객 문의")}</Link>
                                </li>
                                {/* <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <a className="nav-link" href="/boards/reviews" style={nav_text} onClick={()=>setPath_url("reviews")}>{t("고객 리뷰")}</a>
                                </li> */}

                            </ul>
                
                            <ul className="navbar-nav col-auto">
                                {/* @if(Auth::user()) */}
                                {user.id ? 
                                <React.Fragment>
                                    <li className="nav-item" style={{marginRight:"1.5em"}}>
                                        <Link to="/info/index" className={`nav-link good_profile`} onClick={()=>setPath_url("info")}>
                                            <img className={`img mx-4 profile_icon ${location.pathname.split("/")[1] == "info" ? "active" : ""}`} src="/icon/profile.png" alt="profile"/>
                                        </Link> 
                                    </li>
                                    {/* <li className="nav-item" style={{marginRight:"1.5em"}}>
                                        <Link to="/logout" className="nav-link" style={nav_text} onClick={()=>setPath_url("")}>{t("로그아웃")}</Link> 
                                    </li> */}
                                </React.Fragment>
                                :
                                <React.Fragment>
                                <li className={`nav-item login_nav_item ${location.pathname.split("/")[1] == "auth" ? "active" : ""}`}>
                                    <Link to="/auth/login" className={`nav-link good_login ${location.pathname.split("/")[1] == "auth" ? "active" : ""}`} onClick={()=>setPath_url("auth")}>{t("로그인")}</Link>
                                </li> 
                                {/* <li className="nav-item" style={{marginRight:"1.5em"}}>
                                    <Link to="/auth/register" className="nav-link" style={nav_text}>{t("회원가입")}</Link>
                                </li> */}
                                </React.Fragment>
                                }
                                {/* 다국어 지원 기능 */}
                                <li className="nav-item lang_button"> 
                                    <Dropdown onSelect={change_language}> 
                                        <Dropdown.Toggle variant="" size="sm"> 
                                            {languageTitle} 
                                        </Dropdown.Toggle> 
                                        <Dropdown.Menu> 
                                            <Dropdown.Item eventKey={["ko", "한국어"]}>
                                                <img src="http://img.cafe24.com/img/common/global/ko_KR_32x24.png" style={{marginRight:"10px"}}/>
                                                한국어
                                            </Dropdown.Item> 
                                            <Dropdown.Item eventKey={["jp", "日本語"]}>
                                                <img src="http://img.cafe24.com/img/common/global/ja_JP_32x24.png" style={{marginRight:"10px"}}/>
                                                日本語
                                            </Dropdown.Item> 
                                        </Dropdown.Menu> 
                                    </Dropdown> 
                                </li>
                            </ul>
                        </div>
                    </nav>   
                </div>
            </div>
        </nav>
    )
};