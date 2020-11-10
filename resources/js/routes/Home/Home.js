import React, {useContext} from 'react';
import {AppContext} from "../../components/App";
import Function1 from "./partial/Functions1";
import Function2 from "./partial/Functions2";
// import Team from "./partial/Team";
import Team from "./partial/Team2";
import "./Home.css";

import styled from "styled-components";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default () => {
    const {t} = useContext(AppContext);

    const main_btn = {
        fontFamily: "Poppins, sansSerif",
        fontWeight: "600",
        fontSize: "16px",
        letterSpacing: "1px",
        display: "inline-block",
        padding: "10px 28px",
        borderRadius: "5px",
        transition: "0.5s",
        marginTop: "30px",
        color: "#fff",
        // backgroundColor: "#00BA94",
        border: "2px solid #fff"
    }
    return (
        <div>
            <section id="hero">
                <div className="row mx-0 px-0">
                    <div className="col-lg-2 col-md-2 col-sm-2"/>
                    <div className="col-lg-9 col-md-9 col-sm-9">
                        <div className="row">
                            <div className="col-md-4 col-sm-12" style={{marginTop:"20%"}}>
                                <ScrollAnimation animateIn='fadeIn' delay={500} animateOnce={true}>
                                    {/* <img className="img mb-5" src="/icon/white_kurumamori.png" alt="logo" style={{width:"100%"}}/> */}
                                    <p style={{fontSize:"64px", color:"white"}}>
                                        {t("쿠루마모리119")}
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' delay={700} animateOnce={true}>
                                    <h3 style={{color:"white", fontSize:"24px", marginTop:"20px"}}>{t("딥 러닝 기반의")}</h3>
                                    <h3 style={{color:"white", fontSize:"24px", marginTop:"20px"}}>{t("얼굴인식을 통한")}</h3>
                                    <h3 style={{color:"white", fontSize:"24px", marginTop:"20px"}}>{t("교통사고 예방 & 자동 SOS 서비스")}</h3>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn='fadeIn' delay={1000} animateOnce={true}>
                                    <Link className="btn" to="/products" style={main_btn}>
                                        {t("제품 알아보기")}
                                    </Link>
                                </ScrollAnimation>
                            </div>

                            <div className="animated fadeInUp col-md-8 col-sm-6 pt-3 align-self-center" style={{marginTop:"10%"}}>
                                <ScrollAnimation animateIn='zoomIn' animateOnce={true}>
                                    <img src="/images/home/main_image.png" style={{width:"80%"}}/>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-1"/> */}
                </div>
            </section>
            <Function1/>
            <Function2/>
            <Team/>
        </div>
    
    );

    
}