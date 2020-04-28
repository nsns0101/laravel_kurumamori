<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDriveDetectionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('drive_detections', function (Blueprint $table) {
            $table->bigIncrements('drive_detection_id')->comment('드라이브 감지 번호');
            $table->unsignedBigInteger('user_id')->comment('유저 번호');
            $table->string('latitude')->comment('위도');
            $table->string('longitude')->comment('경도');
            $table->boolean('bool_report')->comment('신고 여부');
            $table->boolean('bool_sudden_acceleration')->comment('급가속 여부');
            $table->boolean('bool_sudden_stop')->comment('급 정거 여부');
            $table->boolean('bool_sleep')->comment('졸음 여부');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('생성 시간');
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('업데이트 시간');

            $table->foreign('user_id')->references('user_id')->on('users')->onUpdete('cascade')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('drive_detections');
    }
}
