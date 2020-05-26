import React, { useState} from "react";
import useInput from "../../Hooks/useInput";
import { toast } from "react-toastify";
import AuthView from "./AuthView";
import Axios from "axios";

export default () => {

  const [action, setAction] = useState("login");      //현재 로그인인지 회원가입인지 등의 상태
  const [email, setEmail] = useState("");                 //이메일
  const [password, setPassword] = useState("");              //비밀번호
  const [password_check, setPassword_check] = useState("");        //비밀번호 확인
  const [name, setName] = useState("");                  //이름
  const [birth, setBirth] = useState("");                 //생년월일
  const [phone, setPhone] = useState("");                 //휴대폰 번호
  const [gender, setGender] = useState("");   //성별


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

  //회원가입이나 로그인 버튼 클릭시
  const onSubmit = async e => {
    // e.preventDefault();

    //회원가입 창일 때
    if(action === "login"){
      if(email !== "" && password !== ""){
        loginUser().then(data => {
          console.log(data);
          // if(data.data.result){
          //   toast.success(data.data.msg);
          //   window.location.reload();
          // }
          // else{
          //   toast.error(data.data.msg);
          // }
          
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
          addUser().then(data => {
            //회원가입 성공시
            if (data.data) {
              //로그인 창으로 이동
              setAction("login");
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
      />
  );
};