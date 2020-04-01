<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Medical_info extends Model
{
    protected $fillable = ['sickness', 'past_sickness', 'symptom', 'guardian_phone', 'medicine', 'hospital', 'hospital_phone', 'report_request'];

    //일대일
    public function user()
    {
        // return $this->belongsTo(User::class);
        return $this->hasOne(User::class);
    }
}
