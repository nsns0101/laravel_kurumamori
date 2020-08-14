import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = styled.div`
    position: absolute;
    bottom:0; 
    left:0px;
    right: 0px; 
    height:50px; 
    width:100%; 
    background-color: #F1F3FF;
    color: black; 
    text-align: center;
    opacity:1;
`;
const up = () => {
    window.scrollTo(0,0);
}
export default () => {
    return (
        <div>
            <Footer>
                <footer className="row foot_back" style={{margin:0}}>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <div className="col-md-8" style={{paddingTop:"15px"}}>
                                <p style={{color:"white", fontSize:"16px", fontWeight:500}}>©Copyright クルマモリ9。All Rights Reserved</p>
                            </div>
                            <div className="col-md-4" style={{paddingTop:"10px"}}>
                                <a href="https://www.youtube.com/channel/UCTLr43DTgWut2lSQ2vFcXAw/featured">
                                    <img src="/icon/footer_Logos.png" style={{width:"30%"}}/>
                                </a>
                                {/* <a href="https://www.youtube.com/channel/UCTLr43DTgWut2lSQ2vFcXAw/featured">
                                    <img src="/icon/youtube.png" style={{width:"6%"}}/>
                                </a>
                                <a href="https://www.youtube.com/channel/UCTLr43DTgWut2lSQ2vFcXAw/featured">
                                    <img src="/icon/github.png" style={{width:"4%"}}/>
                                </a> */}
                            </div>   
                            

                            {/* <div className="col-lg-2 col-md-2 col-sm-2">
                                <button className="btn btn-success" onClick={()=>up()} style={{
                                    position: "fixed",
                                    // bottom:"70px",
                                    bottom: "10px",
                                    right:"30px",       
                                }}>
                                ↑<br/>TOP
                                </button>
                            </div> */}
                        </div>
                    </div>
                </footer>
            </Footer>
        </div>

    )
}