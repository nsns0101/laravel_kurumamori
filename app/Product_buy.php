<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product_buy extends Model
{
    protected $fillable = [
        'ea','price','to_name','to_phone','to_address','to_msg','to_zipcode','payment','product_key','product_name'
    ];
}
