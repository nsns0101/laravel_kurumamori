import React from "react";


export default ({data, medical_update}) => {
    return (
        <div>
            good
        </div>
        // <div>
        //     <a className="btn btn-success" href={`/info/medical_info/${data.medical_info.id}/edit`}>의료정보 수정</a>
        //     <div className="row">
        //         <div className="col-sm-6 col-md-3">
        //             <div className="thumbnail">
        //                 <div className="caption">
        //                     <h3 className="text-center">과거 병력</h3>
        //                     <hr style={{background:"darkgrey"}}/>
        //                     {data && data.past_sickness ? data.past_sickness.map( (value,index) => {
        //                         <div key={index}>
        //                             <p>예전에 걸린 병{index + 1} : {value.past_sickness_name}}</p>
        //                             <p>예전에 걸린 병{index + 1} 보충 설명 : {value.past_sickness_supplementation}}</p>
        //                         </div>
        //                     }) : (                            
        //                         <p className="text-center text-danger">이력이 없습니다.</p>
        //                     )}
        //                     <hr style={{background:"darkgrey"}}/>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="col-sm-6 col-md-3">
        //             <div className="thumbnail">
        //                 <div className="caption">
        //                     <h3 className="text-center">현재 병력</h3>
        //                     <hr style={{background:"darkgrey"}}/>
        //                     {data && data.sickness ? data.sickness.map( (value,index) => {
        //                         <div key={index}>
        //                             <p>예전에 걸린 병{index + 1} : {value.sickness_name}}</p>
        //                             <p>예전에 걸린 병{index + 1} 보충 설명 : {value.sickness_supplementation}}</p>
        //                         </div>
        //                     }) : (                            
        //                         <p className="text-center text-danger">이력이 없습니다.</p>
        //                     )}
        //                     <hr style={{background:"darkgrey"}}/>

        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-sm-6 col-md-3">
        //             <div className="thumbnail">
        //                 <div className="caption">
        //                     <h3 className="text-center">기타 정보</h3>
        //                     <hr style={{background:"darkgrey"}}/>
        //                     <p>보호자 휴대폰 : {data.medical_info.guardian_phone ? data.medical_info.guardian_phone : "없음"}</p>
        //                     <p>혈액형 : {data.medical_info.blood_type}</p>
        //                     <p>장애 여부 : {data.medical_info.disability_status}</p>
        //                     <p>신고시 요청사항 : {data.medical_info.report_request ? data.medical_info.report_request : "없음"}</p>
        //                     <hr style={{background:"darkgrey"}} />
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col-sm-6 col-md-3">
        //             <div className="thumbnail">
        //                 <div className="caption">
        //                     <h3 className="text-center">보험 정보</h3>
        //                     <hr style={{background:"darkgrey"}}/>
        //                     {data.insurance ? (
        //                         <div>
        //                             <p>보험사 명 : {data.insurance_my.insurance_name}</p>
        //                             <p>보험사 전화번호 : {data.insurance_my.insurance_phone}</p>
        //                             <p>가입일 : {data.insurance.subscription_date}</p>
        //                             <p>만기일 : {data.insurance.expiration_date}</p>
        //                         </div>
        //                     ) : (
        //                         <p className="text-center text-danger">이력이 없습니다.</p>
        //                     )}

        //                     <hr style={{background:"darkgrey"}} />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        //     <p className="text-danger">위의 작성하신 의료정보는 운전 중 사고발생시 119센터에 보내는 메시지입니다.</p>
        //     <p className="text-danger">작성한 정보에 틀린 점이 없는 지 확인해 주세요.</p>
        // </div>


    )
}