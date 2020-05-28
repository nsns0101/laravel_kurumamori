import React from "react";

export default () => {
    return (
        // <!-- Modal -->
        <div className="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModal" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="userModal">정보 수정</h5>

                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>이메일 : a</p>
                        <p>이름 : a</p>
                        <p>나이 : a</p>
                        <p>성별 : a</p>
                        <p>휴대폰 번호 : a</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">닫기</button>
                        <button type="button" className="btn btn-primary">확인</button>
                    </div>
                </div>
            </div>
        </div>
    )
}