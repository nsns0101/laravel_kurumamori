import React, { useState, useContext} from "react";
import useInput from "../../Hooks/useInput";
import { toast } from "react-toastify";
import AuthView from "./AuthView";
import Axios from "axios";
import {AppContext} from "../../components/App";
export default ({ location, history }) => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AppContext);
  // console.log(isLoggedIn);  

//현재 로그인인지 회원가입인지 등의 상태
  const [action, setAction] = useState(
    location.pathname === "/auth/login" ? "login": location.pathname === "/auth/signUp" ? "signUp" : "logout"
  );      
  // console.log(action);
  const [email, setEmail] = useState("");                     //이메일
  const [password, setPassword] = useState("");               //비밀번호
  const [password_check, setPassword_check] = useState("");   //비밀번호 확인
  const [name, setName] = useState("");                       //이름
  const [birth, setBirth] = useState("");                     //생년월일
  const [phone, setPhone] = useState("");                     //휴대폰 번호
  const [gender, setGender] = useState("");                   //성별
  const [confirm_code, setConfirm_code] = useState("");       //승인코드
  const [danger_message, setDanger_message] = useState("");   //경고메시지
  //회원가입 함수
  const addUser = async () => {
    const url = "/auth/signup";
    const body = {
      email: email,
      password: password,
      // password_check: password_check,
      name: name,
      birth: birth,
      gender: gender,
      phone: phone
    };
    const config = {
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
  
    }
    return Axios.post(url, body, config);
  }

  //로그인 함수
  const loginUser = async () => {
    const TOKEN = "accessToken";
    const url = "/auth/login";
    const body = {
      email: email,
      password: password,      
    };
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    if(localStorage.getItem(TOKEN)){
      headers.append(
        "Authorization",
        "Bearer" + localStorage.getItem(TOKEN)
      );
    }
    
    const defaults = {headers: headers};
    const options = Object.assign({}, defaults, url, body);


    return Axios.post(url, options);
  }


  //승인코드 확인 함수
  const check_confirm_code = async () =>{
    const url = "/confirm";
    const body = {
      email: email,
      password: password,
      confirm_code :confirm_code
    };
    const config = {
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      }
    }
    return Axios.post(url, body, config);
  }

  //로그아웃일 때
  if(action === "logout"){
    // console.log("good");
    localStorage.removeItem("appState");
    history.push("/");
    setIsLoggedIn(false);
  }

  //회원가입이나 로그인 버튼 클릭시
  const onSubmit = async e => {
    // e.preventDefault();

    //로그인 창일 때
    if(action === "login"){
      // console.log("login");
      if(email !== "" && password !== ""){
        loginUser().then(res => {
          // console.log(res);
          if(res.data.success){
            let userData = {
              name: res.data.data.name,
              id: res.data.data.id,
              email: res.data.data.email,
              auth_token: res.data.data.auth_token,
              timestamp: new Date().toString()
            };
            // let user = userData;
            // save app state with user date in local storage
            localStorage["appState"] = JSON.stringify(userData);
            // console.log(User);
            // setAction("");
            history.push('/');
            setIsLoggedIn(true);
            // console.log(isLoggedIn);
          }
          else{
            setDanger_message("잘못된 이메일 또는 비밀번호 입니다.");
          }
          
        });
      }
    }
    else if(action === "signUp"){
      // console.log(email);

      //값을 전부 입력한 경우
      if (
        email !== "" &&
        password !== "" &&
        password_check !== "" &&
        name !== "" &&
        birth !== "" &&
        gender !== "" &&
        phone !== ""
      ) {
        try {
          //비밀번호 체크
          // if (password !== password_check) {
          //   toast.error("비밀번호 확인이 맞지않습니다.");
          //   return;
          // }

          //회원가입 요청
          addUser().then(res => {
            //회원가입 성공시
            // console.log(res);
            if (res.data) {
              //로그인 창으로 이동
              setAction("confirm");
            }
            
          });
        } catch (error) {
          console.log("메일건 오류");
        }
      }
      //값을 다 넣지 않은 경우
      else {
        toast.error("값을 전부 넣어주세요!");
      }
    }
    //액션이 승인코드 입력일 때
    else if(action = "confirm"){
      check_confirm_code().then( (res) => {
        // console.log(res.data);
        if(res.data.success){
          let userData = {
            name: res.data.data.name,
            id: res.data.data.id,
            email: res.data.data.email,
            auth_token: res.data.data.auth_token,
            timestamp: new Date().toString()
          };
          let appState = {
            isLoggedIn: true,
            user: userData
          };
          // save app state with user date in local storage
          localStorage["appState"] = JSON.stringify(appState);
          // console.log(User);
          // setAction("");
          history.push('/');
          setIsLoggedIn(true);
        }
        else{
          setDanger_message("잘못된 승인코드 입니다.");
        }
      })
    }
  };

  return (
      <AuthView
      action={action}
      setAction={setAction}
      // email={email} 
      setEmail={setEmail}
      // password={password}
      setPassword={setPassword}
      // password_check={password_check}
      setPassword_check={setPassword_check}
      // name={name}
      setName={setName}
      // birth={birth}
      setBirth={setBirth}
      // gender={gender}
      setGender={setGender}
      // phone={phone}
      setPhone={setPhone}
      onSubmit={onSubmit}
      setGender={setGender}
      setConfirm_code={setConfirm_code}
      danger_message={danger_message}
      setDanger_message={setDanger_message}
      />
  );
};