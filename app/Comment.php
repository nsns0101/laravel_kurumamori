<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['content'];

    //한 게시판은 여러 댓글을 가질 수 있음
    public function comments()
    {
        return $this->belongsTo(Comment::class);
    }
}
