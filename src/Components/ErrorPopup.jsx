import React from 'react';

const ErrorPopup
 = ({ message, onClose }) => {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-red-600">Error</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <span className="sr-only">Close</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="text-gray-700">{message}</div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
