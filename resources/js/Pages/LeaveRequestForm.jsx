/* eslint-disable prettier/prettier */
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function LeaveRequestForm({ employee }) {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(`/leave-request/store`, {
            EmployeeID: employee.EmployeeID,
            start_date: startDate,
            end_date: endDate,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Leave Form Request
                </h2>
            }
        >
            <Head title="LeaveRequestForm" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="justify-content-center p-6 text-gray-900 dark:text-gray-100">
                            <div className="form-container">
                                <h2>Create Leave Request for {employee.Name}</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="start_date">
                                            Start Date:
                                        </label>
                                        <input
                                            type="date"
                                            id="start_date"
                                            name="start_date"
                                            value={startDate}
                                            onChange={(e) =>
                                                setStartDate(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="end_date">
                                            End Date:
                                        </label>
                                        <input
                                            type="date"
                                            id="end_date"
                                            name="end_date"
                                            value={endDate}
                                            onChange={(e) =>
                                                setEndDate(e.target.value)
                                            }
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="submit-btn"
                                    >
                                        Submit Request
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
