import React, { useContext } from "react";
import Info_menu from "../../layout/Info_menu";
import DataPicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from "moment"
import { AppContext } from "../../components/App";
import { DriveContext } from "./DriveContainer";
import Drive_score_icon from "./partial/Drive_score_icon";
import Drive_score_chart from "./partial/Drive_score_chart";
import GoogleMap from "./partial/GoogleMap";
import Loader from "../../components/Loader";
import Profile_User from "../../components/Profile_User";
import "./Drive.css";

export default () => {
    const { user, t } = useContext(AppContext);
    const {
        date,
        setDate,
        day_5,
        day_5_sec,
        day_5_danger_count,
    } = useContext(DriveContext);

    return user.id && day_5_danger_count.length ? (
        <div style={{backgroundColor:"rgb(240, 240, 240)"}}>
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
                                {/* 날짜 검색 */}
                                <div className="row" style={{marginTop:"20px"}}>
                                    <div className="col-xs-8 col-lg-7 col-md-6 col-sm-6"></div>
                                    <div className="col-xs-2 col-lg-3 col-md-3 col-sm-3 text-right">
                                        <p style={{fontSize:"20px", marginRight:"15px", color:"green", fontWeight:"800"}}>
                                        {t("운전날짜 검색")}
                                        </p>
                                    </div>
                                    <br />
                                    <div className="col-xs-2 col-lg-2 col-md-3 col-sm-3">
                                        <div className="form-group">
                                            {/* <!-- 시작시 기본 날짜 설정은 value를 이용 --> */}
                                            <DataPicker onChange={
                                                (date) => {
                                                    setDate(moment(date).format("YYYY-MM-DD"));
                                                }
                                            } value={date}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="" style={{maxHeight:"555px", overflowY:"auto", overflowX:"hidden"}}>
                                    {day_5_sec[0] ? (
                                        <div>
                                            {/* 점수 아이콘 */}
                                            <Drive_score_icon/>

                                            <div className="row justify-content-around">
                                                {/* 차트 */}
                                                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                                                    <Drive_score_chart/>
                                                </div>
                                                {/* 구글맵 */}
                                                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                                                    <GoogleMap/>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div style={{height:"65vh"}}>
                                            <p className="text-danger">{t("운전 데이터가 없습니다.")}</p>
                                        </div>
                                    )}
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