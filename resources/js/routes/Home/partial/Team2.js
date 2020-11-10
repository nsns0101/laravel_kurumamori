import React, {useContext} from 'react';
import {AppContext} from "../../../components/App";
import "./Team.css";
import ScrollAnimation from "react-animate-on-scroll";

export default () => {
    const {t} = useContext(AppContext);

    const main_text = {
        fontSize: "40px",
        fontWeight: "900",
        textTransform: "uppercase",
        // marginBottom: "20px",
        // paddingBottom: "20px",
        position: "relative",
        color:"black",
    }
    const sub_text = {
        fontSize: "20px",
        fontWeight: "bold",
        color:"white",
    }
    const sub_text2 = {
        fontSize: "16px",
        fontWeight: "bold",
        color:"white",
    }

    return (
        <section id="intro" className="section intro" style={{background:"white"}}>
                <div className="team">
                    <div className="row" style={{marginBottom:"50px"}}>
                        <div className="col-lg-2 col-md-2 col-sm-3"/>

                        <div className="col-lg-8 col-md-8 col-sm-6">
                            <div className="row justify-content-around pt-5">
                                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                    <ScrollAnimation animateIn='fadeIn' delay={500} animateOnce={true}>
                                        <h3 style={main_text}>OUR TEAM</h3>
                                        <h3 style={{color:"#00BA94"}}>────</h3>
                                        {/* <p style={{color:"black", fontWeight:"600", marginBottom:"100px"}}> */}
                                        <p style={{color:"black", fontWeight:"600", marginBottom:"50px"}}>
                                            {t("딥 러닝 기반의 얼굴인식을 통한") + t("교통사고 예방 & 자동 SOS 서비스") + " "+ t("クルマモリ9 프로젝트 팀 MIRO입니다.")}
                                        </p>
                                        <img src="/images/home/team/team2.png" style={{width:"100%"}}/>
                                    </ScrollAnimation>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-3"/>
                    </div>
                </div>
        </section>
    );
}