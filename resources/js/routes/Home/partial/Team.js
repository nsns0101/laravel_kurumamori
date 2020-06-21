import React from "react";
import "./Team.css";
import ScrollAnimation from "react-animate-on-scroll";

export default () => {
    const main_text = {
        fontSize: "32px",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: "20px",
        paddingBottom: "20px",
        position: "relative",
        color:"white",
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

    const team_func = (name, position, delay) => {
        return (
            <div className="col-lg-4 col-md-4 col-sm-12 text-center aos-init mb-3 team">
                <ScrollAnimation animateIn='fadeInUp' delay={500} animateOnce={true}>                
                    <div className="member">
                        <img src={`/images/team/${name}.jpg`} alt="img" style={{width:"100%", height:"250px"}}/>
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
                </ScrollAnimation>
            </div>
        )
    }

    return (
        <section id="intro" className="section intro" style={{background:"#2D405F"}}>
                <div className="team">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-3"/>

                        <div className="col-lg-8 col-md-8 col-sm-6">
                            <div className="row justify-content-around pt-5">
                                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                        <h3 style={main_text}>Team</h3>

                                        <p style={{color:"white", marginBottom:"20px"}}>
                                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
                                            <br/>Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                                        </p>
                                    </ScrollAnimation>
                                </div>
                                    {/* 이름, 담당, 딜레이 */}
                                    {team_func("장준혁", "App", 1)}
                                    {team_func("예준현", "HardWare", 2)}
                                    {team_func("정인식", "HardWare", 3)}
                                    {team_func("김도형", "Web", 4)}
                                    {team_func("이재영", "Web", 5)}
                                    {team_func("팽진솔", "Server", 6)}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-2 col-sm-3"/>
                    </div>
                </div>
        </section>
    );
}