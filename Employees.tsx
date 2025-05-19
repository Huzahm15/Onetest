import React from 'react';

export default function Employees() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Employees</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="file"
              id="csv-upload"
              accept=".csv"
              className="hidden"
              onChange={(e) => {
                // Handle CSV upload
                console.log(e.target.files?.[0]);
              }}
            />
            <label
              htmlFor="csv-upload"
              className="btn-secondary cursor-pointer flex items-center"
            >
              <span>Upload CSV</span>
            </label>
          </div>
          <button className="btn-primary">Add Employee</button>
        </div>
      </div>
      
      <div className="card">
        <div className="flex items-center justify-between mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search employees..."
              className="input-field pl-10"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              🔍
            </span>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Birthday</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">No employees found</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}