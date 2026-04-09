import React from 'react';
import { useNavigate, useRouteError } from 'react-router';

const Error = () => {

  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-xl shadow-lg">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-100 rounded-full">
            <svg
              className="w-12 h-12 text-red-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Oops!</h1>
        <p className="text-gray-600 mb-6">
          {error?.statusText ||
            error?.message ||
            'Something went wrong on our end.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-lg hover:bg-gray-300 transition-colors"
          >
            Go Back
          </button>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Home Page
          </button>
        </div>

        {/* Technical Detail (Optional) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mt-8 text-left">
            <p className="text-xs font-mono text-gray-400 bg-gray-100 p-2 rounded">
              Error details: {error?.stack || 'No stack trace available'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Error;