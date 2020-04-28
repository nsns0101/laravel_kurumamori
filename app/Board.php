<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    protected $fillable = ['title', 'content','category'];

    //여러질문은 한 유저를 가질 수 있음
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    
    //하나의 질문은 하나의 답변을 가질 수 있음
    public function comments()
    {
        return $this->morpOne(Comment::class, 'question');
    }

    //하나의 질문은 하나의 카테고리를 가질 수 있음
    public function category()
    {
        return $this->morpOne(Category::class, 'question');
    }
}
