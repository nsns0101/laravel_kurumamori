<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Insurance extends Model
{
    protected $fillable = ['user_id', 'insurance_name', 'insurance_phone', 'subscription_date', 'expiration_date'];

    //여러 보험사는 한 유저를 가질 수 있음
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
