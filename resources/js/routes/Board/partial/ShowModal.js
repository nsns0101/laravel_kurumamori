import React, {Fragment,useState, useContext} from "react";
import {AppContext} from "../../../components/App";
import { BoardContext } from "../BoardContanier";
import {Link} from "react-router-dom";
import moment from "moment";
import EditComment_modal from "../partial/EditCommentMoadl";
import "../Board.css";

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
        onCreateComment,
        setContent2,
        comment,
        onCommnetDelete,
        setCommentSelect,
        onUpdate ,
        setContent,
        setTitle,
        commentSelect,
        onCommentUpdate,
        setCommentContent,

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

    } = useContext(BoardContext);

    return (
        // 모달이 열려 있는가? 체크 
        showModalIsOpen == true ?
            // 모달 상태 체크 
            showModalIsState == false ?
                <Fragment>
                    {data && data.questions.data  ? data.questions.data.map( (value, index) => {
                        return (
                            value.id == select ? 
                            <div key={index} className="modal fade show" id="showModal" data-backdrop="false" tabIndex="-1" role="dialog" aria-labelledby="showModal" style={{backgroundColor: "#000000cc"}}>
                                <div className="modal-dialog modal-120size">
                                    <div className="modal-content modal-120size" >
                                        <div className="row justify-content-center">
                                            <div className="col-sm-12 col-lg-12 py-2">
                                                <div className="container">
                                                    <div className="row justify-content-between mx-0 mr-0 mt-2">
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
                                                                        <button type="button" className="btn-create"
                                                                        onClick={()=>{onShowEdit()}}>
                                                                        {t("수정하기")}
                                                                        </button>
                                                                    </div>  
                                                                </span>
                                                                <span className="pr-2">
                                                                    <form onSubmit={handleSubmit(onDelete)}>
                                                                        <button className="btn-create">{t("삭제하기")}</button>    
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
                                            {
                                                user.id === 3 ? 
                                                    // 관리자 관점
                                                    <div className="col-sm-12 col-lg-12 py-2">
                                                    <div className="px-2">
                                                        <form onSubmit={handleSubmit(onCreateComment)}>
                                                            <div className="form-group">
                                                                <label className="">{t("댓글 작성")}</label>
                                                                <textarea className="form-control" name="content" id="content" cols="30" rows="5"
                                                                placeholder={t("댓글을 입력해 주세요.")}
                                                                onChange={ e => {
                                                                    const {
                                                                    target: { value }
                                                                    } = e;
                                                                    setContent2(value);
                                                                }}
                                                                ></textarea>
                                                            </div>
                                                            <div className="form-group d-flex justify-content-end pb-3">
                                                                <span className="pr-3">
                                                                    <button className="btn-create" type="submit">{t("저장하기")}</button>
                                                                </span>
                                                            </div>
                                                        </form>
                                                    </div>
                                                    <div className="px-2">
                                                        { data && data.comments[index].data  ? 
                                                            data.comments[index].data.map( (value2, index2) => {
                                                                return(
                                                                    <div key={index2}>
                                                                        <div className="card">
                                                                            <div className="px-2 py-3">
                                                                                <h4 className="px-0 py-0">{value2.content}</h4>
                                                                                <h4 className="px-0 py-0">{value2.id}</h4>
                                                                                { user.id == value2.user_id ?
                                                                                    <div className="row mx-0 px-0">
                                                                                        <span className="pr-2">
                                                                                            <div className="text-center">
                                                                                                <button type="button" className="btn-create" data-toggle="modal" data-target="#editCommentModal" 
                                                                                                onClick={()=>{setCommentSelect(value2.id)} }
                                                                                                >
                                                                                                {t("수정하기")}
                                                                                                </button>
                                                                                            </div>
                                                                                            <EditComment_modal
                                                                                                closeTimeoutMS={200}
                                                                                                contentLabel="editCommentModal"
                                                                                            />  
                                                                                        </span>
                                                                                        <span className="pr-2">
                                                                                            <form onSubmit={handleSubmit(onCommnetDelete)}>
                                                                                                <button className="btn-create" onClick={()=>{setCommentSelect(value2.id)} }>{t("삭제하기")}</button>    
                                                                                            </form>
                                                                                        </span>  
                                                                                    </div>
                                                                                :
                                                                                    <div></div>
                                                                                }
                                                                            </div>
                                                                            
                                                                        </div>
                                                                    </div>
                                                                )
                                                                
                                                            })
                                                            // <div>
                                                            //     y
                                                            // </div>

                                                        :
                                                            <div>
                                                                comment is no
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                                :
                                                    // 비관리자 관점
                                                    <div className="col-sm-12 col-lg-12 py-2">
                                                        {/* 댓글 작성 */}
                                                        <div className="px-2">
                                                            <form onSubmit={handleSubmit(onCreateComment)}>
                                                                <div className="form-group">
                                                                    <label className="">{t("댓글 작성")}</label>
                                                                    <textarea className="form-control" name="content" id="content" cols="30" rows="4"
                                                                        placeholder={t("댓글을 입력해 주세요.")}
                                                                        onChange={ e => {
                                                                            const {
                                                                            target: { value }
                                                                            } = e;
                                                                            setContent2(value);
                                                                        }}
                                                                    >
                                                                    </textarea>
                                                                </div>
                                                                <div className="form-group d-flex justify-content-end pb-3">
                                                                    <span className="pr-3">
                                                                        <button className="btn-create" type="submit">{t("저장하기")}</button>
                                                                    </span>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        {/* 댓글*/}
                                                        <div className="px-2">
                                                            <div className="scroll">
                                                                { 
                                                                    data && data.comments[index].data  ? 
                                                                        data.comments[index].data.map( (value2, index2) => {
                                                                            return(
                                                                                <div key={index2}>
                                                                                    {showModalCommentIsState == true && value2.id == commentSelect ? 
                                                                                        //댓글 변경 폼
                                                                                        <div className="card">
                                                                                            <form onSubmit={handleSubmit(onCommentUpdate)}>
                                                                                                <div className="px-3">
                                                                                                    <div className="form-group">
                                                                                                        {/* <label className="">{t("내용")}</label> */}
                                                                                                        <textarea className="form-control" name="content" id="content" cols="30" rows="5"
                                                                                                        placeholder={value2.content}
                                                                                                        onChange={ e => {
                                                                                                            const {
                                                                                                            target: { value }
                                                                                                            } = e;
                                                                                                            setCommentContent(value);
                                                                                                        }}
                                                                                                        ></textarea>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <hr/>
                                                                                                <div className="form-group d-flex justify-content-end pb-3">
                                                                                                    <span className="pr-3">
                                                                                                        <button className="btn-create" type="submit">{t("저장하기")}</button>
                                                                                                    </span>
                                                                                                    <span className="pr-3">
                                                                                                        <button className="btn-create" type="buttom" onClick={()=>{offCommentEdit()}}>{t("돌아가기")}</button>
                                                                                                    </span>
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    :
                                                                                        // 댓글 폼
                                                                                        <div className="card">
                                                                                            <div className="px-2 py-3">
                                                                                                <div className="d-flex justify-content-between">
                                                                                                    <div className="d-flex align-middle">
                                                                                                        <span>
                                                                                                            <h4 className="px-0 py-0 comment-text">{value2.user_id} - </h4>
                                                                                                        </span>
                                                                                                        <span>
                                                                                                        <h4 className="px-0 py-0 comment-text"> {value2.content}</h4>
                                                                                                        </span>
                                                                                                    </div>
                                                                                                {user.id == value2.user_id ?
                                                                                                    <div className="row mx-0 px-0">
                                                                                                        <span className="pr-2">
                                                                                                            <div className="text-center">
                                                                                                                <button type="button" className="btn-create" data-toggle="modal" data-target="#editCommentModal" 
                                                                                                                onClick={()=>{onCommnetEdit(), setCommentSelect(value2.id)} }
                                                                                                                >
                                                                                                                {t("수정하기")}
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </span>
                                                                                                        <span className="pr-2">
                                                                                                            <form onSubmit={handleSubmit(onCommnetDelete)}>
                                                                                                                <button className="btn-create" onClick={()=>{setCommentSelect(value2.id)} }>{t("삭제하기")}</button>    
                                                                                                            </form>
                                                                                                        </span>  
                                                                                                    </div>
                                                                                                    
                                                                                                :
                                                                                                    //버튼 안보일 때
                                                                                                    <div></div>
                                                                                                }

                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    }
                                                                                </div>
                                                                            )
                                                                            
                                                                        })
                                                                    :
                                                                        <div>comment is no</div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                            }
                                            
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
            :
                // 수정하기 
                <Fragment>
                    {data && data.questions.data ? data.questions.data.map( (value, index) => {
                        return (
                            value.id == select ? 
                            <div key={index} className="modal fade show" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModal" style={{backgroundColor: "#000000cc"}}>
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content modal-80size">
                                        <div className="container">
                                            <div className="modal-header">
                                                <h1 className="">{t("글 수정")}</h1>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <form onSubmit={handleSubmit(onUpdate)}>
                                                <div className="px-3">
                                                    <div className="form-group">
                                                            <label className="pt-1">{t("제목")}</label>
                                                            <input className="form-control" type="text" id="title" name="title" 
                                                            placeholder={value.title}
                                                            onChange={ e => {
                                                                const {
                                                                target: { value }
                                                                } = e;
                                                                setTitle(value);
                                                            }}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="">{t("본문")}</label>
                                                        <textarea className="form-control" name="content" id="content" cols="30" rows="10"
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setContent(value);
                                                        }}
                                                        >{value.content}</textarea>
                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className="form-group d-flex justify-content-end pb-3">
                                                    <span className="pr-3">
                                                        <button className="btn-create" type="submit">{t("저장하기")}</button>
                                                    </span>
                                                    <span className="pr-3">
                                                        <button className="btn-create" type="button" onClick={()=>{offShowEdit()}}>{t("돌아가기")}</button>
                                                    </span>
                                                </div>
                                            </form> 
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
        : 
            <div></div>
    )
}