import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";
import BigdataView from "./BigdataView";


export const BigdataContext = createContext();

export default () => {

    const [action, setAction] = useState("index");

    useEffect(()=> {
        console.log(location.pathname.split('/')[2]);
        if(location.pathname.split('/')[2]){
            if(location.pathname.split('/')[2] == "sleep"){
                setAction("sleep");
            }
            else if(location.pathname.split('/')[2] == "sudden"){
                setAction("sleep");
            }
            else if(location.pathname.split('/')[2] == "accident"){
                setAction("accident");
            }
            //detail페이지면 axios 요청
            Axios.get(`/bigdata/${location.pathname.split('/')[2]}`).then( (res) => {
                console.log(res);
            });
        }
    }, [])

    return (
        <BigdataContext.Provider value={{
            action,
            setAction
        }}>
            <BigdataView/>
        </BigdataContext.Provider>

    )
}
