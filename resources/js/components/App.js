//메인 라우터
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "../layuot/Header";
import Footer from "../layuot/Footer";
import Home from "../routes/Home/Home"
import Login from "../routes/Auth/AuthContainer";
import { ToastContainer, toast } from "react-toastify";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Header/>
                <Route path="/" exact={true} component={Home}/>
                <Route path="/auth/login" exact component={Login}/>
                <ToastContainer/>    
                <Footer/>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
