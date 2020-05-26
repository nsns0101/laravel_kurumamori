import React from "react";
import { Route, Link, BrowserRouter} from "react-router-dom";

// import styled from "styled-components";


export default () => {
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
                            <a className="nav-link" href="/bigdata" style={{color:"white"}}>빅데이터 자료실</a>
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
                        <li className="nav-item">
                            <a className="nav-link " href="/info/index" style={{color:"white"}}>내정보</a> 
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/logout" style={{color:"white"}}>로그아웃</a> 
                        </li>
                        {/* @else */}
                        <li className="nav-item">
                            <a className="nav-link " href="/auth/login" style={{color:"white"}}>로그인</a>
                        </li> 
                        <li className="nav-item">
                        <a className="nav-link " href="/auth/signup" style={{color:"white"}}>회원가입</a>
                        </li> 
                        {/* @endif */}
                    </ul>
                <div>
            </div>
            </div>
            </nav>   
        </section>
    )
}