/* eslint-disable prettier/prettier */
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import React from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function Dashboard({ data }) {
    const handleLeaveRequest = (employeeId) => {
        Inertia.visit(`/leave-request/create/${employeeId}`);
    };
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 justify-content-center">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Dept</th>
                                        <th>Job Title</th>
                                        <th>Saldo Cuti</th>
                                        <th>Ajukan Cuti</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((employee) => (
                                        <tr key={employee.EmployeeID}>
                                            <td>{employee.EmployeeID}</td>
                                            <td>{employee.Name}</td>
                                            <td>{employee.Dept}</td>
                                            <td>{employee.JobTitle}</td>
                                            <td>{employee.leave_balance}</td>
                                            <td>
                                                <button
                                                    onClick={() =>
                                                        handleLeaveRequest(
                                                            employee.EmployeeID,
                                                        )
                                                    }
                                                >
                                                    Create Leave Request
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
