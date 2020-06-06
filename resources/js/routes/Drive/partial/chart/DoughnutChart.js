import React, {useContext} from "react";
import { DriveContext } from "../../DriveContainer";
// import { Doughnut } from "react-chartjs-2";
// import CanvasJSReact from "./canvasjs.react";

export default () => {

    const {
        day_5,
        day_5_danger_count
    } = useContext(DriveContext);

    //라인차트 값
    const DoughnutChart = new CanvasJS.Chart("myDoughnutChart", {
        theme: "white",
        exportFileName: "Doughnut Chart",
        // exportEnabled: true,
        // animationEnabled: true,
        // title:{
        //     text: "도넛차트!"
        // },
        legend:{
            cursor: "pointer",
            fontSize: 15
        },
        data: [{
            type: "doughnut",
            innerRadius: 60,
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: {y}회 (#percent%)",
            // indexLabel: "{name} - #percent%",
            indexLabel: "#percent%",
            indexLabelFontSize : 18,
            fontSize: 15,
            dataPoints: [
                { y: day_5_danger_count[4].count_danger, name: day_5[4] },   
                { y: day_5_danger_count[3].count_danger, name: day_5[3] },
                { y: day_5_danger_count[2].count_danger, name: day_5[2] },
                { y: day_5_danger_count[1].count_danger, name: day_5[1] },
                { y: day_5_danger_count[0].count_danger, name: day_5[0] },

            ]
        }]
    });
    return(
        <div id="myDoughnutChart" style={{height:"320px", width:"100%"}}>      
        </div>
    )
}