import React, { useState } from 'react';
import { format, addDays } from 'date-fns';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';

export default function Dashboard() {
  const [scheduledDate, setScheduledDate] = useState<Date | null>(null);
  const [isScheduling, setIsScheduling] = useState(false);

  const handleTriggerNow = () => {
    toast.promise(
      // This would be an API call in production
      new Promise((resolve) => setTimeout(resolve, 1000)),
      {
        loading: 'Sending emails...',
        success: 'Emails triggered successfully!',
        error: 'Failed to trigger emails',
      }
    );
  };

  const handleSchedule = () => {
    if (!scheduledDate) {
      toast.error('Please select a date');
      return;
    }

    setIsScheduling(true);
    // This would be an API call in production
    setTimeout(() => {
      toast.success(`Emails scheduled for ${format(scheduledDate, 'PPP')}`);
      setIsScheduling(false);
      setScheduledDate(null);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900">Email Triggers</h2>
          <div className="mt-4 space-y-3">
            <button 
              onClick={handleTriggerNow}
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <span>Send Birthday & Anniversary Emails</span>
            </button>
            <div className="flex space-x-2">
              <DatePicker
                selected={scheduledDate}
                onChange={(date) => setScheduledDate(date)}
                minDate={addDays(new Date(), 1)}
                placeholderText="Schedule for later"
                className="input-field flex-1"
              />
              <button 
                onClick={handleSchedule}
                disabled={isScheduling || !scheduledDate}
                className="btn-secondary whitespace-nowrap"
              >
                Schedule
              </button>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900">Upcoming Birthdays</h2>
          <p className="mt-1 text-sm text-gray-500">No upcoming birthdays this week</p>
        </div>
        
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900">Work Anniversaries</h2>
          <p className="mt-1 text-sm text-gray-500">No upcoming work anniversaries this week</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Scheduled Triggers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">No scheduled triggers</td>
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