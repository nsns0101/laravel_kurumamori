<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CommentsController extends Controller
{
  
    public function store(Request $request)
    {
        \Log::info('comments store');
        \Log::info($request->all());

        if(\App\Category::find( \App\Board::find($request->select)->category_id )->id == 7){

            $comment = \App\User::find($request->user_id)->comments()->create([
                'board_id'=>$request->select,
                'multiple_type'=> true,
                'content'=>$request->content,
            ]);
        }
        else{
            $comment = \App\User::find($request->user_id)->comments()->create([
                'board_id'=>$request->select,
                'multiple_type'=> false,
                'content'=>$request->content,
            ]);
        }

        if(! $comment){

            flash()->error(
                trans('question 저장 실패')
            );

            return back()->withInput();
        }
        
        return response()->json([
            'comment' => $comment
        ]);
    }

    public function update(Request $request)
    {
        \Log::info('comments update');
        \Log::info($request);
        \App\Comment::whereId($request->id)->update($request->all());


        return response()->json([], 200);
    }
    public function destroy(Request $request)
    {
        \Log::info('comments destroy');
        \Log::info($request);
        \Log::info($request->id);


        \App\Comment::whereId($request->id)->delete();
        return response()->json([], 200);
    }
    public function getCommnet(Request $request, $board_id)
    {
        \Log::info('comment get');

        $query2 = new \App\Comment;
        $comment = $query2->where('board_id','=',$board_id)->orderBy('id', 'desc')->paginate(10);

        \Log::info($comment);
        
        return response()->json([
            'comment'=> $comment,
        ]);
    }
}
