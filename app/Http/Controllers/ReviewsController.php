<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReviewsController extends Controller
{
    public function __construct(){
        $this->middleware('auth',['except'=>['index','show','edit','delete','store','update']]);
    }
    public function index()
    {
        \Log::info('reviews index');

        $user = \App\User::whereId(auth()->user()->id)->first();
        \Log::info($user);

        $reviews = \App\Board::where('category_id','=','7')->latest()->orderBy('id','desc')->paginate(10);
        \Log::info($reviews->all());

        return view('reviews.index', compact('reviews'));
    }

    public function create()
    {
        \Log::info('reviews create');

        $user = \App\User::whereId(auth()->user()->id)->first();
        \Log::info($user);

        $review = new \App\Board;

        return view('reviews.create',compact('review'));
    }

    public function store(\App\Http\Requests\ReviewsRequest $request)
    {
        \Log::info('rivews store');
        \Log::info($request->all());
        
        $review = $request->user()->boards()->create([
            'category_id'=>$request->category_id,
            'title'=>$request->title,
            'content'=>$request->content,
        ]);
        \Log::info($review);
        $reviews = \App\Board::where('category_id','=','7')->latest()->orderBy('id','desc')->paginate(10);

        if(! $review){

            flash()->error(
                trans('review 저장 실패')
            );

            return back()->withInput();
        }
        
        return redirect()->route('reviews.index',compact('reviews'));
    }
    public function show(\App\Board $review){

        \Log::info('reviews show');
        \Log::info($review->all());

        return view('reviews.show',compact('review'));
    }

    public function edit(\App\Board $review){

        \Log::info('reviews edit');

        return view('reviews.edit',compact('review'));
    }
    public function update(\App\Http\Requests\ReviewsRequest $request, \App\Board $review){

        \Log::info('reviews update');
        \Log::info($request->all());
        
        $review->update($request->all());
        $reviews = \App\Board::where('category_id','=','7')->latest()->orderBy('id','desc')->paginate(10);

        if(! $review){

            flash()->error(
                trans('review 업데이트 실패')
            );

            return back()->withInput();
        }

        return redirect()->route('reviews.index',compact('reviews'));
    }

    public function destroy(\App\Board $review)
    {
        \Log::info('reviews destroy');
        $review->delete();

        return redirect()->route('reviews.index');
    }
}
