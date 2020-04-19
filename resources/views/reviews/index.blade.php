@extends('layouts.app')

@section('content')

<section id="main-qna">
    <div class="app-main mt-5">
        <div class="row m-5">
            <h1 class="">사용자 리뷰</h1>
        </div>
        <div class="row mt-5">
            @if(! $reviews->all())
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <a class="btn btn-dark btn-lg btn-block" href="{{route('reviews.create')}}">새글 작성</a>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="text-center">
                        <p class="text-dark">글 없음</p>
                    </div>
                </div>
            @else
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="row col-xs-12 col-sm-12 col-md-12 m-3">
                        <div class="input-group col-md-4">
                                <input type="text" class="form-control" placeholder="search.." aria-label="search.." aria-describedby="basic-addon2">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button">Button</button>
                                </div>
                        </div>
                        <a class="btn btn-dark" href="{{route('reviews.create')}}">글 작성</a>
                    </div>
                    <table class="table table-hover .table-responsive">
                        <thead class="">
                            <tr>
                                <td>No</td>
                                <td>title</td>
                                <td>userId</td>
                                <td>Date</td>
                            </tr>
                        </thead>
                        @forelse($reviews as $review)
                            <tbody class="">
                                <tr class="">
                                    <td>{{ $review->id }}</td>
                                    <td><a href="{{route('reviews.show',compact('review'))}}">{{ $review->title }}</a></td>
                                    <td>{{ $review->user->name }}</td>
                                    <td>{{ $review->updated_at->format('y-m-d') }}</td>
                                </tr>
                            </tbody>
                        @empty
                        @endforelse
                    </table>
                    <div class=" col-xs-12 col-sm-12 col-md-12">
                        @if($reviews ->count())
                            {!! $reviews->appends(Request::except('page'))->render() !!}
                        @endif
                    </div>
                </div>
            @endif
        </div>
    </div>
</section>
<!-- intro section -->
@endsection