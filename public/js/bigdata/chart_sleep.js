// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// 연령대 그래프
var ctx = document.getElementById("bigDataAgeChart");   //bigdata/bigdata_chart/chart.blade.php의 canvas id
var bigDataAgeChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: [day_7[6], day_7[5], day_7[4], day_7[3], day_7[2], day_7[1], day_7[0]],    // 제목
        datasets: [
            {
                data: [
                    bigdata_chart["20"]["bool_sleep"][day_7[6]].bool_sleep_count,
                    bigdata_chart["20"]["bool_sleep"][day_7[5]].bool_sleep_count,
                    bigdata_chart["20"]["bool_sleep"][day_7[4]].bool_sleep_count,
                    bigdata_chart["20"]["bool_sleep"][day_7[3]].bool_sleep_count,
                    bigdata_chart["20"]["bool_sleep"][day_7[2]].bool_sleep_count,
                    bigdata_chart["20"]["bool_sleep"][day_7[1]].bool_sleep_count,
                    bigdata_chart["20"]["bool_sleep"][day_7[0]].bool_sleep_count,
                ],
                borderColor: "orange",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "orange",  //꼭짓점 색깔
                pointBorderColor: "orange",  //꼭짓점 바탕색깔
            },
            {
                data: [
                    bigdata_chart["50"]["bool_sleep"][day_7[6]].bool_sleep_count,
                    bigdata_chart["50"]["bool_sleep"][day_7[5]].bool_sleep_count,
                    bigdata_chart["50"]["bool_sleep"][day_7[4]].bool_sleep_count,
                    bigdata_chart["50"]["bool_sleep"][day_7[3]].bool_sleep_count,
                    bigdata_chart["50"]["bool_sleep"][day_7[2]].bool_sleep_count,
                    bigdata_chart["50"]["bool_sleep"][day_7[1]].bool_sleep_count,
                    bigdata_chart["50"]["bool_sleep"][day_7[0]].bool_sleep_count,
                ],
                borderColor: "red",   //선 색깔
                pointRadius: 3,
                pointBackgroundColor: "red",  //꼭짓점 색깔
                pointBorderColor: "red",  //꼭짓점 바탕색깔
            },
        ]
    },
    options: {
        animation: { animateScale: true},
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10
        },
        legend: {
            display: true, 
            position: 'right',
        },
        cutoutPercentage: 35,   // 가운데 빈 공간 영역 크기
        yAxes: [{
            ticks: {
                beginAtZero: true,
              maxTicksLimit: 5,
              padding: 20,
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                // return '$' + number_format(value);
                return value + "%";
              }
            },
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2]
            }
          }],
    }
});

// 시간대 그래프
var ctx = document.getElementById("bigDataTimeChart");   //bigdata/bigdata_chart/chart.blade.php의 시간대 canvas id
var bigDataTimeChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['00~04', '04~08', '08~12', '12~16', '16~20', '20~24'],    // 기준
        datasets: [
            {
                data: [
                    57,     //값
                    35, 
                    25,
                    14,
                    20,
                    34
                ],
                backgroundColor: ["blue", "green", "yellow", "orange", "red"],
                //hoverBackgroundColor: ["orange", "green", "blue", "red", "black"],
                hoverBorderColor: "rgba(234, 236, 244, 1)"
            }
        ]
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: "#dddfeb",
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10
        },
        legend: {
            display: true, 
            position: 'right',
        },
        cutoutPercentage: 35,
        yAxes: [{
            ticks: {
              maxTicksLimit: 5,
              padding: 20,
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                // return '$' + number_format(value);
                return value + "%";
              }
            },
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2]
            }
          }],
    }
});