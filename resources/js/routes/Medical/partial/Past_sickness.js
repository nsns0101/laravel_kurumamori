import React from "react";

const unnown = [0,1,2];

export default () => {
    return (
        <div className="row" style={{display:"flex", marginTop:"10px"}}>
            <div className="col-md-1">
                    {/* @if($i == 1) */}
                    <img id="add__past_sickness"src="/icon/plus.png" style={{marginLeft:"50%"}} onClick={() => console.log("추가")}/>
                    {/* @else */}
                    {/* <img id="delete__past_sickness"src="/icon/minus.png" style="margin-left:50%" onClick="delete_past_sickness()"/> */}
                    {/* @endif */}
                </div>
                <div className="col-md-2 text-center">
                    <span className="add__past_sickness medical_text"style={{marginTop:"13px"}}>과거 질환</span>
                </div>
                {/* {{-- 드롭다운버튼 --}} */}
                <div className="col-md-2">
                    <button 
                        className="btn btn-default dropdown-toggle past_sickness_btn dropdown_btn" type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="true">
                        {/* {{-- {{isset($past_sickness[$i-1]) ? $past_sickness[$i-1]->past_sickness_name : old("past_sickness_name.$i", "선택")}} --}} */}
                        {/* {{isset($past_sickness[$i-1]) ? $past_sickness[$i-1]->past_sickness_name : old("past_sickness_name.$i", "고혈압")}} */}
                        <span className="caret"></span>
                    </button>
                    <div className="form-group">
                        {/* // {{-- <input className="past_sickness_name" type="hidden"style="font-size:10px"  name="past_sickness_name[]" className="form-control"value="{{ isset($past_sickness[$i-1]) ? old("past_sickness_name[$i]",$past_sickness[$i-1]->past_sickness_name) :  old("past_sickness_name.$i")}}"/> --}} */}
                        <input className="past_sickness_name" type="hidden"style={{fontSize:"10px"}}  name="past_sickness_name" className="form-control"value="qweqwe"/>
                        {/* // {!! $errors->first('past_sickness_name[]', '<span className="form-error">:message</span>') !!} */}
                    </div>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        {/* @for($j = 0; $j < count($sickness_list); $j++) */}
                    <li><a className="dropdown-past_sickness" href="#" style={{color:"black", fontSize:"18px"}}></a></li>
                        {/* @endfor */}
                    
                    </ul>
                </div>
                {/* // {{--  --}} */}
                <div className="col-md-6">
                    <div className="form-group">
                        {/* {{-- <input className="past_sickness_supplementation" style="font-size:24px; width:100%;"type="text"  */}
                            {/* name="past_sickness_supplementation[]" className="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{isset($past_sickness[$i-1]) ? old("past_sickness_supplementation.$i" ,$past_sickness[$i-1]->past_sickness_supplementation) :  old("past_sickness_supplementation.$i") }}"/> --}} */}
                            {/* <input className="past_sickness_supplementation" style="font-size:20px; width:100%;"type="text"  */}
                            {/* name="past_sickness_supplementation[]" className="form-control" placeholder="보충설명(복용 약물, 기간)" value="{{isset($past_sickness[$i-1]) ? old("past_sickness_supplementation.$i" ,$past_sickness[$i-1]->past_sickness_supplementation) :  "고혈압약 5년간 복용했었음" }}"/> */}
                        {/* {!! $errors->first('past_sickness_supplementation', '<span className="form-error">:message</span>') !!} */}
                    </div>
                </div>

                <div className="col-md-1"></div>
        </div>
    )
}