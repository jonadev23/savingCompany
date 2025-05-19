import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // eye icons
import TermsModal from "../components/TermsModal";
import Header from "../layout/Header";

export default function SignupForm() {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    // Personal information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",

    // Account details
    accountType: "savings",
    targetGoal: "",
    savingsPurpose: "",

    // Fund information
    initialDeposit: "",
    recurringDeposit: "",
    frequency: "monthly",

    // Terms and agreement
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
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

    // Transform form data to match backend requirements
    const transformedData = {
      user: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null, // Handle optional field
        password: formData.password,
      },
      account: {
        type: formData.accountType,
        target_goal: formData.targetGoal
          ? parseFloat(formData.targetGoal)
          : null,
        savings_purpose: formData.savingsPurpose || "general",
      },
      deposits: {
        initial_deposit: formData.initialDeposit
          ? parseFloat(formData.initialDeposit)
          : 0,
        recurring_deposit: formData.recurringDeposit
          ? {
              amount: parseFloat(formData.recurringDeposit),
              frequency: formData.frequency,
            }
          : null,
      },
      terms_accepted: formData.agreeTerms,
    };

    // Remove confirmPassword from the data
    delete transformedData.user.confirmPassword;

    try {
      const response = await fetch(`http://localhost:5000/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transformedData),
      });

      if (response.ok) {
        // Redirect to dashboard after successful signup
        window.location.href = "/login";
      } else {
        // Handle errors
        const errorData = await response.json();
        alert(`Signup failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An error occurred during signup. Please try again.");
    }
  };

  const skipDeposit = () => {
    // Skip the deposit step and complete signup
    handleSubmit();
  };

  useEffect(() => {
    const password = formData.password;
    // Check for strength
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,}$/;

    if (strongRegex.test(password)) {
      setPasswordStrength("Strong");
    } else if (mediumRegex.test(password)) {
      setPasswordStrength("Moderate");
    } else if (password.length > 0) {
      setPasswordStrength("Weak");
    } else {
      setPasswordStrength("");
    }

    // Check if passwords match
    setPasswordMatch(formData.password === formData.confirmPassword);
  }, [formData.password, formData.confirmPassword]);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-red-900 flex items-center justify-center px-4 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xl w-full border border-white/20"
        >
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`w-1/4 h-2 mx-1 rounded-full ${
                    step >= stepNumber ? "bg-blue-600" : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <h2 className="text-2xl font-bold text-white">
              {step === 1 && "Personal Information"}
              {step === 2 && "Account Details"}
              {step === 3 && "Fund Information"}
              {step === 4 && "Complete Setup"}
            </h2>
            <p className="text-gray-200">
              {step === 1 && "Tell us about yourself"}
              {step === 2 && "Set up your savings account"}
              {step === 3 && "Set your deposit preferences"}
              {step === 4 && "Review and finalize"}
            </p>
          </div>

          {/* Step 1: Personal Information */}
          {/* FORM CONTENT – Animate each step */}
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
          >
            {step === 1 && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {["firstName", "lastName"].map((field, idx) => (
                    <div key={idx}>
                      <label className="block text-sm font-medium text-white">
                        {field === "firstName" ? "First Name" : "Last Name"}
                      </label>
                      <input
                        type="text"
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="mt-1 block w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-white">
                    Password
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-9 right-3 text-white cursor-pointer"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {passwordStrength && (
                    <p
                      className={`text-sm mt-1 ${
                        passwordStrength === "Strong"
                          ? "text-green-400"
                          : passwordStrength === "Moderate"
                          ? "text-yellow-400"
                          : "text-red-400"
                      }`}
                    >
                      Password Strength: {passwordStrength}
                    </p>
                  )}
                </div>

                <div className="relative mt-4">
                  <label className="block text-sm font-medium text-white">
                    Confirm Password
                  </label>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                  />
                  <span
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute top-9 right-3 text-white cursor-pointer"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                  {!passwordMatch && (
                    <p className="text-sm text-red-400 mt-1">
                      Passwords do not match.
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!passwordMatch}
                    className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2
    ${
      passwordMatch
        ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
        : "bg-gray-400 text-white cursor-not-allowed"
    }
  `}
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
                  <label className="block text-sm font-medium text-white">
                    Account Type
                  </label>
                  <select
                    name="accountType"
                    value={formData.accountType}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="savings">--Choose Saving Type--</option>
                    <option className="text-black" value="savings">
                      Standard Savings
                    </option>
                    <option className="text-black" value="highYield">
                      High-Yield Savings
                    </option>
                    <option className="text-black" value="fixedTerm">
                      Fixed Term
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Target Goal (optional)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-yellow-500 sm:text-sm ">
                        UGX&nbsp;
                      </span>
                    </div>
                    <input
                      type="number"
                      name="targetGoal"
                      value={formData.targetGoal}
                      onChange={handleChange}
                      className="mt-1 block w-full px-16 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Saving Purpose
                  </label>
                  <select
                    name="savingsPurpose"
                    value={formData.savingsPurpose}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select a purpose</option>
                    <option className="text-black" value="emergency">
                      Emergency Fund
                    </option>
                    <option className="text-black" value="retirement">
                      Retirement
                    </option>
                    <option className="text-black" value="house">
                      Home Purchase
                    </option>
                    <option className="text-black" value="education">
                      Education
                    </option>
                    <option className="text-black" value="vacation">
                      Vacation
                    </option>
                    <option className="text-black" value="other">
                      Other
                    </option>
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
                  <label className="block text-sm font-medium text-white">
                    Initial Deposit
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-yellow-500 sm:text-sm">UGX</span>
                    </div>
                    <input
                      type="number"
                      name="initialDeposit"
                      value={formData.initialDeposit}
                      onChange={handleChange}
                      className="mt-1 block w-full px-16 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    You can skip this step and set up deposits later from your
                    dashboard.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Recurring Deposit (optional)
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-yellow-500 sm:text-sm">UGX</span>
                    </div>
                    <input
                      type="number"
                      name="recurringDeposit"
                      value={formData.recurringDeposit}
                      onChange={handleChange}
                      className="mt-1 block w-full px-16 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      placeholder="0.00"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white">
                    Frequency
                  </label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">--Choose Period--</option>
                    <option className="text-black" value="weekly">
                      Weekly
                    </option>
                    <option className="text-black" value="biweekly">
                      Bi-weekly
                    </option>
                    <option className="text-black" value="monthly">
                      Monthly
                    </option>
                    <option className="text-black" value="quarterly">
                      Quarterly
                    </option>
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
                      className="ml-2 bg-transparent text-red-200 px-4 py-2 rounded-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
                    <div className="text-gray-900">
                      {formData.firstName} {formData.lastName}
                    </div>

                    <div className="text-gray-500">Email:</div>
                    <div className="text-gray-900">{formData.email}</div>

                    <div className="text-gray-500">Account Type:</div>
                    <div className="text-gray-900">
                      {formData.accountType === "savings" && "Standard Savings"}
                      {formData.accountType === "highYield" &&
                        "High-Yield Savings"}
                      {formData.accountType === "fixedTerm" && "Fixed Term"}
                    </div>

                    {formData.targetGoal && (
                      <>
                        <div className="text-gray-500">Target Goal:</div>
                        <div className="text-gray-900">
                          ${formData.targetGoal}
                        </div>
                      </>
                    )}

                    {formData.initialDeposit && (
                      <>
                        <div className="text-gray-500">Initial Deposit:</div>
                        <div className="text-gray-900">
                          ${formData.initialDeposit}
                        </div>
                      </>
                    )}

                    {formData.recurringDeposit && (
                      <>
                        <div className="text-gray-500">Recurring Deposit:</div>
                        <div className="text-gray-900">
                          ${formData.recurringDeposit} ({formData.frequency})
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex items-center mb-4 space-x-2">
                    <input
                      type="checkbox"
                      id="agree"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <label htmlFor="agree" className="text-sm text-white">
                      I agree to the{" "}
                      <button
                        type="button"
                        onClick={() => setIsTermsOpen(true)}
                        className="text-blue-300 underline hover:text-blue-400"
                      >
                        Terms and Conditions
                      </button>
                    </label>
                  </div>

                  <TermsModal
                    isOpen={isTermsOpen}
                    onClose={() => setIsTermsOpen(false)}
                  />
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
                    type="submit"
                    disabled={!agreed}
                    className={`px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2
          ${
            agreed
              ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500"
              : "bg-gray-400 text-white cursor-not-allowed"
          }
        `}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
