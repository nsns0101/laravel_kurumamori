<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DriveController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
    public function index($date = null)
    {
        // $today = date("Y/m/d");
        // \Log::info(date("Y/m/d", strtotime("2020/04/21")));
        // $drive_date = \App\Drive::where('start_time' ,'=',date("Y/m/d", strtotime("2020/04/21")))->first();
        $auth_user = auth()->user()->id;
        $drive = $date ? \DB::select("select * from drives where DATE_FORMAT(start_time, '%Y-%m-%d') = '{$date}' AND user_id = '{$auth_user}'") : \DB::select("select * from drives where DATE_FORMAT(start_time, '%Y-%m-%d') = '{$date}'");
        $drive_detection = \DB::select("select * from drive_detections where DATE_FORMAT(created_at, '%Y-%m-%d') = '{$date}' AND user_id = '{$auth_user}'");
        //선택한 날짜의 급 가속 횟수
        //선택한 날짜의 급 감속 횟수
        // $drive2 = 0;
        
        // ->whereStart_time('2020-04-21')->get();
        // \Log::info($drive);
        // \Log::info($drive_detection);
        $count_sudden_acceleration = 0; //급 가속 수
        $count_sudden_stop = 0; //급 감속 수
        $count_sleep = 0;   //졸음 횟수

        //해당날짜의 위험 횟수 구하기
        for($i = 0; $i < count($drive_detection); $i++){
            $count_sudden_acceleration += $drive_detection[$i]->bool_sudden_acceleration;
            $count_sudden_stop += $drive_detection[$i]->bool_sudden_stop;
            $count_sleep += $drive_detection[$i]->bool_sleep;
        }
        //총 위험횟수
        $count_danger = $count_sudden_acceleration + $count_sudden_stop + $count_sleep;
        //급 가속, 감속, 졸음 횟수를 배열에 저장
        $drive_count = [
            "count_danger" => $count_danger,
            "count_sudden_acceleration" => $count_sudden_acceleration, 
            "count_sudden_stop" => $count_sudden_stop, 
            "count_sleep" => $count_sleep
        ];
            
        //해당날짜의 운전시간 구하기(초)
        $drive_sec = 0;
        for($i = 0; $i < count($drive); $i++){
            $drive_sec += strtotime($drive[0]->created_at) - strtotime($drive[0]->start_time);
        }

        //현재날짜포함하여 최근 5일 구하기
        $day_5 = array();
        for($i = 0; $i <5; $i++){
            array_push($day_5,date("Y-m-d", strtotime($date ."-{$i} day")));
        }

        //최근 5일의 정보
        $day_5_info = array();
        for($i = 0; $i < count($day_5); $i++){
            // \Log::info($day_5[$i]);
            array_push($day_5_info, \DB::select("select * from drives where DATE_FORMAT(start_time, '%Y-%m-%d') = '{$day_5[$i]}' AND user_id = '{$auth_user}'"));
        }

        \Log::info("선택날짜 : " . $date);
        \Log::info("위험 카운트 : ", $drive_count);
        \Log::info("운전시간(초) : ". $drive_sec);
        \Log::info("최근 5일 : ", $day_5);
        \Log::info("최근 5일의 정보 : ", $day_5_info);  //배열안의 배열 (하루에 여러번 운전했을 수 있으니)
        // \Log::info($error);
        //1시간에 급감속이나 급가속, 졸음 등을 1번했을 경우 모범?
        //default = 100에서 깎아내리는 형식?
        return view('info.drive_score', compact('drive', 'date', 'drive_count', 'drive_sec','day_5', 'day_5_info'));
    }

    public function create()
    {

    }
    public function store(Request $request)
    {
       
    }

    public function destroy()
    {

    }

}
