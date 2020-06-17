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
    // //팀
    // const Team = {
    //     textAlign: "center",
    //     marginBottom: "20px",
    //     background: "#343a40",
    //     position: "relative",
    // }
    // const Member_info_content  = {
    //     position: "absolute",
    //     left: 0,
    //     right: 0,
    //     bottom: "10px",
    //     transition: "bottom 0.4s"
    // }
    // const member_info_content_h4 = {
    //     fontWeight: "700",
    //     marginBottom: "2px",
    //     fontSize: "18px",
    //     color: "white"
    // }
    // const member_info_content_span = {
    //     fontStyle: "italic",
    //     display: "block",
    //     fontSize: "13px",
    //     color: "white"
    // }
    // const member_social = {
    //     position: "absolute",
    //     left: 0,
    //     bottom: "-38px",
    //     right: 0,
    //     height: "48px",
    //     transition: "bottom ease-in-out 0.4s",
    //     textAlign: "center",
    // }
    // const member_social_a = {
    //     transition: "color 0.3s",
    //     color: "rgba(255, 255, 255, 0.7)",
    //     margin: "0 10px",
    //     display: "inline-block"
    // }
    // const member_social_i = {
    //     fontSize: "18px",
    //     margin: "0 2px"
    // }
    // const img_fluid = {
    //     maxWidth: "100%",
    //     height: "auto"
    // }

    const team_func = (name, position) => {
        return (
            // <div className="col-lg-4 col-md-4 col-sm-12 text-center aos-init aos-animate mb-3" data-aos="fade-up" data-aos-delay="300">
            //     <div className="member" style={Team}>
            //         <img src={`/images/team/${name}.jpg`} alt="img" style={{width:"60%", height:"250px"}}/>
            //         <div className="member-info">
            //             <div className="member-info-content" style={Member_info_content}>
            //                 <h4 className="mt-2" style={member_info_content_h4}>{name}</h4>
            //                 <span style={member_info_content_span}>{position}</span>
            //             </div>
            //             <div className="social" style={member_social}>
            //                 <a href="" style={member_social_a}><i className="icofont-facebook" style={member_social_i}></i></a>
            //                 <a href="" style={member_social_a}><i className="icofont-twitter" style={member_social_i}></i></a>
            //                 <a href="" style={member_social_a}><i className="icofont-instagram" style={member_social_i}></i></a>
            //                 <a href="" style={member_social_a}><i className="icofont-linkedin" style={member_social_i}></i></a>
            //             </div>
            //         </div>
            //     </div>
            // </div>
            <div className="col-lg-4 col-md-4 col-sm-12 text-center aos-init aos-animate mb-3 team" data-aos="fade-up" data-aos-delay="300">
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
            </div>
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
                            <p style={{color:"white", marginBottom:"20px"}}>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. 
                                <br/>Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                            </p>
                        </div>
                        {team_func("장준혁", "App")}
                        {team_func("예준현", "HardWare")}
                        {team_func("정인식", "HardWare")}
                        {team_func("김도형", "Web")}
                        {team_func("이재영", "Web")}
                        {team_func("팽진솔", "Server")}
                    </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-3"/>
            </div>
        </section>
    );
}