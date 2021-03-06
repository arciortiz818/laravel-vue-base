<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\IndexController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['namespace'=>'Api'], function(){
    Route::post('login',[AuthController::class, 'login']);
    Route::post('checkToken',[AuthController::class, 'checkToken']);
    Route::post('logout',[AuthController::class, 'logout']);
    Route::post('dashboard',[IndexController::class, 'index']);
});
