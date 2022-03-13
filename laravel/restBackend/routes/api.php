<?php

use App\Http\Controllers\productsController;
use App\Http\Controllers\usersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::middleware('auth:sanctum')->group(function () {
    Route::resource('products', productsController::class); 
});




/* Route::get('products', [productsController::class,'index'])->name('products.');
Route::get('products/create', [productsController::class, 'create'])->name('products.create');
Route::post('products', [productsController::class, 'store'])->name('products.store');
Route::get('products/{product}', [productsController::class, 'show'])->name('products.show');
Route::get('products/{product}/edit', [productsController::class, 'edit'])->name('products.edit');
Route::put('products/{product}', [productsController::class, 'update'])->name('products.update');
Route::delete('products/{product}', [productsController::class, 'destroy'])->name('products.destroy'); */
Route::resource('users', usersController::class);
Route::post('/users/auth', [usersController::class, 'auth']);
