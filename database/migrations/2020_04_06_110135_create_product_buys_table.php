<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductBuysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_buys', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->bigInteger('ea'); //개수
            $table->bigInteger('price'); // 가격
            $table->string('to_name'); //받는사람 명
            $table->string('to_phone'); //받는 사람 휴대폰 번호
            $table->string('to_address'); //받는 사람 주소
            $table->string('to_zipcode'); //받는 사람 우편번호
            $table->string('to_msg')->nullable();
            $table->string('payment'); //결제수단
            $table->string('product_name'); //제품 명
            $table->string('product_key'); //제품 키
            $table->boolean('use_key')->default(0); //제품 키 사용 여부

            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_buys');
    }
}
