<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product_buy extends Model
{
    protected $fillable = ['to_name', 'to_phone', 'to_address', 'to_zipcode', 'payment', 'product_name', 'product_key', 'use_key'];
}
