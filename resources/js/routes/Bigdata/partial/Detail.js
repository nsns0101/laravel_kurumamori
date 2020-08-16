import React, { useContext } from "react";
import { BigdataContext } from "../BigdataContainer";
import {AppContext} from "../../../components/App";

import Sleep from "./chart/Sleep"
import Sudden from "./chart/Sudden";
import Accident from "./chart/Accident";
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
        age_data,
        setAge_data
    } = useContext(BigdataContext);
    // console.log(age_data);
    console.log(action);
    //제일 마지막에 렌더된 값이 있을 때
    return age_data ? (
        <section id="intro" className="section intro" style={{paddingTop:"50px", background:"white"}}>
            <div className="row justify-content-around" style={{}}>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <p style={{margin:0}}>
                                {/* {action == "sleep" ? (
                                    t("최근 7일간의 졸음운전 위치")
                                ) : action == "sudden" ? (
                                    t("최근 7일간의 급가속, 급정거 위치") 
                                ) : (
                                    t("최근 7일간의 사고 위치")
                                )} */}
                                {action == "sleep" ? (
                                    <fieldset key="1">
                                        <span className="btn_radio">{t("졸음 운전")}</span>
                                        <input type="radio" 
                                            onChange={()=> 
                                                {
                                                    setAge_data("");
                                                    setAction("sleep");
                                                }
                                            } defaultChecked
                                        />
                                        <span className="btn_radio">{t("급가속과 급감속")}</span>
                                        <input type="radio" 
                                            onChange={()=> 
                                                {
                                                    setAge_data("");
                                                    setAction("sudden");
                                                }
                                            }
                                        />
                                        <span className="btn_radio">{t("사고")}</span>
                                        <input type="radio" 
                                            onChange={()=> 
                                                {
                                                    setAge_data("");
                                                    setAction("accident");
                                                }
                                            }
                                        />
                                    </fieldset>
                                ) : action == "sudden" ? (
                                    <fieldset key="2">
                                        <span className="btn_radio">{t("졸음 운전")}</span>
                                        <input type="radio" 
                                            onChange={()=> 
                                            {
                                                setAge_data("");
                                                setAction("sleep");
                                            }
                                            } 
                                        />
                                        <span className="btn_radio">{t("급가속과 급감속")}</span>
                                        <input type="radio" 
                                            onChange={()=> 
                                                {
                                                    setAge_data("");
                                                    setAction("sudden");
                                                }
                                            } defaultChecked
                                        />
                                        <span className="btn_radio">{t("사고")}</span>
                                        <input type="radio" 
                                            onChange={()=> 
                                                {
                                                    setAge_data("");
                                                    setAction("accident");
                                                }
                                            }
                                        />
                                    </fieldset>
                                ) : (
                                    <fieldset key="3">
                                        <span className="btn_radio">{t("졸음 운전")}</span>
                                        <input type="radio" 
                                            onChange={()=> 
                                                {
                                                    setAge_data("");
                                                    setAction("sleep");
                                                }
                                            }
                                        />
                                        <span className="btn_radio">{t("급가속과 급감속")}</span>
                                        <input type="radio" 
                                            onChange={()=> 
                                                {
                                                    setAge_data("");
                                                    setAction("sudden");
                                                }
                                            }
                                        />
                                        <span className="btn_radio">{t("사고")}</span>
                                        <input type="radio" 
                                            onChange={()=> 
                                                {
                                                    setAge_data("");
                                                    setAction("accident");
                                                }
                                            } defaultChecked
                                        />
                                    </fieldset>
                                )}
                            </p>
                        </div>
                        <div>
                        {
                            action2 == "map" ? (
                                <fieldset key="1">
                                    <span className="btn_radio">Map</span>
                                    <input type="radio" onChange={()=> setAction2("map")} defaultChecked/>
                                    <span className="btn_radio">Chart</span>
                                    <input type="radio" onChange={()=> setAction2("chart")}/>
                                </fieldset>
                            ) : (
                                <fieldset key="2">
                                    <span className="btn_radio">Map</span>
                                    <input type="radio" onChange={()=> setAction2("map")}/>
                                    <span className="btn_radio">Chart</span>
                                    <input type="radio" onChange={()=> setAction2("chart")} defaultChecked/>
                                </fieldset>
                            )
                        }
                        </div>
                        <div>
                            {action2 == "chart" && age_data && (
                                <div>
                                    {action3 == "age" ? (
                                        <fieldset key="1">
                                            <span className="btn_radio">{t("연령대")}</span>
                                            <input type="radio" onChange={()=> setAction3("age")} defaultChecked/>
                                            <span className="btn_radio">{t("시간대")}</span>
                                            <input type="radio" onChange={()=> setAction3("time")}/>
                                        </fieldset>
                                    ) : (
                                        <fieldset key="2">
                                            <span className="btn_radio">{t("연령대")}</span>
                                            <input type="radio" onChange={()=> setAction3("age")}/>
                                            <span className="btn_radio">{t("시간대")}</span>
                                            <input type="radio" onChange={()=> setAction3("time")} defaultChecked/>
                                        </fieldset>
                                    )}
                                </div>
                            )}
                        </div>
                        {/* Google Map */}
                        {action2 == "map" ? (
                            <div className="card-body" style={{width:"100%", height:"500px", marginBottom:"30px"}}>
                                {/* 구글맵 */}
                                <Map_api/>
                                {action == "sleep" ? (
                                    <div style={{marginTop:"10px"}}>
                                        {/* <img src="/icon/blue_map_icon.png"/> */}
                                        <img src="/icon/map_sleep.png"/>
                                        <span>{t("졸음 구간")}</span>
                                    </div>
                                ) : action == "sudden" ? (
                                    <div style={{marginTop:"10px"}}>
                                        {/* <img src="/icon/orange_map_icon.png"/> */}
                                        <img src="/icon/map_sudden_acceleration.png"/>
                                        <span style={{marginRight:"15px"}}>{t("급가속 구간")}</span>
                                        {/* <img src="/icon/green_map_icon.png"/> */}
                                        <img src="/icon/map_sudden_stop.png"/>
                                        <span>{t("급감속 구간")}</span>
                                    </div>

                                ) : (
                                    <div style={{marginTop:"10px"}}>
                                        {/* <img src="/icon/red_map_icon.png"/> */}
                                        <img src="/icon/map_report.png"/>
                                        <span>{t("사고 구간")}</span>
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

        </section>
    ) : null
}