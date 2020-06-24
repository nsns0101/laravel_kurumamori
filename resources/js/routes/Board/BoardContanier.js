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
        console.log(action);
        console.log(location.pathname);

        if(action == "index"){
            Axios.get(`/get/boards/questions`).then(res => {
            setData(res.data);
            if(res){
                console.log("Board index call success");
            }
            else{
                console.log("Board index call fail");
                
            }
        });
        }
    }, [location.pathname]);
    console.log(data);

    //게시판 생성
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
                console.log("Board create call success")
                setAction('index')
                history.push('/boards/questions')
            }
            else{
                console.log("Board create call fail");
            }
        })
    }

    //게시판 보기
    const onShow = () => {
        console.log('onshow')
        console.log(select)
        console.log(location.pathname);
        const url = `/select/boards/questions`;
        const config = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
        return Axios.get(url,{
            params : {
                board_id : select,
            }
            },config).then(res => {
            if(res.data){
                console.log("Board show call success")
                console.log(res)
                // setAction('index')
                // history.push('/boards/questions')
            }
            else{
                console.log("Board show call fail")
            }
        })
    }

    //게시판 업데이트
    const onUpdate = () => {
        // const url = "/boards/questions";
        // const body = {
        //     user_id : user.id,
        //     title: title,
        //     category: category,
        //     content: content,
        // }
        // const config = {
        //     headers: {
        //         'Content-Type' : 'application/json'
        //         }
        // }
        // return Axios.post(url, body, config).then(res => {
        //     if(res.data){
        //         console.log("Board create call success")
        //         setAction('index')
        //         history.push('/boards/questions')
        //     }
        //     else{
        //         console.log("Board create call fail");
        //     }
        // })
    }

    //게시판 삭제
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
                    console.log("Board delete call success");
                    setAction('index')
                    history.push('/boards/questions')
                }
                else{
                    console.log("Board delete call fail");
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