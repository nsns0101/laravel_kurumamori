<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
 */

//유저 팩토리
$factory->define(App\User::class, function (Faker $faker) {
    return [
        'email' => $faker->unique()->safeEmail,
        'password' => bcrypt('password'),
        'name' => $faker->name,
        'age' => rand(18, 75),
        'gender' => Arr::random(['남', '여']),
        'phone' => '010-' . rand(1000, 9999) . '-' . rand(1000, 9999),
        'remember_token' => Str::random(10),
    ];
});

//제품 팩토리
$factory->define(App\Product::class, function (Faker $faker) {
    $date = date("Y-m-d", time()); //현재날짜
    $as_date = date("Y-m-d", strtotime("{$date} +1 years")); //현재날짜 1년후
    $userId = App\User::pluck('id')->toArray();
    return [
        'user_id' => $faker->randomElement($userId),
        'product_name' => '좋은 제품',
        'product_key' => Str::random(4) . '-' . Str::random(4) . '-' . Str::random(4) . '-' . Str::random(4),
        'date_buy' => $date,
        'date_as' => $as_date,
    ];
});
