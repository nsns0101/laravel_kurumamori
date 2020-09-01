import React, {Fragment, useContext, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import moment from "moment";
import ReactSearchBox from 'react-search-box'

import { BoardContext } from "./BoardContanier";
import Loader from '../../components/Loader';
import Auth from "./partial/Auth";
import Axios from "axios";
import Modal from 'react-modal';
import Create_modal from "./partial/CreateModal";
import Show_modal from "./partial/ShowModal";

export default ({location, match}) => {

    const {
        user,
        data,
        setData,
        setAction,
        setSelect,
        history,
        onShow,
        setSearch,
        onSearch,
        categoryHover,
        setCategoryHover,
        t,

        modalIsOpen,
        setIsOpen,
        handleSubmit,

        openCreateModal,
        closeCreateModal,
        craeteModalIsOpen,

        openShowModal,
        closeShowModal,
        showModalIsOpen,

        onShowEdit,
        offShowEdit,
        showModalIsState

    } = useContext(BoardContext);
     
    const page_count = [];
    // console.log(data.questions.last_page);
    for(var i = 0; i < data.questions.last_page; i++){
        page_count.push([i]);
    }

    // setCategoryHover('no');
    // console.log(categoryHover);

    // if(categoryHover=='yes'){
        
    // }
    // else{

    // }

    return (
        data  ? 
            data && localStorage.getItem('userToken') == null ? 
            <Auth/> 
            : <Fragment>
            <div id="main-question">
                <div className="contaienr px-3 py-5 p-md-5">
                    <div className="row m-3 justify-content-around">
                        <div className="col-xs-10 col-sm-10 col-lg-10 px-3 py-3">
                            <h2 style={{fontSize:1.6+"em", fontWeight:800}}>{t("고객문의")}</h2>
                        </div>
                        <div className="col-xs-10 col-sm-10 col-lg-10 card px-3 py-3">
                            {/* 네비게이션 */}
                            <div className="row justify-content-center py-3"> 

                                {/* 카테고리 선택 항목 */}
                                <div id="category-tab" className="col-sm-11 col-lg-11 py-2 px-0 mx-0 w-100" 
                                    onMouseEnter={()=>{setCategoryHover('yes')}}
                                    onMouseLeave={()=>{setCategoryHover('no')}}>
                                    <button id="" className="btn-toggle-tab" 
                                        style={{
                                            backgroundColor:"#6682f6",
                                            borderRadius:"0.5em"
                                        }} 
                                    >
                                        <span
                                        style={{
                                            fontSize:1+"em",
                                            borderRadius:"0.5em"
                                        }} 
                                        >{t("ALL")}</span>
                                        <ul id="mobile-only">
                                        </ul>
                                    </button>

                                    <div className="in-wrap row mx-0 px-0 justify-content-center">
                                        <div id="in-wrap" className="col-sm-11 col-lg-11 pt-3 bg-white row mx-0 px-0">
                                            <div className="col-sm-12 col-lg-12">
                                                <h2 id="" className="" style={{
                                                    fontSize:1.5+"em"
                                                }}></h2>
                                            </div>
                                            <div className="col-sm-12 col-lg-12">
                                                <ul className="row mx-0 px-0 ">
                                                    <li className="col-sm-12 col-lg-4 py-2">
                                                        <Link  to="/boards/questions/all" id="" className="category-text" >{t("ALL")}</Link>
                                                    </li>
                                                    <li className="col-sm-12 col-lg-4 py-2">
                                                        <Link to="/boards/questions/notice" id="" className="category-text" >{t("공지사항")}</Link>
                                                    </li>
                                                    <li className="col-sm-12 col-lg-4 py-2">
                                                        <Link to="/boards/questions/update" id="" className="category-text" >{t("업데이트")}</Link>
                                                    </li>
                                                    <li className="col-sm-12 col-lg-4 py-2">
                                                        <Link to="/boards/questions/productB" id="" className="category-text" >{t("제품구매")}</Link>
                                                    </li>
                                                    <li className="col-sm-12 col-lg-4 py-2">
                                                        <Link to="/boards/questions/productE" id="" className="category-text" >{t("제품오류")}</Link>
                                                    </li>
                                                    <li className="col-sm-12 col-lg-4 py-2">
                                                        <Link to="/boards/questions/software" id="" className="category-text" >{t("소프트웨어")}</Link>
                                                    </li>
                                                    <li className="col-sm-12 col-lg-4 py-2">
                                                        <Link to="/boards/questions/other" id="" className="category-text" >{t("기타문의")}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                            
                            {/* 질문 리스트 */}
                            <div className="row justify-content-center py-3">
                                <div className="col-sm-11 col-lg-11">
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
                                                        
                                                        <td className="align-middle">{t(data.category[index])}</td> 
                                                        <td className="align-middle question-index-name">
                                                            <button type="button" className="btn btn-link" data-toggle="modal" data-target="#showModal" 
                                                            onClick={()=>{ setSelect(value.id), onShow(), openShowModal(), offShowEdit()}}>
                                                                {value.title}
                                                            </button>
                                                            <Show_modal
                                                                closeTimeoutMS={200}
                                                                contentLabel="showModal"
                                                            />
                                                        </td>
                                                        <td className="align-middle">{data.board_user[index]}</td>
                                                        <td className="align-middle text-nowrap">{moment(value.created_at).format("YYYY-MM-DD")}</td>
                                                        <td className="align-middle text-nowrap">{value.view_count}</td>
                                                    </tr>
                                                )
                                            })
                                            :   (
                                                <tr>
                                                    <td className="text-center" style={{color:"blue"}}>{t("작성된 글이 없습니다.")}</td>
                                                </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                    {/* 검색 및 글 쓰기 */}
                                    <div className="row justify-content-end py-3">
                                        <div id="supplementary-tab" className="col-sm-11 col-lg-11 py-2 px-0 mx-0 w-100">
                                            {/* 검색 항목 */}
                                            {/* <div className="input-group">
                                                <input type="text" className="form-control" placeholder="필요한 내용을 검색하세요." aria-label="Recipient's username" aria-describedby="input_value"/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text" id="input_button">검색</span>
                                                </div>
                                            </div> */}
                                            <div className="row justify-content-end px-0 mx-0 w-100">
                                                {/* 글 검색 항목 */}
                                                <form className="pr-3 " onSubmit={handleSubmit(onSearch)}>
                                                    {/* <ReactSearchBox 
                                                        className="search-box"
                                                        placeholder="검색어를 입력해 주세요."
                                                        value=""
                                                        // inputBoxBorderColor=""
                                                    /> */}
                                                    <span className="row px-0 mx-0">
                                                        <input
                                                        className="search-box"
                                                        placeholder={t("검색어를 입력해 주세요.")}
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setSearch(value);
                                                        }}
                                                        >
                                                        </input>
                                                        <button className="search-botton">
                                                            <img className="search-img" src="../../icon/search.png"></img>
                                                        </button>
                                                    </span>
                                                </form>

                                                {/* 글 작성 항목 */}
                                                <div className="text-center">
                                                    <button type="button" className="btn-create " data-toggle="modal" data-target="#createModal" 
                                                    onClick={()=>{openCreateModal()}}
                                                    >
                                                        {t("글쓰기")}
                                                    </button>
                                                </div>  
                                                <Create_modal
                                                    closeTimeoutMS={200}
                                                    contentLabel="CreateModal"
                                                    
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-12 text-center">
                                        {page_count.length ? page_count.map( (value, index) => {
                                            return <Link key={index} className="btn btn-primary" to="/boards/questions?page=2" 
                                                onClick={
                                                    () => {
                                                        Axios.get(`/get/boards/questions?page=${index+1}`).then(res => {
                                                            // console.log(res);
                                                            setData(res.data);
                                                        })
                                                    }
                                                }>
                                                {index+1}   
                                            </Link>
                                        }) : null}    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        : <Loader/>
    )

}