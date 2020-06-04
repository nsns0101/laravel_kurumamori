import React, { useState } from "react";
import Dropdown from "react-dropdown";
export default ({
    res,
    setRes,
    past_sickness_name,
    setPast_sickness_name,
    past_sickness_supplementation,
    setPast_sickness_supplementation,
}) => {
    
    let [past_sickness, setPast_sickness] = useState(["abc","def"]);
    //드롭다운 옵션
    const options = [
        'one', 'two', 'three'
    ];
 

    console.log(past_sickness)
    const add_past_sickness = () => {
        if(past_sickness.length < 3){
            
            setPast_sickness(past_sickness => [...past_sickness, past_sickness.length]);
        }
    }
    const minus_past_sickness = (index) => {
        // const index = 1;
        if(index != 0){
            const kk = past_sickness.slice(0, index).concat(past_sickness.slice(index+1, past_sickness.length));
            setPast_sickness(kk);
        }
        
    }

    //past_sickness만큼 map함수 돌고 add_past_sickness가면 past_sickness++ minus_past_sickness가면 past_sickness-/
    //추가할 때 data.~~.past_sickness추가
    //삭제할 때 data.~~.past_sickness를 지우기?
    return (
        past_sickness.map( (value, index) => {
            return (
                <div key={index} className="row" style={{display:"flex", marginTop:"10px"}}>
                    <div className="col-md-1">
                        {index == 0 ? 
                            <img src="/icon/plus.png" style={{marginLeft:"50%"}} onClick={() => add_past_sickness()}/>
                        :
                            <img src="/icon/minus.png" style={{marginLeft:"50%"}} onClick={() => minus_past_sickness(index)}/>
                        }
                    </div>
                    <div className="col-md-2 text-center p-3">
                        <span className="medical_text"style={{marginTop:"13px"}}>과거 질환</span>
                    </div>
                    {/* {{-- 드롭다운버튼 --}} */}
                    <div className="col-md-2 text-center p-2">
                        <Dropdown options={options} onChange={(value) => setPast_sickness_name(value)} value={past_sickness_name} placeholder="선택" style={{width:"200px"}}/>
                    </div>
                    {/* // {{--  --}} */}
                    <div className="col-md-6">
                        <div className="form-group p-2">
                            {/* {{-- <input className="past_sickness_supplementation" style="font-size:24px; width:100%;"type="text"  */}
                                {/* name="past_sickness_supplementation[]" className="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{isset($past_sickness[$i-1]) ? old("past_sickness_supplementation.$i" ,$past_sickness[$i-1]->past_sickness_supplementation) :  old("past_sickness_supplementation.$i") }}"/> --}} */}
                                <input className="past_sickness_supplementation" style={{fontSize:"20px", width:"100%"}} type="text"
                                name="past_sickness_supplementation" className="form-control" placeholder="보충설명(복용 약물, 기간)"/> 
                            {/* {!! $errors->first('past_sickness_supplementation', '<span className="form-error">:message</span>') !!} */}
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            )
        } )
    )
}