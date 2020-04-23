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
        \Log::info($date);
        $today = date("Y/m/d");
        // \Log::info(date("Y/m/d", strtotime("2020/04/21")));
        // $drive_date = \App\Drive::where('start_time' ,'=',date("Y/m/d", strtotime("2020/04/21")))->first();
        $drive = $date ? \DB::select("select * from drives where DATE_FORMAT(start_time, '%Y-%m-%d') = '{$date}'") : \DB::select("select * from drives where DATE_FORMAT(start_time, '%Y-%m-%d') = '{$today}'");
        // ->whereStart_time('2020-04-21')->get();
        \Log::info($drive);
        // \Log::info($error);
        
        return view('info.drive_score', compact('drive'));
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
