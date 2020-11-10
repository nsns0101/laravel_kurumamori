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

    const team_func = (img_name, name,position) => {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 text-center aos-init mb-3 team">
                <ScrollAnimation animateIn='fadeIn' delay={300} animateOnce={true}>                
                    <div style={{marginLeft:"20%", width:"60%",borderRadius:"125px", boxShadow:"rgb(191,191,191) 0px 0px 20px 10px", backgroundColor:"black"}}>    
                        <div className="member" style={{borderRadius:"125px", padding:"10px", backgroundColor:"white"}}>
                            <img src={`/images/home/team/${img_name}.jpg`} alt="img" style={{width:"100%", height:"250px", borderRadius:"125px"}}/>
                            <div className="member-info">
                                <div className="member-info-content">
                                    <h4 className="mt-2">{name}</h4>
                                    <span>{position}</span>
                                </div>
                                <div className="social">
                                    <a href=""><i className="icofont-facebook"></i></a>
                                    <a href=""><i className="icofont-twitter"></i></a>
                                    <a href=""><i className="icofont-instagram"></i></a>
                                    <a href=""><i className="icofont-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }

    return (
        <section id="intro" className="section intro" style={{background:"white"}}>
                <div className="team">
                    <div className="row" style={{marginBottom:"50px"}}>
                        <div className="col-lg-2 col-md-2 col-sm-3"/>

                        <div className="col-lg-8 col-md-8 col-sm-6">
                            <div className="row justify-content-around pt-5">
                                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                        <h3 style={main_text}>OUR TEAM</h3>
                                        <h3 style={{color:"#00BA94"}}>────</h3>
                                        <p style={{color:"black", fontWeight:"600", marginBottom:"100px"}}>
                                            {t("딥 러닝 기반의 얼굴인식을 통한") + t("교통사고 예방 & 자동 SOS 서비스") + " "+ t("クルマモリ9 프로젝트 팀 MIRO입니다.")}
                                        </p>
                                       
                                    </ScrollAnimation>
                                </div>
                                    {/* 이름, 담당, 딜레이 */}
                                    {team_func("장준혁", t("장준혁"), "App")}
                                    {team_func("예준현", t("예준현"), "HardWare")}
                                    {team_func("정인식", t("정인식"), "HardWare")}
                                    {team_func("김도형", t("김도형"), "Web")}
                                    {team_func("이재영", t("이재영"), "Web")}
                                    {team_func("팽진솔", t("팽진솔"), "Server")}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-3"/>
                    </div>
                </div>
        </section>
    );
}