import React, { useState} from "react";
import useInput from "../../Hooks/useInput";
import { toast } from "react-toastify";
import AuthView from "./AuthView";
import Axios from "axios";

export default () => {

  const [action, setAction] = useState("login");      //현재 로그인인지 회원가입인지 등의 상태
  const email = useInput("");                 //이메일
  const password = useInput("");              //비밀번호
  const password_check = useInput("");        //비밀번호 확인
  const name = useInput("");                  //이름
  const birth = useInput("");                 //생년월일
  const [gender, setGender] = useState("");   //성별
  const phone = useInput("");                 //휴대폰 번호


  //회원가입 함수
  const addUser = async () => {
    const url = "/auth/signup";
    const body = {
      email: email.value,
      password: password.value,
      // password_check: password_check.value,
      name: name.value,
      birth: birth.value,
      gender: gender,
      phone: phone.value
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
    const url = "/auth/login";
    const body = {
      email: email.value,
      password: password.value,      
    };
    return Axios.post(url, body);
  }

  //회원가입이나 로그인 버튼 클릭시
  const onSubmit = async e => {
    e.preventDefault();

    //회원가입 창일 때
    if(action === "login"){
      if(email.value !== "" && password.value !== ""){
        loginUser().then(data => {
          if(data.data.result){
            toast.success(data.data.msg);
            window.location.reload();
          }
          else{
            toast.error(data.data.msg);
          }
        });
      }
    }
    else if(action === "signUp"){
      console.log(email);

      //값을 전부 입력한 경우
      if (
        email.value !== "" &&
        password.value !== "" &&
        password_check.value !== "" &&
        name.value !== "" &&
        birth.value !== "" &&
        gender !== "" &&
        phone.value !== ""
      ) {
        try {
          //비밀번호 체크
          if (password.value !== password_check.value) {
            toast.error("비밀번호 확인이 맞지않습니다.");
            return;
          }

          //회원가입 요청
          addUser().then(data => {
            //회원가입 성공시
            if (data.data.result) {
              console.log(data.data.session);
              toast.success(data.data.msg);
              //로그인 창으로 이동
              setAction("login");
            } else {
              toast.error(data.data.msg);
            }
          });
        } catch (error) {
          console.log(error);
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
      email={email}
      password={password}
      password_check={password_check}
      name={name}
      birth={birth}
      gender={gender}
      phone={phone}
      onSubmit={onSubmit}
      setGender={setGender}
      />
  );
};