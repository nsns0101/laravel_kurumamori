//메인 라우터
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../layuot/Header";
import Footer from "../layuot/Footer";
import Home from "../routes/Home/Home"
import Login from "../routes/Auth/AuthContainer";
import Product from "../routes/Product/Product";

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header/>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/auth/login" exact component={Login}/>
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
