import React, {Fragment, useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import moment from "moment";

import { BoardContext } from "./BoardContanier";
import Loader from '../../components/Loader';
import Auth from "./partial/Auth";

export default () => {

    const {
        user,
        data,
        setAction,
        setSelect,
        history,
        onShow,
    } = useContext(BoardContext);

    return (
        data ? 
            data && user.id == null ? 
            <Auth/> 
            : <Fragment>
            <div id="main-question">
                <div className="contaienr px-3 py-5 p-md-5">
                    <div className="row m-3 justify-content-around">
                        <div className="col-xs-10 col-sm-10 col-lg-10 card px-3 py-3">
                            {/* 질문 해더 */}
                            <div className="row justify-content-between py-3"> 
                                {/* 카테고리 선택 항목 */}
                                <div className="row col-sm-10 col-lg-7 justify-content-around px-0 mx-0  align-middle">
                                    <div className="border-2 border border-dark ">
                                        <Link to="/boards/questions" id="" className="btn btn-intro text-dark" >전체 글</Link>
                                    </div>
                                    <div className="border-2 border border-dark">
                                        <Link to="/boards/questions" id="" className="btn btn-intro text-dark" >제품구매</Link>
                                    </div>
                                    <div className="border-2 border border-dark">
                                        <Link to="/boards/questions" id="" className="btn btn-intro text-dark" >제품오류</Link>
                                    </div>
                                    <div className="border-2 border border-dark">
                                        <Link to="/boards/questions" id="" className="btn btn-intro text-dark" >소프트웨어</Link>
                                    </div>
                                    <div className="border-2 border border-dark">
                                        <Link to="/boards/questions" id="" className="btn btn-intro text-dark" >기타문의</Link>
                                    </div>
                                </div>
                                {/* 검색 및 글 쓰기 */}
                                <div className="col-lg-5 d-flex justify-content-end align-middle">
                                    {/* 검색 항목 */}
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="필요한 내용을 검색하세요." aria-label="Recipient's username" aria-describedby="input_value"/>
                                        <div class="input-group-append">
                                            <span className="input-group-text" id="input_button">검색</span>
                                        </div>
                                    </div>

                                    {/* 글 작성 항목 */}
                                    <div className="border-2 border border-dark">
                                        <Link to="/boards/questions/" id="" onClick={()=>{setAction("create")}} className="btn btn-intro text-dark" >글 작성</Link>
                                    </div>
                                </div>
                            </div>
                            {/* 질문 리스트 */}
                            <div className="row justify-content-between py-3">
                                <table className="table table-hover .table-responsive">
                                    <thead className="">
                                        <tr>
                                            <td>No</td>
                                            <td></td>
                                            <td>Category</td>
                                            <td>Title</td>
                                            <td>Writer</td>
                                            <td>Date</td>
                                            <td>HIT</td>
                                        </tr>
                                    </thead>
                                    <tbody className="col-12">
                                        {data && data.questions.data ? data.questions.data.map( (value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td className="align-middle text-nowrap">{value.id}</td>
                                                    {/* <td className="align-middle">{value.comment ?  "O": "x"}</td>  */}
                                                    <td className="align-middle">X</td> 
                                                    
                                                    <td className="align-middle">{data.category[index]}</td> 
                                                    <td className="align-middle question-index-name">
                                                        <Link to={`/boards/questions/`} id="" onClick={()=>{setAction("show"),setSelect(value.id), onShow()}} className="btn btn-intro text-dark">{value.title}
                                                        </Link>
                                                    </td>
                                                    <td className="align-middle">{data.board_user[index]}</td>
                                                    <td className="align-middle text-nowrap">{moment(value.created_at).format("YYYY-MM-DD")}</td>
                                                    <td className="align-middle text-nowrap">{value.view_count}</td>
                                                </tr>
                                            )
                                        })
                                        :   (
                                            <tr>
                                                <td className="text-center" style={{color:"blue"}}>작성된 글이 없습니다.</td>
                                            </tr>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        : <Loader/>
    )

}