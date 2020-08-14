import React, {Fragment,useState}from "react";
import { Route, Link, BrowserRouter} from "react-router-dom";
import { useForm } from "react-hook-form";
import Auth from "./partial/Auth";
import Completed from "./partial/Completed";

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
    setPhone,
    name,
    state,
    address,
    postal,
    detail_address,
    access_code,
    email,
    phone,
    t
}) => {

    const { register, handleSubmit } = useForm();

    return (
        localStorage.getItem('userToken') == null ? 
        <Auth/> 
        :
        <Fragment>
            <div className="mt-5 pt-2">
                <div className="row px-3 py-3">
                    {/* <div className="col-md-2">
                        <h4 style={{color:"black", fontWeight:"bold"}}>PAYMENT</h4>
                    </div> */}
                    <div className="col-md-12 text-center">
                        <h1 style={{fontWeight:600, color:"#31A2AA"}}>{t("PAYMENT")}</h1>
                    </div>
                    <hr/>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-sm-8 ">
                        <div className="px-5">
                            <div>
                                {/* 입력폼 */}
                                <div className="py-3">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <p style={{color:"black", fontSize:"24px", fontWeight:"bold"}}>{t("RECIPIENT INFORMATION")}</p>
                                        
                                        {/* 수신인 정보 */}
                                        <div className="recipient_information">
                                            {/* 이름 */}
                                            <div className="name row mx-0 px-0 my-0 py-0 align-items-center" style={{borderTop:"2px solid black"}}>
                                                <div className="col-md-3 mx-0 px-0" style={{backgroundColor:"white"}}>
                                                    <p className="pl-2 py-3 mb-0" style={{color:"black", fontWeight:"600"}}> {t("NAME")} </p>
                                                </div>
                                                <div className="col-md-9 mx-0 px-0 my-0 py-0">
                                                    <input className="pl-2" name="name" type="text" id="buy_name" style={{height:3.25+"em",width:100+"%", border:"1px solid #F0F0F0",backgroundColor:"#F0F0F0"}}
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setName(value);
                                                        }}
                                                        ref={register({
                                                            required: "필수 입력 사항입니다.",
                                                        })} 
                                                        value={name}
                                                    >    
                                                    </input>
                                                </div>
                                            </div>

                                            <div className="email row mx-0 px-0 my-0 py-0 align-items-center" style={{borderTop:"2px solid #D1D1D1", borderBottom:"2px solid black"}}>
                                                {/* 이메일 */}
                                                <div className="col-md-3 mx-0 px-0" style={{backgroundColor:"white"}}>
                                                    <p className="pl-2 py-3 mb-0" style={{color:"black", fontWeight:"600"}}> {t("EMAIL")} </p>
                                                </div>
                                                <div className="col-md-3 mx-0 px-0 my-0 py-0">
                                                <input className="pl-2" name="email" type="text" id="buy_name" style={{height:3.25+"em",width:100+"%", border:"1px solid #F0F0F0",backgroundColor:"#F0F0F0"}}
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setEmail(value);
                                                        }}
                                                        ref={register({
                                                            required: "필수 입력 사항입니다.",
                                                        })}
                                                        value={email}
                                                    >
                                                    </input>
                                                </div>
                                                {/* 휴대폰 */}
                                                <div className="col-md-3 mx-0 px-0" style={{backgroundColor:"white"}}>
                                                    <p className="pl-2 py-3 mb-0" style={{color:"black", fontWeight:"600"}}>  {t("PHONE")} </p>
                                                </div>
                                                <div className="col-md-3 mx-0 px-0 my-0 py-0">
                                                    <input className="pl-2" name="phone" type="text" id="buy_name" style={{height:3.25+"em",width:100+"%", border:"1px solid #F0F0F0",backgroundColor:"#F0F0F0"}}
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setPhone(value);
                                                        }}
                                                        ref={register({
                                                            required: "필수 입력 사항입니다.",
                                                        })}
                                                        value={phone}
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="pl-2 mt-5"style={{color:"black", fontSize:"24px", fontWeight:"bold"}}> {t("CONTACT INFORMATION")} </p>

                                        {/* 접촉 정보 */}
                                        <div className="contact_information">
                                            {/* 도시 */}
                                            <div className="state row mx-0 px-0 my-0 py-0 align-items-center" style={{borderTop:"2px solid black"}}>
                                                {/* 지역 */}
                                                <div className="col-md-3 mx-0 px-0" style={{backgroundColor:"white"}}>
                                                    <p className="pl-2 py-3 mb-0" style={{color:"black", fontWeight:"600"}}> {t("PROVINCE/STATE")} </p>
                                                </div>
                                                <div className="col-md-3 mx-0 px-0 my-0 py-0">
                                                    <select id="buy_state" name="state" style={{height:3.25+"em",width:100+"%", border:"1px solid #F0F0F0",backgroundColor:"#F0F0F0"}}
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
                                                        {/* <option value="non">시/도</option>
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
                                                        <option value="세종">세종</option> */}
                    
                                                        <option value="non">都道府県</option>
                                                        <option value="香川県">香川県</option>
                                                        <option value="鹿児島県">鹿児島県</option>
                                                        <option value="神奈川県">神奈川県</option>
                                                        <option value="高知県">高知県</option>
                                                        <option value="京都府">京都府</option>
                                                        <option value="熊本県">熊本県</option>
                                                        <option value="群馬県">群馬県</option>
                                                        <option value="長野県">長野県</option>
                                                        <option value="長崎県">長崎県</option>
                                                        <option value="奈良県">奈良県</option>
                                                        <option value="新潟県">新潟県</option>
                                                        <option value="富山県">富山県</option>
                                                        <option value="栃木県">栃木県</option>
                                                        <option value="東京都">東京都</option>
                                                        <option value="徳島県">徳島県</option>
                                                        <option value="鳥取県">鳥取県</option>
                                                        <option value="宮城県">宮城県</option>
                                                        <option value="宮崎県">栃木県</option>
                                                        <option value="三重県">東京都</option>
                                                        <option value="佐賀県">徳島県</option>
                                                        <option value="埼玉県">鳥取県</option>
                                                        <option value="滋賀県">宮城県</option>
                                                        <option value="島根県">島根県</option>
                                                        <option value="三重県">東京都</option>
                                                        <option value="静岡県">静岡県</option>
                                                        <option value="青森県">青森県</option>
                                                        <option value="愛知県">愛知県</option>
                                                        <option value="秋田県">秋田県</option>
                                                        <option value="山形県">山形県</option>
                                                        <option value="山口県">山口県</option>
                                                        <option value="山梨県">山梨県</option>
                                                        <option value="愛媛県">愛媛県</option>
                                                        <option defaultValue value="大阪府">大阪府</option>
                                                        <option value="大分県">大分県</option>
                                                        <option value="岡山県">岡山県</option>
                                                        <option value="沖縄県">沖縄県</option>
                                                        <option value="和歌山県">和歌山県</option>
                                                        <option value="茨城県">茨城県</option>
                                                        <option value="石川県">石川県</option>
                                                        <option value="岩手県">岩手県</option>
                                                        <option value="千葉県">千葉県</option>
                                                        <option value="北海道">北海道</option>
                                                        <option value="兵庫県">兵庫県</option>
                                                        <option value="福島県">福島県</option>
                                                        <option value="福岡県">福岡県</option>
                                                        <option value="福井県">福井県</option>
                                                        <option value="広島県">広島県</option>
                                                        
                                                    </select>
                                                </div>
                                                {/* 우편번호 */}
                                                <div className="col-md-3 mx-0 px-0" style={{backgroundColor:"white"}}>
                                                    <p className="pl-2 py-3 mb-0" style={{color:"black", fontWeight:"600"}}> {t("POSTAL CODE")}</p>
                                                </div>
                                                <div className="col-md-3 mx-0 px-0 my-0 py-0">
                                                    <input className="pl-2" name="postal" type="text" id="buy_name" style={{height:3.25+"em",width:100+"%", border:"1px solid #F0F0F0",backgroundColor:"#F0F0F0"}}
                                                            onChange={ e => {
                                                                const {
                                                                target: { value }
                                                                } = e;
                                                                setPostal(value);
                                                            }}
                                                            ref={register({
                                                                required: "필수 입력 사항입니다.",
                                                            })}
                                                            value={postal}
                                                        >
                                                        </input>
                                                </div>
                                            </div>
                                            {/* 주소 */}
                                            <div className="address row mx-0 px-0 my-0 py-0 align-items-center" style={{borderTop:"2px solid #D1D1D1", borderBottom:"2px solid black"}}>
                                                <div className="col-md-3 mx-0 px-0" style={{backgroundColor:"white"}}>
                                                    <p className="pl-2 py-3 mb-0" style={{color:"black", fontWeight:"600"}}>{t("ADDRESS")} </p>
                                                </div>
                                                <div className="col-md-3 mx-0 px-0 my-0 py-0">
                                                    <input className="pl-2" name="address" type="text" id="buy_name" style={{height:3.25+"em",width:100+"%", border:"1px solid #F0F0F0",backgroundColor:"#F0F0F0"}}
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setAddress(value);
                                                        }}
                                                        ref={register({
                                                            required: "필수 입력 사항입니다.",
                                                        })}
                                                        value={address}
                                                    >
                                                    </input>
                                                </div>
                                                {/* 상세 주소 */}
                                                <div className="col-md-3 mx-0 px-0" style={{backgroundColor:"white"}}>
                                                    <p className="pl-2 py-3 mb-0" style={{color:"black", fontWeight:"600"}}> {t("DETAIL ADDRESS")}</p>
                                                </div>
                                                <div className="col-md-3 mx-0 px-0 my-0 py-0">
                                                    <input className="pl-2" name="detail_address" type="text" id="buy_name" style={{height:3.25+"em",width:100+"%", border:"1px solid #F0F0F0",backgroundColor:"#F0F0F0"}}
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setDetailAddress(value);
                                                        }}
                                                        ref={register({
                                                            required: "필수 입력 사항입니다.",
                                                        })}
                                                        value={detail_address}
                                                    >
                                                    </input>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="pl-2 mt-5"style={{color:"black", fontSize:"24px", fontWeight:"bold"}}> {t("OTHER INFORMATION")}</p>
                                        <div className="other_information">
                                            <div className="state row mx-0 px-0 my-0 py-0 align-items-center" style={{borderTop:"2px solid black", borderBottom:"2px solid black"}}>
                                                <div className="col-md-3 mx-0 px-0" style={{backgroundColor:"white"}}>
                                                    <p className="pl-2 py-3 mb-0" style={{color:"black", fontWeight:"600"}}> {t("BUILDING ACCESS CODE")}</p>
                                                </div>
                                                <div className="col-md-9 mx-0 px-0 my-0 py-0">
                                                    <input className="pl-2" name="access_code" type="text" id="buy_name" style={{height:3.25+"em",width:100+"%", border:"1px solid #F0F0F0",backgroundColor:"#F0F0F0"}}
                                                        onChange={ e => {
                                                            const {
                                                            target: { value }
                                                            } = e;
                                                            setAccessCode(value);
                                                        }}
                                                        ref={register({
                                                            required: "필수 입력 사항입니다.",
                                                        })}
                                                        value={access_code}
                                                    ></input>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row justify-content-center py-2 pb-5">
                                            <button className="col-lg-2 col-sm-10 mt-3 btn bg-dark" style={{width:"100%", color:"white", fontSize:1.75+"em"}}>{t("구입 하기")}</button>
                                        </div>
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