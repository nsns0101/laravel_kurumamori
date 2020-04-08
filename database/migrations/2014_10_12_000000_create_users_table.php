<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id')->comment('유저 번호');
            $table->string('email')->unique()->comment('이메일');
            $table->string('password')->comment('비밀번호');
            $table->string('name')->comment('이름');
            $table->bigInteger('age')->comment('나이');
            $table->string('gender')->comment('성별');
            $table->string('phone')->unique()->comment('휴대폰 번호');

            $table->rememberToken()->comment('토큰 번호');
            $table->timestamp('created_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('생성 시간');
            $table->timestamp('updated_at')->default(DB::raw('CURRENT_TIMESTAMP'))->comment('업데이트 시간');});
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
}
