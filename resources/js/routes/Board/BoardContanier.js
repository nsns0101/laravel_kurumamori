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

    const [content2, setContent2] = useState(""); 
    const [commentSelect, setCommentSelect] = useState("");
    const [commentContent, setCommentContent] = useState("");

    const {t} = useContext(AppContext);

    const [modalIsOpen,setIsOpen] = useState(false);

    const [craeteModalIsOpen,setCraeteModalIsOpen] = useState(false);
    const [showModalIsOpen,setShowModalIsOpen] = useState(false);
    const [showModalIsState,setShowModalIsState] = useState(false);

    const [showModalCommentIsState,setShowModalCommentIsState] = useState(false);


    const openCreateModal = () => {
        setCraeteModalIsOpen(true);
    }
    const closeCreateModal = () => {
        setCraeteModalIsOpen(false);
    }

    const openShowModal = () => {
        setShowModalIsOpen(true);
    }
    const closeShowModal = () => {
        setShowModalIsOpen(false);
    }
    
    const onShowEdit = () => {
        setShowModalIsState(true);
    }

    const offShowEdit = () => {
        setShowModalIsState(false);
    }

    const onCommnetEdit = () => {
        setShowModalCommentIsState(true);
        console.log("onCommnetEdit");
        console.log(commentSelect);
        Axios.get(`/get/boards/questions/${match.params.category}`).then(res => {                
            setData(res.data);

            if(res){
            }
            else{
                console.log("Board index call fail");
            }
        });
    }

    const offCommentEdit = () => {
        setShowModalCommentIsState(false);
    }

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
    console.log(data.comments)

    //게시판 생성 S
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
                Axios.get(`/get/boards/questions/${match.params.category}`).then(res => {                
                    setData(res.data);
    
                    if(res){
                    }
                    else{
                        console.log("Board index call fail");
                        
                    }
                });
                closeCreateModal()
            }
            else{
                console.log("Board create call fail");
            }
        })
    }

    //게시판 보기 조회수 올리기 S
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
                Axios.get(`/get/boards/questions/${match.params.category}`).then(res => {                
                    setData(res.data);
    
                    if(res){
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

    //게시판 업데이트 S
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
                Axios.get(`/get/boards/questions/${match.params.category}`).then(res => {                
                    setData(res.data);
    
                    if(res){
                    }
                    else{
                        console.log("Board index call fail");
                        
                    }
                });
                offShowEdit()
            }
            else{
                console.log("Board update call fail");
            }
        })
    }

    //게시판 삭제 S
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
                    Axios.get(`/get/boards/questions/${match.params.category}`).then(res => {                
                        setData(res.data);
        
                        if(res){
                        }
                        else{
                            console.log("Board index call fail");
                            
                        }
                    });
                }
                else{
                    console.log("Board delete call fail");
                }
            })
        }
    }

    //검색 S
    const onSearch = () => {
        const url = `/onSearch/boards/questions/${search}`;
        const body = {
            search : search,
        }
        const config = {
            headers: {
                'Content-Type' : 'application/json'
                }
        }
        return Axios.get(url, body, config).then(res => {
            setData(res.data);
            if(res.data){
            }
            else{
                console.log("Board create call fail");
            }
        })
    }

    //댓글 생성 S
    const onCreateComment = () => {
        const url = "/boards/questions/comments";
        const body = {
            user_id : user.id,
            content: content2,
            select: select,
        }
        const config = {
            headers: {
                'Content-Type' : 'application/json'
                }
        }
        return Axios.post(url, body, config).then(res => {
            if(res.data){
                Axios.get(`/get/boards/questions/${match.params.category}`).then(res => {                
                    setData(res.data);
                    if(res){
                    }
                    else{
                        console.log("Board index call fail");
                        
                    }
                });
            }
            else{
                console.log("comment create call fail");
            }
        })
    }

    //댓글 삭제 S
    const onCommnetDelete = () => {
        if(window.confirm("정말 삭제 하시겠습니까?")){
            const url = `/boards/questions/comments/${commentSelect}`;
            const data = {
                id:commentSelect,
            }
            const config = {
                headers: {
                    'Content-Type' : 'application/json'
                    }
            }
            return Axios.delete(url,{data} ,config).then(res => {
                if(res.data){
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
                else{
                    console.log("comment delete call fail");
                }
            })
        }
    }

    //댓글 수정 S
    const onCommentUpdate = () => {
        const url = `/boards/questions/comments/${commentSelect}`;
        const body = {
            id: commentSelect,
            user_id : user.id,
            content: commentContent,
        }
        const config = {
            headers: {
                'Content-Type' : 'application/json'
                }
        }
        return Axios.put(url, body, config).then(res => {
            if(res.data){
                console.log("comment update call success")
                Axios.get(`/get/boards/questions/${match.params.category}`).then(res => {                
                    setData(res.data);
    
                    if(res){
                    }
                    else{
                        console.log("Board index call fail");
                    }
                });
                offCommentEdit()
            }
            else{
                console.log("comment update call fail");
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

            modalIsOpen,
            setIsOpen,

            setContent2,
            content2,
            onCreateComment,
            onCommnetDelete,
            setCommentSelect,
            setCommentContent,
            onCommentUpdate,

            openCreateModal,
            closeCreateModal,
            craeteModalIsOpen,

            openShowModal,
            closeShowModal,
            showModalIsOpen,

            onShowEdit,
            offShowEdit,
            showModalIsState,

            showModalCommentIsState,
            setShowModalCommentIsState,
            onCommnetEdit,
            offCommentEdit

        }}>
            {action == "edit" ? <Edit/>:""}
            {action == "show" ? <Show/>:""}
            {action == "create" ? <Create/>:""}
            {action == "index" ? <Board/>:""}

        </BoardContext.Provider> :null 
    )
}