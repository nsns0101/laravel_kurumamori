import React, {useEffect, useState, useContext} from "react";
import Info_menu from "../../layuot/Info_menu";
import Product_modal from "./partial/Product_modal";
import {AppContext} from "../../components/App";
export default ( {
    history,
    data,
    setProduct_key_input,
    error_text,
    onSubmit,
    reports,
}) => {
    const { user, setUser } = useContext(AppContext);

    return (
        <div>
            {true ? (
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
                                                                {reports[index]}
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
                                                    <button type="button" onClick={() => onSubmit("delete")} className="btn btn-danger btn__delete__product">
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
                                                </div>
                                            )}
                                            <Product_modal
                                                product={data.product}
                                                setProduct_key_input={setProduct_key_input}
                                                error_text={error_text}
                                                history={history}
                                                onSubmit={onSubmit}
                                            />
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