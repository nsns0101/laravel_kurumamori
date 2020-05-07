<div class="card">
    <div>
        {{$comment->title}}
    </div>
    <div>
        {{$comment->content}}
    </div>
    <form method="POST" action="{{route('comments.destroy',compact('comment'))}}">
        @method('DELETE')
        @csrf
        <button class="btn btn-dark" type="submit">삭제하기</button>    
    </form>
</div>