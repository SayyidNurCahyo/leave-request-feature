<?php

namespace App\Http\Controllers;

use App\Models\EmployeeList;
use App\Models\LeaveRequest;
use Illuminate\Http\Request;
use Inertia\Inertia;


class LeaveRequestController extends Controller
{
    public function index()
    {
        $leaveRequests = LeaveRequest::all();
        return Inertia::render('LeaveRequestHistory', [
            "data" => $leaveRequests
        ]);
    }

    public function create($employeeId)
    {
        $employee = EmployeeList::findOrFail($employeeId);

        return Inertia::render('LeaveRequestForm', [
            'employee' => $employee
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'start_date' => 'required|date',
            'end_date' => 'required|date|after_or_equal:start_date',
            'EmployeeID' => 'required|exists:employeelist,EmployeeID'
        ]);

        $employee = EmployeeList::find($request->EmployeeID);

        $leaveDays = \Carbon\Carbon::parse($request->start_date)->diffInDays(\Carbon\Carbon::parse($request->end_date)) + 1;

        if ($employee->leave_balance >= $leaveDays) {
            $status = 'approved';
        } else {
            $status = 'rejected';
        }

        $leaveRequest = new LeaveRequest();
        $leaveRequest->EmployeeID = $request->EmployeeID;
        $leaveRequest->request_date = now();
        $leaveRequest->start_date = $request->start_date;
        $leaveRequest->end_date = $request->end_date;
        $leaveRequest->status = $status;
        $leaveRequest->save();

        if ($status == 'approved') {
            $employee->leave_balance -= $leaveDays;
            $employee->save();
        }

        return redirect()->route('leave-request.index');
    }
}
