import React, {useContext} from "react";
import {AppContext} from "../../../components/App";
import { DriveContext } from "../DriveContainer";
import { MDBContainer } from "mdbreact"
import LineChart from "./chart/LineChart";
// import BarChart from "./chart/BarChart";
import DoughnutChart from "./chart/DoughnutChart";
export default () => {

    const { t } = useContext(AppContext);

    // const {
    //     score,
    //     day_5_danger_count,
    //     drive_info,
    //     reports,
    //     day_5_drive_detection,
    // } = useContext(DriveContext);

    return  (
        <div className="row justify-content-around" style={{marginTop:"15px"}}>

            {/* Area Chart */}
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
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

            {/* Dounhnut Chart */}
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