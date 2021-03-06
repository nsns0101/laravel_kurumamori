import React, { useContext } from "react";
import styled from "styled-components";
import "../../../public/css/sb-admin-2.css";
import {Link} from "react-router-dom";
import {AppContext} from "../components/App";
import "./info_menu.css";

const Info_menu = styled.div`
    background-color:white;
    height:100%;
`;
export default () => {
    const {user, t} = useContext(AppContext);

    const info_menu = {
        background : "white",
        height : "100%"
    }
    const text_color = {
        color:"black",
        fontWeight: "800",
        fontSize: "20px"
    }


    // console.log(location.pathname.split('/')[2])
    return (
        <div>
            <ul className="nav nav-tabs card-header-tabs">
                {/* <span className="pt-2" style={{fontSize:"20px", color:"black", marginLeft:"10px"}}>내 정보 - &nbsp;&nbsp;&nbsp;</span> */}
                <li className="nav-item">
                    {/* 액티브! */}
                    <Link to="/info/index" className={`nav-link ${location.pathname.split('/')[2] == 'index' ? "active" : "no_active"}`}>
                        {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                        <span className="info_menu_span">{t("제품정보")}</span>
                    </Link>                  
                </li>
                <li className="nav-item">
                    <Link to="/info/medical_info" className={`nav-link ${location.pathname.split('/')[2] == 'medical_info' ? "active" : "no_active"}`}>
                        {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                        <span className="info_menu_span">{t("의료정보")}</span>
                    </Link>                      
                </li>
                <li className="nav-item">
                    <Link to="/info/drive_score" className={`nav-link ${location.pathname.split('/')[2] == 'drive_score' ? "active" : "no_active"}`}>
                        {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                        <span className="info_menu_span">{t("운전정보")}</span>
                    </Link> 
                </li>
                <li className="nav-item">
                    <Link to="/info/history" className={`nav-link ${location.pathname.split('/')[2] == 'history' ? "active" : "no_active"}`}>
                        {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                        <span className="info_menu_span">{t("사용이력")}</span>
                    </Link> 
                </li>
            </ul>
        </div>
    )
}