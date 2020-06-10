import React, {useContext} from "react";
import { MDBContainer } from "mdbreact"
import LineChart from "./chart/LineChart";
import BarChart from "./chart/BarChart";
import DoughnutChart from "./chart/DoughnutChart";
export default () => {
    // var a = CanvasJSReact.CanvasJSChart;
    // console.log(LineChart);
    // console.log(DoughnutChart);
    return  (
        <div className="row">
            {/* Area Chart */}
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="card shadow" >
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">최근 5일의 위험요소 카운트</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-area">
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div className=""></div>
                                </div>
                            </div>
                            {/* <canvas id="myAreaChart" width="693" height="320" className="chartjs-render-monitor"
                                style={{display: "block", width:"693px", height:"320px"}}></canvas> */}
                            <MDBContainer>
                                <LineChart/>
                            </MDBContainer>
                        </div>
                        <hr/>
                        <p style={{fontSize:"15px"}}>최근 5일간의 급가속, 급감속, 졸음, 신고 값을 나타낸 그래프입니다.</p>
                    </div>
                </div>
            </div>
            {/* Bar Chart */}
            <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="card shadow" >
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">최근 5일의 운전량</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-bar">
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div className=""></div>
                                </div>
                            </div>
                            <MDBContainer>
                                <BarChart/>
                            </MDBContainer>
                        </div>
                        <hr/>
                        <p>최근 5일간의 운전 시간을 나타낸 그래프입니다.</p>
                    </div>
                </div>
            </div>
            {/* <Donut Chart */}
            <div className="col-xl-3 col-lg-3 col-md-3">
                <div className="card shadow">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">최근 5일동안 위험요소 빈도</h6>
                    </div>
                    <div className="card-body">
                        <div className="chart-pie pt-4">
                            <div className="chartjs-size-monitor">
                                <div className="chartjs-size-monitor-expand">
                                    <div className=""></div>
                                </div>
                                <div className="chartjs-size-monitor-shrink">
                                    <div className=""></div>
                                </div>
                            </div>
                            {/* <div id="myPieChart" style={{height:"320px", width:"100%"}}></div> */}
                                {/* <DoughnutChart/> */}
                            <MDBContainer>
                                <DoughnutChart/>
                            </MDBContainer>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <p style={{marginLeft:"10px"}}>일별 위험요소를 %로 나타낸 차트입니다.</p>
                </div>
            </div>
        </div>
    )
}