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
        age_data
    } = useContext(BigdataContext);
    // console.log(age_data);
    // console.log(action);
    //제일 마지막에 렌더된 값이 있을 때
    return age_data ? (
        <section id="intro" className="section intro" style={{paddingTop:"50px", background:"#F0F0F0"}}>
            <div className="container px-3 py-5 p-md-5">
                <div className="card">
                    <div className="card-header">
                        <p style={{margin:0}}>
                            {action == "sleep" ? (
                                t("최근 7일간의 졸음운전 위치")
                            ) : action == "sudden" ? (
                                t("최근 7일간의 급가속, 급정거 위치") 
                            ) : (
                                t("최근 7일간의 사고 위치")
                            )}
                        </p>
                    </div>
                    <div className="card-body" style={{width:"100%", height:"500px", marginBottom:"30px"}}>
                        {/* 구글맵 */}
                        <Map_api/>

                        {action == "sleep" ? (
                            <div style={{marginTop:"10px"}}>
                                <img src="/icon/blue_map_icon.png"/>
                                <span>{t("졸음 구간")}</span>
                            </div>
                        ) : action == "sudden" ? (
                            <div style={{marginTop:"10px"}}>
                                <img src="/icon/orange_map_icon.png"/>
                                <span style={{marginRight:"15px"}}>{t("급가속 구간")}</span>
                                <img src="/icon/green_map_icon.png"/>
                                <span>{t("급감속 구간")}</span>
                            </div>

                        ) : (
                            <div style={{marginTop:"10px"}}>
                                <img src="/icon/red_map_icon.png"/>
                                <span>{t("사고 구간")}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* 차트 */}
            {
                action == "sleep" 
                ? <Sleep/> 
                : action == "sudden" 
                ? <Sudden/>
                : <Accident/>
            }
        </section>
    ) : null
}