@extends('layouts.app')


@section('content')
<style>
</style>
<div class="container mt-5 pt-5">
    <h1 class="">글 쓰기</h1>
    <hr/>
    <div>
        <h1>title</h1>
        <h4>{{$question->title}}</h4>
    </div>
    <div>
        <h1>category</h1>
        <h4>{{ \App\Category::find($category)->category }}</h4>
    </div>
    <div>
        <h1>user</h1>
        <h4>{{$question->user->name}}</h4>
    </div>
    <div>
        <h1>content</h1>
        <h4>{{$question->content}}</h4>
    </div>
    <div>
        @can('board_update', $question)
          <a class="btn btn-dark" href="{{route('questions.edit',compact('question'))}}">수정하기</a>
        @endcan
        @can('board_delete', $question)
          <form method="POST" action="{{route('questions.destroy',compact('question'))}}">
            @method('DELETE')
            @csrf
            <button class="btn btn-dark" type="submit">삭제하기</button>    
          </form>
        @endcan
        <a class="btn btn-dark" href="{{route('questions.index')}}">뒤로가기</a>
    </div>
    <div class="pt-3">
      @include('comments.index')
    </div>
</div>
@endsection