import React, {useContext, useState, useEffect, createContext} from "react";
import {AppContext} from "../../components/App";
import Axios from "axios";
import Geocode from "react-geocode";
import ProfileView from "./ProfileView";

export const ProfileContext = createContext();


export default ( {history} ) => {
    const { user, t } = useContext(AppContext);
    
    const [data, setData] = useState("");
    const [product_action, setProduct_action] = useState("create");
    const [product_key_input, setProduct_key_input] = useState("");
    const [error_text, setError_text] = useState("");
    Geocode.setApiKey(process.env.MIX_GCP_API_KEY);
    Geocode.setLanguage("ja");
    //값 받기



    useEffect(()=>{
        
        console.log("profile useEffect");
        Axios.get(`/info/index/${user.id}`).then(res => {
            setData(res.data);

            if(res.data.product){
                setProduct_action("update");
            }

        });
    }, []);
    // console.log(data);
    //제품 생성
    const create_product = () => {
        const url = "/products";
        const body = {
            user_id : user.id,
            product_key : product_key_input
        }
        const config = {
            headers: {
                'Content-Type' : 'application/json'
              }
        }
        return Axios.post(url, body, config).then(res => {
            if(res.data){
                window.alert(t("제품을 등록하였습니다."));
                // history.push("/info/index");
                window.location.reload();
            }
            else{
                setError_text(t("값을 잘 못 입력하였거나 이미 사용중인 key입니다. 다시 확인해 주세요."));

            }
        })
    }

    //제품 수정
    const update_product = () => {
        const url = `/products/${data.product.id}`;
        const body = {
            user_id : user.id,
            product_key : product_key_input
        }
        const config = {
            'Content-Type' : 'application/json'
        }
        return Axios.put(url, body, config).then(res => {
            if(res.data){
                window.alert(t("제품을 등록하였습니다."));
                // history.push("/info/index");
                window.location.reload();
            }
            else{
                setError_text(t("잘못된 key입니다. 다시 확인해 주세요."));

            }
        })

    }

    //제품 삭제
    const delete_product = () => {
        if(window.confirm(t("제품 등록을 취소하시겠습니까?"))){
            const url = `/products/${data.product.id}`;
            return Axios.delete(url).then(res => {
                setProduct_action("create");
                window.location.reload();
                // history.push('/info/index/delete');
            })
        }
    }

    //제출 폼
    const onSubmit = (del = null) => {
        if(del == "delete"){
            delete_product();
        }
        else if(product_action == "create"){
            create_product();
        }
        else if(product_action == "update"){
            update_product();
        }
    }

    return (
        <ProfileContext.Provider value={{
            history,
            data,
            setProduct_key_input,
            error_text,
            onSubmit,
            setData,
        }}>
            <ProfileView/>
        </ProfileContext.Provider>
    )
}