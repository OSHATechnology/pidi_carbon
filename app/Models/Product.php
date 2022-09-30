<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function emisi(){
        return $this->hasMany(Emisi::class,'id_emisi');
    }
    public function plant(){
        return $this->hasMany(Plant::class,'id_plant');
    }
}
