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

        $auth_user = auth()->user()->id;    //로그인 유저
        //선택날짜의 운전 정보
        $drive = $date ? \DB::select("select * from drives where DATE_FORMAT(start_time, '%Y-%m-%d') = '{$date}' AND user_id = '{$auth_user}'") : \DB::select("select * from drives where DATE_FORMAT(start_time, '%Y-%m-%d') = '{$date}'");
        //선택날짜의 위험 정보
        
        //현재날짜포함하여 최근 5일 구하기
        $day_5 = array();
        for($i = 0; $i <5; $i++){
            array_push($day_5,date("Y-m-d", strtotime($date ."-{$i} day")));
        }

        //최근 5일의 운전정보
        $day_5_info = array();
        for($i = 0; $i < count($day_5); $i++){
            // \Log::info($day_5[$i]);
            array_push($day_5_info, \DB::select("select * from drives where DATE_FORMAT(start_time, '%Y-%m-%d') = '{$day_5[$i]}' AND user_id = '{$auth_user}'"));
        }

        // 해당날짜의 위험정보
        // $drive_detection = \DB::select("select * from drive_detections where DATE_FORMAT(created_at, '%Y-%m-%d') = '{$date}' AND user_id = '{$auth_user}'");
        
        //최근 5일의 위험 정보
        $drive_detection_5= array();
        for($i = 0; $i < count($day_5); $i++){
            //$value는 배열로 리턴됨
            $value = \DB::select("select * from drive_detections where DATE_FORMAT(created_at, '%Y-%m-%d') = DATE_SUB('{$date}', INTERVAL {$i} DAY)  AND user_id = '{$auth_user}'");
            if($value){
                array_push($drive_detection_5, $value);
            }
            else{
                array_push($drive_detection_5, null);

            }
        }
        //최근 5일의 위험 정보 합계
        $day_5_danger_info = array();
        for($i = 0; $i < count($day_5); $i++){
            $count_report = 0; //사고 수
            $count_sudden_acceleration = 0; //급 가속 수
            $count_sudden_stop = 0; //급 감속 수
            $count_sleep = 0;   //졸음 횟수
            //해당날짜의 위험 횟수 구하기
            if($drive_detection_5[$i]){
                for($j = 0; $j < count($drive_detection_5[$i]); $j++){
                    //값이 있는지 확인
                    if($drive_detection_5[$i][$j]){
                        $count_report += $drive_detection_5[$i][$j]->bool_report;
                        $count_sudden_acceleration += $drive_detection_5[$i][$j]->bool_sudden_acceleration;
                        $count_sudden_stop += $drive_detection_5[$i][$j]->bool_sudden_stop;
                        $count_sleep += $drive_detection_5[$i][$j]->bool_sleep;
                    }
                    else{
                        break;
                    }
                }
            }
            //총 위험횟수
            $count_danger = $count_report + $count_sudden_acceleration + $count_sudden_stop + $count_sleep;
            //급 가속, 감속, 졸음 횟수를 배열에 저장
            $drive_count = [
                "count_danger" => $count_danger,
                "count_report" => $count_report,
                "count_sudden_acceleration" => $count_sudden_acceleration, 
                "count_sudden_stop" => $count_sudden_stop, 
                "count_sleep" => $count_sleep
            ];
            array_push($day_5_danger_info, $drive_count);
        }
        //해당날짜의 운전시간 구하기(초)
        $drive_sec = 0;
        for($i = 0; $i < count($drive); $i++){
            $drive_sec += strtotime($drive[0]->created_at) - strtotime($drive[0]->start_time);
        }

        
        //사고 여부
        $report = \DB::select("select * from reports where DATE_FORMAT(created_at, '%Y-%m-%d') = '{$date}' AND user_id = '{$auth_user}'");
        \Log::info("선택 날짜 : " . $date);
        \Log::info("선택한 날짜의 정보 :", $drive);
        \Log::info("최근 5일 : ", $day_5);
        \Log::info("최근 5일의 운전 정보 : ", $day_5_info);  //배열안의 배열 (하루에 여러번 운전했을 수 있으니)
        \Log::info("최근 5일의 위험 정보 합계: ", $day_5_danger_info);  //배열안의 배열 (하루에 여러번 운전했을 수 있으니)
        \Log::info("당일 위험 카운트 : ", $drive_count);
        \Log::info("운전 시간(초) : ". $drive_sec);
        \Log::info("당일 사고 여부", $report);
        // \Log::info($error);
        //1시간에 급감속이나 급가속, 졸음 등을 1번했을 경우 모범?
        //default = 100에서 깎아내리는 형식?
        return view('info.drive_score', compact('drive', 'date', 'drive_count', 'drive_sec','day_5', 'day_5_info', 'day_5_danger_info', 'report'));
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
