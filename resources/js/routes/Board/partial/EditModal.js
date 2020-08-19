import React, {Fragment,useState, useContext} from "react";
import {AppContext} from "../../../components/App";
import { BoardContext } from "../BoardContanier";
import {Link} from "react-router-dom";
import moment from "moment";
import { useForm } from "react-hook-form";
import Axios from "axios";

export default ({ 

}) => {
    const { t } = useContext(AppContext);

    const {
        data,
        select,
        user,
        onUpdate,
        setTitle,
        setCategory,
        setContent,
        register,
        handleSubmit,
        setAction,
        history,
    } = useContext(BoardContext);

    console.log("board update form call")

    return (
        <Fragment>
            {data && data.questions.data ? data.questions.data.map( (value, index) => {
                return (
                    value.id == select ? 
                    <div key={index} className="modal fade show" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModal" style={{backgroundColor: "#000000cc"}}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
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
                                                <button className="btn-nomal" type="submit">{t("저장하기")}</button>
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
    )
}