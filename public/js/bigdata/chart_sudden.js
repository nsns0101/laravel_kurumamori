// 연령대 그래프
var ctx = document.getElementById("suddenAccelerationAgeChart");   //bigdata/bigdata_chart/chart.blade.php의 canvas id
var suddenAccelerationAgeChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [day_7[6], day_7[5], day_7[4], day_7[3], day_7[2], day_7[1], day_7[0]],    // 제목
        datasets: [
            {
                label: "20대",
                borderColor: "purple",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "purple",  //꼭짓점 색깔
                pointBorderColor: "purple",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["20"]["bool_sudden_acceleration"][day_7[6]].bool_sudden_acceleration_count,
                    bigdata_chart["20"]["bool_sudden_acceleration"][day_7[5]].bool_sudden_acceleration_count,
                    bigdata_chart["20"]["bool_sudden_acceleration"][day_7[4]].bool_sudden_acceleration_count,
                    bigdata_chart["20"]["bool_sudden_acceleration"][day_7[3]].bool_sudden_acceleration_count,
                    bigdata_chart["20"]["bool_sudden_acceleration"][day_7[2]].bool_sudden_acceleration_count,
                    bigdata_chart["20"]["bool_sudden_acceleration"][day_7[1]].bool_sudden_acceleration_count,
                    bigdata_chart["20"]["bool_sudden_acceleration"][day_7[0]].bool_sudden_acceleration_count,
                ],
            },
            {label: "30대",
                borderColor: "orange",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "orange",  //꼭짓점 색깔
                pointBorderColor: "orange",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["30"]["bool_sudden_acceleration"][day_7[6]].bool_sudden_acceleration_count,
                    bigdata_chart["30"]["bool_sudden_acceleration"][day_7[5]].bool_sudden_acceleration_count,
                    bigdata_chart["30"]["bool_sudden_acceleration"][day_7[4]].bool_sudden_acceleration_count,
                    bigdata_chart["30"]["bool_sudden_acceleration"][day_7[3]].bool_sudden_acceleration_count,
                    bigdata_chart["30"]["bool_sudden_acceleration"][day_7[2]].bool_sudden_acceleration_count,
                    bigdata_chart["30"]["bool_sudden_acceleration"][day_7[1]].bool_sudden_acceleration_count,
                    bigdata_chart["30"]["bool_sudden_acceleration"][day_7[0]].bool_sudden_acceleration_count,
                ],
            },
            {
                label: "40대",
                borderColor: "green",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "green",  //꼭짓점 색깔
                pointBorderColor: "green",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["40"]["bool_sudden_acceleration"][day_7[6]].bool_sudden_acceleration_count,
                    bigdata_chart["40"]["bool_sudden_acceleration"][day_7[5]].bool_sudden_acceleration_count,
                    bigdata_chart["40"]["bool_sudden_acceleration"][day_7[4]].bool_sudden_acceleration_count,
                    bigdata_chart["40"]["bool_sudden_acceleration"][day_7[3]].bool_sudden_acceleration_count,
                    bigdata_chart["40"]["bool_sudden_acceleration"][day_7[2]].bool_sudden_acceleration_count,
                    bigdata_chart["40"]["bool_sudden_acceleration"][day_7[1]].bool_sudden_acceleration_count,
                    bigdata_chart["40"]["bool_sudden_acceleration"][day_7[0]].bool_sudden_acceleration_count,
                ],
            },
            {
                label: "50대",
                borderColor: "blue",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "blue",  //꼭짓점 색깔
                pointBorderColor: "blue",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["50"]["bool_sudden_acceleration"][day_7[6]].bool_sudden_acceleration_count,
                    bigdata_chart["50"]["bool_sudden_acceleration"][day_7[5]].bool_sudden_acceleration_count,
                    bigdata_chart["50"]["bool_sudden_acceleration"][day_7[4]].bool_sudden_acceleration_count,
                    bigdata_chart["50"]["bool_sudden_acceleration"][day_7[3]].bool_sudden_acceleration_count,
                    bigdata_chart["50"]["bool_sudden_acceleration"][day_7[2]].bool_sudden_acceleration_count,
                    bigdata_chart["50"]["bool_sudden_acceleration"][day_7[1]].bool_sudden_acceleration_count,
                    bigdata_chart["50"]["bool_sudden_acceleration"][day_7[0]].bool_sudden_acceleration_count,
                ],
            },
            {
                label: "60대 이상",
                borderColor: "red",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "red",  //꼭짓점 색깔
                pointBorderColor: "red",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["60"]["bool_sudden_acceleration"][day_7[6]].bool_sudden_acceleration_count,
                    bigdata_chart["60"]["bool_sudden_acceleration"][day_7[5]].bool_sudden_acceleration_count,
                    bigdata_chart["60"]["bool_sudden_acceleration"][day_7[4]].bool_sudden_acceleration_count,
                    bigdata_chart["60"]["bool_sudden_acceleration"][day_7[3]].bool_sudden_acceleration_count,
                    bigdata_chart["60"]["bool_sudden_acceleration"][day_7[2]].bool_sudden_acceleration_count,
                    bigdata_chart["60"]["bool_sudden_acceleration"][day_7[1]].bool_sudden_acceleration_count,
                    bigdata_chart["60"]["bool_sudden_acceleration"][day_7[0]].bool_sudden_acceleration_count,
                ],
            },
        ]
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "white",
            bodyFontColor: "black",
            borderWidth: 1,
            displayColors: false,
        },
        legend: {
            display: true, 
            position: 'right',
        },
    }
});

