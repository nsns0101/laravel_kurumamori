@extends('layouts.app')

@section('content')

<section id="main-question">
    <div class="contaienr px-3 py-5 p-md-5">
        @include('questions.partial.header')
        <div class="row m-3">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="row mb-3"> 
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
                        <tbody class="col-12">
                            <tr>
                                <td class="align-middle text-nowrap">{{ $question->id }}</td>
                                @if (\App\Comment::where('board_id','=',$question->id)->get()->count())
                                    <td class="align-middle">O</td>
                                @else
                                    <td class="align-middle">X</td>
                                @endif
                                <td class="align-middle text-nowrap">{{ \App\Category::find($question->category_id)->category }}</td>
                                <td class="align-middle"><a href="{{route('questions.show',compact('question'))}}">{{ $question->title }}</a></td>
                                <td class="align-middle">{{ $question->user->name }}</td>
                                <td class="align-middle text-nowrap">{{ $question->updated_at->format('y-m-d') }}</td>
                                <td class="align-middle text-nowrap">{{ $question->view_count }}</td>
                            </tr>
                        </tbody>
                    @empty
                    @endforelse
                </table>
                @if (! $questions->count())
                    <div class="text-center">
                        <p class="text-dark">글 없음</p>
                    </div>
                @endif
                <div class=" col-xs-12 col-sm-12 col-md-12 d-flex justify-content-center">
                    @if($questions ->count())
                        {!! $questions->appends(Request::except('page'))->render() !!}
                    @endif
                </div>
            </div>
        </div>
    </div>
</section>
<!-- intro section -->
@endsection

@section('script')
    
@endsection