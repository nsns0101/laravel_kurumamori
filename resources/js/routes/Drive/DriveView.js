import React, { useContext } from "react";
import Info_menu from "../../layout/Info_menu";
import DataPicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import moment from "moment"
import { AppContext } from "../../components/App";
import { DriveContext } from "./DriveContainer";

export default () => {
    const { user } = useContext(AppContext);
    const {
        date,
        setDate,
        
    } = useContext(DriveContext);
    return (
        <section id="intro" className="section intro" style={{padding: "50px 0px 0px 0px", background: "#f7f7f7"}}>
            <div className="row">
                <div className="col-md-2 col-xs-2 col-sm-2">
                    <Info_menu/>
                </div>
                <div className="col-md-10">
                    <br />
                    <br />
                    <br />
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
                </div>
            </div>
        </section>
    )
}