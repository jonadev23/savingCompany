import { useState } from 'react';

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Account details
    accountType: 'savings',
    targetGoal: '',
    savingsPurpose: '',
    
    // Fund information
    initialDeposit: '',
    recurringDeposit: '',
    frequency: 'monthly',
    
    // Terms and agreement
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    
    try {
      const response = await fetch(`http://localhost:5000/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        // Redirect to dashboard after successful signup
        window.location.href = '/login';
      } else {
        // Handle errors
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred during signup. Please try again.');
    }
  };

  const skipDeposit = () => {
    // Skip the deposit step and complete signup
    handleSubmit();
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div 
                key={stepNumber}
                className={`w-1/4 h-2 mx-1 rounded-full ${
                  step >= stepNumber ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            {step === 1 && 'Personal Information'}
            {step === 2 && 'Account Details'}
            {step === 3 && 'Fund Information'}
            {step === 4 && 'Complete Setup'}
          </h2>
          <p className="text-gray-600">
            {step === 1 && 'Tell us about yourself'}
            {step === 2 && 'Set up your savings account'}
            {step === 3 && 'Set your deposit preferences'}
            {step === 4 && 'Review and finalize'}
          </p>
        </div>

        <div>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Account Details */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Account Type</label>
                <select
                  name="accountType"
                  value={formData.accountType}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="savings">Standard Savings</option>
                  <option value="highYield">High-Yield Savings</option>
                  <option value="fixedTerm">Fixed Term</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Target Goal (optional)</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="targetGoal"
                    value={formData.targetGoal}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Saving Purpose</label>
                <select
                  name="savingsPurpose"
                  value={formData.savingsPurpose}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select a purpose</option>
                  <option value="emergency">Emergency Fund</option>
                  <option value="retirement">Retirement</option>
                  <option value="house">Home Purchase</option>
                  <option value="education">Education</option>
                  <option value="vacation">Vacation</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Fund Information */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Initial Deposit</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="initialDeposit"
                    value={formData.initialDeposit}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  You can skip this step and set up deposits later from your dashboard.
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Recurring Deposit (optional)</label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="recurringDeposit"
                    value={formData.recurringDeposit}
                    onChange={handleChange}
                    className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700">Frequency</label>
                <select
                  name="frequency"
                  value={formData.frequency}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Back
                </button>
                <div>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={skipDeposit}
                    className="ml-2 bg-transparent text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Skip for now
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Complete Setup */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-md">
                <h3 className="font-medium text-gray-900">Account Summary</h3>
                <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <div className="text-gray-500">Name:</div>
                  <div className="text-gray-900">{formData.firstName} {formData.lastName}</div>
                  
                  <div className="text-gray-500">Email:</div>
                  <div className="text-gray-900">{formData.email}</div>
                  
                  <div className="text-gray-500">Account Type:</div>
                  <div className="text-gray-900">
                    {formData.accountType === 'savings' && 'Standard Savings'}
                    {formData.accountType === 'highYield' && 'High-Yield Savings'}
                    {formData.accountType === 'fixedTerm' && 'Fixed Term'}
                  </div>
                  
                  {formData.targetGoal && (
                    <>
                      <div className="text-gray-500">Target Goal:</div>
                      <div className="text-gray-900">${formData.targetGoal}</div>
                    </>
                  )}
                  
                  {formData.initialDeposit && (
                    <>
                      <div className="text-gray-500">Initial Deposit:</div>
                      <div className="text-gray-900">${formData.initialDeposit}</div>
                    </>
                  )}
                  
                  {formData.recurringDeposit && (
                    <>
                      <div className="text-gray-500">Recurring Deposit:</div>
                      <div className="text-gray-900">${formData.recurringDeposit} ({formData.frequency})</div>
                    </>
                  )}
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeTerms"
                    name="agreeTerms"
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                    I agree to the 
                    <a href="/terms" className="text-blue-600 hover:text-blue-500"> Terms of Service </a>
                    and
                    <a href="/privacy" className="text-blue-600 hover:text-blue-500"> Privacy Policy</a>
                  </label>
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!formData.agreeTerms}
                  className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                    ${formData.agreeTerms 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-300 text-white cursor-not-allowed'}`}
                >
                  Complete Signup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}