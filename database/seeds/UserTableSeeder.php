<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\User::create([
            'name'      => 'Boy Panjaitan',
            'email'     => 'boypanjaitan16@yahoo.com',
            'password'  => \Illuminate\Support\Facades\Hash::make('mypass')
        ]);
    }
}
