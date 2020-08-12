import React, {useContext} from "react";
import {AppContext} from "../../../components/App";
import { DriveContext } from "../DriveContainer";
import { MDBContainer } from "mdbreact"
import LineChart from "./chart/LineChart";
import BarChart from "./chart/BarChart";
import DoughnutChart from "./chart/DoughnutChart";
export default () => {
    // var a = CanvasJSReact.CanvasJSChart;
    // console.log(LineChart);
    // console.log(DoughnutChart);
    const { t } = useContext(AppContext);

    const {
        score,
        day_5_danger_count,
        drive_info,
        reports,
        day_5_drive_detection,
    } = useContext(DriveContext);

    return  (
        <div className="row justify-content-around">
            {/* 위험 운전 횟수 */}
            <div className="col-xl-5 col-lg-5 col-md-12">
                <div className="card chart_card">
                    <h6 className="chart_card_p">{t("오늘의 운전")}</h6>
                    <div className="row">
                        <img src="/icon/막대 기호.png" style={{height:"20px", margin:"0 20px 0 10px"}}/>
                        <p className="drive_today_p">{t("총 운전 점수")} : {(score[0] + score[1] + score[2] + score[3]) / score.length}{t("점")}</p>
                    </div>
                    <div className="row">
                        <img src="/icon/막대 기호.png" style={{height:"20px", margin:"0 20px 0 10px", visibility:"hidden"}}/>
                        <p className="drive_today_p">{t("급 가속 횟수")} : {day_5_danger_count[0].count_sudden_acceleration}{t("회")}</p>
                    </div>
                    <div className="row">
                        <img src="/icon/막대 기호.png" style={{height:"20px", margin:"0 20px 0 10px", visibility:"hidden"}}/>
                        <p className="drive_today_p">{t("급 감속 횟수")} : {day_5_danger_count[0].count_sudden_stop}{t("회")}</p>
                    </div>
                    <div className="row">
                        <img src="/icon/막대 기호.png" style={{height:"20px", margin:"0 20px 0 10px", visibility:"hidden"}}/>
                        <p className="drive_today_p">{t("졸음 횟수")} : {day_5_danger_count[0].count_sleep}{t("회")}</p>
                    </div>
                    <div className="row">
                        <img src="/icon/막대 기호.png" style={{height:"20px", margin:"0 20px 0 10px", visibility:"hidden"}}/>
                        <p className="drive_today_p">{t("사고")} : {day_5_danger_count[0].count_report}{t("건")}</p>                    
                    </div>
                </div>
            </div>
            {/* Area Chart */}
            <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                    <div className="card chart_card">
                        <h6 className="m-0 font-weight-bold text-primary">{t("최근 5일간 위험요소 카운트")}</h6>
                        <div className="chart-area">
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div className=""></div>
                                </div>
                            </div>
                            <MDBContainer>
                                <LineChart/>
                            </MDBContainer>
                        </div>
                    </div>
            </div>
            {/* Area Chart */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="card chart_card">
                        <h6 className="m-0 font-weight-bold text-primary">{t("최근 5일간 운전량")}</h6>
                        <div className="chart-area">
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div className=""></div>
                                </div>
                            </div>
                            <MDBContainer style={{padding:0}}>
                                <BarChart/>
                            </MDBContainer>
                        </div>
                    </div>
            </div>
            {/* Area Chart */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="card chart_card">
                        <h6 className="m-0 font-weight-bold text-primary">{t("최근 5일간 위험요소 빈도")}</h6>
                        <div className="chart-area">
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div className=""></div>
                                </div>
                            </div>
                            <MDBContainer>
                                <DoughnutChart/>
                            </MDBContainer>
                        </div>
                    </div>
            </div>
        </div>
    )
}