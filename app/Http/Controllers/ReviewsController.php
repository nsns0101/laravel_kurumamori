<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }
    public function index()
    {
        \Log::info('reviews index');

        $user = \App\User::whereId(auth()->user()->id)->first();
        \Log::info($user);

        $reviews = \App\Review::latest()->orderBy('id','desc')->paginate(10);
        \Log::info($reviews->all());

        return view('reviews.index', compact('reviews'));
    }

    public function create()
    {
        \Log::info('reviews create');

        $user = \App\User::whereId(auth()->user()->id)->first();
        \Log::info($user);

        $review = new \App\Review;

        return view('reviews.create',compact('review'));
    }

    public function store(\App\Http\Requests\ReviewsRequest $request)
    {
        \Log::info('rivews store');
        \Log::info($request->all());
        
        $review = $request->user()->reviews()->create($request->all());
        \Log::info($review);
        $reviews = \App\Review::latest()->orderBy('id','desc')->paginate(10);

        if(! $review){

            flash()->error(
                trans('review 저장 실패')
            );

            return back()->withInput();
        }
        
        return redirect()->route('reviews.index',compact('reviews'));
    }
    public function show(\App\Review $review){

        \Log::info('reviews show');
        \Log::info($review->id);
        \Log::info($review);
        \Log::info($review->all());

        return view('reviews.show',compact('review'));
    }

    public function edit(\App\Review $review){

        \Log::info('reviews edit');

        return view('reviews.edit',compact('review'));
    }
    public function update(\App\Http\Requests\ReviewsRequest $request, \App\Review $review){

        \Log::info('reviews update');
        \Log::info($request->all());
        
        $review->update($request->all());
        $reviews = \App\Review::latest()->orderBy('id','desc')->paginate(10);

        if(! $review){

            flash()->error(
                trans('review 업데이트 실패')
            );

            return back()->withInput();
        }

        return redirect()->route('reviews.index',compact('reviews'));
    }

    public function destroy(\App\Review $review)
    {
        \Log::info('reviews destroy');
        $review->delete();

        return redirect()->route('reviews.index');
    }
}
