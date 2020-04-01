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
        if (config('databases.default') !== 'sqlite') {
            DB::statement('SET FOREIGN_KEY_CHECKS=0');
        }
        App\User::truncate();
        App\Product::truncate();
        App\Medical_info::truncate();
        App\Drive::truncate();
        App\Insurance::truncate();

        $this->call(UsersTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(Medical_infosTableSeeder::class);
        $this->call(DrivesTableSeeder::class);
        $this->call(InsurancesTableSeeder::class);

        if (config('databases.default') !== 'sqlite') {
            DB::statement('SET FOREIGN_KEY_CHECKS=1');
        }

    }
}
