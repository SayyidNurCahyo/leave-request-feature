<?php

use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\LeaveRequestController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [EmployeeController::class, 'index'])->name('dashboard');
});

Route::middleware('auth')->group(function () {
    Route::get('/leave-request/create/{employee}', [LeaveRequestController::class, 'create'])->name('leave-request.create');
    Route::post('/leave-request/store', [LeaveRequestController::class, 'store'])->name('leave-request.store');
    Route::get('/leave-request/history', [LeaveRequestController::class, 'index'])->name('leave-request.index');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
