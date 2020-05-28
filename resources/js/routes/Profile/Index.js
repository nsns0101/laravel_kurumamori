import React, {useContext, useEffect} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
export default () => {
    const { user } = useContext(AppContext);
    console.log(user);

    useEffect(()=>{
        
        Axios.get("/info/index").then(res => {
            console.log(res);
        })
    }, []);

    return (
        <section id="intro" className="section intro" style={{padding: "50px 0px 0px 0px", background: "rgb(247, 247, 247)"}}>
                <div className="row">
                    <div className="col-md-3">
                        kkkk
                    </div>
                </div>

        </section>
    )
}