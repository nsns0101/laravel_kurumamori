import React, {useContext} from 'react';
import {AppContext} from "../../../components/App";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

export default () => {
    const {t} = useContext(AppContext);

    const main_text = {
        fontSize: "32px",
        fontWeight: "bold",
        textTransform: "uppercase",
        // marginBottom: "20px",
        // paddingBottom: "20px",
        position: "relative",
        color:"black"
    }
    const service_main_text = {
        paddingTop:"10px",
        color:"#00BA94", 
        fontWeight:"bold", 
        fontSize:"24px"
    }
    
    const service_sub_text = {
        fontSize:"18px", 
        color:"black", 
        fontWeight:"bold"
    }

    const service_func = (img, main_text, sub_text, aos_position, index) => {
        return (
            <div className="col-lg-3 col-md-3 col-sm-12 align-items-stretch" style={{padding:0, margin:0, boxShadow:"black 1px 1px 1px 1px", border:"0px", borderRadius:"20px", marginBottom:"30px"}}>
                <ScrollAnimation animateIn={`fadeIn${aos_position}`} animateOnce={true} delay={100*index}>                
                    <div className="icon-box iconbox-blue" style={{borderRadius:"25px", height:"100%"}}>
                        <div className="thumbnail">
                            {/* {index == 3 ? (
                                <img src={img} alt="img" style={{width:"35%"}}/>
                            ) : (
                                <img src={img} alt="img" style={{width:"50%", height:"50%"}}/>
                            )} */}
                            <img src={img} alt="img" style={{width:"20%"}}/>

                            <div className="caption">
                                <p style={service_main_text}>{main_text}</p>
                                <span style={service_sub_text}>
                                    {sub_text}
                                </span>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }

    return (
        <section id="intro" className="section intro" style={{background:"rgb(247,248,248)"}}>
            <div className="row">
                <div className="col-lg-1 col-md-1 col-sm-1"/>

                <div className="col-lg-10 col-md-10 col-sm-10">
                    <div className="row justify-content-around pt-5">
                        <div className="col-lg-12 text-center">
                            <ScrollAnimation animateIn="fadeIn" delay={300} animateOnce={true}>                
                                <h3 style={main_text}>Services</h3>
                                <h3 style={{color:"#00ba94"}}>──────</h3>

                            </ScrollAnimation>
                        </div>
                            {service_func("/images/home/예방.png", t("사고 예방"), t("운전 중 졸음 운전과 전방 주시 태만 등으로 인해 발생하는 교통 사고를 손쉽게 예방 가능"), "Right", 1)}
                            {service_func("/images/home/신고.png", t("자동 신고"), t("돌발상황 발생 시 사용자의 의료 · 위치정보를 제공하는 자동 신고로 골든타임 확보 가능"), "Down", 1)}
                            {service_func("/images/home/빅데이터.png", t("빅 데이터"), t("사용자의 운전 습관을 파악하여 사고, 졸음 다발 지역 등을 통계자료를 통해 쉽게 확인 가능"), 'Left', 3)}
                    </div>
                </div>

                <div className="col-lg-1 col-md-1 col-sm-1"/>
            </div>
        </section>
    );
}