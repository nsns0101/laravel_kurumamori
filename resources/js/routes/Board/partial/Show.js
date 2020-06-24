import React, {Fragment,useContext, useState, useEffect} from "react";
import moment from "moment";
import { BoardContext } from "../BoardContanier";
import {Link} from "react-router-dom";


export default () => {
    
    const {
        user,
        data,
        setAction,
        history,
        select,
        onDelete,
        handleSubmit,
    } = useContext(BoardContext);

    // useEffect(()=>{
        
    //     console.log("show useEffect");
    //     const url = `/select/boards/questions`;
    //     const config = {
    //         headers: {
    //             'Content-Type' : 'application/json'
    //         }
    //     }
    //     return Axios.get(url,{
    //         params : {
    //             board_id : select,
    //         }
    //         },config).then(res => {
    //         if(res.data){
    //             console.log("Board show call success")
    //             console.log(res)
    //             // setAction('index')
    //             // history.push('/boards/questions')
    //         }
    //         else{
    //             console.log("Board show call fail")
    //         }
    //     })

    // }, []);

    return (
        <Fragment>
            {data && data.questions.data ? data.questions.data.map( (value, index) => {
                return (
                    value.id == select ? 
                    <div className="container mt-5 pt-5">
                        <header>
                            <span><Link to="/boards/questions" onClick={()=>{setAction("index")}} className="nav-link">HOME</Link></span>
                            <span className="question-show-slicer">></span>
                            <span >
                                {/* 변경예정 */}
                                <a className="question-show-category" href="{{route('questions.index',['category_id'=>$category])}}">{data.category[index]}</a> 
                                {/* <Link to="/board/questions" onClick={()=>{setAction("index")}} className="nav-link"></Link> */}
                            </span>
                        </header>
                        <hr className="question-show-split"/>
                        <div className="p-1">
                            <div>
                                <h4 className="question-show-title">{value.title}</h4>
                            </div>
                            <div className="px-3">
                                {/* 변경예정 */}
                                <span><a className="question-show-name" href="{{route('questions.index',['user_id'=>$question->user->id])}}">{data.board_user[index]}</a></span>
                                <span>{}</span>
                                <span className="px-2">|</span>
                                <span>{moment(value.created_at).format("YYYY-MM-DD")}</span>
                                <span className="px-2">|</span>
                                <span>{value.view_count}</span>
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
                            <span className="pr-2">
                                <Link to={"/board/questions/"+data.questions.data.id+"/edit"} className="nav-link">수정하기</Link>
                            </span>
                            <span className="pr-2">
                                <form onSubmit={handleSubmit(onDelete)}>
                                    <button className="btn btn-point">삭제하기</button>    
                                </form>
                            </span>
                            <span>
                                <Link to="/boards/questions"onClick={()=>{setAction("index")}} className="nav-link">뒤로가기</Link>
                            </span>
                        </div>
                    </div>
                    :
                    <div></div>
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