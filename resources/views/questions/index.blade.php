@extends('layouts.app')

@section('content')

<section id="main-question">
    <div class="contaienr px-3 py-5 p-md-5">
        @include('questions.partial.header')
        <div class="row m-3">
            @if(!$questions->count())
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
                    <div class="row mb-3"> <!--검색 기능 미구현 -->
                        <form class="input-group col-xs-8 col-sm-8 col-md-4 mr-auto" method="get" action="{{route('questions.index')}}" role="search">
                            <input type="text" class="form-control" placeholder="search.." aria-label="search.." aria-describedby="basic-addon2" id="search" name='search'>
                            <div class="input-group-append">
                                <button class="btn btn-dark" type="submit">button</button>
                            </div>
                        </form>
                        <div class="col-auto">
                            <a class="btn btn-dark" href="{{route('questions.create')}}">글 작성</a>
                        </div>
                    </div>

                    <table class="table table-hover .table-responsive">
                        <thead class="">
                            <tr>
                                <td>No</td>
                                <td></td>
                                <td>Category</td>
                                <td>Title</td>
                                <td>Writer</td>
                                <td>Date</td>
                                <td>HIT</td>
                            </tr>
                        </thead>
                        @forelse($questions as $question)
                            <tbody class="">
                                <tr class="">
                                    <td>{{ $question->id }}</td>
                                    @if (\App\Comment::where('board_id','=',$question->id)->get()->count())
                                        <td>O</td>
                                    @else
                                        <td>X</td>
                                    @endif
                                    <td>{{ \App\Category::find($question->category_id)->category }}</td>
                                    <td><a href="{{route('questions.show',compact('question'))}}">{{ $question->title }}</a></td>
                                    <td>{{ $question->user->name }}</td>
                                    <td>{{ $question->updated_at->format('y-m-d') }}</td>
                                    <td>{{ $question->view_count }}</td>
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

@section('script')
    
@endsection