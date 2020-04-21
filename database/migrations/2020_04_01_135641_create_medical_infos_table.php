<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMedicalInfosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('medical_infos', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('의료정보 번호');
            $table->unsignedBigInteger('user_id')->comment('유저 번호');
            // $table->string('past_sickness')->nullable()->comment('예전에 걸린 병');
            // $table->string('past_sickness_supplementation')->nullable()->comment('예전에 걸린 병 보충설명');
            // $table->string('sickness')->nullable()->comment('현재 병명');
            // $table->string('medicine')->nullable()->comment('복용중인 약');
            // $table->string('symptom')->nullable()->comment('증상');
            $table->string('guardian_phone')->nullable()->comment('보호자 폰 번호');
            $table->string('blood_type')->comment('혈액형');
            $table->string('disability_status')->comment('장애여부');
            $table->string('hospital')->nullable()->comment('다니는 병원');
            $table->string('hospital_menu')->nullable()->comment('진료 과목');
            // $table->string('hospital_phone')->nullable()->comment('다니는 병원 폰 번호');
            $table->string('report_request')->nullable()->comment('신고시 요청사항');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('생성 시간');
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('업데이트 시간');

            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('medical_infos');
    }
}
