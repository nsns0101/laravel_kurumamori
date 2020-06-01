import React, {useContext, useState, useEffect} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import Info_menu from "../../layuot/Info_menu";
import User_modal from "./User_modal";
import Geocode from "react-geocode";
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
            setBoards(res.data.boards.data);
            setBoard_categories(res.data.board_categories);
            setBoards_comments(res.data.board_comments);
            setReports(res.data.reports.data);
        })
    }, [user]);
    // console.log(profile);      
    // console.log(product);
    // console.log(product_buy);
    // console.log(user_product_buy_key);
    // console.log(boards);
    // console.log(board_categories);
    // console.log(board_comments);

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
    //             }
    //         )
    //     }
    //     return location;
    // }

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
                                            <p style={{fontSize:"20px"}}><b>이름</b> : {profile.name}</p>
                                            <p style={{fontSize:"20px"}}><b>생년월일</b> : {profile.birth}</p>
                                            <p style={{fontSize:"20px"}}><b>성별</b> : {profile.gender}</p>
                                            <p style={{fontSize:"20px"}}><b>휴대폰 번호</b> : {profile.phone}</p>
                                            <hr style={{background:"darkgrey"}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-md-5">
                                    <div className=" thumbnail">
                                        <div className="caption">
                                            <h3 className="text-center">신고 이력 </h3>
                                            <hr style={{background:"red"}}/>
                                            {/* {{-- 신고 이력 --}} */}
                                            {reports ? reports.map( (value, index) => {
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
                                                {/* {{-- 위도 경도로 주소찾기 --}} */}
                                                {/* <script>
                                                    var gps = "";
                                                    var API_KEY = "{{env('GCP_API_KEY')}}";
                                                    var latitude = "{{$report->latitude}}";
                                                    var longitude = "{{$report->longitude}}";
                                                    // console.log(latitude);
                                                    // console.log(longitude);

                                                    new Promise(function(resolve, reject) {
                                                        resolve(
                                                            $.getJSON(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`,
                                                            function(data) {
                                                                console.log(data);
                                                                gps = data.results[0].formatted_address;
                                                                console.log(gps);
                                                                $(`.gps{{$report->id}}`).text(gps);
                                                            }));
                                                    });
                                                    // $(`.gps{{$report->id}}`).text("api쓰는거라 실제 쓸때 위에 주석 푸셈"); */}
                                                {/* </script> */}

                                            </div>
                                            {/* {{-- 신고 이력이 없을 경우 --}} */}
                                            {/* @empty */}
                                            
                                            {/* @endforelse */}
                                            <p className="text-danger">최근 3건만 표시됩니다.</p>
                                        </div>
                                        <hr style={{background:"red"}}/>
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