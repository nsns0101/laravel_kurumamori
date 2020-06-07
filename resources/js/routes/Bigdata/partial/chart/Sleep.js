import React, { useContext } from "react";
import { BigdataContext } from "../../BigdataContainer";

export default () => {
    const {

    } = useContext(BigdataContext);


    return (
        <div className="chart-container">
            {/* 그래프 */}
            <div className="container px-3 py-5 p-md-5">
                <div className="pt-5">
                    {/* 연령대 그래프 */}
                    <div className="card">
                        <div className="card-header">
                            최근 7일간의 졸음운전 발생 건수
                        </div>
                        <div className="card-body">
                            <div className="age-chart-container">
                                <canvas id="sleepAgeChart" width="313" height="253" style="display: block; width: 313px; height: 253px;"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 시간대 그래프 */}
                <div className="pt-5">
                    <div className="card">
                        <div className="card-header">
                            시간대별 졸음운전 발생 건수
                        </div>
                        <div className="card-body">
                            <div className="age-chart-container">
                                <canvas id="sleepTimeChart" width="313" height="253" style="display: block; width: 313px; height: 253px; "></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}