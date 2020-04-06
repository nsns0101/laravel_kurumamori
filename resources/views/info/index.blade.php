@extends('layouts.app')
{{-- @extends('layouts.partial.info_menu') --}}

@section('content')

<br />
<br />

<!-- intro section -->
<section id="intro" class="section intro">
    <div class="row">

        <div class="col-md-2">
            @include('layouts.partial.info_menu')
        </div>
        <div class="col-md-8">
            <br />
            <br />
            <h3>개인 정보</h3>

            <div class="row">
                <div class="col-sm-6 col-md-3">
                    <div class="thumbnail">
                        <div class="caption">
                            <h3 class="text-center">유저 정보</h3>
                            <hr style="background-color:darkgrey;">
                            <p>이메일 : {{$user->email}}</p>
                            <p>이름 : {{$user->name}}</p>
                            <p>나이 : {{$user->age}}</p>
                            <p>성별 : {{$user->gender}}</p>
                            <p>휴대폰 번호 : {{$user->phone}}</p>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#userModal">
                                상세보기
                            </button>
                            @include('info.partial.user_modal',compact('user'))
                            <hr style="background-color:darkgrey;">

                        </div>
                    </div>
                    <div class="col-sm-6 col-md-5">
                        <div class=" thumbnail">
                            <div class="caption">
                                <h3 class="text-center">신고 이력 </h3>
                                <hr style="background-color:red;">
                                {{-- 신고 이력 --}}
                                @forelse($reports as $report)
                                <div class="row">
                                    <div class="col-sm-6 col-md-6">
                                        <p>접수날짜 : {{$report->created_at}}</p>
                                    </div>
                                    <div class="col-sm-6 col-md-6">
                                        <p>접수위치 : {{$report->gps}}</p>
                                    </div>
                                </div>
                                {{-- 신고 이력이 없을 경우 --}}
                                @empty
                                <p class="text-center text-danger">이력이 없습니다.</p>
                                @endforelse
                                <p class="text-danger">최근 5건만 표시됩니다.</p>

                            </div>
                            <hr style="background-color:red;">

                        </div>
                    </div>
                    <div class="col-sm-6 col-md-4">
                        <div class="thumbnail">
                            <div class="caption">
                                <h3 class="text-center">제품 정보</h3>
                                <hr style="background-color:green;">
                                @if($product)
                                <p>제품 명 : {{$product->product_name}}</p>
                                <p>제품 키 : {{$product->product_key}}</p>
                                <p>구입날짜 : {{$product->date_buy}}</p>
                                <p>AS기한 : {{$product->date_as}}까지</p>
                                <button class="btn btn-primary">등록하기</button>
                                @else
                                <p class="text-center text-danger">등록한 제품이 없습니다.</p>
                                <button type="button" class="btn btn-primary" data-toggle="modal"
                                    data-target="#productModal">
                                    제품 등록
                                </button>
                                @include('info.partial.product_modal',compact('product_use_key'))
                                @endif
                            </div>
                            <hr style="background-color:green;">

                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12">
                    <div class="thumbnail">
                        <div class="caption">
                            <h3 class="text-center">문의 이력 </h3>
                            <hr style="background-color:blue;">

                            @forelse($questions as $question)
                            <div class="row">
                                <div class="col-sm-6 col-md-1 text-center">
                                    <p>{{$question->id}}</p>

                                </div>
                                <div class="col-sm-6 col-md-8 text-center">
                                    <p>{{$question->title}}</p>
                                </div>
                                <div class="col-sm-6 col-md-3 text-center">
                                    <p>{{$question->created_at}}</p>

                                </div>
                            </div>
                            {{-- 신고 이력이 없을 경우 --}}
                            @empty
                            <p class="text-center text-danger">이력이 없습니다.</p>
                            @endforelse
                            <br />
                            <p class="text-danger">최근 5건만 표시됩니다.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
@endsection

@section('script')
<script>
    $(document).on('click', '.btn__post__product', function(e) {
    var product_key = $('#product_key');
    $.ajax({
        headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},  
        type: 'POST',
        url: '/info/index',
        dataType: 'json',
        data: product_key
    }).then(function (data){
        console.log(data[0].id)
        $('#ex_text').text(`${data[0].product_key}로 하시겠습니까?`);
        //같은 파일에 있는 id를 가진 텍스트는 바껴지는데 include로 한 것은 안바뀜
    });
});
</script>
@stop