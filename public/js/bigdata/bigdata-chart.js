

var ctx = document.getElementById("bigDataAgeChart");   //bigdata/bigdata_chart/chart.blade.php의 canvas id
var bigDataPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels: ['20대', '30대', '40대', '50대', '60대 이상'],    // 아래 목록?
        datasets: [
            {
                data: [
                    10,     //값
                    20, 
                    30,
                    40,
                    50,
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
            position: 'bottom',

        },
        cutoutPercentage: 80,
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