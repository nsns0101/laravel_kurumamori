import React, {useContext} from 'react';
import {AppContext} from "../../../components/App";
import AnimationCount from 'react-count-animation';
import 'react-count-animation/dist/count.min.css';
import ScrollAnimation from "react-animate-on-scroll";
import "./Functions2.css";

export default () => {
    const {t} = useContext(AppContext);

    const main_text = {
        fontSize: "32px",
        fontWeight: "900",
        textTransform: "uppercase",
        // marginBottom: "20px",
        // paddingBottom: "20px",
        position: "relative",
        color:"white",
    }

    const count_set1 = {
        start: 0,           //시작 숫자
        count: 220000,      //끝 숫자
        duration: 7000,    //지속시간
        // decimals: 4,    //소수점
        useGroup: true,
        animation: 'up',
    };
    const count_set2 = {
        start: 0,
        count: 3782,
        duration: 7000,
        // decimals: 2,    
        useGroup: true,
        // animation: 'roll',
        animation: 'up',

    };
    const count_set3 = {
        start: 0,
        count: 40,
        duration: 7000,
        // decimals: 2,
        useGroup: true,
        // animation: 'slide',
        animation: 'up',

    };

    const a_func = (title, count_set) => {
        return (
            <div key={count_set.count} className="col-lg-4 col-md-3 col-sm-12 col-12 text-center" style={{marginBottom:"80px"}}>
                <ScrollAnimation animateIn="fadeIn" delay={500} animateOnce={true}>                
                    <p style={{fontSize:"2em", color:"white", fontWeight:"900", marginTop:"50px", padding:0, marginBottom:0}}>{title}</p>
                    {count_set == count_set3 ? (
                        <div className="row justify-content-center" style={{fontSize:"1.5em", color:"rgb(181,191,243)"}}>
                            <p className="text-center" style={{paddingRight:"5px"}}>{t("약")}</p>
                            <AnimationCount {...count_set}/>
                            <p className="text-center">{t("조원")}</p>
                        </div>
                    ) : (
                        <div className="row justify-content-center" style={{fontSize:"1.5em", color:"rgb(181,191,243)"}}>
                            <p className="text-center" style={{paddingRight:"5px"}}>{t("약")}</p>
                            <AnimationCount {...count_set}/>
                            <p className="text-center">{t("건")}</p>
                        </div>
                    )}
                </ScrollAnimation>
            </div>
        )
    }

    return (
        <section id="intro function2" className="section intro back_img">
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2"/>
                <div className="col-lg-8 col-md-8 col-sm-10">
                    <div className="row justify-content-around" style={{marginTop:"80px"}}>
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
                                <h3 style={main_text}>{t("연간 교통사고 피해량")}</h3>
                                <h3 style={{color:"rgb(150,191,243)"}}>───────────────</h3>
                            </ScrollAnimation>
                        </div>
                        {/* {a_func("/images/home/index_img_chapter01.png", t("연간 교통사고"), t("발생 건 수"), count_set1)}
                        {a_func("/images/home/index_img_chapter02.png", t("연간 교통사고"), t("사망자 수"), count_set2)}
                        {a_func("/images/home/index_img_chapter03.png", t("교통사고로 인한"), t("연간 경제적 손실"), count_set3)} */}
                        {a_func(t("발생건 수"), count_set1)}
                        {a_func(t("사망자 수"), count_set2)}
                        {a_func(t("경제적 손실"), count_set3)}
                    </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2"/>
            </div>
        </section>
    );
}