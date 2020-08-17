import React, {useState, useContext} from "react";
import {AppContext} from "../../../components/App";
import { BoardContext } from "../BoardContanier";
import { useForm } from "react-hook-form";
import Axios from "axios";

export default ({ 
    // history,
    product, 
    setProduct_key_input,
    error_text,
    onSubmit,

}) => {
    const { t } = useContext(AppContext);

    const {
        user,
        data,
        setAction,
        history,
        select,
        onDelete,
        handleSubmit,
    } = useContext(BoardContext);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal fade show" id="showModal" tabIndex="-1" role="dialog" aria-labelledby="showModal" style={{backgroundColor: "#000000cc"}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="container pt-5">
                            <div className="row mx-0 mr-0">
                                {/* <span><Link to="/boards/questions" onClick={()=>{setAction("index")}} className="show-home">HOME</Link></span> */}
                                <span className="question-show-slicer"> > </span>
                                <span >
                                    {/* 변경예정 */}
                                    {/* <a className="question-show-category" href="{{route('questions.index',['category_id'=>$category])}}">{data.category[index]}</a>  */}
                                    {/* <Link to="/board/questions" onClick={()=>{setAction("index")}} className="show-category">{data.category[index]}</Link> */}
                                </span>
                            </div>
                            <hr className="question-show-split"/>
                            <div className="p-1">
                                <div>
                                    {/* <h2 className="question-show-title">{value.title}</h2> */}
                                </div>
                                <div className="px-3">
                                    {/* 변경예정 */}
                                    {/* <span><a className="question-show-name" href="{{route('questions.index',['user_id'=>$question->user->id])}}">{data.board_user[index]}</a></span>
                                    <span><Link to="/board/questions" onClick={()=>{setAction("index")}} className="show-user-name">{data.board_user[index]}</Link></span>
                                    <span className="question-show-slicer2 ">|</span>
                                    <span className="question-show-date">{moment(value.created_at).format("YYYY-MM-DD")}</span>
                                    <span className="question-show-slicer2">|</span>
                                    <span className="question-show-viewCount">Hit : {value.view_count}</span>
                                    </div>
                                    <hr className="question-show-split"/>
                                    <div className="py-3">
                                    <h4 className="text-justify question-show-content">
                                        {value.content}
                                    </h4> */}
                                </div>
                            </div>
                            <hr className="question-show-split"/>
                            <div className="d-flex justify-content-end pb-3">
                                {/* {user.id == value.user_id ? 
                                    <div className="row mx-0 px-0">
                                        <span className="pr-2">
                                            <Link to={"/boards/questions/"} onClick={()=>{setAction("edit")}} className="btn-nomal">수정하기</Link>
                                        </span>
                                        <span className="pr-2">
                                            <form onSubmit={handleSubmit(onDelete)}>
                                                <button className="btn-nomal">삭제하기</button>    
                                            </form>
                                        </span> 
                                        <span>
                                            <Link to="/boards/questions"onClick={()=>{setAction("index")}} className="btn-nomal">뒤로가기</Link>
                                        </span>
                                    </div>
                                    : 
                                    <div>
                                        <span>
                                            <Link to="/boards/questions"onClick={()=>{setAction("index")}} className="btn-nomal">뒤로가기</Link>
                                        </span>
                                    </div>
                                    } */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}