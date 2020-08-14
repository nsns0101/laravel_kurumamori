import React, {useContext, useState, useEffect, createContext} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import Geocode from "react-geocode";
import HistoryView from "./HistoryView";

export const HistoryContext = createContext();


export default ( {history} ) => {
    const { user, t } = useContext(AppContext);
    
    const [reports, setReports] = useState([]);   //신고 위치
    const [data, setData] = useState("");
    const [arr, setArr] = useState([]);
    Geocode.setApiKey(process.env.MIX_GCP_API_KEY);
    Geocode.setLanguage("ja");
    //값 받기



    useEffect(()=>{
            Axios.get(`/info/history/${user.id}`).then(res => {
            setData(res.data);

            // 해치움 ㅋㅋ gps
            if(res.data.reports){
                // const arr = [];
                for(var i = 0; i < (res.data.reports.data).length; i++){
                    Geocode.fromLatLng(res.data.reports.data[i].latitude, res.data.reports.data[i].longitude).then(
                        res => {
                            setArr(arr.push(res.results[0].formatted_address))
                            setReports(arr);
                        }
                    )
                }
            }

        });
    }, []);

    return (
        <HistoryContext.Provider value={{
            history,
            data,
            reports,
            setData,
        }}>
            <HistoryView/>
        </HistoryContext.Provider>
    )
}