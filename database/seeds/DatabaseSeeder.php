<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        //외래키 설정을 초기화
        //만들어 지는 순서에 따라 오류가 날 수 있기 때문에
        if (config('databases.default') !== 'sqlite') {
            DB::statement('SET FOREIGN_KEY_CHECKS=0');
        }

        //테이블 초기화
        App\User::truncate();
        App\Product_buy::truncate();
        App\Product::truncate();
        App\Medical_info::truncate();
        App\Drive::truncate();
        App\Insurance::truncate();
        App\Question::truncate();
        App\Comment::truncate();
        App\Report::truncate();
        App\Drive_detection::truncate();
        //시더 할 목록
        $this->call(UsersTableSeeder::class);
        $this->call(Product_buysTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(Medical_infosTableSeeder::class);
        $this->call(DrivesTableSeeder::class);
        $this->call(InsurancesTableSeeder::class);
        $this->call(QuestionsTableSeeder::class);
        $this->call(CommentsTableSeeder::class);
        $this->call(ReportsTableSeeder::class);
        $this->call(Drive_detectionsTableSeeder::class);

        if (config('databases.default') !== 'sqlite') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1');
        }

    }
}
