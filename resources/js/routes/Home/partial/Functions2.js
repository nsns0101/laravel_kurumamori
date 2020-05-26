import React from "react";

export default () => {
    return (
        <section id="intro function2" className="section intro function1" style={{background:"#F3F3F3"}}>
            <div className="rows">
                <div className="col-md-12 col-md-offset-2 text-center">
                    <h2>얼마나 많은 사람이 <span style={{color:"red"}}>교통사고</span> 시 <span style={{color:"red"}}>골든타임</span>을 놓쳐 생명을 위협받고 있는지 알고 계시나요?</h2>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-1 col-md-1"></div>
                    <div className="col-sm-3 col-md-3 text-center">
                        <div className="thumbnail">
                            <img src="images/index_img_chapter01.png" alt="img"/>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 text-center">
                        <div className="thumbnail">
                            <img src="images/index_img_chapter02.png" alt="img"/>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 text-center">
                        <div className="thumbnail">
                            <img src="images/index_img_chapter03.png" alt="img"/>
                        </div>
                    </div>
                    <div className="col-sm-1 col-md-1"></div>
                </div>
            </div>
        </section>
    );
}