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
        onCreate,
        setTitle,
        setCategory,
        setContent,
        register,
        handleSubmit,
        setAction,
        history,
    } = useContext(BoardContext);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal fade show" id="createModal" tabIndex="-1" role="dialog" aria-labelledby="createModal" style={{backgroundColor: "#000000cc"}}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="">글 쓰기</h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onCreate)}>
                                <div className="px-3">
                                    <div className="form-group">
                                            <label className="">제목</label>
                                            <input className="form-control" type="text" id="title" name="title" 
                                            onChange={ e => {
                                                const {
                                                target: { value }
                                                } = e;
                                                setTitle(value);
                                            }}
                                            />
                                    </div>
                                    <div>
                                        <select className="form-group form-control-sm" name="category_id" id="category_id"
                                        onChange={ e => {
                                            const {
                                            target: { value }
                                            } = e;
                                            setCategory(value);
                                        }}>
                                            {user && user.id == 3 ? `` : 
                                            `<option defaultValue>공지사항</option>
                                            <option>업데이트</option>`}
                                            <option>제품구매</option>
                                            <option>제품오류</option>
                                            <option>소프트웨어</option>
                                            <option>기타문의</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="">본문</label>
                                        <textarea className="form-control" name="content" id="content" cols="30" rows="10"
                                        onChange={ e => {
                                            const {
                                            target: { value }
                                            } = e;
                                            setContent(value);
                                        }}
                                        ></textarea>
                                    </div>
                                </div>
                                <hr/>
                                <div className="form-group d-flex justify-content-end pb-3">
                                    {/* 글써지면 꺼지게 고쳐야함 */}
                                    <span className="pr-3">
                                        <button className="btn-nomal" type="submit">저장하기</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}