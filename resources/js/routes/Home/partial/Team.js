import React from "react";
import "./Team.css";
export default () => {
    const main_text = {
        fontSize: "32px",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: "20px",
        paddingBottom: "20px",
        position: "relative",
        color:"black",
    }

    const team_func = (name) => {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 text-center mb-3">
                <div className="member">
                    <img src={`/images/team/${name}.jpg`} alt="img" style={{width:"60%", height:"250px"}}/>
                    <div className="member_info">
                        <div className="member-info-content">
                            <h4>{name}</h4>
                            <span>역할</span>
                        </div>
                    </div>
                </div>
                <h3 className="py-3" style={{color:"white"}}>{name}</h3>
            </div>
            // <div className="member">
            //   <img src={`/images/team/${name}.jpg`} className="img-fluid" alt=""/>
            //   <div className="">
            //     <div className="member-info-content">
            //       <h4>William Anderson</h4>
            //       <span>CTO</span>
            //     </div>
            //     <div className="social">
            //       <a href=""><i className="icofont-twitter"></i></a>
            //       <a href=""><i className="icofont-facebook"></i></a>
            //       <a href=""><i className="icofont-instagram"></i></a>
            //       <a href=""><i className="icofont-linkedin"></i></a>
            //     </div>
            //   </div>
            // </div>
        )
    }
    return (
        <section id="intro" className="section intro" style={{background:"#2D405F"}}>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-3"/>

                <div className="col-lg-8 col-md-8 col-sm-6">
                    <div className="row justify-content-around pt-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h3 style={main_text}>Team</h3>
                        </div>
                        {team_func("김도형")}
                        {team_func("예준현")}
                        {team_func("장준혁")}
                        {team_func("이재영")}
                        {team_func("팽진솔")}
                        {team_func("정인식")}
                    </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-3"/>
            </div>
        </section>
    );
}