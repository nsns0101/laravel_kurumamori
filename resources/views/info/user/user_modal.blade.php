<!-- Modal -->
<div class="modal fade" id="userModal" tabindex="-1" role="dialog" aria-labelledby="userModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="userModal">정보 수정</h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {{-- <div class="form-group {{$errors->has('name') ? 'has-error' : ''}}">
                    <p>이름</p>
                    <input type="text" name="name" class="form-control" placeholder="이름" value={{$user->name}} />
                    {!! $errors->first('name', '<span class="form-error">:message</span>')!!}
                </div>
                <div class="form-group {{$errors->has('name') ? 'has-error' : ''}}">
                    <p>이메일</p>
                    <input type="text" name="name" class="form-control" placeholder="이름" value={{$user->name}} />
                    {!! $errors->first('name', '<span class="form-error">:message</span>')!!}
                </div>
                <div class="form-group {{$errors->has('name') ? 'has-error' : ''}}">
                    <p>나이</p>
                    <input type="text" name="name" class="form-control" placeholder="이름" value={{$user->name}} />
                    {!! $errors->first('name', '<span class="form-error">:message</span>')!!}
                </div>
                <div class="form-group {{$errors->has('name') ? 'has-error' : ''}}">
                    <p>성별</p>
                    <input type="text" name="name" class="form-control" placeholder="이름" value={{$user->name}} />
                    {!! $errors->first('name', '<span class="form-error">:message</span>')!!}
                </div>
                <div class="form-group {{$errors->has('name') ? 'has-error' : ''}}">
                    <p>휴대폰</p>
                    <input type="text" name="name" class="form-control" placeholder="이름" value={{$user->name}} />
                    {!! $errors->first('name', '<span class="form-error">:message</span>')!!}
                </div> --}}
                <p>이메일 : {{$user->email}}</p>
                <p>이름 : {{$user->name}}</p>
                <p>나이 : {{$user->age}}</p>
                <p>성별 : {{$user->gender}}</p>
                <p>휴대폰 번호 : {{$user->phone}}</p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                <button type="button" class="btn btn-primary">확인</button>
            </div>
        </div>
    </div>
</div>
</div>