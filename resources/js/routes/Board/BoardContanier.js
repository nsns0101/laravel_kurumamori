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

    const [title, setTitle] = useState(""); 
    const [category, setCategory] = useState(""); 
    const [content, setContent] = useState(""); 
    const { register, handleSubmit } = useForm();

    const [select, setSelect] = useState(""); 

    useEffect(() =>{
        console.log("board useEffect");
        console.log(location.pathname);
        console.log(action);
        console.log(data);

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

    //제품 보기
    const onShow = () => {
        const url = "show/boards/questions";
        const body = {
            board_id : select,
        }
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        Axios.post(url, body, config).then(res => {
            if(res.data){
                console.log("onShow s")
                console.log(res)
                // setAction('index')
                // history.push('/boards/questions')
            }
            else{
                console.log("실패")
            }
        })
    }

    //삭제 하기 
    const onDelete = () => {
        if(window.confirm("정말 삭제 하시겠습니까?")){
            const url = `/boards/questions/${select}`;
            const body = {
                id:select,
            }
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                    }
            }
            return Axios.delete(url,{ body },config).then(res => {
                if(res.data){
                    console.log("삭제 성공")
                    setAction('index')
                    history.push('/boards/questions')
                }
                else{
                    console.log("실패")
                }
            })
        }
    }

    return (
         
        <BoardContext.Provider value={{
            user,
            action,
            setAction,
            data,
            setData,
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

            select,
            setSelect,
            onDelete,
            onShow
        }}>
            {action == "show" ? <Show/>:""}
            {action == "create" ? <Create/>:""}
            {action == "index" ? <Board/>:""}

        </BoardContext.Provider>      
    )
}