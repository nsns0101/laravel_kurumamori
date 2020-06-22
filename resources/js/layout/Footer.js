import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = styled.div`
    position:relative;
    bottom:0px; 
    left:0px;
    right: 0px; 
    height:50px; 
    width:100%; 
    background-color: #F1F3FF;
    color: black; 
    text-align: center;
    opacity:1;
`;

export default () => {
    return (
        <Footer>
            <div className="row mt-2">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                            <p style={{fontSize:"16px"}}>© Copyright Miro.</p>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-9">

                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1">
                            <a href="https://www.youtube.com/channel/UCTLr43DTgWut2lSQ2vFcXAw/featured">
                                <img src="/icon/youtube.png" style={{width:"30px"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Footer>

    )
}