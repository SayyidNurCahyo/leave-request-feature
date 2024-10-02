/* eslint-disable prettier/prettier */
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function LeaveRequestForm({ data }) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Leave Request History
                </h2>
            }
        >
            <Head title="LeaveRequestHistory" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="justify-content-center p-6 text-gray-900 dark:text-gray-100">
                            <div className="history-container">
                                <table className="history-table">
                                    <thead>
                                        <tr>
                                            <th>Employee ID</th>
                                            <th>Request Date</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.length > 0 ? (
                                            data.map((record) => (
                                                <tr key={record.id}>
                                                    <td>{record.EmployeeID}</td>
                                                    <td>
                                                        {record.request_date}
                                                    </td>
                                                    <td>{record.start_date}</td>
                                                    <td>{record.end_date}</td>
                                                    <td>{record.status}</td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="5">
                                                    No leave requests found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
