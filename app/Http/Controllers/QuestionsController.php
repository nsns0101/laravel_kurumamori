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
            'category_id'=> \App\Category::where('category','=',$request->category)->first()->id,
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

        $comments = array();
        for($i = 0; $i < count($questions); $i++){
            $query2 = new \App\Comment;
            $comment = $query2->where('board_id','=',$questions[$i]->id)->orderBy('id', 'desc')->paginate(10);
            array_push($comments, $comment);
        }
        \Log::info($comments);

        return response()->json([
            'questions' => $questions,
            'category' => $category,
            'board_user' => $board_user,
            'comments' => $comments,
        ]);

    }

    public function edit(\App\Board $question){

        \Log::info('questions edit');

        return view('questions.edit',compact('question'));
    }

    public function update(Request $request){

        \Log::info('questions update');
        \Log::info($request);
        \App\Board::whereId($request->id)->update($request->all());


        return response()->json([], 200);
    }

    public function destroy(Request $request)
    {
        \Log::info('questions destroy');
        \Log::info($request);
        \Log::info($request->id);


        \App\Board::whereId($request->id)->delete();
        return response()->json([], 200);
    }

    public function data(Request $request, $category)
    {
         \Log::info('questions index');
         \Log::info($category);
        
        $category_id = 999;
        if($category === "all"){
            $category_id = 0;
        }
        else if($category === "notice"){
            $category_id = 1;
        }
        else if($category === "update"){
            $category_id = 2;
        }
        else if($category === "productB"){
            $category_id = 3;
        }
        else if($category === "productE"){
            $category_id = 4;
        }
        else if($category === "software"){
            $category_id = 5;
        }
        else if($category === "other"){
            $category_id = 6;
        }

        if($category_id != 999){
            if($category_id === 0){
                $query = new \App\Board;
                $query = $query->where('category_id','!=','7')->orderBy('id', 'desc');
                $questions = $query->paginate(10);
                $board_user = array();
                for($i = 0; $i < count($questions); $i++){
                    array_push($board_user, \App\User::whereId($questions[$i]->user_id)->first()->name);
                }
                $category = array();
                for($i = 0; $i < count($questions); $i++){
                    array_push($category, \App\Category::whereId($questions[$i]->category_id)->first()->category);
                }
            }
            else{
                $query = new \App\Board;
                $query = $query->where('category_id','=',$category_id)->orderBy('id', 'desc');
                $questions = $query->paginate(10);
                $board_user = array();
                for($i = 0; $i < count($questions); $i++){
                    array_push($board_user, \App\User::whereId($questions[$i]->user_id)->first()->name);
                }
                $category = array();
                for($i = 0; $i < count($questions); $i++){
                    array_push($category, \App\Category::whereId($questions[$i]->category_id)->first()->category);
                }
            }
        }
        
        $comments = array();
        for($i = 0; $i < count($questions); $i++){
            $query2 = new \App\Comment;
            $comment = $query2->where('board_id','=',$questions[$i]->id)->orderBy('id', 'desc')->paginate(10);
            array_push($comments, $comment);
        }
        // $comment_users = array();
        // for($i = 0; $i < count($comments); $i++){
        //     $query3 = new \App\User;
        //     $comment_user = $query3->where('id','=',$comments[$i]->id)->orderBy('id', 'desc')->paginate(10);
        //     array_push($comment_users, $comment_user);
        // }


        return response()->json([
            'questions' => $questions,
            'category' => $category,
            'board_user' => $board_user,
            'comments' => $comments,
            // 'comment_user' =>$comment_users
        ]);
    }

    public function onShow(Request $request)
    {
        \Log::info('questions onShow');
        $view_count = \App\Board::whereId($request->board_id)->value('view_count') +1;
        \App\Board::whereId($request->board_id)->update(['view_count' => $view_count]);

        return response()->json([], 200);
    }
    public function onSearch(Request $request, $search)
    {
        \Log::info('questions onSearch');
        \Log::info($request);
        \Log::info($search);

        $query = new \App\Board;
        $query = $query->where('title','like', '%'.$search.'%')->orderBy('id', 'desc');
        $questions = $query->paginate(10);
        \Log::info($questions);

        $board_user = array();
        for($i = 0; $i < count($questions); $i++){
            array_push($board_user, \App\User::whereId($questions[$i]->user_id)->first()->name);
        }
        $category = array();
        for($i = 0; $i < count($questions); $i++){
            array_push($category, \App\Category::whereId($questions[$i]->category_id)->first()->category);
        }

        return response()->json([
            'questions' => $questions,
            'category' => $category,
            'board_user' => $board_user,
        ]);
    }

}
