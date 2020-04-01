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
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->bigInteger('drive_score'); //운전 점수
            $table->bigInteger('eye_close_count'); //눈깜빡횟수
            $table->bigInteger('average_eye_close_interval'); //눈깜빡임 텀
            $table->bigInteger('sudden_stop_count'); //급정거 수
            $table->bigInteger('sudden_acceleration_count'); //급가속 수
            $table->dateTime('start_time'); //운전 시작시간
            $table->timestamps(); //운전 종료시간 + 운전날짜

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
