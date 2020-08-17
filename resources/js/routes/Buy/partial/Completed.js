import React, {Fragment,useContext, useState, useEffect} from "react";
import { Route, Link, BrowserRouter} from "react-router-dom";
import {AppContext} from "../../../components/App";

export default (
    {
        product_key,
        name,
        name2,
        email,
        email2,
        phone,
        phone2,
        address,
        detail_address,
        postal
    }
    ) => {
    const {t} = useContext(AppContext);
    return (
        // css 개선 
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-sm-10 col-lg-10 text-center">
                    <div className="row justify-content-center" >
                        <div className="col-sm-12 col-lg-10 py-3">
                            <div className="pt-5 pb-3">
                                <img className="" src="/images/buy/check.png"></img>
                            </div>
                            <h4 style={{fontSize:"3em", color:"black",fontWeight:"900"}}>{t("구매해주셔서 감사합니다.")}</h4>
                        </div>
                        <div className="row justify-content-center mx-0 px-0  col-sm-7 col-lg-7 py-1 mb-4 card ">
                            <div className="row mx-0 px-0  pt-3 pl-3 d-flex flex-row align-items-center justify-content-start">
                                <p className="py-0" style={{fontSize:"1.3em", color:"black"}}>{t("구매자 정보")}</p>
                            </div>
                            <div className="row mx-0 my-0 px-0  pt-1 pl-3 d-flex flex-row align-items-center justify-content-start">
                                <p className="py-0 my-0 pr-3" style={{fontSize:"1.3em", color:"black"}}>{t("이름")}</p>
                                <p className="py-0 my-0 pr-5" style={{fontSize:"1.1em", color:"#34394D"}}>{name}</p>
                            </div>
                            <div className="row mx-0 my-0 px-0 pt-1 pl-3 d-flex flex-row align-items-center justify-content-start">
                                <p className="py-0 my-0 pr-3" style={{fontSize:"1.3em", color:"black"}}>{t("이메일")}</p>
                                <p className="py-0 my-0 pr-5" style={{fontSize:"1.1em", color:"#34394D"}}>{email}</p>
                                <p className="py-0 my-0 pr-3" style={{fontSize:"1.3em", color:"black"}}>{t("전화번호")}</p>
                                <p className="py-0 my-0 pr-5" style={{fontSize:"1.1em", color:"#34394D"}}>{phone}</p>
                            </div>

                            <div className="row mx-0 px-0  pt-3 pl-3 d-flex flex-row align-items-center justify-content-start">
                                <p className="py-0" style={{fontSize:"1.3em", color:"black"}}>{t("수령인 정보")}</p>
                            </div>
                            <div className="row mx-0 my-0 px-0  pt-1 pl-3 d-flex flex-row align-items-center justify-content-start">
                                <p className="py-0 my-0 pr-3" style={{fontSize:"1.3em", color:"black"}}>{t("이름")}</p>
                                <p className="py-0 my-0 pr-5" style={{fontSize:"1.1em", color:"#34394D"}}>{name2}</p>
                            </div>
                            <div className="row mx-0 my-0 px-0 pt-1 pl-3 d-flex flex-row align-items-center justify-content-start">
                                <p className="py-0 my-0 pr-3" style={{fontSize:"1.3em", color:"black"}}>{t("이메일")}</p>
                                <p className="py-0 my-0 pr-5" style={{fontSize:"1.1em", color:"#34394D"}}>{email2}</p>
                                <p className="py-0 my-0 pr-3" style={{fontSize:"1.3em", color:"black"}}>{t("전화번호")}</p>
                                <p className="py-0 my-0 pr-5" style={{fontSize:"1.1em", color:"#34394D"}}>{phone2}</p>
                            </div>

                            <div className="row mx-0 px-0  pt-3 pl-3 d-flex flex-row align-items-center justify-content-start">
                                <p className="py-0" style={{fontSize:"1.3em", color:"black"}}>{t("배송 주소")}</p>
                            </div>
                            <div className="row mx-0 my-0 px-0 pt-1 pl-3 d-flex flex-row align-items-center justify-content-start">
                                <p className="py-0 my-0 pr-3" style={{fontSize:"1.3em", color:"black"}}>{t("수령장소")}</p>
                                <p className="py-0 my-0 pr-5" style={{fontSize:"1.1em", color:"#34394D"}}>{address} {detail_address}</p>
                            </div>
                            <div className="row mx-0 my-0 px-0 pt-1 pl-3 d-flex flex-row align-items-center justify-content-start">
                                <p className="py-0 my-0 pr-3" style={{fontSize:"1.3em", color:"black"}}>{t("우편번호")}</p>
                                <p className="py-0 my-0 pr-5" style={{fontSize:"1.1em", color:"#34394D"}}>{postal}</p>
                            </div>
                        </div>

                        <div className="col-sm-12 col-lg-10">
                            <div className="pt-4">
                                <p style={{fontSize:1.75+"em"}}>{t("クルマモリ9 사용을 위해서 아래 두가지 사항을 미리 준비해주세요!")}</p>
                            </div>
                        </div>

                        <div className="row justify-content-center mx-0 px-0  col-sm-7 col-lg-7 py-1 mb-4 card ">
                            <div className="row mx-0 px-0  pt-3 pl-3 d-flex flex-row align-items-center justify-content-center">
                                <p className="py-0" style={{fontSize:"1.3em", color:"black"}}>01.</p>
                                <p className="py-0" style={{fontSize:"1.1em", color:"#34394D"}}>{t("제품 등록 및 의료정보 등록하기")}</p>
                            </div>
                            <div className="row mx-0 justify-content-around pb-3" >
                                <div className="col-sm-12 col-lg-12">
                                    <div className="py-1" style={{fontSize:1+"em", color:"black"}}>{t("구매한 제품 코드")}</div>
                                    <div className="py-1" style={{fontSize:1.2+"em", color:"black"}}>{product_key}</div>
                                </div>
                                <div className="btn btn-dark text-center"                                 
                                style={{ 
                                alignItems: "center",
                                justifyContent: "center",
                                }}
                                >
                                    <Link to="/info/index" className="nav-link" style={{fontSize:1.2+"em",color:"white"}}>{t("제품 등록하러 가기")}</Link> 
                                </div>
                            </div>
                                                        
                            <div className="row mx-0 px-0 pt-3 pl-3 d-flex flex-row align-items-center justify-content-center">
                                <p className="py-0" style={{fontSize:"1.3em", color:"black"}}>02.</p>
                                <p className="py-0" style={{fontSize:"1.1em", color:"#34394D"}}>{t("스마트폰 앱스토어에서 쿠루마모리 앱 설치 하기")}</p>
                            </div>
                            <div className="row mx-0 px-0 justify-content-center pb-3" >
                                <div className="col-sm-12 col-lg-3 px-3">
                                    <img className="" src="/images/buy/appstore.png" style={{width:100+'%',zIndex:100}}></img>
                                </div>
                                <div className="col-sm-12 col-lg-3 px-3">
                                    <img className="" src="/images/buy/playstore.png" style={{width:100+'%',zIndex:100}}></img>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )

}