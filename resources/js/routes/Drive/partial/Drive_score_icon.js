import React, {useContext} from "react";
import {AppContext} from "../../../components/App";
import { DriveContext } from "../DriveContainer";
import AnimationCount from 'react-count-animation';
import 'react-count-animation/dist/count.min.css';
import ScrollAnimation from "react-animate-on-scroll";

export default () => {
    const { t } = useContext(AppContext);

    const {
        score
    } = useContext(DriveContext);
    
    const lang = localStorage.getItem("lang") == "ko" ? "ko" : "jp";

    const count_set_main = {
        start: 0,           //시작 숫자
        count: (score[0] + score[1] + score[2] + score[3]) / score.length,      //끝 숫자
        duration: 1500,    //지속시간
        // decimals: 4,    //소수점
        useGroup: true,
        animation: 'roll',
    };
    const count_set_1 = {
        start: 0,
        count: score[0],
        duration: 1500,
        // decimals: 2,    
        useGroup: true,
        animation: 'roll',
    };
    const count_set_2 = {
        start: 0,
        count: score[1],
        duration: 1500,
        // decimals: 2,    
        useGroup: true,
        animation: 'roll',
    };
    const count_set_3 = {
        start: 0,
        count: score[2],
        duration: 1500,
        // decimals: 2,
        useGroup: true,
        animation: 'roll',
    };
    const count_set_4 = {
        start: 0,
        count: score[3],
        duration: 1500,
        // decimals: 2,
        useGroup: true,
        animation: 'roll',
    };

    const drive_score = ( text , count_set, index) => {
        return (
            <div className="col-xs-2 col-lg-2 col-md-6 col-sm-12">
                <ScrollAnimation animateIn='zoomIn' animateOnce={true} delay={200}>
                    <div className="card btn text-dark shadow">
                        <div className="pt-3 pb-3">
                            {
                                score[index] >= 90 ? (
                                    <img src={`/icon/score/score_1_${lang}.png`} className="drive_score_icon"/>
                                ) : score[index] >= 70 ? (
                                    <img src={`/icon/score/score_2_${lang}.png`} className="drive_score_icon"/>
                                ) : score[index] >= 50 ?(
                                    <img src={`/icon/score/score_3_${lang}.png`} className="drive_score_icon"/>
                                ) : score[index] >= 30 ?(
                                    <img src={`/icon/score/score_4_${lang}.png`} className="drive_score_icon"/>
                                ) : (
                                    <img src={`/icon/score/score_5_${lang}.png`} className="drive_score_icon"/>
                                )
                            }
                        </div>
                        <p className="drive_sub_score_p">{text}</p>
                        <p className="drive_sub_score_p">
                            <AnimationCount {...count_set}/>
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }

    return  score.length ? (
        <div>
            <div className="row justify-content-around">
                {/* 총 점수 */}
                <div className="col-xs-3 col-lg-3 col-md-12 col-sm-12">
                    <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                        <div className="card btn text-dark shadow"> 
                            <div className="pt-3 pb-3">
                                {

                                    (score[0] + score[1] + score[2] + score[3]) / score.length >= 90 ? (
                                        <img src={`/icon/score/score_1_${lang}.png`} className="drive_score_icon"/>
                                    ) : (score[0] + score[1] + score[2] + score[3]) / score.length >= 70 ? (
                                        <img src={`/icon/score/score_2_${lang}.png`} className="drive_score_icon"/>
                                    ) : (score[0] + score[1] + score[2] + score[3]) / score.length >= 50 ?(
                                        <img src={`/icon/score/score_3_${lang}.png`} className="drive_score_icon"/>
                                    ) : (score[0] + score[1] + score[2] + score[3]) / score.length >= 30 ?(
                                        <img src={`/icon/score/score_4_${lang}.png`} className="drive_score_icon"/>
                                    ) : (
                                        <img src={`/icon/score/score_5_${lang}.png`} className="drive_score_icon"/>
                                    )
                                }
                            </div>
                            <p className="drive_main_score_p">{t("총 점수")}</p>
                            <p className="drive_main_score_p">
                                <AnimationCount {...count_set_main}/>
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
                {drive_score(t("급가속 점수"), count_set_1, 0)}
                {drive_score(t("급감속 점수"), count_set_2, 1)}
                {drive_score(t("졸음 점수"), count_set_3, 2)}
                {drive_score(t("사고 점수"), count_set_4, 3)}
            </div>
            <br/>
        </div>
    ) : null
}