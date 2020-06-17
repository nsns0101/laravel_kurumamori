import React, {useContext, useState, useEffect} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import Board from "./Board";

console.log('board con')

export default () => {
    
    const { user } = useContext(AppContext);
    const [data, setData] = useState("");

    useEffect(()=>{
        
        console.log("board useEffect");
        Axios.get(`/boards/questions/`).then(res => {
            setData(res.data);
            if(res){
                console.log("성공");
                // console.log(res.data.questions.data);
            }
            else{
                console.log("실패");
                
            }
        });
    }, []);

    console.log(data);
    return (
        <Board
            user={user}
            data={data}
            setData={setData}
        />        
    )
}