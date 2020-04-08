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
            $table->bigIncrements('id')->comment('제품 구입 번호');
            $table->string('to_name')->comment('받는사람 명');
            $table->string('to_phone')->comment('받는사람 폰 번호');
            $table->string('to_address')->comment('받는 사람 주소');
            $table->string('to_zipcode')->comment('받는 사람 우편번호');
            $table->string('payment')->comment('결제수단');
            $table->string('product_name')->comment('제품 명');
            $table->string('product_key')->comment('제품 키');
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
