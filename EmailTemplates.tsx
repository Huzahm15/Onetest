import React from 'react';

export default function EmailTemplates() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Email Templates</h1>
        <button className="btn-primary">Create Template</button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900">Birthday Template</h2>
          <p className="mt-1 text-sm text-gray-500">Default birthday wishes template</p>
          <div className="mt-4 flex space-x-2">
            <button className="btn-secondary">Edit</button>
            <button className="btn-secondary">Preview</button>
          </div>
        </div>
        
        <div className="card">
          <h2 className="text-lg font-medium text-gray-900">Work Anniversary Template</h2>
          <p className="mt-1 text-sm text-gray-500">Default work anniversary template</p>
          <div className="mt-4 flex space-x-2">
            <button className="btn-secondary">Edit</button>
            <button className="btn-secondary">Preview</button>
          </div>
        </div>
      </div>
    </div>
  );
}