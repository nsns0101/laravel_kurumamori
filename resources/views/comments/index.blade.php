<div>
@if ($category != 7)
    @if ($comments->count() == 0)
        @include('comments.question.create')
    @else
        @forelse($comments as $comment)
            @include('comments.question.comment')
        @empty
        @endforelse
    @endif
@else
    @include('comments.review.create')
    @forelse($comments as $comment)
        @include('comments.review.comment')
    @empty
    @endforelse
@endif
</div>