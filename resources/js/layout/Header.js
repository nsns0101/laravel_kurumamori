import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {AppContext} from "../components/App";
// import styled from "styled-components";

export default  () => {
    const {user} = useContext(AppContext);    //값 전달 성공
    // console.log(isLoggedIn);
    const nav_text = {
        fontSize:"18px",
        color:"white",
    }
    return (
        <section id="main-navigation">
            <div className="row py-2" style={{background:"#002ef0", opacity:1, display: "flex", height:"65px"}}>
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <nav className="navbar navbar-expand-lg">
                        <Link to="/" className="navbar-brand">
                            <img className="img" src="/icon/logo_curumamori.png" alt="logo" style={{width:130}}/>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="main_navbar">
                            <ul className="navbar-nav mr-auto col-auto">
                                <li className="nav-item">
                                    <Link to="/products" className="nav-link" style={nav_text}>제품</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/bigdata" className="nav-link" style={nav_text}>빅데이터 자료실</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/boards/questions" className="nav-link" style={nav_text}>고객 문의</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/boards/reviews" style={nav_text}>고객 리뷰</a>
                                </li>
                            </ul>
                
                            <ul className="navbar-nav col-auto">
                                {/* @if(Auth::user()) */}
                                {user.id ? 
                                <React.Fragment>
                                    <li className="nav-item">
                                        <Link to="/info/index" className="nav-link" style={nav_text}>내정보</Link> 
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/logout" className="nav-link" style={nav_text}>로그아웃</Link> 
                                    </li>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                <li className="nav-item">
                                    <Link to="/auth/login" className="nav-link" style={nav_text}>로그인</Link>
                                </li> 
                                <li className="nav-item">
                                    <Link to="/auth/register" className="nav-link" style={nav_text}>회원가입</Link>
                                </li>
                                </React.Fragment>
                                }

                            </ul>
                        </div>
                    </nav>   
                </div>
            </div>
        </section>
    )
};