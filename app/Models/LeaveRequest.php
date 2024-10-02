<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LeaveRequest extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'EmployeeID',
        'request_date',
        'start_date',
        'end_date',
        'status'
    ];
}
