<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'email', 'password', 'name', 'age', 'gender', 'phone',
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

}
