//메인 라우터
import React, {useState, useEffect, createContext, useContext} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../layuot/Header";
import Footer from "../layuot/Footer";
import Home from "../routes/Home/Home"
import Login from "../routes/Auth/AuthContainer";
import Info_index from "../routes/Profile/Index"; 
import Product from "../routes/Product/Product";
import Axios from 'axios';
//전역변수
export const AppContext = createContext();

// export const getProfile = () => {
   
// }

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    // console.log(user);
    useEffect(()=>{
        if(localStorage.getItem('userToken')){
            // let state = localStorage["userToken"];
            // if (state) {
            //     console.log(state);
            //     let AppState = JSON.parse(state);
            //     console.log(AppState);
            //     setIsLoggedIn(AppState.isLoggedIn);
            //     setUser(AppState);
            // }
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
                if(res.data.user){
                    setIsLoggedIn(true);
                    setUser(res.data.user);
                }
            }) 
        }
    }, []);
    return (
            //전역변수 전달
            <AppContext.Provider value={{isLoggedIn, setIsLoggedIn, user}}>
                <BrowserRouter>
                    <Header/>
                    {/* 메인페이지 */}
                    <Route path="/" exact={true} component={Home}/>
                    {/* 로그인 페이지 */}
                    <Route path="/auth/login" exact component={Login}/>
                    {/* 회원가입 페이지 */}
                    <Route path="/auth/register" exact component={Login}/>
                    {/* 로그아웃 */}
                    <Route path="/logout" exact component={Login}/>
                    {/* 내정보 */}
                    <Route path="/info/index" exact component={Info_index}/>

                    <Route path="/products" exact component={Product}/>
                    <Footer/>
                </BrowserRouter>
            </AppContext.Provider>

    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
