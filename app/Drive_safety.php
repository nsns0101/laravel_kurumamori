<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drive_safety extends Model
{
    protected $fillable = ['eye_close_count', 'average_eye_close_interval', 'sudden_stop_count', 'sudden_acceleration_count'];
    //한 운전정보는 하나의 안전점수를 가질 수 있음
    public function drive()
    {
        // return $this->belongsTo(drive::class);
        return $this->hasOne(drive::class);
    }
}
