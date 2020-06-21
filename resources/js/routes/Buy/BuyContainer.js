import React, {useContext, useState, useEffect} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import Buy from "./Buy";

export default ({ history }) => {
    const { user } = useContext(AppContext);

    const [name, setName] = useState(""); //setName 이름
    const [state, setState] = useState(""); //setState 지역
    const [address, setAddress] = useState(""); //setAddress 주소
    const [postal, setPostal] = useState(""); //buy_postal 우편번호
    const [detail_address, setDetailAddress] = useState(""); //buy_detail_address 상세주소
    const [access_code, setAccessCode] = useState(""); //buy_access_code 상세주소
    const [email, setEmail] = useState(""); //buy_email 상세주소
    const [phone, setPhone] = useState(""); //buy_phone 휴대전화

    //post
    const onSubmit = async () => {
        const url = "/buy";
        const body = {
            user_id : user.id,
            name: name,
            state: state,
            address: address,
            postal: postal,
            detail_address: detail_address,
            access_code: access_code,
            email: email,
            phone: phone,
        };
        console.log
        const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
        }

        return Axios.post(url, body, config)
        .then(res => {
            if(res.data){
                console.log(res);
                history.push("/");
            }
            else{
                console.log('실패');
            }
            
        });
    }

    return (
      <Buy 
        user={user}
        onSubmit={onSubmit}
        setName={setName}
        setState={setState}
        setAddress={setAddress}
        setPostal={setPostal}
        setDetailAddress={setDetailAddress}
        setAccessCode={setAccessCode}
        setEmail={setEmail}
        setPhone={setPhone}
        />
  );
};