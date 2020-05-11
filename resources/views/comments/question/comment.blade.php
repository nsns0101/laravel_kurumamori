<div class="p-4 question__comment">
    <div>
        <h3>{{$comment->title}}</h3>
    </div>
    <hr/>
    <div class=" px-3">
        <h4>{{$comment->content}}</h4>
    </div>
    <hr/>
    <div class="d-flex justify-content-end">
        @can('master', $comment)
            <span class="pr-2">
                <button class="btn btn-dark btn__edit__comment">수정하기</button>
            </span>
            <form method="POST" action="{{route('comments.destroy',compact('comment'))}}">
                @method('DELETE')
                @csrf
                <button class="btn btn-dark" type="submit">삭제하기</button>    
            </form>
        @endcan
    </div>
</div>