import React, {Fragment,useContext, useState, useEffect} from "react";
import {AppContext} from "../../components/App";
import { useForm } from "react-hook-form";
import Axios from "axios";

import { Route, Link, BrowserRouter} from "react-router-dom";

export default () => {
    const { user } = useContext(AppContext);
    const [title, setTitle] = useState(""); //setState 지역
    const [category, setCategory] = useState(""); //setAddress 주소
    const [content, setContent] = useState(""); //buy_postal 우편번호
    const { register, handleSubmit } = useForm();

    console.log("board create")
    console.log(user)
    //제품 생성
    const onSubmit = () => {
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
        return Axios.put(url, body, config).then(res => {
            if(res.data){
                console.log("성공")
                console.log(res.data)
            }
            else{
                console.log("실패")
            }
        })
    }
    return (
        <Fragment>
            <div className="container mt-5 pt-5">
                <h1 className="">글 쓰기</h1>
                <hr/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="px-3">
                        <div className="form-group">
                                <label className="" for="title {{$errors->has('title') ? 'has-error' : '' }}">제목</label>
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
                                <option defaultValue>공지사항</option>
                                <option>업데이트</option>
                                <option>제품구매</option>
                                <option>제품오류</option>
                                <option>소프트웨어</option>
                                <option>기타문의</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="" for="">본문</label>
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
                        <span className="pr-3">
                            <button className="btn btn-dark" type="submit">저장하기</button>
                        </span>
                        <span>
                            <a className="btn btn-dark" href="">뒤로가기</a>
                        </span>
                    </div>
                </form>
            </div>
        </Fragment>
    )

}