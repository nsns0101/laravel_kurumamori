import React, { useEffect, useState, useContext, createContext } from "react";
import DriveView from "./DriveView";
import {AppContext} from "../../components/App";
import moment from "moment";
import Axios from 'axios';
export const DriveContext = createContext();


/*
    어차피 useEffect도 써야함 기본 날짜 값에 맞는 데이터 뽑아야하니까
    select_drive함수는 렌더가 되긴하는데 값을 왜 늦게받아올까?
    Medical_info의 put문제는?
*/










export default () => {
    const { user } = useContext(AppContext);
    const [date, setDate] = useState(moment(new Date()).format("YYYY-MM-DD"));
    const [day_5, setDay_5] = useState([
        moment().subtract(0, 'd').format("YYYY-MM-DD"), //현재날짜 -0일
        moment().subtract(1, 'd').format("YYYY-MM-DD"), //현재날짜 -1일
        moment().subtract(2, 'd').format("YYYY-MM-DD"), //현재날짜 -2일
        moment().subtract(3, 'd').format("YYYY-MM-DD"), //현재날짜 -3일
        moment().subtract(4, 'd').format("YYYY-MM-DD"), //현재날짜 -4일
    ]);
    const select_drive = () => {
        const url = `/info/drive_score`;
        const body = {
            date : date,
            user_id : user.id,
        };
        const config = {
            headers : {
                'Content-Type' : 'application/json'

            }
        };
        new Promise( (res, rej) => {
            res(Axios.post(url, body, config));
        }).then( res => {
            const arr_day_5 = [];
            for(var i = 0; i < res.data.day_5.length; i++){
                arr_day_5.push(res.data.day_5[i]);
            }
            setDay_5(arr_day_5);
        })
    }

    console.log(day_5);


    return (
        <DriveContext.Provider value={{
            date,
            setDate,
            select_drive
        }}>
            <DriveView/>
        </DriveContext.Provider>
    )
}