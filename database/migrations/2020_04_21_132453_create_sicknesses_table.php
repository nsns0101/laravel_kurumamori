<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSicknessesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sicknesses', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('기저 질환 번호');
            $table->unsignedBigInteger('medical_id')->comment('의료정보 번호');
            $table->string('sickness_name')->comment('기저질환 명');
            $table->string('medicine')->nullable()->comment('복용중인 약');
            $table->string('symptom')->nullable()->comment('증상');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('생성 시간');
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('업데이트 시간');
            
            $table->foreign('medical_id')->references('id')->on('medical_infos')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('sicknesses');
    }
}
