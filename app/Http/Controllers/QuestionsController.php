<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    public function __construct(){
        $this->middleware('auth',['except'=>['index','show','edit','delete','store','update']]);
    }
    //
    public function index()
    {
        \Log::info('questions index');

        $user = \App\User::whereId(auth()->user()->id)->first();
        \Log::info($user);

        $questions = \App\Board::where('category_id','!=','7')->latest()->orderBy('id','desc')->paginate(10);
        \Log::info($questions);

        return view('questions.index',compact('questions'));
    }

    //
    public function create()
    {
        \Log::info('questions create');

        $Categories = \App\Category::get();
        $user = \App\User::whereId(auth()->user()->id)->first();
        \Log::info($user);

        $question = new \App\Board;

        return view('questions.create', compact('Categories','question'));
    }

    //
    public function store(\App\Http\Requests\QuestionsRequest $request)
    {
        \Log::info('questions store');
        \Log::info($request->all());
        
        $question = $request->user()->boards()->create([
            'category_id'=>$request->category_id,
            'title'=>$request->title,
            'content'=>$request->content,
        ]);
        $questions = \App\Board::where('category_id','!=','7')->latest()->orderBy('id','desc')->paginate(10);

        if(! $question){

            flash()->error(
                trans('question 저장 실패')
            );

            return back()->withInput();
        }
        
        return redirect()->route('questions.index',compact('questions'));
        // return $request->all();
    }


    public function show(\App\Board $question){

        \Log::info('questions show');

        return view('questions.show',compact('question'));
    }

    public function edit(\App\Board $question){

        \Log::info('questions edit');

        return view('questions.edit',compact('question'));
    }

    public function update(\App\Http\Requests\QuestionsRequest $request, \App\Board $question){

        \Log::info('questions update');
        \Log::info($request->all());

        
        $question->update($request->all());
        $questions = \App\Board::where('category_id','!=','7')->latest()->orderBy('id','desc')->paginate(10);

        if(! $question){

            flash()->error(
                trans('question 업데이트 실패')
            );

            return back()->withInput();
        }

        return redirect()->route('questions.index',compact('questions'));
    }

    public function destroy(\App\Board $question)
    {
        \Log::info('questions destroy');
        $question->delete();

        return redirect()->route('questions.index');
    }

}
