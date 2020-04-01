<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drive extends Model
{
    protected $fillable = ['drive_score', 'drive_date', 'start_time', 'end_time'];

    //여러 운전정보는 한 유저를 가질 수 있음
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    //한 운전정보는 하나의 안전점수를 가질 수 있음
    public function drive_safety()
    {
        // return $this->belongsTo(drive_safety::class);
        return $this->hasOne(drive_safety::class);
    }

}
