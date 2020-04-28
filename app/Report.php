<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    protected $fillable = [
        'user_id', 
        'latitude', 
        'longitude', 
        'bool_report', 
        'bool_sudden_acceleration',
        'bool_sudden_stop',
        'bool_sleep'
    ];

    //여러 신고이력은 한 유저를 가질 수 있음
    public function user()
    {
        return $this->belongsTo(User::class);
    }

}
