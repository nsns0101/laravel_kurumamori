import React, {useContext} from "react";
import {AppContext} from "../../../components/App";
import { DriveContext } from "../DriveContainer";
import {Map_api} from "./google_map/Map_api.js"
import ScrollAnimation from "react-animate-on-scroll";

export default () => {
    const { t } = useContext(AppContext);

    const {
        score,
        day_5_danger_count,
        drive_info,
        reports,
        day_5_drive_detection,
    } = useContext(DriveContext);
    // console.log(day_5_drive_detection);
    const drive_text = {
        fontSize:"1.5em",
        color:"#5A5C69"
    }
    return (
        // 구글맵     
        <div className="row">
            <div className="google_map">
                <Map_api/>
            </div>
            <hr/>
            <div className="row">
                <div className="col-md-6">
                    <img className="google_map_img" src="/icon/map_sudden_acceleration.png"/>
                    <span className="google_map_span">{t("급가속 구간")}</span>
                </div>
                <div className="col-md-6">
                    <img className="google_map_img" src="/icon/map_sudden_stop.png"/>
                    <span className="google_map_span">{t("급감속 구간")}</span>
                </div>
                <div className="col-md-6">
                    <img className="google_map_img" src="/icon/map_sleep.png"/>
                    <span className="google_map_span">{t("졸음 구간")}</span>
                </div>
                <div className="col-md-6">
                    <img className="google_map_img" src="/icon/map_report.png"/>
                    <span className="google_map_span">{t("사고 구간")}</span>
                </div>
            </div>
        </div>
    )
}