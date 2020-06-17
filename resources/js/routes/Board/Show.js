import React, {Fragment,useContext, useState, useEffect} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import ReactPlayer from 'react-player';
import { Route, Link, BrowserRouter} from "react-router-dom";

export default () => {

    const { user } = useContext(AppContext);
    const [data, setData] = useState("");

    const onDelete = () => {
        if(window.confirm("제품등록을 취소하시겠습니까?")){
            const url = `/boards/questions/${data.questions.data.id}`;
            return Axios.delete(url).then(res => {
                window.location.reload();
            })
        }
    }
    return (
        <Fragment>
            <div className="container mt-5 pt-5">
                <header>
                    <span><Link to="/board/questions" className="nav-link">HOME</Link></span>
                    <span className="question-show-slicer">></span>
                    <span >
                    {/* <a className="question-show-category" href="{{route('questions.index',['category_id'=>$category])}}">공지사항</a> */}
                    </span>
                </header>
                <hr className="question-show-split"/>
                <div className="p-1">
                    <div>
                    <h4 className="question-show-title">공지사항 임시 작성</h4>
                    </div>
                    <div className="px-3">
                    {/* <span><a className="question-show-name" href="{{route('questions.index',['user_id'=>$question->user->id])}}">김도형</a></span> */}
                    {/* <span>{App\User::find(data.questions.data.user_id)->name}</span> */}
                    <span className="px-2">|</span>
                    <span>{data.questions.data.created_at}</span>
                    <span className="px-2">|</span>
                    <span>{data.questions.data.view_count}</span>
                    </div>
                    <hr className="question-show-split"/>
                    <div className="py-3">
                    <h4 className="text-justify question-show-content">
                        {data.questions.data.content}
                    </h4>
                    </div>
                </div>
                <hr className="question-show-split"/>
                <div className="d-flex justify-content-end pb-3">
                    <span className="pr-2">
                        <Link to={"/board/questions/"+data.questions.data.id+"/edit"} className="nav-link">수정하기</Link>
                    </span>
                    <span className="pr-2">
                        <form method="POST" action="{{route('questions.destroy',compact('question'))}}">
                        <button className="btn btn-point" onClick={()=>{onDelete}}>삭제하기</button>    
                        </form>
                    </span>
                    <span>
                    <a className="btn btn-point" href="{{route('questions.index')}}">뒤로가기</a>
                    </span>
                </div>
            </div>
        </Fragment>
    )

}