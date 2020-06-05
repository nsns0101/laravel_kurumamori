import React from "react";
import styled from "styled-components";
import "../../../public/css/sb-admin-2.css";
import {Link} from "react-router-dom";

const Info_menu = styled.div`
    background-color:white;
    height:100%;
`;

export default () => {
    const info_menu = {
        background : "white",
        height : "100%"
    }
    const text_color = {
        color:"black",
        fontWeight: "800",
        fontSize: "20px"
    }
    return (
        <div className="col-md-3" style={{paddingLeft:"0px",height:"100%"}}>
            <ul className="navbar-nav info_menu sidebar sidebar-dark accordion" id="accordionSidebar" style={info_menu}>
                <br />

                {/* <!-- Sidebar - Brand --> */}
                <Link to="/info/index" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink" style={{color:"blue"}}></i>
                    </div>
                    <br />
                    <div className="sidebar-brand-text mx-3" style={{color:"black", fontWeight:"800"}}>내 정보</div>
                </Link>

                {/* <!-- hr --> */}
                <hr className="sidebar-divider" style={{borderTop:"1px solid blue"}}/>

                {/* <!-- 개인정보--> */}
                <li className="nav-item">
                    <Link to="/info/index" className="nav-link">
                        <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i>
                        <span className="text-color" style={text_color}>개인정보</span>
                    </Link>

                    <Link to="/info/medical_info" className="nav-link">
                        <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i>
                        <span className="text-color" style={text_color}>의료정보</span>
                    </Link>
                    <Link to="/info/drive_score" className="nav-link">
                        <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i>
                        <span className="text-color" style={text_color}>운전점수</span>
                    </Link>
                </li>

            </ul>
        </div>
    )
}