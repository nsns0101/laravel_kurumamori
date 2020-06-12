import React, {useContext} from "react";
import { DriveContext } from "../DriveContainer";

export default () => {
    const {
        score
    } = useContext(DriveContext);

    const drive_score = ( text ,index) => {
        return (
            <div className="col-xs-2 col-sm-2 col-md-2">
                <div className="card btn btn-primary text-dark">
                    <div className="pt-3 pb-3">
                        {score[index] >= 90 ? (
                            <img src="/icon/모범.png"/>
                        ) : score[index] >= 50 ? (
                            <img src="/icon/양호.png"/>
                        ) : (
                            <img src="/icon/주의.png"/>
                        )}
                    </div>
                    <h1 className="pb-3" style={{fontSize:"20px", fontColor:"#222222", fontWeight:"600"}}>{text}</h1>
                    <h1 className="pb-3" style={{fontSize:"20px", fontColor:"#222222", fontWeight:"600"}}>{score[index]}점</h1>
                </div>
            </div>
        )
    }

    return  score.length ? (
        <div>
            <div className="row">
                {/* 총 점수 */}
                <div className="col-xs-4 col-sm-4 col-md-4">
                    <div className="card btn btn-primary text-dark"> 
                        <div className="pt-3 pb-3">
                            {(score[0] + score[1] + score[2] + score[3]) / score.length >= 90 ? (
                                <img src="/icon/모범.png"/>
                            ) : (score[0] + score[1] + score[2] + score[3]) / score.length >= 50 ? (
                                <img src="/icon/양호.png"/>
                            ) : (
                                <img src="/icon/주의.png"/>
                            )}
                        </div>
                        <h1 className="pb-3" style={{fontSize:"48px", fontColor:"#222222", fontWeight:"500"}}>총 점수</h1>
                        <h1 className="pb-3" style={{fontSize:"48px", fontColor:"#222222", fontWeight:"500"}}>{(score[0] + score[1] + score[2] + score[3]) / score.length}점</h1>
                    </div>
                </div>
                {drive_score("급가속 점수", 0)}
                {drive_score("급감속 점수", 1)}
                {drive_score("졸음 점수", 2)}
                {drive_score("사고 점수", 3)}
            </div>
            <br/>
        </div>
    ) : null
}