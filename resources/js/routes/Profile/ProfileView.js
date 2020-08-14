import React, {useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import {AppContext} from "../../components/App";
import {ProfileContext} from "./ProfileContainer";
import Loader from "../../components/Loader";
import moment from "moment";
import "./Profile.css";
import Profile_User from "../../components/Profile_User";
import Info_menu from "../../layout/Info_menu";
import Product_modal from "./partial/Product_modal";

export default ({history}) => {
    const { user, setUser, t } = useContext(AppContext);
    const { 
        data,
        setProduct_key_input,
        error_text,
        onSubmit,
        reports,
     } = useContext(ProfileContext);
    return data && user.id ? (
        <div style={{backgroundColor:"white"}}>
            <div className="row" style={{padding:"50px 0 50px 0"}}>
                {/* 여백 */}
                <div className="col-md-1"></div>
                
                {/* 내용 */}
                <div className="col-md-10">
                    <section id="intro" className="section intro">
                        <div className="row">
                            <div className="col-md-3">
                                <Profile_User/> 
                            </div>
                            <div className="col-md-9">
                                <Info_menu/>
                                <div className="" style={{height:"654px", overflowY:"auto", overflowX:"hidden", marginTop:"30px"}}>
                                    {/* 사고 이력 */}
                                    <div className="card" style={{padding:"20px 20px 0 20px"}}>
                                        <p className="no_scroll_p">{t("사고 이력")}</p>
                                        <div style={{maxHeight:"140px", overflowY:"auto", overflowX:"hidden"}}>
                                            {data.reports.data.length ? data.reports.data.map( (value, index) => {
                                                return (
                                                    // 
                                                    <div className="row" key={index}>
                                                        <div className="col-sm-12 col-lg-6 mb-3">
                                                            <p className="card-text"><b className="accident_date_p">{t("접수날짜")}</b><br/>{moment(value.created_at).format("YYYY-MM-DD hh:mm:ss")}</p>
                                                        </div>
                                                        <div className="col-sm-12 col-lg-6 mb-3">
                                                            <p className="card-text"><b className="accident_place_p">{t("사고지역")}</b><br/>{reports[index]}</p>        
                                                        </div>
                                                    </div>
                                                )
                                            })
                                            :   (
                                                <p className="text-center text-danger" style={{fontSize:"20px"}}>
                                                    {t("이력이 없습니다.")}
                                                </p>
                                                )
                                            }
                                        </div>
                                    </div>
                                    
                                    {/* 제품 관련 */}
                                    <div className="row">
                                        {/* 제품 등록 정보 */}
                                        <div className="col-md-6">
                                            <div className="card" style={{marginTop:"30px", padding:"20px"}}>
                                                <p className="no_scroll_p">{t("제품 등록 정보")}</p>
                                                {data.product ? (
                                                    <div className="row on_registration_product" style={{maxHeight:"94px", overflowY:"auto", overflowX:"hidden"}}>
                                                        {/* 등록한 제품키 */}
                                                        <div className="col-md-6 text-center">
                                                            <hr style={{width:"30px", border:"2px solid green", margin:"0 auto 10px auto"}}/>
                                                            <p style={{fontWeight:"600", color:"black"}}>{t("제품 키")}</p>
                                                            <p style={{fontWeight:"600"}}>{data.product.product_key}</p>
                                                        </div>
                                                        {/* 구입일 */}
                                                        <div className="col-md-6 text-center">
                                                            {/* <img src="/icon/blue_line.png"/> */}
                                                            <hr style={{width:"30px", border:"2px solid green", margin:"0 auto 10px auto"}}/>
                                                            <p style={{fontWeight:"600", color:"black"}}>{t("구입 날짜")}</p>
                                                            <p style={{fontWeight:"600"}}>{moment(data.product_buy.created_at).format("YYYY-MM-DD")}</p>
                                                        </div>
                                                    </div>
                                                ): (
                                                    <div className="not_registration_product">
                                                        <p className="text-center" style={{color:"black", fontSize:"14px",fontWeight:"bold"}}>
                                                            {t("등록된 제품이 없습니다.")}
                                                        </p>
                                                        <div className="text-center">
                                                            <button type="button" className="btn btn-primary " data-toggle="modal" data-target="#productModal" style={{}}>
                                                                {t("제품 등록")}
                                                            </button>
                                                        </div>   
                                                    </div>
                                                )}
                                                
                                            </div>
                                            <Product_modal 
                                                product={data.product}
                                                setProduct_key_input={setProduct_key_input}
                                                error_text={error_text}
                                                history={history}
                                                onSubmit={onSubmit}
                                            />
                                        </div>
                                        
                                        {/* 제품 구매 이력 */}
                                        <div className="col-md-6">
                                            <div className="card" style={{marginTop:"30px", padding:"20px"}}>
                                                <p className="no_scroll_p">{t("제품 구매 이력")}</p>
                                                <div style={{maxHeight:"94px", overflowY:"auto", overflowX:"hidden"}}>
                                                    {data.user_product_buy_key.length ? data.user_product_buy_key.map( (value, index) => {
                                                        return (
                                                            <div className="row on_buy_product">
                                                                {/* 제품 키 */}
                                                                <div className="col-md-6 text-center">
                                                                    <hr style={{width:"30px", border:"2px solid green", margin:"0 auto 10px auto"}}/>
                                                                    <p style={{fontWeight:"600", color:"black"}}>{t("제품 키")}</p>
                                                                    <p style={{fontWeight:"600"}}>{value.product_key}</p>
                                                                </div>
                                                                {/* 구입일 */}
                                                                <div className="col-md-6 text-center">
                                                                    {/* <img src="/icon/blue_line.png"/> */}
                                                                    <hr style={{width:"30px", border:"2px solid green", margin:"0 auto 10px auto"}}/>
                                                                    <p style={{fontWeight:"600", color:"black"}}>{t("구입 날짜")}</p>
                                                                    <p style={{fontWeight:"600"}}>{moment(value.created_at).format("YYYY-MM-DD")}</p>
                                                                </div>
                                                            </div>
                                                        )
                                                    }) : (
                                                        <div className="not_buy_product">
                                                            <p className="text-center" style={{color:"black", fontSize:"14px",fontWeight:"bold"}}>{t("구입한 제품이 없습니다.")}</p>
                                                            <div className="text-center">
                                                                <Link to="/products">
                                                                    <button type="button" className="btn btn-success">
                                                                        {t("제품 구입")}
                                                                    </button>
                                                                </Link>
                                                            </div>    
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>  
                                    </div>

                                    {/* 게시글 */}
                                    <div className="card" style={{marginTop:"30px", padding:"20px 20px 0 20px"}}>
                                        <p className="no_scroll_p">{t("사고 이력")}</p>
                                        <table className="table" style={{borderTop: "2px solid #e3e6f0", borderBottom: "2px solid #e3e6f0"}}>
                                            <thead>
                                                <tr>
                                                    <th className="text-center" scope="col" style={{fontSize:"20px"}}>#</th>
                                                    <th className="text-center" scope="col" style={{fontSize:"20px"}}>{t("제목")}</th>
                                                    <th className="text-center" scope="col" style={{fontSize:"20px"}}>{t("카테고리")}</th>
                                                    <th className="text-center" scope="col" style={{fontSize:"20px"}}>{t("작성날짜")}</th>
                                                    <th className="text-center" scope="col" style={{fontSize:"20px"}}>{t("조회수")}</th>
                                                    <th className="text-center" scope="col" style={{fontSize:"20px"}}>{t("대답여부")}</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {data.boards.data ? data.boards.data.map( (value, index) => {
                                                    return (
                                                        <tr key={index} onClick={()=> history.push(`/boards/${data.board_categories[index].category == "유저리뷰" ? "reviews" : "questions"}/${value.id}`)} style={{cursor:"pointer"}}>
                                                            <th className="text-center" scope="row">{value.id}</th>
                                                            <td className="text-center" scope="row">{value.title}</td>
                                                            <td className="text-center" scope="row">{t(data.board_categories[index].category)}</td>
                                                            <td className="text-center" scope="row">{moment(value.created_at).format("YYYY-MM-DD")}</td>
                                                            <td className="text-center" scope="row">{value.view_count}</td>
                                                            <td className="text-center" scope="row">{data.board_comments[index] ? "O" : "X"}</td>
                                                        </tr>
                                                    )
                                                })
                                                :   (
                                                    <p className="text-center text-danger" style={{fontSize:"20px"}}>
                                                        {t("이력이 없습니다.")}
                                                    </p>
                                                    )
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 여백 */}
                <div className="col-md-1"></div>
            </div>
        </div>
    ) : <Loader/>;
}