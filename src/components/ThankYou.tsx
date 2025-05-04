import React from 'react';

const ThankYou: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6 bg-gray-50">
      <h1 className="text-2xl font-bold text-gray-800">Thank You!</h1>
      <p className="text-gray-700">
        Your incident report has been submitted successfully. We appreciate your contribution to community safety.
      </p>
      <p className="text-gray-700">
        If you have any further concerns, please feel free to reach out.
      </p>
    </div>
  );
};

export default ThankYou;
