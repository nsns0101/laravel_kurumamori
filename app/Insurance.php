<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Insurance extends Model
{
    protected $fillable = ['insurance_name', 'insurance_phone', 'subscription_date', 'expiration_date'];
}
