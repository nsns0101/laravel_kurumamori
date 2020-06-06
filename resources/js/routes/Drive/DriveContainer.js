import React, { useEffect, useState, useContext, createContext } from "react";
import DriveView from "./DriveView";
import {AppContext} from "../../components/App";
import moment from "moment";
import Axios from 'axios';
export const DriveContext = createContext();

export default () => {
    const { user } = useContext(AppContext);
    //선택한 날짜
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
    //선택한 날짜의  운전정보
    const [drive_info, setDrive_info] = useState();
    //선택한 날짜의 신고이력
    const [reports, setReports] = useState();
    //선택한 날짜의 운전 점수
    const [score, setScore] = useState();

    //최근 5일 날짜
    const [day_5, setDay_5] = useState([]);
    //최근 5일의 운전시간
    const [day_5_sec, setDay_5_sec] = useState([]);
    //최근 5일의 운전감지 정보
    const [day_5_drive_detection, setDay_5_drive_detection] = useState([]);
    //최근 5일의 위험 카운트
    const [day_5_danger_count, setDay_5_danger_count] = useState([]);

    useEffect(()=> {               
        if(user.id){
            Axios.get(`/info/drive_score/`, {
                params : {
                    user_id : user.id,
                    date
                }
            }).then( res => {
                console.log(res);
                if(user.id){
                    //오늘의 운전 정보
                    

                    //최근 5일 받기
                    const arr_day_5 = [];
                    for(var i = 0; i < res.data.day_5.length; i++){
                        arr_day_5.push(res.data.day_5[i]);
                    }
                    setDay_5(arr_day_5);

                    //최근 5일의 위험정보


                    //
    
                }
            });
        }

    }, [user, date])



    return (
        <DriveContext.Provider value={{
            date,
            setDate,
        }}>
            <DriveView/>
        </DriveContext.Provider>
    )
}