// 연령대 그래프
var ctx = document.getElementById("suddenStopAgeChart");   //bigdata/bigdata_chart/chart.blade.php의 canvas id
var suddenStopAgeChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [day_7[6], day_7[5], day_7[4], day_7[3], day_7[2], day_7[1], day_7[0]],    // 제목
        datasets: [
            {
                label: "20대",
                borderColor: "purple",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "purple",  //꼭짓점 색깔
                pointBorderColor: "purple",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["20"]["bool_sudden_stop"][day_7[6]].bool_sudden_stop_count,
                    bigdata_chart["20"]["bool_sudden_stop"][day_7[5]].bool_sudden_stop_count,
                    bigdata_chart["20"]["bool_sudden_stop"][day_7[4]].bool_sudden_stop_count,
                    bigdata_chart["20"]["bool_sudden_stop"][day_7[3]].bool_sudden_stop_count,
                    bigdata_chart["20"]["bool_sudden_stop"][day_7[2]].bool_sudden_stop_count,
                    bigdata_chart["20"]["bool_sudden_stop"][day_7[1]].bool_sudden_stop_count,
                    bigdata_chart["20"]["bool_sudden_stop"][day_7[0]].bool_sudden_stop_count,
                ],
            },
            {label: "30대",
                borderColor: "orange",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "orange",  //꼭짓점 색깔
                pointBorderColor: "orange",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["30"]["bool_sudden_stop"][day_7[6]].bool_sudden_stop_count,
                    bigdata_chart["30"]["bool_sudden_stop"][day_7[5]].bool_sudden_stop_count,
                    bigdata_chart["30"]["bool_sudden_stop"][day_7[4]].bool_sudden_stop_count,
                    bigdata_chart["30"]["bool_sudden_stop"][day_7[3]].bool_sudden_stop_count,
                    bigdata_chart["30"]["bool_sudden_stop"][day_7[2]].bool_sudden_stop_count,
                    bigdata_chart["30"]["bool_sudden_stop"][day_7[1]].bool_sudden_stop_count,
                    bigdata_chart["30"]["bool_sudden_stop"][day_7[0]].bool_sudden_stop_count,
                ],
            },
            {
                label: "40대",
                borderColor: "green",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "green",  //꼭짓점 색깔
                pointBorderColor: "green",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["40"]["bool_sudden_stop"][day_7[6]].bool_sudden_stop_count,
                    bigdata_chart["40"]["bool_sudden_stop"][day_7[5]].bool_sudden_stop_count,
                    bigdata_chart["40"]["bool_sudden_stop"][day_7[4]].bool_sudden_stop_count,
                    bigdata_chart["40"]["bool_sudden_stop"][day_7[3]].bool_sudden_stop_count,
                    bigdata_chart["40"]["bool_sudden_stop"][day_7[2]].bool_sudden_stop_count,
                    bigdata_chart["40"]["bool_sudden_stop"][day_7[1]].bool_sudden_stop_count,
                    bigdata_chart["40"]["bool_sudden_stop"][day_7[0]].bool_sudden_stop_count,
                ],
            },
            {
                label: "50대",
                borderColor: "blue",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "blue",  //꼭짓점 색깔
                pointBorderColor: "blue",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["50"]["bool_sudden_stop"][day_7[6]].bool_sudden_stop_count,
                    bigdata_chart["50"]["bool_sudden_stop"][day_7[5]].bool_sudden_stop_count,
                    bigdata_chart["50"]["bool_sudden_stop"][day_7[4]].bool_sudden_stop_count,
                    bigdata_chart["50"]["bool_sudden_stop"][day_7[3]].bool_sudden_stop_count,
                    bigdata_chart["50"]["bool_sudden_stop"][day_7[2]].bool_sudden_stop_count,
                    bigdata_chart["50"]["bool_sudden_stop"][day_7[1]].bool_sudden_stop_count,
                    bigdata_chart["50"]["bool_sudden_stop"][day_7[0]].bool_sudden_stop_count,
                ],
            },
            {
                label: "60대 이상",
                borderColor: "red",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "red",  //꼭짓점 색깔
                pointBorderColor: "red",  //꼭짓점 바탕색깔
                backgroundColor: "rgba(0, 0, 0, 0)",
                data: [
                    bigdata_chart["60"]["bool_sudden_stop"][day_7[6]].bool_sudden_stop_count,
                    bigdata_chart["60"]["bool_sudden_stop"][day_7[5]].bool_sudden_stop_count,
                    bigdata_chart["60"]["bool_sudden_stop"][day_7[4]].bool_sudden_stop_count,
                    bigdata_chart["60"]["bool_sudden_stop"][day_7[3]].bool_sudden_stop_count,
                    bigdata_chart["60"]["bool_sudden_stop"][day_7[2]].bool_sudden_stop_count,
                    bigdata_chart["60"]["bool_sudden_stop"][day_7[1]].bool_sudden_stop_count,
                    bigdata_chart["60"]["bool_sudden_stop"][day_7[0]].bool_sudden_stop_count,
                ],
            },
        ]
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "white",
            bodyFontColor: "black",
            borderWidth: 1,
            displayColors: false,
        },
        legend: {
            display: true, 
            position: 'right',
        },
    }
});
