<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = [
        'title',
        'price',
        'address',
        'description',
        'task_number',
        'phone_number',
        'tg',
        'max',
        'wa',
    ];
}
