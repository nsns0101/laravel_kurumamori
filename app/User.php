<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    protected $fillable = [
        'email', 
        'password', 
        'name', 
        'birth', 
        'gender', 
        'phone', 
        'confirm_code',
        'remember_token', 
    ];

    protected $hidden = [
        'password', 'confirm_code', 'remember_token',
    ];

    //일대일
    public function medical_info()
    {
        return $this->hasMany(Medical_info::class);
    }
    //일대다
    public function products()
    {
        return $this->hasMany(Product::class);
    }
    public function product_buys()
    {
        return $this->hasMany(Product_buy::class);
    }
    public function boards()
    {
        return $this->hasMany(Board::class);
    }
    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function insurances()
    {
        return $this->hasMany(Insurance::class);
    }
    public function drives()
    {
        return $this->hasMany(Drive::class);
    }
    public function reports()
    {
        return $this->hasMany(Report::class);
    }
    public function drive_detections()
    {
        return $this->hasMany(Drive_detection::class);
    }
}
