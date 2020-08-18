import React, { useContext } from "react";
import { BigdataContext } from "../BigdataContainer";
import {AppContext} from "../../../components/App";

export default () => {
    const { t } = useContext(AppContext);

    const {
        day_7,
        detection_count
    } = useContext(BigdataContext);

    return (
        <div className="row">
            <div className="col-xl-3 col-md-6">
                <div className="card card_1">
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body wigdet-two-content">
                                <p className="card_date_p">{day_7[day_7.length - 1]} ~ {day_7[0]}</p>
                                <p className="card_title_p">{t("졸음운전 수")}</p>
                                <h2 className="text-white">{detection_count[0]}</h2>
                                <p className="text-white m-0"><b>10%</b> {t("From previous period")}</p>
                            </div>
                            <div className="avatar-lg rounded-circle bg-soft-light ml-2 align-self-center">
                                <i className="mdi mdi-chart-line font-22 avatar-title text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6">
                <div className="card card_2">
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body wigdet-two-content">
                                <p className="card_date_p">{day_7[day_7.length - 1]} ~ {day_7[0]}</p>
                                <p className="card_title_p">{t("급가속 수")}</p>
                                <h2 className="text-white">{detection_count[1]}</h2>
                                <p className="text-white m-0"><b>5.6%</b> {t("From previous period")}</p>
                            </div>
                            <div className="avatar-lg rounded-circle bg-soft-light ml-2 align-self-center">
                                <i className="mdi mdi-access-point-network  font-22 avatar-title text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6">
                <div className="card card_3">
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body wigdet-two-content">
                                <p className="card_date_p">{day_7[day_7.length - 1]} ~ {day_7[0]}</p>
                                <p className="card_title_p">{t("급감속 수")}</p>
                                <h2 className="text-white">{detection_count[2]}</h2>
                                <p className="text-white m-0"><b>7.02%</b> {t("From previous period")}</p>
                            </div>
                            <div className="avatar-lg rounded-circle bg-soft-light ml-2 align-self-center">
                                <i className="mdi mdi-timetable font-22 avatar-title text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-xl-3 col-md-6">
                <div className="card card_4">
                    <div className="card-body">
                        <div className="media">
                            <div className="media-body wigdet-two-content">
                                <p className="card_date_p">{day_7[day_7.length - 1]} ~ {day_7[0]}</p>
                                <p className="card_title_p">{t("사고 수")}</p>
                                <h2 className="text-white">{detection_count[3]}</h2>
                                <p className="text-white m-0"><b>9.9%</b> {t("From previous period")}</p>
                            </div>
                            <div className="avatar-lg rounded-circle bg-soft-light ml-2 align-self-center">
                                <i className="mdi mdi-cloud-download font-22 avatar-title text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}