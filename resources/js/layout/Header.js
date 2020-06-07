import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {AppContext} from "../components/App";
// import styled from "styled-components";

export default  () => {
    const {user} = useContext(AppContext);    //값 전달 성공
    // console.log(isLoggedIn);
    return (
        <section id="main-navigation">
            <nav className="navbar fixed-top navbar-expand-lg" style={{background:"#002ef0", opacity:1, display: "flex"}}>
                    <Link to="/" className="navbar-brand">
                        <img className="img" src="/icon/logo_curumamori.png" alt="logo" style={{width:100}}/>
                    </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav mr-auto col-auto">
                        <li className="nav-item">
                            <Link to="/products" className="nav-link" style={{color:"white"}}>제품</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/bigdata" className="nav-link" style={{color:"white"}}>빅데이터 자료실</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/boards/questions" style={{color:"white"}}>고객 문의</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/boards/reviews" style={{color:"white"}}>고객 리뷰</a>
                        </li>
                    </ul>
        
                    <ul className="navbar-nav col-auto">
                        {/* @if(Auth::user()) */}
                        {user.id ? 
                        <React.Fragment>
                            <li className="nav-item">
                                <Link to="/info/index" className="nav-link" style={{color:"white"}}>내정보</Link> 
                            </li>
                            <li className="nav-item">
                                <Link to="/logout" className="nav-link" style={{color:"white"}}>로그아웃</Link> 
                            </li>
                        </React.Fragment>
                        :
                        <React.Fragment>
                        <li className="nav-item">
                            <Link to="/auth/login" className="nav-link" style={{color:"white"}}>로그인</Link>
                        </li> 
                        <li className="nav-item">
                            <Link to="/auth/register" className="nav-link" style={{color:"white"}}>회원가입</Link>
                        </li>
                        </React.Fragment>
                        }

                    </ul>
                <div>
            </div>
            </div>
            </nav>   
        </section>
    )
};