@extends('layouts.partial.info_menu')

@section('content')

<br />
<br />
<br />
<br />
<br />
<div class="container-fluid">
    <!-- intro section -->
    <section id="intro" class="section intro">
        <div class="col-md-1"></div>
        <div class="col-md-8">
            <h3>개인 정보</h3>
            <div id="ex1" class="modal" width="100px" height="200px">
                <p>안녕하세요. 모달창안의 내용부분입니다.</p>
                <a href="#" rel="modal:close">닫기</a>
            </div>

            <p><a href="#ex1" rel="modal:open">모달창띄우기</a></p>
            cs
            <div class="row">
                <div class="col-sm-6 col-md-6">
                    <div class="thumbnail">
                        <div class="caption">
                            <h3 class="text-center">유저 정보</h3>
                            <hr class="sidebar-divider">

                            <p>이메일 : {{$user->email}}</p>
                            <p>이름 : {{$user->name}}</p>
                            <p>나이 : {{$user->age}}</p>
                            <p>성별 : {{$user->gender}}</p>
                            <p>휴대폰 번호 : {{$user->phone}}</p>
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-toggle="modal"
                                data-target="#exampleModal">
                                Launch demo modal
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div><!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-6">
                    <div class="thumbnail">
                        <div class="caption">
                            <h3 class="text-center">신고 이력 </h3>
                            <hr class="sidebar-divider" style="background-color:blue;">
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
                    </div>
                </div>

            </div>
            <div class="col-sm-12 col-md-12">
                <div class="thumbnail">
                    <div class="caption">
                        <h3 class="text-center">문의 이력 </h3>
                        <hr class="sidebar-divider">

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
    </section>

</div>


@endsection

@section('script')


@stop