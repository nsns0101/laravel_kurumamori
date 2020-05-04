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
        'birth' => rand(1960, 2005) . '/' . rand(1,12) . '/' . rand(1,28),
        'gender' => Arr::random(['남', '여']),
        'phone' => '010-' . rand(1000, 9999) . '-' . rand(1000, 9999),
        'confirm_code' => null,
        'remember_token' => Str::random(10),
    ];
});

//제품구매 팩토리
$factory->define(App\Product_buy::class, function (Faker $faker) {
    $payments = ['신용카드', '가상계좌', '카카오페이'];
    $boolean = [true, false];
    $userId = App\User::pluck('id')->toArray();
    return [
        'user_id' => $faker->randomElement($userId),
        'ea' => rand(1,2),
        'price' => 49900,
        'to_name' => Str::random(5),
        'to_phone' => '010-' . rand(1000, 9999) . '-' . rand(1000, 9999),
        'to_address' => Str::random(3) . "시" . Str::random(2) . "동" . rand(1, 999) . '-' . rand(1, 999),
        'to_zipcode' => rand(1, 999) . '-' . rand(1, 999),
        'to_msg' => Str::random(10),
        'payment' => Arr::random($payments),
        // 'product_name' => '좋은 제품',
        'product_key' => Str::random(4) . '-' . Str::random(4) . '-' . Str::random(4) . '-' . Str::random(4),
    ];
});

//제품 팩토리
$factory->define(App\Product::class, function (Faker $faker) {
    $date = date("Y-m-d", time()); //현재날짜
    $as_date = date("Y-m-d", strtotime("{$date} +1 years")); //현재날짜 1년후
    $userId = App\User::pluck('id')->toArray();
    $product_buy_id = App\Product_buy::pluck('user_id')->toArray();
    $product_use = \App\Product_buy::get();

    return [
        // 'user_id' => $faker->unique()->randomElement($userId),
        'user_id' => $faker->randomElement($userId),
        'product_buy_id' => $faker->unique()->randomElement($product_use)->id,
        'product_key' => $faker->unique()->randomElement($product_use)->product_key,
        // 'date_buy' => $date,
        // 'date_as' => $as_date,
    ];
});

//의료정보 팩토리
$factory->define(App\Medical_info::class, function (Faker $faker) {
    $userId = App\User::pluck('id')->toArray();
    // $sickness = ["없음", "고혈압", "당뇨", "결핵", "심장질환", "알러지", "천식", "심부전증", "페렴", "디스크", "간경화", "관절염", "협심증", "암", "갑상선염", "고지혈증", "골다공증", "과민성 대장", "기관지염", "뇌졸중", "신장질환", "간암"];
    // $symptom = ["위가 아픔", "허리가 아픔", "설탕먹고싶음", "간이 아픔", "몸살", "기침", "잦은 기침", "뇌가 아픔"];
    // $medicine = ["위약", "허리약", "인슐린", "간약", "몸살약", "기침약", "잦은 기침약", "게보린"];
    $num = rand(0, 7);
    $report_request = ["빨리와주세요", "붕대가져와주세요", "배도 아파요"];
    
    return [
        'user_id' => $faker->unique()->randomElement($userId), //1:1관계로 유니크부여
        'guardian_phone' => '010-' . rand(1000, 9999) . '-' . rand(1000, 9999),
        'blood_type' => Arr::random(['A형','B형','AB형','O형']),
        'disability_status' => Arr::random(['yes','no']),
        'report_request' => Arr::random($report_request),
    ];
});
//과거 병력 팩토리
$factory->define(App\Past_sickness::class, function (Faker $faker) {
    $userId = App\User::pluck('id')->toArray();

    $sickness = ["없음", "고혈압", "당뇨", "결핵", "심장질환", "알러지", "천식", "심부전증", "페렴", "디스크", "간경화", "관절염", "협심증", "암", "갑상선염", "고지혈증", "골다공증", "과민성 대장", "기관지염", "뇌졸중", "신장질환", "간암"];
    return [
        'user_id' => $faker->randomElement($userId),
        'past_sickness_name' => Arr::random($sickness),
        'past_sickness_supplementation' => Str::random(10),
    ];
});
//기저질환 팩토린
$factory->define(App\Sickness::class, function (Faker $faker) {
    $userId = App\User::pluck('id')->toArray();

    $sickness = ["없음", "고혈압", "당뇨", "결핵", "심장질환", "알러지", "천식", "심부전증", "페렴", "디스크", "간경화", "관절염", "협심증", "암", "갑상선염", "고지혈증", "골다공증", "과민성 대장", "기관지염", "뇌졸중", "신장질환", "간암"];
    $symptom = ["위가 아픔", "허리가 아픔", "설탕먹고싶음", "간이 아픔", "몸살", "기침", "잦은 기침", "뇌가 아픔"];
    $medicine = ["위약", "허리약", "인슐린", "간약", "몸살약", "기침약", "잦은 기침약", "게보린"];
    $hospital = ["경대병원", "서울병원", "영대병원", "부산병원"];
    return [
        'user_id' => $faker->randomElement($userId),
        'sickness_name' => Arr::random($sickness),
        'medicine' => Arr::random($medicine),
        'symptom' => Arr::random($symptom),
        'hospital' => Arr::random($hospital),


    ];
});

