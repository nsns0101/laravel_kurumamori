import React, {useState, useEffect, createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter, Switch  } from "react-router-dom";
import Axios from 'axios';
import {useTranslation, withTranslation} from "react-i18next";
import i18next from "../config/lang/i18n";

//Layout
import Header from "../layout/Header";
import Footer from "../layout/Footer";

//routes
import Home from "../routes/Home/Home"
import Login from "../routes/Auth/AuthContainer";
import Info_index from "../routes/Profile/ProfileContainer"; 
import Info_medical from "../routes/Medical/MedicalContainer";
import Info_drive from "../routes/Drive/DriveContainer";
import Info_history from "../routes/History/HistoryContainer";
import Bigdata from "../routes/Bigdata/BigdataContainer";

import Product from "../routes/Product/Product";
import More from "../routes/Product/More";
import Buy from "../routes/Buy/BuyContainer";
// import Completed from "../routes/Buy/partial/Completed";

import Control from "../routes/Product/Control";
import Users from "../routes/Product/Users";

import Board from "../routes/Board/BoardContanier";

import Review from "../routes/Board/Review";


//전역변수
export const AppContext = createContext();

function App() {    
    const { t } = useTranslation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(false);
    useEffect(()=>{
        // console.log(user);
        // console.log("app useEffect");

        //기본언어 한국어
        //(Render가 느려서 Header.js말고 여기에 추가해야함)
        if(!localStorage.getItem('lang')){
            localStorage.setItem('lang', 'ko');
        }
        i18next.changeLanguage(localStorage.getItem("lang"))

        
        if(localStorage.getItem('userToken')){
            // console.log(localStorage.getItem('userToken'));
            const url = "/api/profile";
            // const token = localStorage;
            // console.log(token);
            const config = {
                headers: {
                    Authorization : `Bearer ${localStorage.userToken}`
                }
            }
            Axios.get(url, config)
            .then(res => {
                // console.log(res);
                if(res.data.user){
                    // console.log("user value call");
                    setUser(res.data.user);
                    setIsLoggedIn(true);
                }
                else{
                    localStorage.removeItem("userToken");
                }
            }) 
        }
        else{

        }
    }, [isLoggedIn]);

    //localStorage.getItem('lang')가 있어야 페이지가 나오게
    //없으면 페이지 로딩시 한국어로 나오다가 0.3초뒤에 일본어로 나오기 때문에
    return localStorage.getItem('lang') ? ( user.id ? (
        <div style={{overflow:"hidden", minHeight:"100vh"}}>
            <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser, t}}>
                <BrowserRouter>
                    <Header/>
                    {/* 메인페이지 */}
                    <Route path="/" exact={true} component={Home}/>

                    {/* 로그아웃 */}
                    <Route path="/logout" exact component={Login}/>
                    {/* 제품정보 */}
                    <Route path="/info/index" component={Info_index}/>
                    {/* 의료정보 */}
                    <Route path="/info/medical_info" component={Info_medical}/>
                    {/* 운전점수 */}
                    <Route path="/info/drive_score" exact component={Info_drive}/>
                    {/* 사용이력 */}
                    <Route path="/info/history" component={Info_history}/>  
                    {/* 빅데이터 자료실 */}
                    <Route path="/bigdata" component={Bigdata}/>

                    <Route path="/products" exact component={Product}/>
                    <Route path="/products/more" exact component={More}/>
                    <Route path="/products/buy"  component={Buy}/>
                    {/* <Route path="/products/buy/completed"  component={Completed}/> */}
                    <Route path="/products/control" exact component={Control}/>
                    <Route path="/products/users" exact component={Users}/>
                    <Switch>
                        <Route path="/boards/questions/:category" component={Board}/>
                        <Route path="/boards/questions" component={Board}/>
                    </Switch>
                    {/* <Route path="/boards/questions" component={Board}>
                        <Route path=":id" component={Board} />
                    </Route> */}
                    <Footer/>
                </BrowserRouter>
            </AppContext.Provider>
        </div>
    ) : (
        <div style={{overflow:"hidden"}}>
            <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, user, setUser, t}}>
                <BrowserRouter>
                    <Header/>
                    {/* 메인페이지 */}
                    <Route path="/" exact={true} component={Home}/>
                    {/* 로그인 페이지 */}
                    <Route path="/auth/login" exact component={Login}/>
                    {/* 회원가입 페이지 */}
                    <Route path="/auth/register" exact component={Login}/>
                    {/* 빅데이터 자료실 */}
                    <Route path="/bigdata" component={Bigdata}/>

                    <Route path="/products" exact component={Product}/>
                    <Route path="/products/more" exact component={More}/>
                    <Route path="/products/buy" exact component={Buy}/>
                    
                    {/* <Route path="/products/buy/completed" exact component={Completed}/> */}

                    <Route path="/products/control" exact component={Control}/>
                    <Route path="/products/users" exact component={Users}/>

                    <Route path="/boards/questions" exact component={Board}/>

                    {/* <Route path="/board/review" exact component={Review}/> */}


                    <Footer/>
                </BrowserRouter>
            </AppContext.Provider>
        </div>
        )
    ) : null
}

export default withTranslation()(App);

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
