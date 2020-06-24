import React, {Fragment}from "react";
import { Route, Link, BrowserRouter} from "react-router-dom";

export default () => {
    return (
        <Fragment>
            <div id="product">
                <div className="col-sm-12 col-lg-12 text-center d-table" style={{height: 100 + 'vh',backgroundColor: 'white'}}>
                    <div className="d-table-cell align-middle">
                        <div className="my-4 row px-0 mx-0 justify-content-center ">
                            <img className="col-sm-8 col-lg-4" src="icon/logo_curumamori.png" style={{width:100+'%',zIndex:100}}></img>
                        </div>
                        <div className="my-2">
                            <p className="" style={{fontSize:2.25+"em",color:"black"}}>내 차가 사고를 스스로 예방하고 사고를 스스로 신고한다!</p>
                            <h4 className="" style={{fontSize:1.7+"em",color:"black"}}>가격미정</h4> 
                        </div>
                        <div className="my-2" >
                            <span className="px-2">
                                <Link to="/products/more" id="more" className="btn border-1 rounded border-dark" style={{fontSize:1.3+"em",color:"black"}}>더 알아보기 ></Link>
                            </span>
                            <span className="px-2">
                                <Link to="/products/buy" id="buy" className="btn border-1 rounded border-dark" style={{fontSize:1.3+"em",color:"black"}}>구입하기 ></Link>
                            </span>
                        </div>
                        <div className="my-2 row px-0 mx-0 justify-content-center ">
                            <img className="col-sm-8 col-lg-4" src="product/product_image.png" style={{width:100+'%',zIndex:100}}></img>
                        </div>
                    </div>
                </div>

                {/* css 조정 필요 */}
                <div className="row col-sm-12 col-lg-12 justify-content-around px-0 mx-0" style={{backgroundColor:"#F5F5F5"}}>
                    <div className="row col-sm-10 col-lg-10 justify-content-around px-0 mx-0">
                        \
                        {/* css 조정 필요 */}
                        <div className=" col-sm-12 col-lg-5 mx-0 py-5 " style={{padding:10+'px'}}>
                            <img className="card-img" src="product/contr.jpg" style={{width:100+'%',height: 450 + 'px',opacity:0.5}}></img>
                            <div className="text-center card-img-overlay" style={{width:100+'%'}}>
                                <div className="py-2 pt-5">
                                    <h2 className="card-title" style={{color:"black"}}>쉽게 배우는 조작 방법</h2>
                                    <p className="card-text" style={{color:"black"}}>KURUMAMORI 119의 조작방법을 알려드립니다.</p>
                                </div>
                                <div>
                                    <Link to="/products/control" id="control" className="btn btn-intro card-text" style={{color:"black"}} onClick={()=>{window.scrollTo(0, 0)}}>손쉬운 사용 기능 살펴보기 ></Link>
                                </div>
                            </div>
                        </div>

                        {/* css 조정 필요 */}
                        <div className="col-sm-12 col-lg-5 py-5" style={{padding:10+'px'}}>
                            <img className="card-img" src="product/userv.jpg" style={{width:100+'%',height: 450 + 'px',opacity:0.5}}></img>
                            <div className="text-center card-img-overlay" style={{width:100+'%',height: 450 + 'px'}}>
                                <div className="py-2 pt-5">
                                    <h2 className="card-title" style={{color:"black"}}>사용자 영상</h2>
                                    <p className="card-text" style={{color:"black"}}>KURUMAMORI 119의 실제 사용자 영상입니다.</p>
                                </div>
                                <div>
                                    <Link to="/products/users" id="users" className="btn btn-intro card-text" style={{color:"black"}} onClick={()=>{window.scrollTo(0, 0)}}>실제 사용자 영상 보러가기 ></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* 삭제 예정 */}
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