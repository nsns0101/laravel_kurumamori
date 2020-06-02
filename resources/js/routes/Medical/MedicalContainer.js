import React, { useEffect, useState, useContext } from "react";
import {AppContext} from "../../components/App";
import Axios from 'axios';
import MedicalView from "./MedicalView";


export default () => {
    const { user } = useContext(AppContext);
    const [res, setRes] = useState("");
    //값 받기
    useEffect(()=>{
        Axios.get(`/info/medical_info/${user.id}`).then(res => {
            setRes(res);
            
        })
    }, [user]);

    const medical_update = () => {
        console.log("update");
    }
    
    return (
    <MedicalView
        user={user}
        res={res}
    />)
}