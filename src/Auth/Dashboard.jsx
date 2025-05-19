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
  Menu,
  X,
  Plus,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [userData, setUserData] = useState({
    balance: 0,
    interestRate: 0,
    targetGoal: 0,
    savingsPurpose: "",
    recurringDeposit: null,
    lastDeposit: null,
    nextInterestPayment: null,
  });
  const [loading, setLoading] = useState(true);
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
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

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  // Calculate projection data
  const projectionData =
    userData.balance > 0
      ? generateProjectionData(userData.balance, userData.interestRate, 12)
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
            targetGoal: data.target_goal || 0,
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
        credentials: "include",
      });

      if (response.ok) {
        const updatedData = await response.json();
        setUserData((prev) => ({
          ...prev,
          balance: updatedData.newBalance,
          lastDeposit: updatedData.lastDeposit,
        }));
        setDepositModalOpen(false);
        setDepositAmount("");
      }
    } catch (error) {
      console.error("Deposit error:", error);
    }
  };

  // Calculate goal progress safely
  const goalProgress =
    userData.targetGoal > 0
      ? Math.min((userData.balance / userData.targetGoal) * 100, 100)
      : 0;

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount || 0);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden fixed top-4 right-4 p-2 z-50 bg-white rounded-lg shadow-sm"
      >
        {isSidebarOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-200 ease-in-out z-40`}
      >
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold text-gray-800">Savings App</h2>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Wallet className="h-5 w-5" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/transactions"
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Transactions
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-3 p-3 text-gray-700 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                Log Out
              </button>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="md:ml-64 p-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6">
            Account Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Current Balance Card */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <Wallet className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                <h3 className="text-base sm:text-lg font-medium ml-2">
                  Current Balance
                </h3>
              </div>
              <p className="text-2xl sm:text-3xl font-bold mb-2">
                {formatCurrency(userData.balance)}
              </p>
              {userData.lastDeposit && (
                <p className="text-xs sm:text-sm text-gray-500">
                  Last deposit: {formatCurrency(userData.lastDeposit.amount)} on{" "}
                  {new Date(userData.lastDeposit.date).toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Interest Card */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                <h3 className="text-base sm:text-lg font-medium ml-2">
                  Interest Rate
                </h3>
              </div>
              <p className="text-2xl sm:text-3xl font-bold mb-2">
                {userData.interestRate}% APR
              </p>
              {userData.nextInterestPayment && (
                <p className="text-xs sm:text-sm text-gray-500">
                  Next payment:{" "}
                  {new Date(userData.nextInterestPayment).toLocaleDateString()}
                </p>
              )}
            </div>

            {/* Savings Goal Card */}
            <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <PiggyBank className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                <h3 className="text-base sm:text-lg font-medium ml-2">
                  Savings Goal
                </h3>
              </div>
              <div className="flex justify-between mb-2 text-sm sm:text-base">
                <span>{formatCurrency(userData.balance)}</span>
                <span>{formatCurrency(userData.targetGoal)}</span>
              </div>
              <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                <div
                  className="absolute h-full bg-purple-600 transition-all duration-500"
                  style={{ width: `${goalProgress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span>{goalProgress.toFixed(1)}% Completed</span>
                <span>{userData.savingsPurpose || "General savings"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Growth Projection */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-medium mb-4">
              12-Month Projection
            </h3>
            <div className="h-64 sm:h-80">
              {projectionData.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projectionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="month"
                      tick={{ fontSize: 12 }}
                      interval="preserveStartEnd"
                    />
                    <YAxis
                      width={80}
                      tickFormatter={(value) => `$${value / 1000}k`}
                      tick={{ fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                      }}
                      formatter={(value) => formatCurrency(value)}
                    />
                    <Line
                      type="monotone"
                      dataKey="balance"
                      stroke="#3b82f6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  No projection data available
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-medium mb-4">
              Quick Actions
            </h3>
            <div className="space-y-4">
              <button
                onClick={() => setDepositModalOpen(true)}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors"
              >
                <Plus className="h-5 w-5" />
                Make Deposit
              </button>

              {userData.recurringDeposit ? (
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Clock className="h-6 w-6 text-gray-600" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">
                      {formatCurrency(userData.recurringDeposit.amount)}
                    </p>
                    <p className="text-sm text-gray-500 capitalize">
                      {userData.recurringDeposit.frequency}
                    </p>
                  </div>
                </div>
              ) : (
                <button className="w-full flex items-center gap-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                  <Clock className="h-6 w-6 text-gray-600" />
                  <span className="text-gray-700">
                    Set up recurring deposits
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Deposit Modal */}
        {depositModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6 sm:p-8">
              <h3 className="text-xl font-semibold mb-6">Make Deposit</h3>
              <form onSubmit={handleDeposit}>
                <div className="mb-6">
                  <input
                    type="number"
                    step="0.01"
                    value={depositAmount}
                    onChange={(e) => setDepositAmount(e.target.value)}
                    placeholder="0.00"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div className="flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => setDepositModalOpen(false)}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Deposit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
