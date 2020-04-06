<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['user_id', 'product_name', 'product_key', 'date_buy', 'date_as'];

    //여러 제품은 한 유저를 가질 수 있음
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
