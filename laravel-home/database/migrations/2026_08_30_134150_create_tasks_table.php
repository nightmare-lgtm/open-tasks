<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();


        $table->string('title');
        $table->decimal('price', 10, 2);
        $table->string('address');
        $table->text('description');
        $table->integer('task_number');

        $table->string('phone_number')->nullable();
        $table->string('tg')->nullable();
        $table->string('max')->nullable();
        $table->string('wa')->nullable();

        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
