<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drive_safety extends Model
{
    protected $fillable = ['eye_close_count', 'average_eye_close_interval', 'sudden_stop_count', 'sudden_acceleration_count'];
}
