import React, {Fragment, useContext}from "react";
import {AppContext} from "../../components/App";
import ReactPlayer from 'react-player';
import ScrollAnimation from "react-animate-on-scroll";

export default () => {
    const {t} = useContext(AppContext);
    return (
        <Fragment>
            <div className="mt-5 pt-2">
                <div className="col-sm-12 col-lg-12 text-center d-table" style={{height: 700 + 'px'}}>
                    <div className="d-table-cell align-middle">
                        <ScrollAnimation animateIn='fadeIn' animateOnce={true}>  
                            <div className="py-2 pt-5">
                                <h4 style={{fontWeight:700}}>{t("쉽게 조작법을 익혀보세요!")}</h4>
                                <h1 style={{fontSize:3.25+'em',fontWeight:900,color:"black"}}>{t("한눈에 보는 조작법.")}</h1>
                            </div>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn='fadeIn' delay={500} animateOnce={true}>  
                            <div className="row justify-content-around px-0 mx-0 pb-5">
                                <div className="col-sm-12 col-lg-12">
                                    <img className="" src="../product/control.png" style={{width:50+'%',zIndex:100}}></img>
                                </div>
                                <div className="col-sm-12 col-lg-12">
                                    <div className="row justify-content-around px-0 mx-0 py-5 text-left">
                                        <div className="col-lg-8">
                                            <h4 style={{fontWeight:500}}>
                                                {t("이런 간단한 버튼 조작을 통해서 쉽게 クルマモリ9 서비스를 사용할 수 있습니다. 더 자세히 알고 싶다면 step별로 더 쉽게! 배우는 영상 조작법을 이용해 보는 것은 어떨까요? 여러분 모두 クルマモリ9의 전문가가 될 수 있습니다.")}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                    
                </div>
                <div className="col-sm-12 col-lg-12 text-center d-table" style={{height: 700 + 'px',backgroundColor:'#F5F5F5'}}>
                    <div className="d-table-cell align-middle">
                        <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={0.8}>  
                            <div className="py-2 pt-5">
                                <h4 className="py-1" style={{fontWeight:700}}>{t("step별로 더욱 더 쉽게!")}</h4>
                                <h1 style={{fontSize:3.25+'em',fontWeight:900}}>{t("영상으로 배우는 조작법.")}</h1>
                            </div>
                        </ScrollAnimation>
                        <div className="row justify-content-around px-0 mx-0 text-center">

                            <div className="col-lg-6">
                                <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={0.8}>  
                                    <div className="row justify-content-around px-0 mx-0 py-5 text-center">
                                        <div className="col-lg-10 py-3 text-left">
                                            <h3 style={{color:"black"}}>{t("step 1.")}</h3>
                                            <p>{t("먼저 가장 기본적인 부분부터 시작해 봐요.")}</p>
                                        </div>
                                        <div className="col-lg-10">
                                            <div className="row justify-content-around mx-0 px-0">
                                                <ReactPlayer className="col-sm-11 col-lg-11" url='https://youtu.be/9L2jYjr0dJY' width="100%"/>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                            
                            <div className="col-lg-6">
                                <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={0.8}>  
                                    <div className="row justify-content-around px-0 mx-0 py-5 text-center">
                                        <div className="col-lg-10 py-3 text-left">
                                            <h3 style={{color:"black"}}>{t("step 2.")}</h3>
                                            <p>{t("다음은 하드웨어 조작!")}</p>
                                        </div>
                                        <div className="col-lg-10">
                                            <div className="row justify-content-around mx-0 px-0">
                                                <ReactPlayer className="col-sm-11 col-lg-11" url='https://youtu.be/2XwOHNcetWg' width="100%"/>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-6">
                                <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={0.8}>  
                                    <div className="row justify-content-around px-0 mx-0 py-5 text-center">
                                        <div className="col-lg-10 py-3 text-left">
                                            <h3 style={{color:"black"}}>{t("step 3.")}</h3>
                                            <p>{t("이제 거의 당신은 クルマモリ9 마스터!")}</p>
                                        </div>
                                        <div className="col-lg-10">
                                            <div className="row justify-content-around mx-0 px-0">
                                                <ReactPlayer className="col-sm-11 col-lg-11" url='https://youtu.be/kqBoGyI1R94' width="100%"/>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            <div className="col-lg-6">
                                <ScrollAnimation animateIn='fadeInUp' animateOnce={true} duration={0.8}>  
                                    <div className="row justify-content-around px-0 mx-0 py-5 text-center">
                                        <div className="col-lg-10 py-3 text-left">
                                            <h3 style={{color:"black"}}>{t("step 4.")}</h3>
                                            <p>{t("더 알면 좋은 꿀팁들.")}</p>
                                        </div>
                                        <div className="col-lg-10">
                                            <div className="row justify-content-around mx-0 px-0">
                                                <ReactPlayer className="col-sm-11 col-lg-11" url='https://youtu.be/80K5YhHTW3s' width="100%"/>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>

                        </div>

                    </div>
                    
                </div>
            </div>
        </Fragment>
    )

}