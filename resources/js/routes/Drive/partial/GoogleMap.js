import React, {useContext} from "react";
import { DriveContext } from "../DriveContainer";
import {Map_api} from "./google_map/Map_api.js"
export default () => {
    const {
        score,
        day_5_danger_count,
        drive_info,
        reports,
        day_5_drive_detection
    } = useContext(DriveContext);
    // console.log(day_5_drive_detection);

    return (
        // 구글맵, 오늘의 운전점수
        <div className="row">
            <div className="col-xl-11 col-lg-11 col-md-11">
                <div className="card shadow" >
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">오늘의 운전점수</h6>
                    </div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="card-body">
                                <div className="col-xl-12 col-lg-12 col-md-12" style={{width:"100%", height:"500px"}}>
                                    {/* 구글맵 */}
                                    {/* <div id="map" style={{width:"100%", height:"500px"}}></div> */}
                                    <Map_api/>
                                </div>
                            </div> 
                    
                        </div>
                        <div className="col-sm-1 col-md-1"></div>

                        {/* 오늘의 운전점수 */}
                        <div className="col-sm-4 col-md-4">
                            <div className="thumbnail">
                                <div className="caption">
                                    <p>총 운전 점수 : {score[0]}점</p>
                                    <p>졸음 횟수 : {day_5_danger_count[0].count_sleep}회</p>
                                    <p>급 가속 횟수 : {day_5_danger_count[0].count_sudden_acceleration}회</p>
                                    <p>급 감속 횟수 : {day_5_danger_count[0].count_sudden_stop}회</p>
                                    <p>사고 : {day_5_danger_count[0].count_report}건</p>
                                    {/* 당일 사고정보 */}
                                    {reports.length ? (
                                        reports.map( (value, index) => {
                                            return (
                                                <p key={index} className="gps">
                                                {/* 사고 장소{index+1} : {gps[index]} */}
                                                사고 장소{index+1} : {reports[index]}
                                                </p>                                     
                                            )
                                        })
                                    ) : (
                                        <p>사고 여부 : 없음</p>
                                    )}

                                    {drive_info.map( (value, index) => {
                                        <p key={index}>
                                            운전 시간 : {drive_info[index].created_at} ~ {drive_info[index].updated_at}
                                        </p>
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <hr/>
                            <div className="col-xl-11 col-lg-11 col-md-11">
                                <img src="/icon/orange_map_icon.png"/>급가속 구간
                                <img src="/icon/green_map_icon.png"/>급감속 구간
                                <img src="/icon/blue_map_icon.png"/>졸음 구간
                                <img src="/icon/red_map_icon.png"/>신고 구간
                            </div>             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}