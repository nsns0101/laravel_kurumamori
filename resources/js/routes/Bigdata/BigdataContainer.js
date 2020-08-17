import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import BigdataView from "./BigdataView";


export const BigdataContext = createContext();

export default () => {
    
    const [action, setAction] = useState("sleep");  //졸음, 사고, 급가속 및 급감속
    const [action2, setAction2] = useState("map");  //맵, 차트
    const [action3, setAction3] = useState("age");  //차트 - 연령대, 시간대

    const time_set = [0, 6, 12, 18, 24];      //시간대별 셋팅
    const [day_7, setDay_7] = useState([]);     //최근 7일
    const [day_7_drive_detection, setDay_7_drive_detection] = useState([]);    //최근 7일의 위험 카운트
    const [time_set_data, setTime_set_data] = useState([]); //시간대별 선택한 위험 카운트
    const [age_data, setAge_data] = useState("");   //나이대별 선택한 위험 카운트
    const [detection_count, setDetection_count] = useState(null);
    // const [time_set, setTime_set] = useState([]);

    useEffect(()=> {
        console.log("good");
        Axios.get(`/api/bigdata/`,{
            params : {
                option: action
            }
        }).then( (res) => {
            console.log(res.data);
            const arr_day_7 = []
            const arr_day_7_drive_detection = []
            const arr_time_set_data = [];
            let arr_detection_count = [0,0,0,0];

            //최근 7일, 최근 7일의 위험 카운트 get
            for(var i = 0; i < res.data.day_7.length; i++){
                arr_day_7.push(res.data.day_7[i]);
                arr_day_7_drive_detection.push(res.data.day_7_drive_detection[i]);
            }
            //시간대별 위험 카운트 get
            for(var i = 0; i < res.data.time_set_data.length; i++){
                arr_time_set_data.push(res.data.time_set_data[i]);
            }

        
            for(var i = 0; i < res.data.detection_count.length; i++){
                if(res.data.detection_count[i].bool_sleep){
                    arr_detection_count[0] += 1;
                }
                else if(res.data.detection_count[i].bool_sudden_acceleration){
                    arr_detection_count[1] += 1;
                }
                else if(res.data.detection_count[i].bool_sudden_stop){
                    arr_detection_count[2] += 1;
                }
                else {
                    arr_detection_count[3] += 1;
                }
            }

            setDay_7(arr_day_7);
            setDay_7_drive_detection(arr_day_7_drive_detection);
            setTime_set_data(arr_time_set_data);
            setAge_data(res.data.age_data);
            setDetection_count(arr_detection_count);
        });
    }, [action])
    console.log(detection_count);
    return detection_count && (
        <BigdataContext.Provider value={{
            action,
            setAction,
            action2,
            setAction2,
            action3,
            setAction3,
            
            time_set,
            day_7,
            day_7_drive_detection,
            time_set_data,
            age_data,
            setAge_data,
            detection_count
        }}>
            <BigdataView/>
        </BigdataContext.Provider>

    )
}
