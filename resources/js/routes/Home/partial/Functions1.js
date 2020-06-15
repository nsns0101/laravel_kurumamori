import React from "react";
import styled from "styled-components";

export default () => {
    const main_text = {
        fontSize: "32px",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: "20px",
        paddingBottom: "20px",
        position: "relative",
        color:"white"
    }
    const service_main_text = {
        paddingTop:"10px",
        color:"#2c4964", 
        fontWeight:"600", 
        fontSize:"24px"
    }
    
    const service_sub_text = {
        fontSize:"16px", 
        color:"black", 
        fontWeight:"700"
    }

    const service_func = (img, main_text, sub_text) => {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 align-items-stretch aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box iconbox-blue" style={{borderRadius:"25px", height:"90%"}}>
                    <div className="thumbnail">
                        <img src={img} alt="img" style={{width:"40%", height:"40%"}}/>
                        <div className="caption">
                            <p style={service_main_text}>{main_text}</p>
                            <span style={service_sub_text}>
                                {sub_text}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section id="intro" className="section intro" style={{background:"#2D405F"}}>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-1"/>

                <div className="col-lg-8 col-md-8 col-sm-10">
                    <div className="row justify-content-around pt-5">
                        <div className="col-lg-12 text-center">
                            <h3 style={main_text}>Services</h3>
                        </div>
                        {service_func("images/예방.png", "사고 예방", "운전 중 졸음운전과 전방 주시 태만 등으로 인해 발생하는 교통사고를 손쉽게 예방")}
                        {service_func("images/신고.png", "자동 신고", "돌발상황 발생 시 사용자의 의료·위치정보를 제공하는 자동 신고로 골든타임 확보")}
                        {service_func("images/전방주시.png", "전방주시 관리", "운전점수를 통계자료로 확인하여 자신의 운전습관을 확인하고 개선가능")}
                    </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-1"/>
            </div>
        </section>
    );
}