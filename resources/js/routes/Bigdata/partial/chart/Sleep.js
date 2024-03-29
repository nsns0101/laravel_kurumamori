import React, { useContext } from "react";
import {AppContext} from "../../../../components/App"
import { BigdataContext } from "../../BigdataContainer";
import { MDBContainer } from "mdbreact";
import {Line, Bar} from "react-chartjs-2";

export default () => {
    const { t } = useContext(AppContext);
    const {
        day_7,
        time_set_data,
        age_data,
        action3,
    } = useContext(BigdataContext);
    console.log(age_data);
    console.log(time_set_data);
    const AgeChart = {
        data: {
            labels: [day_7[6], day_7[5], day_7[4], day_7[3], day_7[2], day_7[1], day_7[0]],    // 제목
            datasets: [
                {   // 20대
                    label: t("20대"),
                    borderColor: "purple",   //선 색깔
                    pointRadius: 3,
                    pointBackgroundColor: "purple",  //꼭짓점 색깔
                    pointBorderColor: "purple",  //꼭짓점 바탕색깔
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    data: [
                        age_data["20"]["bool_sleep"][day_7[6]].bool_sleep_count,
                        age_data["20"]["bool_sleep"][day_7[5]].bool_sleep_count,
                        age_data["20"]["bool_sleep"][day_7[4]].bool_sleep_count,
                        age_data["20"]["bool_sleep"][day_7[3]].bool_sleep_count,
                        age_data["20"]["bool_sleep"][day_7[2]].bool_sleep_count,
                        age_data["20"]["bool_sleep"][day_7[1]].bool_sleep_count,
                        age_data["20"]["bool_sleep"][day_7[0]].bool_sleep_count,
                    ],
                },
                {   // 30대
                    label: t("30대"),
                    borderColor: "orange",   //선 색깔
                    pointRadius: 3,
                    pointBackgroundColor: "orange",  //꼭짓점 색깔
                    pointBorderColor: "orange",  //꼭짓점 바탕색깔
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    data: [
                        age_data["30"]["bool_sleep"][day_7[6]].bool_sleep_count,
                        age_data["30"]["bool_sleep"][day_7[5]].bool_sleep_count,
                        age_data["30"]["bool_sleep"][day_7[4]].bool_sleep_count,
                        age_data["30"]["bool_sleep"][day_7[3]].bool_sleep_count,
                        age_data["30"]["bool_sleep"][day_7[2]].bool_sleep_count,
                        age_data["30"]["bool_sleep"][day_7[1]].bool_sleep_count,
                        age_data["30"]["bool_sleep"][day_7[0]].bool_sleep_count,
                    ],
                },
                {   // 40대
                    label: t("40대"),
                    borderColor: "green",   //선 색깔
                    pointRadius: 3,
                    pointBackgroundColor: "green",  //꼭짓점 색깔
                    pointBorderColor: "green",  //꼭짓점 바탕색깔
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    data: [
                        age_data["40"]["bool_sleep"][day_7[6]].bool_sleep_count,
                        age_data["40"]["bool_sleep"][day_7[5]].bool_sleep_count,
                        age_data["40"]["bool_sleep"][day_7[4]].bool_sleep_count,
                        age_data["40"]["bool_sleep"][day_7[3]].bool_sleep_count,
                        age_data["40"]["bool_sleep"][day_7[2]].bool_sleep_count,
                        age_data["40"]["bool_sleep"][day_7[1]].bool_sleep_count,
                        age_data["40"]["bool_sleep"][day_7[0]].bool_sleep_count,
                    ],
                },
                {   // 50대
                    label: t("50대"),
                    borderColor: "blue",   //선 색깔
                    pointRadius: 3,
                    pointBackgroundColor: "blue",  //꼭짓점 색깔
                    pointBorderColor: "blue",  //꼭짓점 바탕색깔
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    data: [
                        age_data["50"]["bool_sleep"][day_7[6]].bool_sleep_count,
                        age_data["50"]["bool_sleep"][day_7[5]].bool_sleep_count,
                        age_data["50"]["bool_sleep"][day_7[4]].bool_sleep_count,
                        age_data["50"]["bool_sleep"][day_7[3]].bool_sleep_count,
                        age_data["50"]["bool_sleep"][day_7[2]].bool_sleep_count,
                        age_data["50"]["bool_sleep"][day_7[1]].bool_sleep_count,
                        age_data["50"]["bool_sleep"][day_7[0]].bool_sleep_count,
                    ],
                },
                {   // 60대 이상
                    label: t("60대이상"),
                    borderColor: "red",   //선 색깔
                    pointRadius: 3,
                    pointBackgroundColor: "red",  //꼭짓점 색깔
                    pointBorderColor: "red",  //꼭짓점 바탕색깔
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    data: [
                        age_data["60"]["bool_sleep"][day_7[6]].bool_sleep_count,
                        age_data["60"]["bool_sleep"][day_7[5]].bool_sleep_count,
                        age_data["60"]["bool_sleep"][day_7[4]].bool_sleep_count,
                        age_data["60"]["bool_sleep"][day_7[3]].bool_sleep_count,
                        age_data["60"]["bool_sleep"][day_7[2]].bool_sleep_count,
                        age_data["60"]["bool_sleep"][day_7[1]].bool_sleep_count,
                        age_data["60"]["bool_sleep"][day_7[0]].bool_sleep_count,
                    ],
                },
            ]
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
                titleFontColor: '#6e707e',
                backgroundColor: "white",
                bodyFontColor: "black",
                borderWidth: 1,
                displayColors: true,
            },
            legend: {
                display: true, 
                position: 'right',
            },
        }
    }
    const TimeChart = {
        data: {
            labels: [
                "00" + t("시") + "~ 06"+t("시"), 
                "06" + t("시") + "~ 12"+t("시"), 
                "12" + t("시") + "~ 18"+t("시"), 
                "18" + t("시") + "~ 24"+t("시")
            ],
                datasets: [
                    {
                        label: t("졸음 운전"),
                        backgroundColor: "#4e73df",
                        hoverBackgroundColor: "#2e59d9",
                        borderColor: "#4e73df",
                        hoverBorderColor: "rgba(234, 236, 244, 1)",
                        data: [
                            time_set_data[0].bool_sleep.bool_sleep_count,
                            time_set_data[1].bool_sleep.bool_sleep_count,
                            time_set_data[2].bool_sleep.bool_sleep_count,
                            time_set_data[3].bool_sleep.bool_sleep_count,
                        ],
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                tooltips: {
                    titleFontColor: '#6e707e',
                    backgroundColor: "white",
                    bodyFontColor: "black",
                    borderWidth: 1,
                    displayColors: false,
                },
                legend: {
                    display: true, 
                    position: 'right',
                },
                scales: {
                    yAxes: [{
                        display: true,
                        ticks: {
                            beginAtZero: true   // minimum value will be 0.
                        }
                    }]
                },
            }  
    }

    return (
        <div className="chart-container">
            {action3 == "age" ? (
                <div className="text-center">
                    <p className="bigdata_title_p">{t("최근 7일간의 졸음운전 발생 건수")}</p>
                    <MDBContainer>
                        <Line data={AgeChart.data} options={AgeChart.options} width={313} height={253}/>
                    </MDBContainer>
                </div>
            ) : (
                <div className="text-center">
                    <p className="bigdata_title_p">{t("최근 7일간의 졸음운전 발생 건수")}</p>
                    <MDBContainer>
                        <Bar data={TimeChart.data} options={TimeChart.options} width={313} height={253}/>
                    </MDBContainer>   
                </div>                       
            )}
        </div>
    )
}