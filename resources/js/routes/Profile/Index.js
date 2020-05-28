import React, {useContext, useState, useEffect} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import Info_menu from "../../layuot/Info_menu";
import User_modal from "./User_modal";
export default () => {
    const { user } = useContext(AppContext);

    const [profile, setProfile] = useState("");         //프로필
    const [product, setProduct] = useState("");         //등록 제품
    const [product_buy, setProduct_buy] = useState("")  //등록 제품(구입날짜 때문에 (유저가 안샀는 경우도 있으니))
    const [user_product_buy_key, setUser_product_buy_key] = useState([]);  //구입한 제품의 키
    const [reports, setReports] = useState([]);   //신고 이력
    const [boards, setBoards] = useState([]);     //작성한 게시글
    const [board_categories, setBoard_categories] = useState([]);   //작성한 게시글의 카테고리
    const [board_comments, setBoards_comments] = useState([]);      //작성한 게시글의 댓글

    useEffect(()=>{
        Axios.get(`/info/index/${user.id}`).then(res => {
            // console.log(res.data);
            setProfile(res.data.user);
            setProduct(res.data.product);
            setProduct_buy(res.data.product_buy);
            setUser_product_buy_key(res.data.user_product_buy_key);
            setReports(res.data.reports.data);
            setBoards(res.data.boards.data);
            setBoard_categories(res.data.board_categories);
            setBoards_comments(res.data.board_comments);
        })
    }, [user]);
    // console.log(profile);      
    // console.log(product);
    // console.log(product_buy);
    // console.log(user_product_buy_key);
    // console.log(reports);
    // console.log(boards);
    // console.log(board_categories);
    // console.log(board_comments);

    // console.log("good");     //총 18번 렌더 (useEffect 2번, set~ = 8개 * 2 =)

    return (
        <div>
            {profile ? (
                <section id="intro" className="section intro" style={{padding: "50px 0px 0px 0px", background: "#f7f7f7"}}>
                    <div className="row">
                        <div className="col-md-2 col-xs-2 col-sm-2">
                            <Info_menu/>
                        </div>
                        <div className="col-md-8 col-xs-8 col-sm-8">
                            <br/>
                            <br/>
                            <h3>개인 정보</h3>
                            <div className="row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="thumbnail">
                                        <div className="caption">
                                            <h3 className="text-center">유저 정보</h3>
                                            <hr style={{background:"darkgrey"}}/>
                                            <p style={{fontSize:"20px"}}><b>이메일</b> : {profile.email}</p>
                                            <p style={{fontSize:"20px"}}><b>이름</b> : {"a"}</p>
                                            <p style={{fontSize:"20px"}}><b>생년월일</b> : {"a"}</p>
                                            <p style={{fontSize:"20px"}}><b>성별</b> : {"a"}</p>
                                            <p style={{fontSize:"20px"}}><b>휴대폰 번호</b> : {"a"}</p>
                                            {/* <!-- Button trigger modal --> */}
                                            {/* {{-- <button type="button" className="btn btn-success" data-toggle="modal" data-target="#userModal">
                                                수정하기
                                            </button>
                                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#userModal">
                                                상세보기
                                            </button> --}} */}
                                            {/* @include('info.user.user_modal',compact('user')) */}
                                            {/* <User_modal/> */}
                                            <hr style={{background:"darkgrey"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ): null}
        </div>
    )
}