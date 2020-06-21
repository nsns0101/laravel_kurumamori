import React from "react";
// import CountUp from "react-counterup";

export default () => {
    const main_text = {
        fontSize: "32px",
        fontWeight: "bold",
        textTransform: "uppercase",
        marginBottom: "20px",
        paddingBottom: "20px",
        position: "relative",
        color:"black",
    }
    const a_func = (img) => {
        return (
            <div className="col-lg-4 col-md-3 col-sm-12 col-12 text-center">
                <img src={img} alt="img"/>
            </div>
        )
    }
    return (
        <section id="intro function2" className="section intro mb-5" style={{background:"#F9F8FF"}}>
            <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2"/>

                <div className="col-lg-8 col-md-8 col-sm-10">
                    <div className="row justify-content-around pt-5">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <h3 style={main_text}>damage caused by traffic accidents</h3>
                        </div>
                        {a_func("images/index_img_chapter01.png")}
                        {a_func("images/index_img_chapter02.png")}
                        {a_func("images/index_img_chapter03.png")}
                    </div>
                </div>

                <div className="col-lg-2 col-md-2 col-sm-2"/>
            </div>
            {/* <div className="rows justify-content-around">
                <div className="col-md-12 text-center">
                    <h2>얼마나 많은 사람이 <span style={{color:"red"}}>교통사고</span> 시 <span style={{color:"red"}}>골든타임</span>을 놓쳐 생명을 위협받고 있는지 알고 계시나요?</h2>
                </div>
            </div> */}
        </section>
    );
}