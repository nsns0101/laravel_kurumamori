import React from "react";
import styled from "styled-components";

const Footer = styled.div`
    margin-top : 30px;
    position:fixed; 
    left:0px; 
    bottom:0px; 
    height:30px; 
    width:100%; 
    background-color: #e5e5e5;
    color: black; 
    text-align: center;
`;

export default () => {
    return (
        <Footer>
            <h3 style={{fontSize:"15px"}}>
                    © 2020 Miro
            </h3>
        </Footer>

    )
}