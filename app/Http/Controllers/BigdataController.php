<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BigdataController extends Controller
{
    public function index()
    {
        $detail = null;
        \Log::info('index 성공');
        return view('bigdata.index', compact('detail'));

    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show($option = null)
    {
        // 현재 날짜 기준으로 최근 7일 날짜 구하기
        $date = date("Y-m-d");
        $day_7 = array();
        for($i = 0; $i < 7; $i++) {
            array_push($day_7, date("Y-m-d", strtotime($date . "-{$i} day")));
        }
        \Log::info($day_7);     // 2020-05-09, 2020-05-08 ...

        // 나이대quf user의 id
        $query20 = \DB::select("select id, sum(if(DATE_FORMAT(now(),'%Y')-substring(birth,1,4) between 20 and 29, 1, 0)) as age20 from users group by id");  // 20대 수
        \Log::info($query20);

        // ㅡㅡㅡㅡㅡ졸음횟수ㅡㅡㅡㅡㅡ
        $sleep_count = \DB::table('drive_detections')->where('bool_sleep', 1)->count();   //운전감지 테이블에서 졸음운전 전체 횟수 count
        \Log::info($sleep_count);


        // // 최근 7일간의 20대 졸음 횟수
        // $sleep_count_207 = array();
        // for($i = 0; $i < count($day_7); $i++) {
        //     \DB::table('drive_detections')->join('users', function($join){
        //         $join->on('drive_detections.user_id', 'users.id')->where('users.birth', '>' )
        //     })
        // }

        // ㅡㅡㅡㅡㅡ급감속 급가속ㅡㅡㅡㅡㅡ
        $sud_acceleration_count = \DB::table('drive_detections')->where('bool_sudden_acceleration', 1)->count();   //운전감지 테이블에서 급가속 전체 횟수 count
        \Log::info($sud_acceleration_count);
        $sud_stop_count = \DB::table('drive_detections')->where('bool_sudden_stop', 1)->count();    //운전감지 테이블에서 급정거 전체 횟수 count
        \Log::info($sud_stop_count);

        $abc = \DB::table('drive_detections')->where([      //where조건 2개 이상
            ['bool_sudden_stop', 0],
            ['bool_sudden_acceleration', 0],
        ])->count();
        \Log::info($abc);

        // ㅡㅡㅡㅡㅡ사고ㅡㅡㅡㅡㅡ
        $accident_count = \DB::table('drive_detections')->where('bool_report', 1)->count();    //운전감지 테이블에서 급정거 전체 횟수 count
        \Log::info($accident_count);


        // return
        \Log::info($option);
        return view('bigdata.detail.index', compact('option'));
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
