@extends('layouts.app')

@section('content')
<style>
</style>
<div class="container mt-5 pt-5">
    <h1 class="">글 쓰기</h1>
    <hr/>
    <div>
        <h1>title</h1>
        <h4>{{$review->title}}</h4>
    </div>
    <div>
        <h1>user</h1>
        <h4>{{$review->user->name}}</h4>
    </div>
    <div>
        <h1>content</h1>
        <h4>{{$review->content}}</h4>
    </div>
    <div>
        @can('board_update', $review)
          <a class="btn btn-dark" href="{{route('reviews.edit',compact('review'))}}">수정하기</a>
        @endcan
        @can('board_delete', $review)
          <form method="POST" action="{{route('reviews.destroy',compact('review'))}}">
            @method('DELETE')
            @csrf
            <button class="btn btn-dark" type="submit">삭제하기</button>    
          </form>
        @endcan
        <a class="btn btn-dark" href="{{route('reviews.index')}}">뒤로가기</a>
    </div>
    <div class="pt-3">
      @include('comments.index')
    </div>
</div>

@endsection