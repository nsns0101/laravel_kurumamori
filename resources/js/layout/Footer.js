import React from "react";
import styled from "styled-components";
const Footer = styled.div`
    position:relative;
    bottom:0px; 
    left:0px;
    right: 0px; 
    height:150px; 
    width:100%; 
    background-color: #002ef0;
    color: white; 
    text-align: center;
    opacity:1;
-`;

export default () => {
    return (
        <Footer>
            <div className="row py-3">
                <div className="col-lg-2 col-sm-2"/>
                <div className="col-lg-8 col-sm-8">
                    <div className="row">
                        <div className="col-lg-2 col-sm-2">
                            <p style={{fontSize:"20px"}}>くるまもり9</p>
                        </div>
                        {/* © Copyright Miro. */}
                    </div>
                </div>
            </div>
        </Footer>

    )
}