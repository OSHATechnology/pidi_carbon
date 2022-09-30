<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KonsumsiEnergi>
 */
class KonsumsiEnergiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'tanggal' => fake()->date(),
            'jam' => fake()->time('H:i:s'),
            'total_energi' => fake()->randomNumber(5,true),
        ];
    }
}
