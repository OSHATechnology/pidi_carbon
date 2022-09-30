<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Emisi;
use App\Models\KonsumsiEnergi;
use App\Models\Plant;
use App\Models\Product;
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
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        
        $plant = [
            [
                'plant' => 'Plants 1',
            ],
            [
                'plant' => 'Plants 2',
            ],
            [
                'plant' => 'Plants 3',
            ],
            [
                'plant' => 'Plants 4',
            ],
            [
                'plant' => 'Plants 5',
            ],
        ];
        $emisi = [
            [
                'emission' => 'Electricity',
                'satuan' => 'KWh',
            ],
            [
                'emission' => 'Fuel',
                'satuan' => 'L',
            ],
            [
                'emission' => 'Gas',
                'satuan' => 'Kg',
            ],
        ];
        $product = [
            [
                'id_plant' => '1',
                'id_emisi' => '1',
                'welding' => '27358.07',
                'painting' => '19333.33',
                'assy' => '26269.32',
                'press' => '20751.03',
            ],
            [
                'id_plant' => '1',
                'id_emisi' => '2',
                'welding' => '9491.52',
                'painting' => '9346.73',
                'assy' => '3970.87',
                'press' => '3033.213',
            ],
            [
                'id_plant' => '1',
                'id_emisi' => '3',
                'welding' => '105.56',
                'painting' => '124.3',
                'assy' => '129.17',
                'press' => '62.28',
            ],
            [
                'id_plant' => '2',
                'id_emisi' => '1',
                'welding' => '54021.87',
                'painting' => '20112.33',
                'assy' => '25093.71',
                'press' => '22034.66',
            ],
            [
                'id_plant' => '2',
                'id_emisi' => '2',
                'welding' => '9932.23',
                'painting' => '8783.66',
                'assy' => '3243.23',
                'press' => '5654.135',
            ],
            [
                'id_plant' => '2',
                'id_emisi' => '3',
                'welding' => '112.45',
                'painting' => '231.9',
                'assy' => '164.34',
                'press' => '54.88',
            ],
            [
                'id_plant' => '3',
                'id_emisi' => '1',
                'welding' => '45634.66',
                'painting' => '34527.76',
                'assy' => '31122.33',
                'press' => '12336.67',
            ],
            [
                'id_plant' => '3',
                'id_emisi' => '2',
                'welding' => '4589.65',
                'painting' => '5675.45',
                'assy' => '1233.66',
                'press' => '6645.666',
            ],
            [
                'id_plant' => '3',
                'id_emisi' => '3',
                'welding' => '243.45',
                'painting' => '355.3',
                'assy' => '643.71',
                'press' => '73.53',
            ],
            [
                'id_plant' => '4',
                'id_emisi' => '1',
                'welding' => '98233.11',
                'painting' => '45444.55',
                'assy' => '12112.33',
                'press' => '35416.34',
            ],
            [
                'id_plant' => '4',
                'id_emisi' => '2',
                'welding' => '3726.98',
                'painting' => '4525.22',
                'assy' => '2319.78',
                'press' => '6282.111',
            ],
            [
                'id_plant' => '4',
                'id_emisi' => '3',
                'welding' => '676.87',
                'painting' => '658.1',
                'assy' => '234.98',
                'press' => '98.98',
            ],
            [
                'id_plant' => '5',
                'id_emisi' => '1',
                'welding' => '56756.55',
                'painting' => '52111.11',
                'assy' => '32123.33',
                'press' => '34325.99',
            ],
            [
                'id_plant' => '5',
                'id_emisi' => '2',
                'welding' => '5432.88',
                'painting' => '8626.99',
                'assy' => '3411.79',
                'press' => '5223.444',
            ],
            [
                'id_plant' => '5',
                'id_emisi' => '3',
                'welding' => '878.87',
                'painting' => '666.6',
                'assy' => '543.54',
                'press' => '75.77',
            ],
        ];

        Plant::insert($plant);
        Emisi::insert($emisi);
        Product::insert($product);

        KonsumsiEnergi::factory(20)->create();
    }
}
