<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class BuyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('product.buy');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(\App\Http\Requests\BuysRequest $request)
    {
        $total_price = $request->ea * 49900;

        $product_key =Str::random(12);

        $product_name = "kurumamori";

        $buy = $request->user()->product_buys()->create([
            'ea'=>$request->ea,
            'price'=>$total_price,
            'to_name'=>$request->to_name,
            'to_phone'=>$request->to_phone,
            'to_address'=>$request->to_address,
            'to_zipcode'=>$request->to_zipcode,
            'to_msg'=>$request->to_msg,
            'payment'=>$request->payment,
            'product_name'=>$product_name,
            'product_key'=>$product_key,
        ]);

        // return redirect('/thanks');
        return view('product.thanks', compact('buy'));
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
