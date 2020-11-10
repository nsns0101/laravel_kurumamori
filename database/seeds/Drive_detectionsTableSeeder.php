<?php

use Illuminate\Database\Seeder;

class Drive_detectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $json_dodobu = json_decode(file_get_contents(public_path('json/dodobu.json')), true);
        
        
        // //json 길이만큼
        // for($i = 0; $i < count($json_dodobu); $i++){
        //     $random = [];               
        //     $number = rand(0,3);            //0 ~ 3 랜덤
            
        //     //위험상황 랜덤
        //     for($j = 0; $j <= 3; $j++){
        //         if($j == $number){  
        //             array_push($random, true);
        //         }
        //         else{
        //             array_push($random, false);
        //         }
        //     }
            
        //     $user = \App\User::whereId(rand(1,11))->first();//랜덤유저
        //     $drive = \App\Drive::whereId($user->id)->get() ? \App\Drive::whereId($user->id)->get() : null;//랜덤유저의 운전(에러처리 할것)
        //     if($drive == null){
        //         break;
        //     }
        //     else{
        //         $rand_drive = rand(0, count($drive) - 1);         //랜덤유저의 랜덤운전
        //         \App\Drive_detection::create([
        //             'user_id' => $user->id,
        //             'drive_id' => $drive[$rand_drive]->id,
        //             'latitude' => $json_dodobu["$i"]["latitude"],     //세로
        //             'longitude' => $json_dodobu["$i"]["longitude"],  //가로
        //             'bool_report' => $random[0],
        //             'bool_sudden_acceleration' => $random[1],
        //             'bool_sudden_stop' => $random[2],
        //             'bool_sleep' => $random[3],
        //             // 'created_at' => $drive[0]->created_at,
        //         ]);
        //     }
        // }
        factory(App\Drive_detection::class, 400)->create();
    }
}
