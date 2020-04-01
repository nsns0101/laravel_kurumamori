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
            $table->bigIncrements('id');
            $table->string('email')->unique(); //이메일
            $table->string('password'); //비밀번호
            $table->string('name'); //이름
            $table->bigInteger('age'); //나이
            $table->string('gender'); //성별
            $table->string('phone')->unique(); //휴대폰 번호

            $table->rememberToken(); //토큰기억
            $table->timestamps(); //created_at, updated_at
        });
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
