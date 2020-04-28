<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDrivesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drives', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('운전 번호');
            $table->unsignedBigInteger('user_id')->comment('유저 번호');
            $table->bigInteger('drive_score')->comment('운전 점수');
            $table->bigInteger('eye_close_count')->comment('눈 깜빡 횟수');
            $table->bigInteger('average_eye_close_interval')->comment('평균 눈 깜빡임 간격');
            $table->bigInteger('sudden_stop_count')->comment('급 정거 수');
            $table->bigInteger('sudden_acceleration_count')->comment('급 가속 수');
            $table->dateTime('start_time')->comment('운전 시작 시간');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('운전 종료시간');
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('업데이트 시간');

            $table->foreign('user_id')->references('id')->on('users')->onUpdete('cascade')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('drives');
    }
}
