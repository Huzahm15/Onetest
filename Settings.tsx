import React from 'react';

export default function Settings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
      </div>
      
      <div className="card">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Company Settings</h2>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
              Company Name
            </label>
            <input
              type="text"
              id="company-name"
              className="mt-1 input-field w-full"
              placeholder="Enter company name"
            />
          </div>
          
          <div>
            <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">
              Timezone
            </label>
            <select id="timezone" className="mt-1 input-field w-full">
              <option>UTC</option>
              <option>America/New_York</option>
              <option>Europe/London</option>
              <option>Asia/Tokyo</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="email-sender" className="block text-sm font-medium text-gray-700">
              Email Sender Name
            </label>
            <input
              type="text"
              id="email-sender"
              className="mt-1 input-field w-full"
              placeholder="Enter sender name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Automated Emails
            </label>
            <div className="mt-2 space-y-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="birthday-emails"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="birthday-emails" className="ml-2 text-sm text-gray-700">
                  Enable birthday emails
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anniversary-emails"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="anniversary-emails" className="ml-2 text-sm text-gray-700">
                  Enable work anniversary emails
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Schedule
            </label>
            <div className="mt-2">
              <select className="input-field w-full">
                <option>Send at 9:00 AM (recipient's timezone)</option>
                <option>Send at 10:00 AM (recipient's timezone)</option>
                <option>Send at 11:00 AM (recipient's timezone)</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <button className="btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
}