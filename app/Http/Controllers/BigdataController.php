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
        // ㅡㅡㅡㅡㅡ졸음횟수ㅡㅡㅡㅡㅡ
        $sleep_count = \DB::table('drive_detections')->where('bool_sleep', 1)->count();   //운전감지 테이블에서 졸음운전 전체 횟수 count
        \Log::info($sleep_count);

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
