<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    // public function __construct(){
    //     $this->middleware('auth');
    //     $this->middleware('auth',['except'=>['index','show','edit','delete','store','update']]);
    // }
    //
    public function index()
    {
        return view('home.main');
    }

    public function show(){

        return view('home.main');
    }
    
    public function store(Request $request)
    {
        \Log::info('questions store');
        \Log::info($request->all());
    
        $question = \App\Board::create([
            'user_id'=>$request->user_id,
            'category_id'=>1,
            'title'=>$request->title,
            'content'=>$request->content,
        ]);
        $questions = \App\Board::where('category_id','!=','7')->latest()->orderBy('id','desc')->paginate(10);

        $category = array();
        for($i = 0; $i < count($questions); $i++){
            array_push($category, \App\Category::whereId($questions[$i]->category_id)->first()->category);
        }
        $board_user = array();
        for($i = 0; $i < count($questions); $i++){
            array_push($board_user, \App\User::whereId($questions[$i]->user_id)->first()->name);
        }

        return response()->json([
            'questions' => $questions,
            'category' => $category,
            'board_user' => $board_user,
        ]);

    }

    public function edit(\App\Board $question){

        \Log::info('questions edit');

        return view('questions.edit',compact('question'));
    }

    public function update(Request $request){

        \Log::info('questions update');
        \App\Board::whereId($request->id)->update($request->all());

        if(! $question){

            flash()->error(
                trans('question 업데이트 실패')
            );

            return back()->withInput();
        }
        $questions = \App\Board::where('category_id','!=','7')->latest()->orderBy('id','desc')->paginate(10);

        return response()->json([
            'questions' => $questions,
        ]);
    }

    public function destroy(Request $request)
    {
        \Log::info('questions destroy');

        \App\Board::whereId($request->id)->delete();
        return response()->json([], 200);
    }

    public function data(Request $request, $category = null)
    {
         \Log::info('questions index');
        $query = $category
            ? \App\Category::whereId($category)->firstOrFail()->boards()
            : new \App\Board;
        if($category_id = $request->input('category_id')){
            $query = $query->where('category_id','=',$category_id)->orderBy(
                $request->input('sortDesc','id'),
                $request->input('id','desc'),
            );
        }
        else{
            $query = $query->where('category_id','!=','7')->orderBy(
                $request->input('sortDesc','id'),
                $request->input('id','desc'),
            );
        }
        if($search = $request->input('search')) {
            \DB::statement('ALTER TABLE boards ADD FULLTEXT(title,content);');
            $raw = 'MATCH(title,content) AGAINST(? IN BOOLEAN MODE)';
            $query = $query->whereRaw($raw, [$search] );
            $query = $query->orderBy(
                $request->input('sortDesc','id'),
                $request->input('id','desc'),
            );
            
        }
        if($user_id = $request->input('user_id')) {
            $query = $query->where('user_id','=', $user_id);
            $query = $query->orderBy(
                $request->input('sortDesc','id'),
                $request->input('id','desc'),
            );
        }

        $questions = $query->paginate(10);

        $board_user = array();
        for($i = 0; $i < count($questions); $i++){
            array_push($board_user, \App\User::whereId($questions[$i]->user_id)->first()->name);
        }

        $category = array();
        for($i = 0; $i < count($questions); $i++){
            array_push($category, \App\Category::whereId($questions[$i]->category_id)->first()->category);
        }

        // $comment = array();
        // for($i = 0; $i < count($questions); $i++){
        //     array_push($comment, \App\Comment::whereBoard_id($questions[$i]->id)->first());
        // }

        return response()->json([
            'questions' => $questions,
            'category' => $category,
            'board_user' => $board_user,
        ]);
    }
}
