import React from "react";
import styled from "styled-components";
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
            <div className="row pt-3">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-lg-2 col-md-2 col-sm-2">
                            <p style={{fontSize:"16px"}}>© Copyright Miro.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Footer>

    )
}