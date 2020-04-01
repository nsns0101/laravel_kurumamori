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
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->string('sickness'); //병명
            $table->string('past_sickness')->nullable(); //예전에 걸린 병
            $table->string('symptom')->nullable(); //증상
            $table->string('guardian_phone')->nullable(); //보호자 폰번호
            $table->string('medicine')->nullable(); //복용하는 약
            $table->string('hospital')->nullable(); //다니는 병원
            $table->string('hospital_phone')->nullable(); //다니는 병원 폰 번호
            $table->string('report_request')->nullable(); //신고시 요청사항
            $table->timestamps();
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
