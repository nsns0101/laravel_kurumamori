import React, {useState, useContext} from "react";
import {AppContext} from "../../../components/App";
import { BoardContext } from "../BoardContanier";
import { useForm } from "react-hook-form";
import Axios from "axios";
import "../Board.css";

export default ({ 

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
        onCommentUpdate,
        setCommentContent
    } = useContext(BoardContext);

    console.log("board create form call")

    return (
        <form onSubmit={handleSubmit(onCommentUpdate)}>
            <div className="modal fade show" id="editCommentModal" tabIndex="-1" role="dialog" aria-labelledby="editCommentModal" style={{backgroundColor: "#000000cc"}}>
                <div className="modal-dialog modal-80size" role="document">
                    <div className="modal-content modal-80size">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <div className="px-3">
                                    <div className="form-group">
                                        <label className="">{t("내용")}</label>
                                        <textarea className="form-control" name="content" id="content" cols="30" rows="10"
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
                                    {/* 글써지면 꺼지게 고쳐야함 */}
                                    <span className="pr-3">
                                        <button className="btn-create" type="submit">{t("저장하기")}</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}