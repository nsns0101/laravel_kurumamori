import React from "react";

export default () => {
    return (
        <section id="intro" className="section intro">
            <div className="rows"  id="function2">
                <div className="col-md-12 col-md-offset-2 text-center">
                    <h3>くるまもり9팀 소개</h3>
                    <p>소개 메인</p>
                </div>
                <div className="row">
                    {/* 사람 소개  */}
                    <div className="col-sm-3 col-md-3 text-center"></div>
                    <div className="col-sm-3 col-md-2 text-center">
                        <div className="thumbnail">
                            <img src="/images/team/정인식.jpg" alt="img" style={{width:"90%", height:"300px"}}/>
                            <div className="caption">
                                <h3>정인식</h3>
                            </div>
                        </div>
                    {/* 사람 소개  */}
                    </div><div className="col-sm-3 col-md-2 text-center">
                        <div className="thumbnail">
                            <img src="/images/team/팽진솔.jpg" alt="img" style={{width:"90%", height:"300px"}}/>
                            <div className="caption">
                                <h3>팽진솔</h3>
                            </div>
                        </div>
                    {/* 사람 소개  */}
                    </div><div className="col-sm-3 col-md-2 text-center">
                        <div className="thumbnail">
                            <img src="/images/team/이재영.jpg" alt="img" style={{width:"90%", height:"300px"}}/>
                            <div className="caption">
                                <h3>이재영</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 text-center"></div>
                    <div className="col-sm-3 col-md-3 text-center"></div>
                    {/* 사람 소개  */}
                    <div className="col-sm-3 col-md-2 text-center">
                        <div className="thumbnail">
                            <img src="/images/team/예준현.jpg" alt="img" style={{width:"90%", height:"300px"}}/>
                            <div className="caption">
                                <h3>예준현</h3>
                            </div>
                        </div>
                    {/* 사람 소개  */}
                    </div><div className="col-sm-3 col-md-2 text-center">
                        <div className="thumbnail">
                            <img src="/images/team/장준혁.jpg" alt="img" style={{width:"90%", height:"300px"}}/>
                            <div className="caption">
                                <h3>장준혁</h3>
                            </div>
                        </div>
                    {/* 사람 소개  */}
                    </div><div className="col-sm-3 col-md-2 text-center">
                        <div className="thumbnail">
                            <img src="/images/team/김도형.jpg" alt="img" style={{width:"90%", height:"300px"}}/>
                            <div className="caption">
                                <h3>김도형</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 col-md-3 text-center"></div>
                </div>
            </div>
        </section>
    );
}