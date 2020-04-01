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

    //일대일
    public function medical_info()
    {
        return $this->hasMany(Medical_info::class);
    }
    //일대다
    public function products()
    {
        return $this->hasMany(Products::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function questions()
    {
        return $this->hasMany(Question::class);
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function insurances()
    {
        return $this->hasMany(insurances::class);
    }

}
