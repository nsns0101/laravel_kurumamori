@extends('layouts.app')
@section('content')
<style>
</style>
<div class="container mt-5 pt-5">
  <header>
    <span><a href="{{route('questions.index')}}">home</a></span>
    <span>></span>
    <span >
      <a href="{{route('questions.index',['category_id'=>$category])}}">{{ \App\Category::find($category)->category }}</a>
    </span>
  </header>
  <hr/>
  <div class="p-1">
    <div>
      <h4>{{$question->title}}</h4>
    </div>
    <div>
      <span><a href="{{route('questions.index',['user_id'=>$question->user->id])}}">{{$question->user->name}}</a></span>
      <span>|</span>
      <span>{{$question->created_at}}</span>
      <span>|</span>
      <span>HIT : {{$question->view_count}}</span>
    </div>
    <hr />
    <div>
      <h4 class="text-justify ">{!!nl2br($question->content)!!}</h4>
    </div>
  </div>
  <hr/>
  <div class="d-flex justify-content-end pb-3">
    @can('board_update', $question)
      <span class="pr-2">
        <a class="btn btn-dark" href="{{route('questions.edit',compact('question'))}}">수정하기</a>
      </span>
    @endcan
    @can('board_delete', $question)
      <span class="pr-2">
        <form method="POST" action="{{route('questions.destroy',compact('question'))}}">
          @method('DELETE')
          @csrf
          <button class="btn btn-dark" type="submit">삭제하기</button>    
        </form>
      </span>
    @endcan
    <span>
      <a class="btn btn-dark" href="{{route('questions.index')}}">뒤로가기</a>
    </span>
  </div>

  <div class="">
    @include('comments.index')
  </div>
</div>
@endsection