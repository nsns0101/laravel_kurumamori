import React from "react";

export default () => {
    return (
        <section id="intro" className="section intro" name="abc">
            <div className="rows" id="function1">
                <br/>
                <br/>
                <br/>
                <div className="col-md-12 col-md-offset-2 text-center">
                    <h3>제품 주요 기능</h3>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-1 col-md-1"></div>
                    <div className="col-sm-3 col-md-3 text-center">
                        <div className="thumbnail">
                            <img src="images/예방.png" alt="img"/>
                            <div className="caption">
                                <h2 style={{color:"#619F00"}}>사고 예방</h2>
                                <p style={{fontSize:"18px", color:"black", fontWeight:"700"}}>
                                    운전 중 졸음운전과 전방 주시 태만으로 <br/>인해 발생하는 교통사고를 예방
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 text-center">
                        <div className="thumbnail">
                            <img src="images/신고.png" alt="img"/>
                            <div className="caption">
                                <h2 style={{color:"#619F00"}}>자동 신고</h2>
                                <p style={{fontSize:"18px", color:"black", fontWeight:"700"}}>
                                    불가피한 돌발 상황 발생 시 사용자의 의료·위치정보를 <br/>제공하는 자동 119 신고로 응급 구조 골든타임을 확보
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 text-center">
                        <div className="thumbnail">
                            <img src="images/전방주시.png" alt="img"/>
                            <div className="caption">
                                <h2 style={{color:"#619F00"}}>전방주시 관리</h2>
                                <p style={{fontSize:"18px", color:"black", fontWeight:"700"}}>
                                    운전점수를 통계자료로 확인하여 자신의 운전습관을  <br/>확인하고 개선할 수 있도록 돕습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1 col-md-1"></div>
                </div>
            </div>
        </section>
    );
}