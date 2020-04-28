<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePastSicknessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('past_sicknesses', function (Blueprint $table) {
            $table->bigIncrements('past_sickness_id')->comment('예전 병력 번호');
            $table->unsignedBigInteger('user_id')->comment('유저 번호');
            $table->string('past_sickness_name')->comment('예전에 걸린 병');
            $table->string('past_sickness_supplementation')->nullable()->comment('예전에 걸린 병 보충설명');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('생성 시간');
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('업데이트 시간');
            
            $table->foreign('user_id')->references('user_id')->on('medical_infos')->onUpdate('cascade')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('past_sicknesses');
    }
}
