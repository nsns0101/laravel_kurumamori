import React, {Fragment,useState, useContext} from "react";
import {AppContext} from "../../../components/App";
import { BoardContext } from "../BoardContanier";
import {Link} from "react-router-dom";
import moment from "moment";
import Edit_modal from "../partial/EditModal";

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
        openModal
    } = useContext(BoardContext);

    return (
        <Fragment>
            {data && data.questions.data ? data.questions.data.map( (value, index) => {
                return (
                    value.id == select ? 
                    <div key={index} className="modal fade show" id="showModal" tabIndex="-1" role="dialog" aria-labelledby="showModal" style={{backgroundColor: "#000000cc"}}>
                        <div className="modal-dialog">
                            <div className="modal-content" >
                                <div className="row justify-content-center">
                                    <div className="col-sm-12 col-lg-12 py-2">
                                        <div className="container">
                                            <div className="row justify-content-between mx-0 mr-0">
                                                <div>
                                                    <span><Link to="/boards/questions/all" onClick={()=>{setAction("index")}} className="show-home">HOME</Link></span>
                                                    <span className="question-show-slicer"> > </span>
                                                    <span >
                                                        {/* 변경예정 */}
                                                        {/* <a className="question-show-category" href="{{route('questions.index',['category_id'=>$category])}}">{data.category[index]}</a>  */}
                                                        <Link to="/boards/questions" onClick={()=>{setAction("index")}} className="show-category">{t(data.category[index])}</Link>
                                                        {/* <p className="show-category">{t(data.category[index])}</p> */}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <hr className="question-show-split"/>
                                            <div className="p-1">
                                                <div>
                                                    <h2 className="question-show-title">{value.title}</h2>
                                                </div>
                                                <div className="px-3">
                                                    {/* 변경예정 */}
                                                    {/* <span><a className="question-show-name" href="{{route('questions.index',['user_id'=>$question->user->id])}}">{data.board_user[index]}</a></span> */}
                                                    <span><Link to="/boards/questions" onClick={()=>{setAction("index")}} className="show-user-name">{data.board_user[index]}</Link></span>
                                                    <span className="question-show-slicer2 ">|</span>
                                                    <span className="question-show-date">{moment(value.created_at).format("YYYY-MM-DD")}</span>
                                                    <span className="question-show-slicer2">|</span>
                                                    <span className="question-show-viewCount">Hit : {value.view_count}</span>
                                                    </div>
                                                    <hr className="question-show-split"/>
                                                    <div className="py-3">
                                                    <h4 className="text-justify question-show-content">
                                                        {value.content}
                                                    </h4>
                                                </div>
                                            </div>
                                            <hr className="question-show-split"/>
                                            <div className="d-flex justify-content-end pb-3">
                                                {user.id == value.user_id ? 
                                                    <div className="row mx-0 px-0">
                                                        <span className="pr-2">
                                                            <div className="text-center">
                                                                <button type="button" className="btn-nomal" data-toggle="modal" data-target="#editModal">
                                                                {t("수정하기")}
                                                                </button>
                                                            </div>  
                                                            <Edit_modal
                                                                closeTimeoutMS={200}
                                                                isOpen={openModal}
                                                                onRequestClose={() => this.toggleModal()}
                                                                contentLabel="editModal"
                                                                
                                                            />
                                                        </span>
                                                        <span className="pr-2">
                                                            <form onSubmit={handleSubmit(onDelete)}>
                                                                <button className="btn-nomal">{t("삭제하기")}</button>    
                                                            </form>
                                                        </span> 
                                                    </div>
                                                    : 
                                                    <div>

                                                    </div>
                                                    }
                                            </div>
                                        </div>
                                
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div key={index}></div>
                )
            })
            :   (
                <tr>
                    <td className="text-center" style={{color:"blue"}}>작성된 글이 없습니다.</td>
                </tr>
                )
            }
        </Fragment>
    )
}