import React, {Fragment,useContext, useState, useEffect} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import moment from "moment";
import ReactPlayer from 'react-player';
import { Route, Link, BrowserRouter} from "react-router-dom";

export default (
    {user,
    data,
    setData}
) => {
    // console.log(data.questions)

    return (
        user == null ? 
        <div>로그인이 필요합니다.</div> :
        <Fragment>
            <div id="main-question">
                <div className="contaienr px-3 py-5 p-md-5">
                    <div className="row m-3">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <div>

                            </div>
                            <div className="row mb-3"> 
                                <div className="input-group col-xs-8 col-sm-8 col-md-4 mr-auto" method="get" action="{{route('questions.index')}}" role="search">
                                    <input></input>
                                    <div className="input-group-append">
                                        <button className="btn btn-point" type="submit">button</button>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <Link to="/board/create" id="" className="btn btn-intro text-dark" >글 작성</Link>
                                </div>
                            </div>
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
                                                <td className="align-middle">{value.comment ?  "O": "x"}</td> 
                                                <td className="align-middle">{data.category[index]}</td> 
                                                <td className="align-middle question-index-name"><Link to={"/board/show/"+data.questions.data.id} id="" className="btn btn-intro text-dark" >{value.title}</Link></td>
                                                <td className="align-middle">{value.user_id}</td>
                                                <td className="align-middle text-nowrap">{moment(value.created_at).format("YYYY-MM-DD")}</td>
                                                <td className="align-middle text-nowrap">{value.view_count}</td>
                                            </tr>
                                        )
                                    })
                                    :   (
                                        <p className="text-center" style={{color:"blue"}}>
                                            작성된 글이 없습니다.
                                        </p>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}