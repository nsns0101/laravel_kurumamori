<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    protected $fillable = ['title', 'content','category'];

    //여러리뷰는 한 유저를 가질 수 있음
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    //하나의 리뷰는 여러 답변을 가질 수 있음
    public function comments()
    {
        return $this->morphMany(Comment::class, 'review');
    }

    //하나의 리뷰은 하나의 카테고리를 가질 수 있음
    public function categorys()
    {
        return $this->morpOne(Category::class, 'review');
    }
}
