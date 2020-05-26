import React from "react";
import styled from "styled-components";
import Input from "../../components/Input";
// import Button from "../../components/Button";
import FatText from "../../components/FatText";
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
//로고 이미지 센터
const Img_center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
//login box
const LoginBox = styled.div`
  margin-top: 110px;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  background-color: white;
  width: 100%;
  max-width: 550px;
`;

//signup box
const SignUpBox = styled.div`
  margin-top: 70px;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-radius: 0px;
  background-color: white;
  width: 100%;
  max-width: 500px;
`;

// 로그인 회원가입 컨펌코드입력창 체인저
const StateChanger = styled.div`
  text-align: center;
  padding: 20px 0px;
`;
//
const Link_qwe = styled.span`
  color: blue;
  cursor: pointer;
`;
//로그인 폼
const LoginForm = styled(LoginBox)`
  padding: 40px;
  
`;
//회원가입 폼
const SignUpForm = styled(SignUpBox)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
`;

export default ({
  action,
  setAction,
  email,
  password,
  password_check,
  name,
  birth,
  gender,
  phone,
  // onSubmit,
  setGender
}) => {
  const { handleSubmit, register, errors, watch } = useForm();
  const onSubmit = values => console.log(values);   //임시

  return (
    <Wrapper>
      {action === "login" ? (
        <LoginForm>
          {/* 로고 이미지 */}
          <Img_center>
            <Link to="/">
              <img src="/icon/logo_curumamori.png" style={{width:"250px"}}/>
            </Link>
          </Img_center>

          <h2>{action === "login" ? "로그인" : "회원가입"}</h2>
          <br/>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group text-center"><Input placeholder={"Email"} {...email}/></div>
            <div className="form-group text-center"><Input placeholder={"Password"} {...password}/></div>
            <div className="form-group"><button className="btn btn-primary btn-lg btn-block">로그인</button></div>
          </form>
        </LoginForm>
      ) : (
        <SignUpForm>
          {/* 로고 이미지 */}
          <Img_center>
            <Link to="/">
              <img src="/icon/logo_curumamori.png" style={{width:"350px"}}/>
            </Link>
          </Img_center>
          <h2>{action === "login" ? "로그인" : "회원가입"}</h2>
          <br/>
          {/* 제출 폼 */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <h5 className="text-center" style={{color:"black"}}>로그인 정보</h5>
            <br />

            {/* <div className="form-group"><Input placeholder={"이메일"} {...email} /></div>
            <div className="form-group"><Input placeholder={"비밀번호"} {...password} /></div>
            <div className="form-group"><Input placeholder={"비밀번호 확인"} {...password_check}/></div>
            <hr />
            <h5 className="text-center" style={{color:"black"}}>유저 정보</h5>
            <br />
            <div className="form-group"><Input placeholder={"이름"} {...name}/></div>
            <div className="form-group"><Input placeholder={"생년월일"} {...birth}/></div>
            <div className="form-group"><Input placeholder={"휴대폰 번호"} {...phone}/></div> */}
            
            {/* 이메일 */}
            <div className="form-group">
              <input 
                name ="email" 
                placeholder={"이메일"}
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "이메일 형식(@)이 아닙니다."
                  }
                })} 
              />
              {errors.email && errors.email.message}
            </div>
            {/* 비밀번호 */}
            <div className="form-group">
              <input 
                name ="password" 
                placeholder={"비밀번호"}
                ref={register({
                  required: "Required"
                })}
              />
            </div>
            {/* 비밀번호 체크 */}
            <div className="form-group">
              <input 
                name ="password_confirmation" 
                placeholder={"비밀번호 확인"}
                ref={register({
                  required: "Required"
                })}
              />
            </div>

            <hr />
            <h5 className="text-center" style={{color:"black"}}>유저 정보</h5>
            <br />
            {/* 이름 */}
            <div className="form-group">
              <input 
                name ="name" 
                placeholder={"이름"}
                ref={register({
                  required: "Required"
                })}
              />
            </div>
            {/* 생년월일 */}
            <div className="form-group">
              <input 
                name ="birth" 
                placeholder={"생년월일"}
                ref={register({
                  required: "Required"
                })}
              />
            </div>
            {/* 휴대폰 번호 */}
            <div className="form-group">
              <input 
                name ="phone" 
                placeholder={"휴대폰 번호"}
                ref={register({
                  required: "Required"
                })}
              />
            </div>

            <div className="form-group text-center">
              <fieldset>
                남성
                <input type="radio" name="gender" onClick={() => setGender("남")}/>
                여성
                <input type="radio" name="gender" onClick={() => setGender("여")}/>
              </fieldset>
            </div>
            <div className="form-group"><button className="btn btn-primary btn-lg btn-block">가입하기</button></div>
          </form>
        </SignUpForm>
      )}
      {/* 입력창 체인저 */}
      <StateChanger>
        {action === "login" ? (
          <>
            계정이 없습니까?{" "}
            <Link_qwe onClick={() => setAction("signUp")}>회원가입</Link_qwe>
          </>
        ) : (
          <>
            로그인 하시겠습니까?{" "}
            <Link_qwe onClick={() => setAction("login")}>로그인</Link_qwe>
          </>
        )}
      </StateChanger>
      <br/>
      <br/>
    </Wrapper>
  );
};
