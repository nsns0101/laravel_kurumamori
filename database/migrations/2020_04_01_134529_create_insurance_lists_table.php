<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInsuranceListsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insurance_lists', function (Blueprint $table) {
            $table->bigIncrements('insurance_list_id')->comment('보험 번호');
            $table->string('insurance_name')->comment('보험사 명'); //보험사 명
            $table->string('insurance_phone')->comment('보험사 폰 번호'); //보험사 폰 번호
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('insurance_lists');
    }
}
