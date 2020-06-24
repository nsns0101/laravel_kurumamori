import React, {Fragment,useState}from "react";
import { Route, Link, BrowserRouter} from "react-router-dom";
import { useForm } from "react-hook-form";
import Auth from "./partial/Auth";

export default ({
    user,
    onSubmit,
    setName,
    setState,
    setAddress,
    setPostal,
    setDetailAddress,
    setAccessCode,
    setEmail,
    setPhone

}) => {

    const { register, handleSubmit } = useForm();

    return (
        user.id == null ? 
        <Auth/> 
        :
        <Fragment>
            <div className="mt-5 pt-2">
                <div className="px-3 py-3">
                    <h4>결제</h4>
                    <hr/>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-sm-8 ">
                        <div className="px-5">
                            <div>
                                <div>
                                    <h1 style={{fontWeight:900}}>배송에 필요한 정보를 입력해주세요.</h1>
                                </div>

                                {/* 입력폼 */}
                                <div className="py-3">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="row px-0 mx-0 py-5">
                                            <h3>이름 및 주소 입력 :</h3>
                                            <div className="col-lg-12 py-2">
                                                <label className="m-auto" htmlFor="buy_name" style={{position:"absolute"}}>이름</label>
                                                <input name="buy_name" type="text" id="buy_name" style={{height:3.25+"em",width:100+"%"}}
                                                    onChange={ e => {
                                                        const {
                                                        target: { value }
                                                        } = e;
                                                        setName(value);
                                                    }}
                                                    ref={register({
                                                        required: "필수 입력 사항입니다.",
                                                    })} 
                                                    value="김영진"
                                                ></input>
                                            </div>
                                            <div className="col-lg-12 row">
                                                <div className="col-lg-6 py-2">
                                                    {/* <label for="buy_state">시/도</label> */}
                                                    <select id="buy_state" style={{height:3.25+"em",width:100+"%"}}
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setState(value);
                                                        }}
                                                        ref={register({
                                                            required: "필수 입력 사항입니다.",
                                                        })}
                                                    >
                                                        <option  value="non">시/도</option>
                                                        <option value="강원도">강원도</option>
                                                        <option value="경기도">경기도</option>
                                                        <option value="경상남도">경상남도</option>
                                                        <option value="경상북도">경상북도</option>
                                                        <option value="전라남도">전라남도</option>
                                                        <option value="전라북도">전라북도</option>
                                                        <option value="제주도">제주도</option>
                                                        <option value="충청남도">충청남도</option>
                                                        <option value="충청북도">충청북도</option>
                                                        <option value="서울">서울</option>
                                                        <option value="부산">부산</option>
                                                        <option defaultValue value="대구">대구</option>
                                                        <option value="인천">인천</option>
                                                        <option value="광주">광주</option>
                                                        <option value="대전">대전</option>
                                                        <option value="울산">울산</option>
                                                        <option value="세종">세종</option>
                                                    </select>
                                                </div>
                                                <div className="col-lg-6 py-2">
                                                    <label className="m-auto" htmlFor="buy_address" style={{position:"absolute"}}>주소</label>
                                                    <input type="text" id="buy_address" style={{height:3.25+"em",width:100+"%"}}
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setAddress(value);
                                                        }}
                                                        ref={register({
                                                            required: "필수 입력 사항입니다.",
                                                        })}
                                                        value="복현동 362-36"
                                                    ></input>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 py-2">
                                                <label className="m-auto" htmlFor="buy_postal" style={{position:"absolute"}}>우편번호</label>
                                                <input type="text" id="buy_postal" style={{height:3.25+"em",width:100+"%"}}
                                                    onChange={ e => {
                                                        const {
                                                        target: { value }
                                                        } = e;
                                                        setPostal(value);
                                                    }}
                                                    ref={register({
                                                        required: "필수 입력 사항입니다.",
                                                    })}
                                                    value="42235"
                                                ></input>
                                            </div>
                                            <div className="col-lg-12 py-2">
                                                <label className="m-auto" htmlFor="buy_detail_address" style={{position:"absolute"}}>건물 번지, 이름 또는 거리 이름</label>
                                                <input type="text" id="buy_detail_address" style={{height:3.25+"em",width:100+"%"}}
                                                    onChange={ e => {
                                                        const {
                                                        target: { value }
                                                        } = e;
                                                        setDetailAddress(value);
                                                    }}
                                                    ref={register({
                                                        required: "필수 입력 사항입니다.",
                                                    })}
                                                    value="청솔맨션 304호"
                                                ></input>
                                            </div>
                                            <div className="col-lg-12 py-2">
                                                <label className="m-auto" htmlFor="buy_access_code" style={{position:"absolute"}}>아파트 등의 건물 출입 코드</label>
                                                <input type="text" id="buy_access_code" style={{height:3.25+"em",width:100+"%"}}
                                                    onChange={ e => {
                                                        const {
                                                        target: { value }
                                                        } = e;
                                                        setAccessCode(value);
                                                    }}
                                                    ref={register({
                                                        required: "필수 입력 사항입니다.",
                                                    })}
                                                    value="0310"
                                                ></input>
                                            </div>
                                        </div>

                                        <div className="row px-0 mx-0 py-5">
                                            <h3>연락처 정보를 입력해주세요.</h3>
                                            <div className="col-lg-12 py-2">
                                                <label className="m-auto" htmlFor="buy_email" style={{position:"absolute"}}>이메일 주소</label>
                                                <input type="text" id="buy_email" style={{height:3.25+"em",width:100+"%"}}
                                                    onChange={ e => {
                                                        const {
                                                        target: { value }
                                                        } = e;
                                                        setEmail(value);
                                                    }}
                                                    ref={register({
                                                        required: "필수 입력 사항입니다.",
                                                    })}
                                                    value="rla@dudwls.com"
                                                ></input>
                                            </div>
                                            <div className="col-lg-12 py-2">
                                                <label className="m-auto" htmlFor="buy_phone" style={{position:"absolute"}}>휴대폰 번호</label>
                                                <input type="text" id="buy_phone" style={{height:3.25+"em",width:100+"%"}}
                                                    onChange={ e => {
                                                        const {
                                                        target: { value }
                                                        } = e;
                                                        setPhone(value);
                                                    }}
                                                    ref={register({
                                                        required: "필수 입력 사항입니다.",
                                                    })}
                                                    value="010-7374-6119"
                                                ></input>
                                            </div>
                                        </div>
                                        <button className="btn btn-dark">결제 페이지로 이동</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}