import React, {useEffect, useState, useContext} from "react";
import {AppContext} from "./App";
import {ProfileContext} from "../routes/Profile/ProfileContainer";
import moment from "moment";
import ScrollAnimation from "react-animate-on-scroll";

export default () => {
    const { user, setUser, t } = useContext(AppContext);
    const { data } = useContext(ProfileContext);
    return (
        <div className="user_profile">
            {/* <p style={{fontSize:"20px", color:"black", fontWeight:"600"}}>나의 정보</p> */}
            <div className="card" style={{backgroundColor:"white", padding:"30px"}}>
                <p style={{color:"blue", fontWeight:"bold"}}>INFO</p>
                {/* 이미지, 이름 */}
                <div className="text-center">
                    <img className="profile_image"src="/images/home/team/이재영.jpg"/>
                    <p className="profile_name_p">이재영</p>
                </div>

                {/* 성, 생년, 폰, 메일, 가입일 */}
                <p className="profile_other_title">{t("성별")}</p>
                <p className="profile_other_data">{t(data.user.gender)}</p>
                <p className="profile_other_title">{t("생년월일")}</p>
                <p className="profile_other_data">{data.user.birth}</p>
                <p className="profile_other_title">{t("휴대폰 번호")}</p>
                <p className="profile_other_data">{data.user.phone}</p>
                <p className="profile_other_title">{t("이메일")}</p>
                <p className="profile_other_data">{data.user.email}</p>
                <p className="profile_other_title">{t("가입일")}</p>
                <p className="profile_other_data">{moment(data.user.created_at).format("YYYY-MM-DD")}</p>
            </div>
        </div>
    )
}
