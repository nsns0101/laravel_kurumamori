//메인 라우터
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../layuot/Header";
import Footer from "../layuot/Footer";
import Home from "../routes/Home/Home"
import Login from "../routes/Auth/AuthContainer";
import Product from "../routes/Product/Product";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    // console.log(user);
    useEffect(()=>{
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            // console.log(AppState);
            setIsLoggedIn(AppState.isLoggedIn);
            setUser(AppState);
        }
    }, []);
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header isLoggedIn={isLoggedIn}/>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/auth/login" exact component={Login}/>
                <Route path="/auth/signup" exact component={Login}/>
                <Route path="/products" exact component={Product}/>
                <Footer/>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
