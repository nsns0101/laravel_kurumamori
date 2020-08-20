import React, {useContext, useState, useEffect} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import Buy from "./Buy";
import Completed from "./partial/Completed";

export default ({ history }) => {
    const {t} = useContext(AppContext);

    const { user } = useContext(AppContext);

    const [name, setName] = useState(""); //setName 이름
    const [phone, setPhone] = useState(""); //buy_phone 휴대전화
    const [email, setEmail] = useState(""); //buy_email 상세주소
    
    const [name2, setName2] = useState(""); //setName 이름
    const [phone2, setPhone2] = useState(""); //buy_phone 휴대전화
    const [email2, setEmail2] = useState(""); //buy_email 상세주소
    
    const [local, setLocal] = useState(""); //setState 지역
    const [address, setAddress] = useState(""); //setAddress 주소
    const [postal, setPostal] = useState(""); //buy_postal 우편번호
    const [detail_address, setDetailAddress] = useState(""); //buy_detail_address 상세주소
    const [access_code, setAccessCode] = useState(""); //buy_access_code 상세주소
    const [product_key, setProduct_key] = useState("");
    useEffect(()=>{
        setName("キム·ヨンジン")
        setLocal("大阪県")
        setAddress("大阪市中央区宗右衛門町７−18")
        setPostal("41234")
        setDetailAddress("チョンソルマンション301号")
        setAccessCode("0310")
        setEmail("kim@youngjin.com")
        setPhone("010-7374-6119")

        setName2("キム·ヨンジン")
        setEmail2("kim@youngjin.com")
        setPhone2("010-7374-6119")
    },[])
        //post
    const onSubmit = async () => {
        const url = "/buy";
        const body = {
            user_id : user.id,
            name: name,
            state: local,
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
                setProduct_key(res.data.buy.product_key);
                history.push("/products/buy/completed");
            }
            else{
                console.log('실패');
            }
            
        });
    }

    return (
        product_key ? (
            <Completed
                product_key={product_key}
                name={name}
                phone={phone}
                email={email}

                name2 ={name2}
                phone2={phone2}
                email2={email2}
                
                address={address}
                detail_address={detail_address}
                postal={postal}
                user={user}
            />
            
        ) : <Buy 
        user={user}
        onSubmit={onSubmit}
        setName={setName}
        setLocal={setLocal}
        setAddress={setAddress}
        setPostal={setPostal}
        setDetailAddress={setDetailAddress}
        setAccessCode={setAccessCode}
        setEmail={setEmail}
        setPhone={setPhone}
        name={name}
        local={local}
        address={address}
        postal={postal}
        detail_address={detail_address}
        access_code={access_code}
        email={email}
        phone={phone}
        product_key={product_key}

        name2={name2}
        email2={email2}
        phone2={phone2}
        setName2 ={setName2}
        setPhone2={setPhone2}
        setEmail2={setEmail2}

        t={t}
        />
      
  );
};