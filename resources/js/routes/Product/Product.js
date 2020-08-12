import React, {Fragment, useContext}from "react";
import {AppContext} from "../../components/App";
import { Route, Link, BrowserRouter} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

export default () => {
    const {t} = useContext(AppContext);
    return (
        <Fragment>
            <div id="product">
                <div className="col-sm-12 col-lg-12 text-center d-table" style={{height: 100 + 'vh',backgroundColor: 'black'}}>
                    <div className="d-table-cell align-middle">
                        <div className="my-4 row px-0 mx-0 justify-content-center ">
                            <div classNmae="col-sm-8 col-lg-4" >
                                <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                    {/* <img src="images/product/logo.png" style={{width:100+'%',zIndex:100}}></img> */}
                                    <h4 className="" style={{fontSize:5+"em",color:"white"}}>{t("クルマモリ9")}</h4> 
                                </ScrollAnimation>
                            </div>
                        </div>
                        <div className="my-2">
                            <ScrollAnimation animateIn='fadeIn' delay={500} animateOnce={true}>
                                <p className="" style={{fontSize:2.25+"em",color:"white"}}>{t("내 차가 사고를 스스로 예방하고 사고를 스스로 신고한다!")}</p>
                                <h4 className="" style={{fontSize:1.7+"em",color:"white"}}>{t("가격미정")}</h4> 
                            </ScrollAnimation>
                        </div>
                        <div className="my-2 row pt-4 px-0 mx-0 justify-content-center" >

                                <span className="px-4">
                                    <ScrollAnimation animateIn='fadeInRight' delay={500} animateOnce={true}>
                                        <Link to="/products/more" id="more" style={{fontSize:1.4+"em",color:"blue",fontWeight:900,textDecoration:"none"}} onClick={()=>{window.scrollTo(0, 0)}} >{t("더 알아보기 >")}</Link>
                                    </ScrollAnimation>
                                </span>
                    
                                <span className="px-4">
                                    <ScrollAnimation animateIn='fadeInLeft' delay={500} animateOnce={true}>
                                        <Link to="/products/buy" id="buy" style={{fontSize:1.4+"em",color:"blue",fontWeight:900,textDecoration:"none"}} onClick={()=>{window.scrollTo(0, 0)}}>{t("구입하기 >")}</Link>
                                    </ScrollAnimation>
                                </span>
                        </div>
                        <br/>
                        <div className="my-2 row px-0 mx-0 justify-content-center ">
                            <div className="col-sm-8 col-lg-4">
                                <ScrollAnimation animateIn='zoomIn' delay={500} animateOnce={true}>
                                    <img src="images/product/product.png" style={{width:100+'%',zIndex:100}}></img>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>

                {/* css 조정 필요 */}
                <div className="row col-sm-12 col-lg-12 justify-content-around px-0 mx-0" style={{backgroundColor:"#F5F5F5"}}>
                    <div className="row col-sm-10 col-lg-10 justify-content-around px-0 mx-0">
                        
                        {/* css 조정 필요 */}
                        <div className=" col-sm-12 col-lg-5 mx-0 py-5 " style={{padding:10+'px'}}>
                            <ScrollAnimation animateIn='zoomIn' animateOnce={true} duration={0.8}>
                                <div>
                                    <img className="card-img" src="images/product/background.png" style={{width:100+'%',height: 450 + 'px'}}></img>
                                    <div className="text-center card-img-overlay" style={{width:100+'%',top:"20%"}}>
                                        <div className="py-2 pt-5">
                                            <h2 className="card-title" style={{color:"white", fontSize:"2.2em",fontWeight:"900",textShadow:"black 2px 0 10px"}}>{t("쉽게 배우는 조작 방법")}</h2>
                                            <p className="card-text" style={{color:"white", fontSize:"1.25em",fontWeight:"700",textShadow:"black 2px 0 10px"}}>{t("クルマモリ9의 조작방법을 알려드립니다.")}</p>
                                        </div>
                                        <div className="text-center">
                                            <Link to="/products/control" id="control" className="btn card-text" style={{color:"blue", fontSize:"1.1em",fontWeight:900, backgroundColor:"white"}} onClick={()=>{window.scrollTo(0, 0)}}>{t("손쉬운 사용 기능 살펴보기 >")}</Link>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* css 조정 필요 */}
                        <div className="col-sm-12 col-lg-5 mx-0 py-5" style={{padding:10+'px'}}>
                            <ScrollAnimation animateIn='zoomIn' animateOnce={true} duration={0.8}>
                                <div>
                                    <img className="card-img" src="images/product/background.png" style={{width:100+'%',height: 450 + 'px'}}></img>
                                    <div className="text-center card-img-overlay" style={{width:100+'%',top:"20%"}}>
                                        <div className="py-2 pt-5">
                                            <h2 className="card-title" style={{color:"white", fontSize:"2.2em",fontWeight:"900",textShadow:"black 2px 0 10px"}}>{t("사용자 영상")}</h2>
                                            <p className="card-text" style={{color:"white", fontSize:"1.25em",fontWeight:"700",textShadow:"black 2px 0 10px"}}>{t("クルマモリ9의 실제 사용자 영상입니다.")}</p>
                                        </div>
                                        <div className="text-center">
                                            <Link to="/products/users" id="users" className="btn card-text" style={{color:"blue", fontSize:"1.1em",fontWeight:900, backgroundColor:"white"}} onClick={()=>{window.scrollTo(0, 0)}}>{t("실제 사용자 영상 보러가기 >")}</Link>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                    </div>

                    {/* 삭제 예정 */}
                    {/* <div className="col-sm-12 col-lg-6 mx-0" style={{padding:10+'px'}}>
                        <div className="text-center" style={{width:100+'%',height: 450 + 'px',backgroundColor: '#000000'}}>
                            <form className="py-2 pt-5">
                                <h2 className="text-white">사용자 일반 리뷰</h2>
                                <p className="text-white">KURUMAMORI 119의 리뷰를 확인하세요.</p>
                            </form>
                            <div>
                                <Link to="/board" id="users" className="btn btn-intro text-white" >실제 사용자 리뷰 보러가기 ></Link>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-sm-12 col-lg-6" style={{padding:10+'px'}}>
                        <div className="text-center" style={{width:100+'%',height: 450 + 'px',backgroundColor: '#000000'}}>
                            <form className="py-2 pt-5">
                                <h2 className="text-white">KURUMAMORI 119 공식 YouTube 채널</h2>
                                <p className="text-white">KURUMAMORI 119의 모든 것들</p>
                            </form>
                            <div>
                                <a href="https://www.youtube.com/channel/UCTLr43DTgWut2lSQ2vFcXAw?view_as=subscriber" className="btn btn-intro text-white">YouTube 바로가기 ></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Fragment>
    )
}