import React from 'react';
import Function1 from "./partial/Functions1";
import Function2 from "./partial/Functions2";
import Team from "./partial/Team";
import "./Home.css";

import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default () => {
    const hero = {
        
    }
    return (
        <React.Fragment>
            <section id="hero" style={hero}>
                <div className="row mx-0 px-0">
                    <div className="col-lg-1 col-md-1 col-sm-1"/>
                    <div className="col-lg-10 col-md-10 col-sm-10">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6" style={{marginTop:"20%"}}>
                                <h1 style={{color:"white", fontSize:"40px"}}>くるまもり１１９</h1>
                                <h3 style={{color:"white", fontSize:"24px"}}>사고를 스스로 인식하는 스마트 디바이스</h3>
                                <div>
                                <Link id="btn_get_product" className="btn" to="/products">
                                    제품 구매하기
                                </Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-6 pt-3 align-self-center" style={{marginTop:"10%"}}>
                                <img src="/images/main_image.png" style={{width:"80%"}}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"/>
                </div>
            </section>
            <Function1/>
            <Function2/>
            <Team/>
        </React.Fragment>
    
    );

    
}