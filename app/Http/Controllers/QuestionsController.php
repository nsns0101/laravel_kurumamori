<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    //
    public function index()
    {
        \Log::info('questions index');

        $user = \App\User::whereId(auth()->user()->id)->first();
        \Log::info($user);

        $questions = \App\Question::latest()->orderBy('id','desc')->paginate(10);
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

        $question = new \App\Question;

        return view('questions.create', compact('Categories','question'));
    }

    //
    public function store(\App\Http\Requests\QuestionsRequest $request)
    {
        \Log::info('questions store');
        \Log::info($request->all());
        
        $question = $request->user()->questions()->create($request->all());
        $questions = \App\Question::latest()->orderBy('id','desc')->paginate(10);

        if(! $question){

            flash()->error(
                trans('question 저장 실패')
            );

            return back()->withInput();
        }
        
        return redirect()->route('questions.index',compact('questions'));
    }


    public function show(\App\Question $question){

        \Log::info('questions show');

        return view('questions.show',compact('question'));
    }

    public function edit(\App\Question $question){

        \Log::info('questions edit');

        return view('questions.edit',compact('question'));
    }

    public function update(\App\Http\Requests\QuestionsRequest $request, \App\Question $question){

        \Log::info('questions update');
        \Log::info($request->all());

        
        $question->update($request->all());
        $questions = \App\Question::latest()->orderBy('id','desc')->paginate(10);

        if(! $question){

            flash()->error(
                trans('question 업데이트 실패')
            );

            return back()->withInput();
        }

        return redirect()->route('questions.index',compact('questions'));
    }

    public function destroy(\App\Question $question)
    {
        \Log::info('questions destroy');
        $question->delete();

        return redirect()->route('questions.index');
    }

}
