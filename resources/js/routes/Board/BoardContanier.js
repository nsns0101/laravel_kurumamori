import React, {useContext, useState, useEffect, createContext} from "react";

import {AppContext} from "../../components/App";
import { useForm } from "react-hook-form";

import Axios from "axios";
import Board from "./Board";
import "./Board.css";
import Create from "./partial/Create";
import Show from "./partial/Show";
import Edit from "./partial/Edit";
import Modal from 'react-modal';
import CreateModal from "./partial/CreateModal";
import queryString from 'query-string';

console.log('board container call')

export const BoardContext = createContext();
export default ({history,location, match}) => {
    const { user } = useContext(AppContext);
    const [action, setAction] = useState("index");
    const [data, setData] = useState("");

    const [title, setTitle] = useState(""); 
    const [category, setCategory] = useState(""); 
    const [content, setContent] = useState(""); 
    const [search, setSearch] = useState(""); 
    const { register, handleSubmit } = useForm();

    const [select, setSelect] = useState(""); 
    const [categoryHover, setCategoryHover] = useState("no"); 

    const {t} = useContext(AppContext);

    const [modalIsOpen,setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }
    const closeModal = () =>{
        setIsOpen(false);
    }

    // const query = queryString.parse(location.pathname);
    // console.log(location.pathname,"=쿼리");
    // console.log(match.params.category,"=매치");
    
    useEffect(() =>{
        console.log("board useEffect");
        if(action == "index"){
            Axios.get(`/get/boards/questions/${match.params.category}`).then(res => {                
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
    console.log(data)

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
                history.push('/boards/questions')
                window.location.reload();
                // Axios.get(`/get/boards/questions`).then(res => {                
                //     setData(res.data);
    
                //     if(res){
                //         console.log("Board index call success");
                //     }
                //     else{
                //         console.log("Board index call fail");
                        
                //     }
                // });
            }
            else{
                console.log("Board create call fail");
            }
        })
    }

    //게시판 보기 조회수 올리기
    const onShow = () => {
        const url = "/onShow/boards/questions";
        const body = {
            board_id: select,
            user_id : user.id,
        }
        const config = {
            headers: {
                'Content-Type' : 'application/json'
                }
        }
        return Axios.post(url, body, config).then(res => {
            if(res.data){
                console.log("Board onShow call success")
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
            else{
                console.log("Board onShow call fail");
            }
        })
    }

    //게시판 업데이트
    const onUpdate = () => {
        const url = `/boards/questions/${select}`;
        const body = {
            id:select,
            user_id : user.id,
            title: title,
            content: content,
        }
        const config = {
            headers: {
                'Content-Type' : 'application/json'
                }
        }
        return Axios.put(url, body, config).then(res => {
            if(res.data){
                console.log("Board update call success")
                window.location.reload();
            }
            else{
                console.log("Board update call fail");
            }
        })
    }

    //게시판 삭제
    const onDelete = () => {
        if(window.confirm("정말 삭제 하시겠습니까?")){
            const url = `/boards/questions/${select}`;
            const data = {
                id:select,
            }
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                    }
            }
            return Axios.delete(url,{data} ,config).then(res => {
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
    const onSearch = () => {
        const url = "/onSearch/boards/questions";
        const body = {
            search : search,
        }
        const config = {
            headers: {
                'Content-Type' : 'application/json'
                }
        }
        return Axios.post(url, body, config).then(res => {
            if(res.data){
                console.log("Board onSearch call success")
                history.push('/boards/questions')
                // Axios.get(`/get/boards/questions`).then(res => {                
                //     setData(res.data);
    
                //     if(res){
                //         console.log("Board index call success");
                //     }
                //     else{
                //         console.log("Board index call fail");
                        
                //     }
                // });
            }
            else{
                console.log("Board create call fail");
            }
        })
    }

    return (
        data ? 
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
            setSearch,

            register,
            handleSubmit,

            select,
            setSelect,
            onDelete,
            onShow,
            onUpdate,
            onSearch,

            categoryHover,
            setCategoryHover,
            t,

            openModal,
            closeModal,
            modalIsOpen,
            setIsOpen
        }}>
            {action == "edit" ? <Edit/>:""}
            {action == "show" ? <Show/>:""}
            {action == "create" ? <Create/>:""}
            {action == "index" ? <Board/>:""}

        </BoardContext.Provider> :null 
    )
}