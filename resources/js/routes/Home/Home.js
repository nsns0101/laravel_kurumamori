import React from 'react';
import Function1 from "./partial/Functions1";
import Function2 from "./partial/Functions2";
import Team from "./partial/Team";

export default () => {
    return (
        <React.Fragment>

            <div className="row">

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{width:"100%"}}>
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="/images/main_image.png" alt="First slide"
                                style={{width:"2115px", height:"870px"}}/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="/images/ppt_main_image.png" alt="Second slide"
                                style={{width:"2115px", height:"870px"}}/>
                        </div>

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <Function1/>
            <br/>
            <br/>
            <Function2/>
            <br/>
            <br/>
            <br/>
            <Team/>
            <br/>
            <br/>
        </React.Fragment>
    
    );

    
}