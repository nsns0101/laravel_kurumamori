<!-- Modal -->
<div class="modal fade" id="productModal" tabindex="-1" role="dialog" aria-labelledby="productModal" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="productModal">제품 등록</h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form action="{{route('index.store')}}" id="product_create_form" method="POST">
                    {{ csrf_field() }}
                    <p class="text-center">'-'를 포함해서 입력해주세요.</p>
                    <p class="text-center">ex) A1B2-C3D4-E5F6-G7H8</p>
                    {{-- 입력 폼 --}}
                    <div class="form-group {{ $errors->has('product_key') ? 'has-error' : '' }}">
                        <input id="product_key" type="text" name="product_key" class="form-control"
                            placeholder="제품 키 입력" value="{{ old('product_key') }}" />
                        <!-- <input type="email" name="email" class="form-control" placeholder="이메일" value="admin@mail.com" autofocus /> -->
                        {!! $errors->first('product_key', '<span class="form-error">:message</span>') !!}
                    </div>
                    <p class="text-danger" id="ex_text"></p>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
                        <button type="submit" class="btn btn-primary btn__post__product">등록</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</div>
</div>