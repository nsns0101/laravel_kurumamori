<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    protected $fillable = ['title', 'content'];

    //여러게시판은 한 유저를 가질 수 있음
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
