import React, {useContext, useState, useEffect, createContext} from "react";

import {AppContext} from "../../components/App";
import { useForm } from "react-hook-form";

import Axios from "axios";
import Board from "./Board";
import Create from "./partial/Create";
import Show from "./partial/Show";

console.log('board container call')
export const BoardContext = createContext();
export default ({history}) => {
    const { user } = useContext(AppContext);

    const [action, setAction] = useState("index");

    const [data, setData] = useState("");

    const [question_id, setQuestion_id] = useState("");
    

    const [title, setTitle] = useState(""); 
    const [category, setCategory] = useState(""); 
    const [content, setContent] = useState(""); 
    const { register, handleSubmit } = useForm();

    useEffect(() =>{
        console.log("board useEffect");
        console.log(location.pathname);
        console.log(action);

        Axios.get(`/get/boards/questions`).then(res => {
            setData(res.data);
            if(res){
                console.log("Board index call success");
                // console.log(res.data.questions.data);
            }
            else{
                console.log("Board index call fail");
                
            }
        });
    }, [location.pathname]);

    console.log(data);

    //제품 생성
    const onCreate = () => {
        const url = "/boards/questions";
        const body = {
            user_id : user.id,
            title: title,
            category: category,
            content: content,
        }
        const config = {
            headers: {
                'Content-Type' : 'application/json'
                }
        }
        return Axios.post(url, body, config).then(res => {
            if(res.data){
                console.log("성공")
                console.log(res.data)
                setAction('index')
                history.push('/boards/questions')
            }
            else{
                console.log("실패")
            }
        })
    }

    return (
         
        <BoardContext.Provider value={{
            user,
            action,
            setAction,
            data,
            setData,
            question_id,
            setQuestion_id,
            history,
            onCreate,
            title,
            setTitle,
            category,
            setCategory,
            content,
            setContent,

            register,
            handleSubmit,

        }}>
            {action == "show" ? <Show/>:""}
            {action == "create" ? <Create/>:""}
            {action == "index" ? <Board/>:""}

        </BoardContext.Provider>      
    )
}