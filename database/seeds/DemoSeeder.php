<?php

use Illuminate\Database\Seeder;

class DemoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
                //시연 유저
                \App\User::create([
                    'email' => "rla@dudwls.com",
                    'password' => bcrypt('password'),
                    'name' => "김영진",
                    'birth' => "1997/06/12",
                    'gender' => "남",
                    'phone' => "010-1234-5678",
                    'confirm_code' => null,
                    'remember_token' => Str::random(10),
                ]);

                //시연 게시글
                $user_id = \App\User::whereEmail("rla@dudwls.com")->first()->id;
                \App\Board::create([
                    'user_id' => $user_id,
                    'category_id' => 1,
                    'title' => "제품 너무 좋아요!!",
                    'content' => "너무 잘샀다고 생각해요",
                ]);
                //시연 운전
                $date = date("Y-m-d H:m:s", time()); //현재날짜
                $day_7 = array();   //최근 7일을 담을 배열
                for($i = 0; $i <7; $i++){
                    array_push($day_7,date("Y-m-d H:m:s", strtotime($date ."-{$i} day")));
                }
                $random_day_7 = Arr::random($day_7);
                $a = rand(1,3);
                $created_at = date("Y-m-d H:m:s", strtotime($random_day_7 ."+{$a} hours"));
                $updated_at = date("Y-m-d H:m:s", strtotime($created_at ."+3 hours"));
                \App\Drive::create([
                    'user_id' => $user_id,
                    'drive_score' => rand(0, 100),
                    'sleep_count' => 1,
                    'sudden_stop_count' => 0,
                    'sudden_acceleration_count' => 0,
                    'created_at' => $created_at,
                    'updated_at' => $updated_at,
                ]);
                //시연 운전감지(0, 0, 1, 1)
                $drive_id = \App\Drive::whereUser_id($user_id)->first()->id;
                $drive_created_at = \App\Drive::whereUser_id($user_id)->first()->created_at;
                \App\Drive_detection::create([
                    'user_id' => $user_id,
                    'drive_id' => $drive_id,
                    'latitude' => rand(35, 37) . '.' . rand(1000, 9999999),     //세로
                    'longitude' => rand(127, 128) . '.' . rand(200000, 900000),  //가로
                    'bool_report' => 1,
                    'bool_sudden_acceleration' => 0,
                    'bool_sudden_stop' => 0,
                    'bool_sleep' => 1,
                    'created_at' => $drive_created_at,
                ]);
    }
}
