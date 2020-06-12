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
    console.log(location.pathname.split('/')[2])
    return (
        // <div className="row mb-5" style={{background:"#5772f9"}}>
        //     <div className="col-lg-2"/>
        //     <div className="col-lg-8">
        //         <nav className="navbar navbar-expand-lg">
        //             <Link to="/info/index" className="nav-link">
        //                 {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
        //                 <span className="text-color" style={text_color}>내 정보</span>
        //             </Link>  
        //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             <div className="collapse navbar-collapse" id="navbarText">
        //                 <ul className="navbar-nav mr-auto">
        //                     <li className="nav-item active">
        //                         <Link to="/info/index" className="nav-link">
        //                             {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
        //                             <span className="text-color" style={text_color}>개인정보</span>
        //                         </Link>                
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link to="/info/medical_info" className="nav-link">
        //                             {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
        //                             <span className="text-color" style={text_color}>의료정보</span>
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link to="/info/drive_score" className="nav-link">
        //                             {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
        //                             <span className="text-color" style={text_color}>운전점수</span>
        //                         </Link>                
        //                     </li>
        //                 </ul>
        //             </div>
        //         </nav>
        //     </div>
        // </div>
        <div className="card-header" style={{background:"white"}}>
            <ul className="nav nav-tabs card-header-tabs">
                <span className="pt-2" style={{fontSize:"20px", marginLeft:"10px"}}>내 정보 - &nbsp;&nbsp;&nbsp;</span>
                <li className="nav-item">
                    {/* 액티브! */}
                    <Link to="/info/index" className={`nav-link ${location.pathname.split('/')[2] == 'index' ? "active" : ""}`}>
                        {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                        <span className="text-color" style={text_color}>개인정보</span>
                    </Link>                  
                </li>
                <li className="nav-item">
                    <Link to="/info/medical_info" className={`nav-link ${location.pathname.split('/')[2] == 'medical_info' ? "active" : ""}`}>
                        {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                        <span className="text-color" style={text_color}>의료정보</span>
                    </Link>                      
                </li>
                <li className="nav-item">
                    <Link to="/info/drive_score" className={`nav-link ${location.pathname.split('/')[2] == 'drive_score' ? "active" : ""}`}>
                        {/* <i className="fas fa-fw fa-wrench" style={{color:"blue"}}></i> */}
                        <span className="text-color" style={text_color}>운전점수</span>
                    </Link> 
                </li>
            </ul>
    </div>
    )
}