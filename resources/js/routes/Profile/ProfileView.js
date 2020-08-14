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
                                    {/* 제품 관련 */}
                                    <div className="row">
                                        {/* 제품 등록 정보 */}
                                        {/* <div className="col-md-2"/> */}
                                        <div className="col-md-6">
                                            <div className="card" style={{marginTop:"30px", padding:"20px"}}>
                                                <p className="no_scroll_p">{t("제품 등록 정보")}</p>
                                                {data.product ? (
                                                    <div className="row on_registration_product" style={{maxHeight:"154px", overflowY:"auto", overflowX:"hidden"}}>
                                                        {/* 제품명 */}
                                                        {/* <div className="col-md-4 text-center">
                                                            <hr style={{width:"30px", border:"2px solid green", margin:"0 auto 10px auto"}}/>
                                                            <p style={{fontWeight:"600", color:"black"}}>{t("제품 명")}</p>
                                                            <p style={{fontWeight:"600"}}>クルマモリ119</p>
                                                        </div> */}
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

                                                        <div className="col text-center">                                                      
                                                            {/* float 정렬때문에 삭제가 뒤로감 */}
                                                            <button style={{}} type="button" className="btn btn-success" data-toggle="modal" data-target="#productModal">
                                                                {t("제품 재등록")}
                                                            </button>
                                                            <button style={{marginLeft:"5px"}} type="button" onClick={() => onSubmit("delete")} className="btn btn-danger btn__delete__product">
                                                                {t("제품 삭제")}
                                                            </button>
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
                                        {/* <div className="col-md-2"/> */}
                                        {/* 제품 구매 이력 */}
                                        <div className="col-md-6">
                                            <div className="card" style={{marginTop:"30px", padding:"20px"}}>
                                                <p className="no_scroll_p">{t("제품 구매 이력")}</p>
                                                <div style={{maxHeight:"94px", overflowY:"auto", overflowX:"hidden"}}>
                                                    {data.user_product_buy_key.length ? data.user_product_buy_key.map( (value, index) => {
                                                        return (
                                                            <div key={index} className="row on_buy_product">
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
                                                                        {t("제품 구입하기")}
                                                                    </button>
                                                                </Link>
                                                            </div>    
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-1"/>
                                        <div className="col-md-10">
                                            <div className="card" style={{padding:"20px 20px 0 20px", marginTop:"30px"}}>
                                                {/* <div style={{maxHeight:"400px", overflowY:"auto", overflowX:"hidden"}}> */}
                                                <div>
                                                    <p className="no_scroll_p">{t("제품 이미지")}</p>
                                                    {data.product ? 
                                                        (   
                                                            <div className="row">
                                                                <div className="col-xl-6 col-md-12">
                                                                    <img src="/product/product_image3.png" style={{width:"80%"}}/>
                                                                </div>
                                                                <div className="col-md-1"/>
                                                                <div className="col-xl-4 col-md-12 col-sm-12">
                                                                    <div className="row on_registration_product">
                                                                        {/* 오늘의 운전 */}
                                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                                            <div className="row">
                                                                                <img src="/icon/막대 기호.png" style={{height:"20px", margin:"0 20px 0 10px"}}/>
                                                                                <p className="drive_today_p">{t("제품 명")} : クルマモリ119</p>
                                                                            </div>
                                                                            <div className="row">
                                                                                <img src="/icon/막대 기호.png" style={{height:"20px", margin:"0 20px 0 10px", visibility:"hidden"}}/>
                                                                                <p className="drive_today_p">{t("Color")} : Red</p>
                                                                            </div>
                                                                            <div className="row">
                                                                                <img src="/icon/막대 기호.png" style={{height:"20px", margin:"0 20px 0 10px", visibility:"hidden"}}/>
                                                                                <p className="drive_today_p">{t("가격")} : 147,000원</p>
                                                                            </div>
                                                                            <div className="row">
                                                                                <img src="/icon/막대 기호.png" style={{height:"20px", margin:"0 20px 0 10px", visibility:"hidden"}}/>
                                                                                <p className="drive_today_p">{t("AS기한")} : 구입후 1년까지</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : (
                                                            null
                                                        )
                                                    }
                                                </div> 
                                            </div>
                                        </div>
                                        {/* <div className="col-md-1"/> */}
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* 여백 */}
                {/* <div className="col-md-1"></div> */}
            </div>
        </div>
    ) : <Loader/>;
}