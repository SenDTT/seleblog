<?php

use Illuminate\Support\Facades\Route;

Route::get('/', [\App\Http\Controllers\Landing\HomeController::class, 'index']);

Route::group(['prefix' => '/login'], function () {
   Route::get('/', [\App\Http\Controllers\LoginController::class, 'index'])->name('login');
});
