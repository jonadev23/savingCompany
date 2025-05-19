import React from "react";


const TermsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6">
        <h2 className="text-lg font-bold mb-4">Terms and Conditions</h2>
        <div className="max-h-60 overflow-y-auto text-sm text-gray-700 space-y-2">
          <p>
            By creating an account, you agree to abide by our terms and
            conditions. You must be at least 18 years old to use this service.
          </p>
          <p>
            We value your privacy and will never share your data without your
            consent. Please read our Privacy Policy for more information.
          </p>
          <p>
            You are responsible for maintaining the confidentiality of your
            account and password.
          </p>
          {/* Add more text as needed */}
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsModal;
