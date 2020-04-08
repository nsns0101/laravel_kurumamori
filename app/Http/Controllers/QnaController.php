<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QnaController extends Controller
{
    public function index()
    {
        
        return view('qnas.index');
    }

    public function create()
    {

    }
}
