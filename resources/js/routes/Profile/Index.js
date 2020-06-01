import React, {useContext, useState, useEffect} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import Geocode from "react-geocode";
import {Link} from "react-router-dom";
import Info_menu from "../../layuot/Info_menu";
import Product_modal from "./Product_modal";

export default ( {history} ) => {
    const { user } = useContext(AppContext);
    const [profile, setProfile] = useState("");         //프로필
    const [product, setProduct] = useState("");         //등록 제품
    const [product_buy, setProduct_buy] = useState("")  //등록 제품(구입날짜 때문에 (유저가 안샀는 경우도 있으니))
    const [user_product_buy_key, setUser_product_buy_key] = useState([]);  //구입한 제품의 키
    const [reports, setReports] = useState([]);   //신고 이력
    const [boards, setBoards] = useState([]);     //작성한 게시글
    const [board_categories, setBoard_categories] = useState([]);   //작성한 게시글의 카테고리
    const [board_comments, setBoards_comments] = useState([]);      //작성한 게시글의 댓글
    const [data, setData] = useState("");
    useEffect(()=>{
        Axios.get(`/info/index/${user.id}`).then(res => {
            setData(res.data);
            // console.log(res.data);
            // setProfile(res.data.user);
            // setProduct(res.data.product);
            // setProduct_buy(res.data.product_buy);
            // setUser_product_buy_key(res.data.user_product_buy_key);
            // setBoards(res.data.boards.data);
            // setBoard_categories(res.data.board_categories);
            // setBoards_comments(res.data.board_comments);
            // setReports(res.data.reports.data);
        })
    }, [user]);
    // console.log(profile);      
    // console.log(product);
    // console.log(product_buy);
    // console.log(user_product_buy_key);
    // console.log(boards);
    // console.log(board_categories);
    // console.log(board_comments);
    console.log(data);
    // console.log("good");     //총 18번 렌더 (useEffect 2번, set~ = 8개 * 2 =)

    // const gps = (index, latitude, longitude) => {
    //     let location = null;
    //     console.log(index);
    //     if(index == 1){
    //         Geocode.setApiKey(process.env.MIX_GCP_API_KEY);
    //         Geocode.setLanguage("ko");
    //         new Promise(function(res, rej) {
    //             res(Geocode.fromLatLng(latitude, longitude))
    //         }).then(
    //             res => {
    //                 location = res.results[0].formatted_address;
    //                 console.log(location);
    //                 setReports(res.results[0].formatted_address);
    //                 location = reports;
    //             }
    //         )
    //     }
    //     return location;
    // }

    return (
        <div>
            {/* {profile ? ( */}
            {data && data.user? (
                <section id="intro" className="section intro" style={{padding: "50px 0px 0px 0px", background: "#f7f7f7"}}>
                    <div className="row">
                        <div className="col-md-2 col-xs-2 col-sm-2">
                            <Info_menu/>
                        </div>
                        <div className="col-md-8 col-xs-8 col-sm-8">
                            <br/>
                            <br/>
                            <h3 style={{color:"orange"}}>개인 정보</h3>
                            <div className="row">
                                <div className="col-sm-6 col-md-3">
                                    <div className="thumbnail">
                                        <div className="caption">
                                            <h4 className="text-center">유저 정보</h4>
                                            <hr style={{background:"darkgrey"}}/>
                                            {/* <p style={{fontSize:"20px"}}><b>이메일</b> : {profile.email}</p>
                                            <p style={{fontSize:"20px"}}><b>이름</b> : {profile.name}</p>
                                            <p style={{fontSize:"20px"}}><b>생년월일</b> : {profile.birth}</p>
                                            <p style={{fontSize:"20px"}}><b>성별</b> : {profile.gender}</p>
                                            <p style={{fontSize:"20px"}}><b>휴대폰 번호</b> : {profile.phone}</p> */}
                                            <p style={{fontSize:"20px"}}><b>이메일</b> : {data.user.email}</p>
                                            <p style={{fontSize:"20px"}}><b>이름</b> : {data.user.name}</p>
                                            <p style={{fontSize:"20px"}}><b>생년월일</b> : {data.user.birth}</p>
                                            <p style={{fontSize:"20px"}}><b>성별</b> : {data.user.gender}</p>
                                            <p style={{fontSize:"20px"}}><b>휴대폰 번호</b> : {data.user.phone}</p>
                                            <hr style={{background:"darkgrey"}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-5">
                                    <div className=" thumbnail">
                                        <div className="caption">
                                            <h4 className="text-center">신고 이력 </h4>
                                            <hr style={{background:"red"}}/>
                                            {/* {{-- 신고 이력 --}} */}
                                            {data.reports.data ? data.reports.data.map( (value, index) => {
                                                return (
                                                    <div className="row" key={index}>
                                                        <div className="col-sm-6 col-md-6">
                                                            <p>접수날짜 : {value.created_at}</p>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6">
                                                            <p className="gps">
                                                                {/* {gps(index, value.latitude, value.longitude)} */}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :   (
                                                <p className="text-center text-danger" style={{fontSize:"20px"}}>
                                                    이력이 없습니다.
                                                </p>
                                                )
                                            }


                                            {/* @forelse($reports as $report) */}
                                            <div className="row">
                                                <div className="col-sm-6 col-md-6">
                                                </div>
                                                <div className="col-sm-6 col-md-6">
                                                    <p className="gps{{$report->id}}"></p>
                                                </div>
                                                <p className="text-danger">최근 3건만 표시됩니다.</p>
                                            </div>
                                            <hr style={{background:"red"}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="thumbnail">
                                        <div className="caption">
                                            <h4 className="text-center">제품 등록 정보</h4>
                                            <hr style={{background:"green"}}/>
                                            {data.product ? 
                                            (
                                                <div>
                                                    <p id="text_product_key" style={{fontSize:"20px"}}><b>제품키</b> : {data.product.product_key}</p>
                                                    <p id="text_product_date_buy" style={{fontSize:"20px"}}><b>구입날짜</b> : {data.product_buy.created_at}</p>
                                                    <p id="text_product_date_as" style={{fontSize:"20px"}}><b>무상 AS기한</b> : 구입 후 1년까지</p>
                                                    <button type="button" className="btn btn-success" data-toggle="modal" data-target="#productModal">
                                                        제품 재등록
                                                    </button>
                                                    <button type="button" className="btn btn-primary btn__delete__product">
                                                        제품 삭제
                                                    </button>
                                                </div>
                                                
                                            ) : (
                                                <div>

                                                    <p className="text-center text-danger">등록한 제품이 없습니다.</p>
                                                    <button type="button" className="btn btn-primary" data-toggle="modal"
                                                        data-target="#productModal">
                                                        제품 등록
                                                    </button>
                                                    {/* @endif */}
                                                    <Product_modal product={data.product}/>
                                                </div>
                                            )}
                                        </div>
                                        <hr style={{background:"green"}}/>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="thumbnail">
                                        <div className="caption">
                                            <h4 className="text-center">문의 이력 </h4>
                                            <table className="table" style={{borderTop: "3px solid blue", borderBottom: "3px solid blue"}}>
                                                <thead>
                                                    <tr>
                                                        <th className="text-center" scope="col" style={{fontSize:"20px"}}>#</th>
                                                        <th className="text-center" scope="col" style={{fontSize:"20px"}}>제목</th>
                                                        <th className="text-center" scope="col" style={{fontSize:"20px"}}>카테고리</th>
                                                        <th className="text-center" scope="col" style={{fontSize:"20px"}}>작성날짜</th>
                                                        <th className="text-center" scope="col" style={{fontSize:"20px"}}>조회수</th>
                                                        <th className="text-center" scope="col" style={{fontSize:"20px"}}>대답여부</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {/* @for($i = 0; $i < count($boards); $i++) */}
                                                        {/* <tr onClick="location.href='/boards/{{$board_categories[$i]->category=="유저리뷰" ? "reviews" : "questions"}}/{{$boards[$i]->id}}'"> */}
                                                    {/* <tr>    
                                                        <th className="text-center" scope="row">{data.boards.data}</th>
                                                        <td className="text-center">{$boards[$i]->title}</td>
                                                        <td className="text-center">{$board_categories[$i]->category}</td>
                                                        <td className="text-center">{$boards[$i]->created_at}</td>
                                                        <td className="text-center">{$boards[$i]->view_count}</td>
                                                        
                                                        @if($board_comment[$i])
                                                        <td className="text-center">O</td>
                                                        @else 
                                                        <td className="text-center">X</td>
                                                        @endif
                                                    </tr>
                                                    {{-- @empty 
                                                    <p className="text-center text-danger">이력이 없습니다.</p> --}}
                                                    @endfor
                                                    <br /> */}
                                                    {data.boards.data ? data.boards.data.map( (value, index) => {
                                                        return (
                                                            <tr key={index} onClick={()=> history.push(`/boards/${data.board_categories[index].category == "유저리뷰" ? "reviews" : "questions"}/${value.id}`)} style={{cursor:"pointer"}}>
                                                                <th className="text-center" scope="row">{value.id}</th>
                                                                <td className="text-center" scope="row">{value.title}</td>
                                                                <td className="text-center" scope="row">{data.board_categories[index].category}</td>
                                                                <td className="text-center" scope="row">{value.created_at}</td>
                                                                <td className="text-center" scope="row">{value.view_count}</td>
                                                                <td className="text-center" scope="row">{data.board_comments[index] ? "O" : "X"}</td>
                                                            </tr>
                                                        )
                                                    })
                                                    :   (
                                                        <p className="text-center text-danger" style={{fontSize:"20px"}}>
                                                            이력이 없습니다.
                                                        </p>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                            <p className="text-danger">최근 5건만 표시됩니다.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-4">
                                    <div className="thumbnail">
                                        <div className="caption">
                                            <h4 className="text-center">제품 구매 정보</h4>
                                            <hr style={{background:"green"}}/>
                                            {/* @if(count($user_product_buy_key))
                                                @for($i = 0; $i < count($user_product_buy_key); $i++)
                                                    {{-- <p id="text_product_name">제품 명 : {{$product->product_name}}</p> --}}
                                                    <p id="text_product_buy_key" style="font-size:20px"><b>구매한 제품 키{{$i + 1}} </b> : {{$user_product_buy_key[$i]->product_key}}</p>
                                                    {{-- <p id="text_product_buy_date_buy" style="font-size:20px"><b>구입날짜</b> : {{$product_buy->created_at}}</p>
                                                    <p id="text_product_buy_date_as" style="font-size:20px"><b>무상 AS기한</b> : 구입 후 1년까지</p> --}}
                                                    
                                                    {{-- <button className="btn btn-primary">등록하기</button> --}}
                                                @endfor
                                            @else
                                            <p className="text-center text-danger">구매한 제품이 없습니다.</p>
                                            @endif */}
                                            {data.user_product_buy_key ? data.user_product_buy_key.map( (value, index) => {
                                                return (
                                                    <div className="text-center" key={index}>
                                                        <p id="text_product_key">구매한 제품키 : {value.product_key}</p>
                                                    </div>
                                                )
                                            })
                                            :   (
                                                <p className="text-center text-danger" style={{fontSize:"20px"}}>
                                                    이력이 없습니다.
                                                </p>
                                                )
                                            }
                                        </div>
                                        <hr style={{background:"green"}}/>
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