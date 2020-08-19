import React, { useContext } from "react";
import { BigdataContext } from "../BigdataContainer";
import {AppContext} from "../../../components/App";

import Sleep from "./chart/Sleep"
import Sudden from "./chart/Sudden";
import Accident from "./chart/Accident";
import Card from "./Card.js";

import {Map_api} from "./google_map/Map_api.js";


export default () => {
    const { t } = useContext(AppContext);

    const {
        action,
        setAction,
        action2,
        setAction2,
        action3,
        setAction3,
        age_data
    } = useContext(BigdataContext);
    // console.log(age_data);
    console.log(action);
    //제일 마지막에 렌더된 값이 있을 때
    return age_data ? (
        <section id="intro" className="section intro" style={{paddingTop:"50px", background:"white"}}>
            <div className="row justify-content-around" style={{}}>
                <div className="col-md-8" style={{marginBottom:"30px"}}>
                    <Card/>
                </div>
                <div className="col-md-8">
                    <div className="card" style={{marginBottom:"150px", minHeight:"500px"}}>
                        <div className="card-header" style={{paddingLeft:0}}>
                            {action == "sleep" ? (
                                <fieldset key="1">
                                    <span className="bigdata_btn_radio">{t("졸음 운전")}</span>
                                    <input type="radio" onChange={()=> setAction("sleep")} defaultChecked/>
                                    <span className="bigdata_btn_radio">{t("급가속과 급감속")}</span>
                                    <input type="radio" onChange={()=> setAction("sudden")}/>
                                    <span className="bigdata_btn_radio">{t("사고")}</span>
                                    <input type="radio" onChange={()=> setAction("accident")}/>
                                </fieldset>
                            ) : action == "sudden" ? (
                                <fieldset key="2">
                                    <span className="bigdata_btn_radio">{t("졸음 운전")}</span>
                                    <input type="radio" onChange={()=> setAction("sleep")} />
                                    <span className="bigdata_btn_radio">{t("급가속과 급감속")}</span>
                                    <input type="radio" onChange={()=> setAction("sudden")} defaultChecked/>
                                    <span className="bigdata_btn_radio">{t("사고")}</span>
                                    <input type="radio" onChange={()=> setAction("accident")}/>
                                </fieldset>
                            ) : (
                                <fieldset key="3">
                                    <span className="bigdata_btn_radio">{t("졸음 운전")}</span>
                                    <input type="radio" onChange={()=> setAction("sleep")}/>
                                    <span className="bigdata_btn_radio">{t("급가속과 급감속")}</span>
                                    <input type="radio" onChange={()=> setAction("sudden")}/>
                                    <span className="bigdata_btn_radio">{t("사고")}</span>
                                    <input type="radio" onChange={()=> setAction("accident")} defaultChecked/>
                                </fieldset>
                            )}
                        </div>
                        <div>
                        {
                            action2 == "map" ? (
                                <fieldset key="1">
                                    <span className="bigdata_btn_radio">Map</span>
                                    <input type="radio" onChange={()=> setAction2("map")} defaultChecked/>
                                    <span className="bigdata_btn_radio">Chart</span>
                                    <input type="radio" onChange={()=> setAction2("chart")}/>
                                </fieldset>
                            ) : (
                                <fieldset key="2">
                                    <span className="bigdata_btn_radio">Map</span>
                                    <input type="radio" onChange={()=> setAction2("map")}/>
                                    <span className="bigdata_btn_radio">Chart</span>
                                    <input type="radio" onChange={()=> setAction2("chart")} defaultChecked/>
                                </fieldset>
                            )
                        }
                        </div>
                        <div style={{marginRight:"10px"}}>
                            {action2 == "chart" && (
                                <div className="text-right">
                                    {action3 == "age" ? (
                                        <fieldset key="1">
                                            <span className="bigdata_btn_radio">{t("연령대")}</span>
                                            <input type="radio" onChange={()=> setAction3("age")} defaultChecked/>
                                            <span className="bigdata_btn_radio">{t("시간대")}</span>
                                            <input type="radio" onChange={()=> setAction3("time")}/>
                                        </fieldset>
                                    ) : (
                                        <fieldset key="2">
                                            <span className="bigdata_btn_radio">{t("연령대")}</span>
                                            <input type="radio" onChange={()=> setAction3("age")}/>
                                            <span className="bigdata_btn_radio">{t("시간대")}</span>
                                            <input type="radio" onChange={()=> setAction3("time")} defaultChecked/>
                                        </fieldset>
                                    )}
                                </div>
                            )}
                        </div>
                        <div style={{maxHeight:"530px", overflowY:"auto"}}>
                            {/* Google Map */}
                            {action2 == "map" ? (
                                <div className="card-body card_map">
                                    {/* 구글맵 */}
                                    <p className="bigdata_title_p">
                                        {action == "sleep" ? (
                                            t("최근 7일간의 졸음운전 위치")
                                        ) : action == "sudden" ? (
                                            t("최근 7일간의 급가속, 급정거 위치")
                                        ) : (
                                            t("최근 7일간의 사고 위치")
                                        )}
                                    </p>
                                    <div className="bigdata_google_map">
                                        <Map_api/>
                                    </div>
                                    {action == "sleep" ? (
                                        <div style={{marginTop:"10px", marginLeft:"5%"}}>
                                            {/* <img src="/icon/blue_map_icon.png"/> */}
                                            <img src="/icon/map_sleep.png"/>
                                            <span className="bigdata_google_map_span" >{t("졸음 구간")}</span>
                                        </div>
                                    ) : action == "sudden" ? (
                                        <div style={{marginTop:"10px", marginLeft:"5%"}}>
                                            {/* <img src="/icon/orange_map_icon.png"/> */}
                                            <img src="/icon/map_sudden_acceleration.png"/>
                                            <span  className="bigdata_google_map_span" style={{marginRight:"15px"}}>{t("급가속 구간")}</span>
                                            {/* <img src="/icon/green_map_icon.png"/> */}
                                            <img src="/icon/map_sudden_stop.png"/>
                                            <span className="bigdata_google_map_span" >{t("급감속 구간")}</span>
                                        </div>

                                    ) : (
                                        <div style={{marginTop:"10px", marginLeft:"5%"}}>
                                            {/* <img src="/icon/red_map_icon.png"/> */}
                                            <img src="/icon/map_report.png"/>
                                            <span className="bigdata_google_map_span" >{t("사고 구간")}</span>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                // Chart
                                <div>
                                {
                                    action == "sleep" ? (
                                        <Sleep/>
                                    ) : action == "sudden" ? (
                                        <Sudden/>
                                    ) : (
                                        <Accident/>
                                    )
                                }
                                </div>
                                
                            )}
                        </div>
                    </div>
                </div>
                
            </div>

        </section>
    ) : null
}