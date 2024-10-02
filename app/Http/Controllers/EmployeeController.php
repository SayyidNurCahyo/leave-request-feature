<?php

namespace App\Http\Controllers;

use App\Models\EmployeeList;
use Illuminate\Http\Request;
use Inertia\Inertia;


class EmployeeController extends Controller
{
    public function index()
    {
        $employees = EmployeeList::all();
        return Inertia::render('Dashboard', [
            "data" => $employees
        ]);
    }
}
