<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EmployeeList extends Model {
    use HasFactory;
    protected $table = 'employeelist';
    protected $primaryKey = 'EmployeeID';
    public $timestamps = false;


    protected $fillable = [
        'Name',
        'Birth Place',
        'SEX',
        'Birth_date',
        'Status',
        'JoinDate',
        'Dept',
        'JobTitle',
        'leave_balance'
    ];

    public function leaveRequests() {
        return $this->hasMany(LeaveRequest::class);
    }
}