// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';


// 연령대 그래프
var ctx = document.getElementById("bigDataAgeChart");   //bigdata/bigdata_chart/chart.blade.php의 canvas id
var bigDataAgeChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ['20대', '30대', '40대', '50대', '60대 이상'],    // 제목
        datasets: [
            {
                data: [
                    35,     // 차트에 들어가는 데이터의 값
                    20, 
                    31,
                    24,
                    50,
                ],
                backgroundColor: ["blue", "green", "yellow", "orange", "red"],      // 막대 그래프의 배경 색
                borderColor: [  // 그래프를 감싸는 border의 색 
                    "rgba(255,99,132,1)",'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)' 
                ],
                hoverBorderColor: "rgba(234, 236, 244, 1)"
            }
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