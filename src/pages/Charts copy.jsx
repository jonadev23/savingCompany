import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function InvestmentSimulator() {
  const [firstDeposit, setFirstDeposit] = useState(1000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(500);
  const [data, setData] = useState([]);

  const simulate = () => {
    const newData = [];
    let deposits = firstDeposit;
    let value = firstDeposit;
    const yearlyRate = 0.05;

    for (let year = 0; year <= 30; year++) {
      if (year > 0) {
        deposits += monthlyDeposit * 12;
        value = (value + monthlyDeposit * 12) * (1 + yearlyRate);
      }

      newData.push({
        year,
        deposits: Math.round(deposits),
        value: Math.round(value),
      });
    }

    setData(newData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block font-semibold mb-2">
            First Deposit: ${firstDeposit}
          </label>
          <input
            type="range"
            min="0"
            max="100000"
            step="1000"
            value={firstDeposit}
            onChange={(e) => setFirstDeposit(Number(e.target.value))}
            className="w-full"
          />
        </div>
        <div>
          <label className="block font-semibold mb-2">
            Monthly Deposit: ${monthlyDeposit}
          </label>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={monthlyDeposit}
            onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <button
        onClick={simulate}
        className="bg-teal-600 text-white font-semibold px-6 py-2 rounded hover:bg-teal-700 transition"
      >
        Simulate
      </button>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis
            tickFormatter={(value) =>
              value >= 1_000_000_000
                ? `${value / 1_000_000_000}B`
                : value >= 1_000_000
                ? `${value / 1_000_000}M`
                : value
            }
          />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Line
            type="monotone"
            dataKey="deposits"
            stroke="red"
            strokeWidth={2}
            name="Total Deposits"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="blue"
            strokeWidth={3}
            name="Most Likely Value"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
