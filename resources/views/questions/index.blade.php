@extends('layouts.app')

@section('content')

<section id="main-question">
    <div class="app-main mt-5">
        <div class="row m-5">
            <h1 class="">질문 게시판</h1>
        </div>
        <div class="row m-3">
            <div class="col-xs-12 col-sm-12 col-md-3">
                <div class="card btn btn-dark text-dark"> <!-- 아직 미구현 -->
                    <div class="">
                        icon
                    </div>
                    <h1 class="">
                        FAQ
                    </h1>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3">
                <div class="card btn btn-dark text-dark"> <!-- 아직 미구현 -->
                    <div class="">
                        icon
                    </div>
                    <h1 class="">
                        전체질문
                    </h1>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3">
                <div class="card btn btn-dark text-dark"> <!-- 아직 미구현 -->
                    <div class="">
                        icon
                    </div>
                    <h1 class="">
                        공지사항
                    </h1>
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-3">
                <div class="card btn btn-dark text-dark"> <!-- 아직 미구현 -->
                    <div class="">
                        icon
                    </div>
                    <h1 class="">
                        업데이트
                    </h1>
                </div>
            </div>
        </div>
        <div class="row m-3">
            @if(!$questions)
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <a class="btn btn-dark btn-lg btn-block" href="{{route('questions.create')}}">새글 작성</a>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="text-center">
                        <p class="text-dark">글 없음</p>
                    </div>
                </div>
            @else
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="row mb-3"> <!-- -->
                        <div class="input-group col-xs-8 col-sm-8 col-md-4 mr-auto">
                            <input type="text" class="form-control" placeholder="search.." aria-label="search.." aria-describedby="basic-addon2">
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button">Button</button>
                            </div>
                        </div>
                        <div class="col-auto">
                            <a class="btn btn-dark" href="{{route('questions.create')}}">글 작성</a>
                        </div>
                    </div>

                    <table class="table table-hover .table-responsive">
                        <thead class="">
                            <tr>
                                <td>No</td>
                                <td>Category</td>
                                <td>Title</td>
                                <td>Writer</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        @forelse($questions as $question)
                            <tbody class="">
                                <tr class="">
                                    <td>{{ $question->id }}</td>
                                    <td>{{ $question->category }}</td>
                                    <td><a href="{{route('questions.show',compact('question'))}}">{{ $question->title }}</a></td>
                                    <td>{{ $question->user->name }}</td>
                                    <td>{{ $question->updated_at->format('y-m-d') }}</td>
                                </tr>
                            </tbody>
                        @empty
                        @endforelse
                    </table>
                    <div class=" col-xs-12 col-sm-12 col-md-12 ">
                        @if($questions ->count())
                            {!! $questions->appends(Request::except('page'))->render() !!}
                        @endif
                    </div>
                </div>
            @endif
        </div>
    </div>
</section>
<!-- intro section -->
@endsection