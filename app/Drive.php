<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Drive extends Model
{
    protected $fillable = ['drive_score', 'drive_date', 'start_time', 'end_time'];
}
