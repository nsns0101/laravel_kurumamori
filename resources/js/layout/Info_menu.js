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
        <div className="row mb-5" style={{background:"#5772f9"}}>
            <div className="col-lg-2"/>
            <div className="col-lg-8">
                <nav className="navbar navbar-expand-lg">
                    <Link to="/info/index" className="nav-link">
                        {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                        <span className="text-color" style={text_color}>내 정보</span>
                    </Link>  
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/info/index" className="nav-link">
                                    {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                                    <span className="text-color" style={text_color}>개인정보</span>
                                </Link>                </li>
                            <li className="nav-item">
                                <Link to="/info/medical_info" className="nav-link">
                                    {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                                    <span className="text-color" style={text_color}>의료정보</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/info/drive_score" className="nav-link">
                                    {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                                    <span className="text-color" style={text_color}>운전점수</span>
                                </Link>                
                            </li>
                        </ul>
                        {/* <span className="navbar-text">
                        good
                        </span> */}
                    </div>
                </nav>
            </div>
        </div>
    )
}