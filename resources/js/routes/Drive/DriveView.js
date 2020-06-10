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

export default () => {
    const { user } = useContext(AppContext);
    const {
        date,
        setDate,
        day_5,
        day_5_sec,
        day_5_danger_count,
    } = useContext(DriveContext);
    return day_5_danger_count.length && (
        <section id="intro" className="section intro" style={{background: "#f7f7f7"}}>
            <Info_menu/>
            <div className="row">
                <div className="col-md-2"/>
                <div className="col-md-8">
                    <h3> 운전 점수 확인</h3>
                    <div className="row">
                        <div className="col-md-6"></div>

                        <div className="col-md-2 text-right">
                            <p style={{fontSize:"20px", marginRight:"15px", color:"green", fontWeight:"800"}}>
                            운전날짜 검색
                            </p>
                        </div>
                        <br />
                        <div className="col-md-2">
                            <div className="form-group">
                                {/* <!-- 시작시 기본 날짜 설정은 value를 이용 --> */}
                                <DataPicker onChange={
                                    (date) => {
                                        setDate(moment(date).format("YYYY-MM-DD"));
                                    }
                                } value={date}/>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <br />
                    </div>
                    {day_5_sec[0] ? (
                        <div>
                            <Drive_score_icon/>
                            <GoogleMap/>
                            <Drive_score_chart/>
                        </div>
                    ) : (
                        <div>
                            <p className="text-danger">운전 데이터가 없습니다.</p>
                        </div>
                    )}
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
        </section>
    )
}