//보험사 팩토리
// $factory->define(App\Insurance_list::class, function (Faker $faker) {
//     $date = date("Y-m-d", time()); //현재날짜
//     $userId = App\User::pluck('id')->toArray();

//     $insurance_name = ["하나보험사", "우리보험사", "준혁보험사", "동화보험사"];
//     return [
//         'insurance_name' => $faker->unique()->randomElement($insurance_name),
//         'insurance_phone' => '010-' . rand(1000, 9999) . '-' . rand(1000, 9999),
//     ];
// });

//보험 팩토리
$factory->define(App\Insurance::class, function (Faker $faker) {
    $date = date("Y-m-d", time()); //현재날짜
    $userId = App\User::pluck('id')->toArray();
    $subscription_date = date("Y-m-d", strtotime("{$date} -10 years")); //현재날짜 10년전
    $expiration_date = date("Y-m-d", strtotime("{$subscription_date} +20 years")); //구독날짜 10년후
    $insurance_list = \App\Insurance_list::get();
    return [
        // 'user_id' => $faker->unique()->randomElement($userId), //1:1관계로 유니크부여
        'user_id' => $faker->randomElement($userId), //1:1관계로 유니크부여
        // 'insurance_name' => Arr::random($insurance_name),
        'insurance_list_id' => $faker->randomElement($insurance_list)->id,
        'subscription_date' => $subscription_date,
        'expiration_date' => $expiration_date,

    ];
});

// //댓글 팩토리
// $factory->define(App\Comment::class, function (Faker $faker) {
//     $userId = App\User::pluck('id')->toArray();
//     $questionId = App\Question::pluck('id')->toArray();
//     return [
//         'user_id' => $faker->randomElement($userId),
//         'question_id' => $faker->randomElement($questionId),
//         'question_type' => App\Question::class,
//         'content' => $faker->paragraph,
//     ];
// });


//신고 팩토리
$factory->define(App\Report::class, function (Faker $faker) {
    $userId = App\User::pluck('id')->toArray();
    return [
        'user_id' => $faker->randomElement($userId),
        // 'gps' => Str::random(3) . "시" . Str::random(2) . "동" . rand(1, 999) . '-' . rand(1, 999),
        'latitude' => rand(1, 60) . '.' . rand(1000, 9999999),
        'longitude' => rand(1, 150) . '.' . rand(1000, 9999999),
    ];
});

//운전 팩토리
$factory->define(App\Drive::class, function (Faker $faker) {
    $userId = App\User::pluck('id')->toArray();

    $date = date("Y-m-d H:m:s", time()); //현재날짜
    $day_5 = array();   //최근 5일을 담을 배열
    for($i = 0; $i <5; $i++){
        array_push($day_5,date("Y-m-d H:m:s", strtotime($date ."-{$i} day")));
    }

    return [
        'user_id' => $faker->randomElement($userId),
        'drive_score' => rand(0, 100),
        'eye_close_count' => rand(0, 500),
        'average_eye_close_interval' => rand(3, 10),
        'sudden_stop_count' => rand(0, 5),
        'sudden_acceleration_count' => rand(0, 5),
        // 'start_time' => Arr::random($day_5),
        'start_time' => $date,
    ];
});
//운전 감지 팩토리
$factory->define(App\Drive_detection::class, function (Faker $faker) {
    $userId = App\Drive::pluck('user_id')->toArray();
    $userId = $faker->randomElement($userId);       //user_id 교체

    $drive_id = App\Drive::whereUser_id($userId)->get();

    $random = [];
    $number = rand(0,3);
    for($i = 0; $i <= 3; $i++){
        if($i == $number){
            array_push($random, true);
        }
        else{
            array_push($random, false);
        }
    }

    return [
        'user_id' => $userId,
        'drive_id' => $faker->randomElement($drive_id)->id,
        'latitude' => rand(1, 60) . '.' . rand(1000, 9999999),
        'longitude' => rand(1, 150) . '.' . rand(1000, 9999999),
        'bool_report' => $random[0],
        'bool_sudden_acceleration' => $random[1],
        'bool_sudden_stop' => $random[2],
        'bool_sleep' => $random[3],
    ];
});