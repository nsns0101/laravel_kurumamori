import React, {useState} from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";

export default ({ 
    history,
    user, 
    product, 
    product_action,
    product_key_input,
}) => {
    const { handleSubmit, register, errors, watch } = useForm();
    // const [product_key_input, setProduct_key_input] = useState("");
    // const [error_text, setError_text] = useState("");
    //제품 생성
    const create_product = () => {
        const url = "/products";
        const body = {
            //oa2P-lki8-qSkV-OOX1
            user_id : user.id,
            product_key : product_key_input
        }
        const config = {
            'Content-Type' : 'application/json'
        }
        return Axios.post(url, body, config).then(res => {
            console.log(res);
            if(res.data){
                window.alert("제품을 등록하였습니다.");
                // history.push("/info/index");
                window.location.reload();
            }
            else{
                setError_text("잘못된 key입니다. 다시 확인해 주세요.");

            }
        })
    }

    const update_product = () => {
        const url = `/products/${product.id}`
        const body = {
            user_id : user.id,
            product_key : product_key_input
        }
        const config = {
            'Content-Type' : 'application/json'
        }
        return Axios.put(url, body, config).then(res => {
            console.log(res);
            if(res.data){
                window.alert("제품을 재등록하였습니다.");
                // history.push("/info/index");
                window.location.reload();
            }
            else{
                setError_text("잘못된 key입니다. 다시 확인해 주세요.");

            }
        })

    }


    const onSubmit = () => {
        if(product_action == "create"){
            create_product();
        }
        else{
            update_product();
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal fade" id="productModal" tabIndex="-1" role="dialog" aria-labelledby="productModal" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="productModal">제품 등록</h5>

                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p className="text-center">'-'를 포함해서 입력해주세요.</p>
                            <p className="text-center">ex) A1B2-C3D4-E5F6-G7H8</p>
                            {/* {{-- 입력 폼 --}} */}
                            {/* <div className="form-group {{ $errors->has('product_key') ? 'has-error' : '' }}">
                                <input id="product_key" type="text" name="product_key" className="form-control"
                                    placeholder="제품 키 입력" value="{{ old('product_key') }}" />
                                {!! $errors->first('product_key', '<span className="form-error">:message</span>') !!}
                            </div> */}
                                <input 
                                    id="product_key"
                                    name="product_key"
                                    style={{width:"100%"}}
                                    onChange={ e => {
                                        const {
                                            target : {value}
                                        } = e;
                                        setProduct_key_input(value);
                                    }}
                                    ref={register({
                                        required: "Required",
                                        pattern: {
                                            value: /^[0-9A-Za-z]{4}-[0-9A-Za-z]{4}-[0-9A-Za-z]{4}-[0-9A-Za-z]{4}/,
                                            message: "올바른 키 입력이 아닙니다."
                                        }
                                    })}
                                />
                            <div className="text-danger">
                                <p>{errors.product_key && errors.product_key.message}</p>
                                <p>{error_text ? error_text : null}</p>
                            </div>

                            {product ? (
                                <p className="text-danger">이전에 등록한 key는 다시 사용할 수 있습니다.</p>
                            ) : null}
                            <p className="text-danger" id="ex_text"></p>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">닫기</button>
                                {product ? (
                                    <button type="submit" className="btn btn-primary btn__update__product">재등록</button>
                                ) : (
                                    <button type="submit" className="btn btn-primary btn__post__product">등록</button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}