import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Wallet,
  TrendingUp,
  PiggyBank,
  Clock,
  Plus,
  ArrowRight,
} from "lucide-react";

export default function Dashboard() {
  const [userData, setUserData] = useState({
    balance: 0,
    interestRate: 0,
    targetGoal: 0,
    savingsPurpose: '',
    recurringDeposit: null,
    lastDeposit: null,
    nextInterestPayment: null
  });
  const [loading, setLoading] = useState(true);
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");

  // Generate compound interest projection
  const generateProjectionData = (initialBalance, annualRate, months) => {
    const monthlyRate = annualRate / 100 / 12;
    const projection = [];
    let balance = initialBalance;

    for (let i = 0; i < months; i++) {
      balance = balance * (1 + monthlyRate);
      projection.push({
        month: `Month ${i + 1}`,
        balance: parseFloat(balance.toFixed(2)),
      });
    }
    return projection;
  };

  // Calculate projection data
  const projectionData = userData.balance > 0 
    ? generateProjectionData(
        userData.balance,
        userData.interestRate,
        12
      )
    : [];

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/dashboard", {
          method: "GET",
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Fetched user data:", data);
          
          setUserData({
            ...data,
            balance: data.balance || 0,
            interestRate: data.interestRate || 0,
            targetGoal: data.target_goal || 0
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserData();
  }, []);

  const handleDeposit = async (e) => {
    e.preventDefault();
    if (!depositAmount || isNaN(depositAmount)) return;

    try {
      const response = await fetch("/api/deposit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseFloat(depositAmount) }),
        credentials: "include"
      });

      if (response.ok) {
        const updatedData = await response.json();
        setUserData(prev => ({
          ...prev,
          balance: updatedData.newBalance,
          lastDeposit: updatedData.lastDeposit
        }));
        setDepositModalOpen(false);
        setDepositAmount("");
      }
    } catch (error) {
      console.error("Deposit error:", error);
    }
  };

  // Calculate goal progress safely
  const goalProgress = userData.targetGoal > 0 
    ? Math.min((userData.balance / userData.targetGoal) * 100, 100)
    : 0;

  const formatCurrency = (amount) => 
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
      .format(amount || 0);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Account Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Current Balance Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Wallet className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-medium ml-2">Current Balance</h3>
              </div>
              <p className="text-3xl font-bold">
                {formatCurrency(userData.balance)}
              </p>
              {userData.lastDeposit && (
                <p className="text-sm text-gray-500 mt-2">
                  Last deposit: {formatCurrency(userData.lastDeposit.amount)} on{" "}
                  {new Date(userData.lastDeposit.date).toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Interest Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-medium ml-2">Interest Rate</h3>
              </div>
              <p className="text-3xl font-bold">
                {userData.interestRate}% APR
              </p>
              {userData.nextInterestPayment && (
                <p className="text-sm text-gray-500 mt-2">
                  Next payment:{" "}
                  {new Date(userData.nextInterestPayment).toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Savings Goal Card */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <PiggyBank className="h-6 w-6 text-purple-600" />
                <h3 className="text-lg font-medium ml-2">Savings Goal</h3>
              </div>
              <div className="flex justify-between mb-2">
                <p>{formatCurrency(userData.balance)} of {formatCurrency(userData.targetGoal)}</p>
                <p>{goalProgress.toFixed(1)}%</p>
              </div>
              <div className="progress-bar">
                <div style={{ width: `${goalProgress}%` }}></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                {userData.savingsPurpose || "General savings"}
              </p>
            </div>
          </div>
        </div>

        {/* Growth Projection */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow lg:col-span-2">
            <h3 className="text-lg font-medium mb-4">12-Month Projection</h3>
            <div className="h-64">
              {projectionData.length > 0 ? (
                <ResponsiveContainer>
                  <LineChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => formatCurrency(value)} />
                    <Line
                      type="monotone"
                      dataKey="balance"
                      stroke="#3b82f6"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="text-gray-500 text-center py-8">
                  No projection data available
                </div>
              )}
            </div>
            {projectionData.length > 0 && (
              <p className="text-sm text-gray-500 mt-4">
                Projected balance:{" "}
                {formatCurrency(projectionData[projectionData.length - 1].balance)}
              </p>
            )}
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-4">Quick Actions</h3>
            <button
              onClick={() => setDepositModalOpen(true)}
              className="deposit-button"
            >
              <Plus className="h-5 w-5" />
              Make Deposit
            </button>

            {userData.recurringDeposit ? (
              <div className="recurring-deposit">
                <Clock className="h-5 w-5" />
                <div>
                  <p>{formatCurrency(userData.recurringDeposit.amount)}</p>
                  <p>{userData.recurringDeposit.frequency}</p>
                </div>
              </div>
            ) : (
              <div className="setup-recurring">
                <Clock className="h-5 w-5" />
                <p>Set up recurring deposits</p>
              </div>
            )}
          </div>
        </div>

        {/* Deposit Modal */}
        {depositModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Make Deposit</h3>
              <form onSubmit={handleDeposit}>
                <input
                  type="number"
                  step="0.01"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                  placeholder="0.00"
                  required
                />
                <div className="modal-actions">
                  <button type="button" onClick={() => setDepositModalOpen(false)}>
                    Cancel
                  </button>
                  <button type="submit">Deposit</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}