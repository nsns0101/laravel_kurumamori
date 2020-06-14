import React, {Fragment}from "react";
import { Route, Link, BrowserRouter} from "react-router-dom";

export default () => {
    return (
        <Fragment>
            <div className="mt-5 pt-5" id="product">
                <div className="col-sm-12 col-lg-12 text-center d-table" style={{height: 700 + 'px',backgroundColor: 'white'}}>
                    <div className="d-table-cell align-middle">
                        <form className="py-2">
                            <h2 className="text-dark">KURUMAMORI 119</h2>
                            <p className="text-dark">내 차가 사고를 스스로 예방하고 사고를 스스로 신고한다!</p>
                            <h4 className="text-dark">가격미정</h4> 
                        </form>
                        <div className="py-1">
                            <Link to="/products/more" id="more" className="btn btn-intro text-dark" >더 알아보기 ></Link>
                            <Link to="/products/buy" id="buy" className="btn btn-intro text-dark" >구입하기 ></Link>
                        </div>
                        <img className="" src="product/product_image.png" style={{width:50+'%',zIndex:100}}></img>
                        {/* 이미지 포지션 조정 및 글자 위치 조정 필요 */}
                    </div>
                </div>
                <div className="row col-sm-12 col-lg-12 justify-content-around px-0 mx-0">
                    <div className="row col-sm-10 col-lg-10 justify-content-around px-0 mx-0">
                        <div className="col-sm-12 col-lg-5 mx-0 py-5" style={{padding:10+'px'}}>
                            <div className="text-center" style={{width:100+'%',height: 450 + 'px',backgroundColor: '#FAFAFA'}}>
                                {/* 검은 백그라운드 위에 png로된 이미지 넣을 예정 */}
                                <div className="py-2 pt-5">
                                    <h2 className="text-dark">쉽게 배우는 조작 방법</h2>
                                    <p className="text-dark">KURUMAMORI 119의 조작방법을 알려드립니다.</p>
                                </div>
                                <div>
                                    <Link to="/products/control" id="control" className="btn btn-intro text-dark" >손쉬운 사용 기능 살펴보기 ></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-lg-5 py-5" style={{padding:10+'px'}}>
                            <div className="text-center" style={{width:100+'%',height: 450 + 'px',backgroundColor: '#FAFAFA'}}>
                                {/* 검은 백그라운드 위에 png로된 이미지 넣을 예정 */}
                                <div className="py-2 pt-5">
                                    <h2 className="text-dark">사용자 영상</h2>
                                    <p className="text-dark">KURUMAMORI 119의 실제 사용자 영상입니다.</p>
                                </div>
                                <div>
                                    <Link to="/products/users" id="users" className="btn btn-intro text-dark" >실제 사용자 영상 보러가기 ></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                    {/* <div className="col-sm-12 col-lg-6 mx-0" style={{padding:10+'px'}}>
                        <div className="text-center" style={{width:100+'%',height: 450 + 'px',backgroundColor: '#000000'}}>
                            <form className="py-2 pt-5">
                                <h2 className="text-white">사용자 일반 리뷰</h2>
                                <p className="text-white">KURUMAMORI 119의 리뷰를 확인하세요.</p>
                            </form>
                            <div>
                                <Link to="/board" id="users" className="btn btn-intro text-white" >실제 사용자 리뷰 보러가기 ></Link>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className="col-sm-12 col-lg-6" style={{padding:10+'px'}}>
                        <div className="text-center" style={{width:100+'%',height: 450 + 'px',backgroundColor: '#000000'}}>
                            <form className="py-2 pt-5">
                                <h2 className="text-white">KURUMAMORI 119 공식 YouTube 채널</h2>
                                <p className="text-white">KURUMAMORI 119의 모든 것들</p>
                            </form>
                            <div>
                                <a href="https://www.youtube.com/channel/UCTLr43DTgWut2lSQ2vFcXAw?view_as=subscriber" className="btn btn-intro text-white">YouTube 바로가기 ></a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </Fragment>
    )
}