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
        local,
        address,
        detail_address,
        postal,
        user
    }
    ) => {
    const {t} = useContext(AppContext);
    return (
        // css 개선 
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-sm-10 col-lg-10 text-center">
                    <div className="row justify-content-center pb-5" >
                        <div className="col-sm-12 col-lg-10 py-3">
                            <div className="pt-5 pb-3">
                                <img className="" src="/images/buy/check.png"></img>
                            </div>
                            <h4 style={{fontSize:"3em", color:"black",fontWeight:"900"}}>{t("구매해주셔서 감사합니다.")}</h4>
                            <h4 style={{fontSize:"1.5em",fontWeight:"900"}}>{user.name}{t("님의 구매 내역입니다.")}</h4>
                        </div>
                        <div className="row justify-content-center mx-0 px-0 py-1 mb-2">
                            <table className="table col-sm-12 col-lg-12">
                                <thead  className="mx-2 my-2">
                                    <tr>
                                        <th scope="col">{t("구매자 정보")}</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody className="mx-2 my-2">
                                    <tr>
                                        <th scope="row">{t("이름")}</th>
                                        <td>{name}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">{t("이메일")}</th>
                                        <td>{email}</td>
                                        <td>{t("전화번호")}</td>
                                        <td>{phone}</td>
                                    </tr>
                                </tbody>

                                <thead>
                                    <tr>    
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <thead  className="mx-2 my-2 pt-1">
                                    <tr>
                                        <th scope="col">{t("수령인 정보")}</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody className="mx-2 my-2">
                                    <tr>
                                        <th scope="row">{t("이름")}</th>
                                        <td>{name2}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">{t("이메일")}</th>
                                        <td>{email2}</td>
                                        <td>{t("전화번호")}</td>
                                        <td>{phone2}</td>
                                    </tr>
                                </tbody>

                                <thead>
                                    <tr>    
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <thead  className="mx-2 my-2 pt-1">
                                    <tr>
                                        <th scope="col">{t("배송 주소")}</th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody className="mx-2 my-2">
                                    <tr>
                                        <th scope="row">{t("수령장소")}</th>
                                        <td> {local} {address} {detail_address}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">{t("우편번호")}</th>
                                        <td>{postal}</td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="col-sm-12 col-lg-10">
                            <div className="pt-2">
                                <div className="pt-5 pb-3">
                                    <img className="" src="/images/buy/check2.png"></img>
                                </div>
                                <p style={{fontSize:"2.7em", color:"black",fontWeight:"900"}}>{t("クルマモリ9 사용을 위해서 미리 준비해주세요!")}</p>
                                
                            </div>
                        </div>

                        <div className="row justify-content-center mx-0 px-0  col-sm-7 col-lg-7 py-1 mb-4 card ">
                            <div className="row mx-0 px-0  pt-3 pl-3 d-flex flex-row align-items-center justify-content-center">
                                <p className="py-0" style={{fontSize:"1.3em", color:"black",fontWeight:800}}>01.</p>
                                <p className="py-0" style={{fontSize:"1.1em", color:"#34394D",fontWeight:800}}>{t("제품 등록 및 의료정보 등록하기")}</p>
                            </div>
                            <div className="row mx-0 justify-content-around pb-3" >
                                <div className="col-sm-12 col-lg-12">
                                    <div className="py-1" style={{fontSize:1+"em", color:"black"}}>{t("구매한 제품 코드")}</div>
                                    <div className="py-1" style={{fontSize:1.2+"em", color:"black"}}>{product_key}</div>
                                </div>
                                <div className="btn btn-primary text-center"                                 
                                style={{ 
                                alignItems: "center",
                                justifyContent: "center",
                                }}
                                >
                                    <Link to="/info/index" className="nav-link py-0 my-0" style={{fontSize:1.2+"em",color:"white"}}>{t("제품 등록하러 가기")}</Link> 
                                </div>
                            </div>
                                                        
                            <div className="row mx-0 px-0 pt-3 pl-3 d-flex flex-row align-items-center justify-content-center">
                                <p className="py-0" style={{fontSize:"1.3em", color:"black", fontWeight:800}}>02.</p>
                                <p className="py-0" style={{fontSize:"1.1em", color:"#34394D", fontWeight:800}}>{t("스마트폰 앱스토어에서 쿠루마모리 앱 설치 하기")}</p>
                            </div>
                            <div className="row mx-0 px-0 justify-content-center pb-5 mb-3" >
                                <div className="col-sm-12 col-lg-3 px-3">
                                    <img className="" src="/images/buy/appstore.png" style={{width:100+'%',zIndex:100}}></img>
                                </div>
                                <div className="col-sm-12 col-lg-3 px-3 pb-3">
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