import { useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  Legend,
} from "recharts";

export default function InvestmentSimulator() {
  const [firstDeposit, setFirstDeposit] = useState(10000);
  const [monthlyDeposit, setMonthlyDeposit] = useState(10000);
  const [data, setData] = useState([]);

  const simulate = () => {
    const newData = [];
    let deposits = firstDeposit;
    let valMost = firstDeposit;
    let valBest = firstDeposit;
    let valWorst = firstDeposit;

    for (let year = 2025; year <= 2080; year++) {
      if (year > 0) {
        deposits += monthlyDeposit * 12;
        valMost = (valMost + monthlyDeposit * 12) * 1.05; // 5%
        valBest = (valBest + monthlyDeposit * 12) * 1.08; // 8%
        valWorst = (valWorst + monthlyDeposit * 12) * 1.02; // 2%
      }

      newData.push({
        year,
        deposits: Math.round(deposits),
        valueMost: Math.round(valMost),
        valueBest: Math.round(valBest),
        valueWorst: Math.round(valWorst),
      });
    }

    setData(newData);
  };

  return (
    <div className=" bg-[#0D1016] flex text-white mx-[8%]">
      <div className="w-1/2 ">
        <div className="bg-teal-400 px-[6%] py-[12%] h-[50%] p-[2%] text-black">
          <div className="grid gap-6">
            <div>
              <label className="font-semibold flex justify-between  mb-1">
                <span>First Deposit:</span> <span>UGX{firstDeposit}</span>
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
              <label className="font-semibold flex justify-between  mb-1">
                <span>Monthly Deposit:</span> <span>UGX{monthlyDeposit} </span>
              </label>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={monthlyDeposit}
                onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-end">
            {" "}
            <button
              onClick={simulate}
              className="bg-black  text-white px-5 py-2 my-6 text-xs uppercase rounded-4xl font-semibold hover:bg-blue-700"
            >
              Simulate
            </button>
          </div>
        </div>
        <div className=" bg-[#0D1016] px-[6%] py-[12%] h-[50%] p-[2%] text-white">
          {data.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-white">
              <div className="flex items-center space-x-2">
                <span>
                  <h1 className="uppercase font-medium text-xs text-gray-500">
                    Total Deposits
                  </h1>
                  <p className="font-semibold text-lg">
                    UGX&nbsp;{data[data.length - 1].deposits.toLocaleString()}
                  </p>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <h1 className="uppercase font-medium text-xs text-gray-500">
                    Most Likely
                  </h1>
                  <p className="font-semibold text-lg">
                    UGX&nbsp;
                    {data[data.length - 1].valueMost.toLocaleString()}{" "}
                  </p>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <h1 className="uppercase font-medium text-xs text-gray-500">
                    Best Case (8%){" "}
                  </h1>
                  <p className="font-semibold text-lg">
                    UGX&nbsp;
                    {data[data.length - 1].valueBest.toLocaleString()}
                  </p>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <h1 className="uppercase font-medium text-xs text-gray-500">
                    Worst Case{" "}
                  </h1>
                  <p className="font-semibold text-lg">
                    UGX&nbsp;
                    {data[data.length - 1].valueWorst.toLocaleString()}
                  </p>
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="w-1/2 py-[10%] px-[1%]">
        <ResponsiveContainer width="100%" height={420}>
          <LineChart data={data}>
            <defs>
              <linearGradient id="scenarioGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#fff176" stopOpacity={0.6} />
                <stop offset="100%" stopColor="#fff176" stopOpacity={0.2} />
              </linearGradient>
            </defs>

            <XAxis tick={{ fill: "#ffffff", fontSize: 12 }} dataKey="year" />
            <YAxis
              tick={{ fill: "#ffffff", fontSize: 12 }}
              tickFormatter={(v) =>
                v >= 1_000_000_000
                  ? `${v / 1_000_000_000}B`
                  : v >= 1_000_000
                  ? `${v / 1_000_000}M`
                  : v
              }
            />
            <Tooltip
              formatter={(v) => `UGX${v.toLocaleString()}`}
              cursor={{ stroke: "#ccc", strokeWidth: 1 }}
            />

            {/* Area between valueBest and valueWorst */}
            {
              // Render a separate Area with custom baseline logic
              data.map((entry, index) => (
                <Area
                  key={index}
                  type="monotone"
                  dataKey="valueBest"
                  data={[entry]}
                  baseLine={entry.valueWorst}
                  fill="url(#scenarioGradient)"
                  stroke={null}
                  dot={false}
                  activeDot={false}
                  isAnimationActive={false}
                />
              ))
            }

            {/* Main Lines */}
            <Line
              type="monotone"
              dataKey="deposits"
              stroke="purple"
              strokeWidth={2}
              dot={false}
              activeDot={false}
              name="Total Deposits"
            />
            <Line
              type="monotone"
              dataKey="valueWorst"
              stroke="orange"
              strokeDasharray="5 5"
              dot={false}
              activeDot={false}
              name="Worst Case (2%)"
            />
            <Line
              type="monotone"
              dataKey="valueMost"
              stroke="#facc15"
              strokeWidth={2}
              dot={false}
              activeDot={false}
              name="Most Likely (5%)"
            />
            <Line
              type="monotone"
              dataKey="valueBest"
              stroke="blue"
              strokeDasharray="5 5"
              dot={false}
              activeDot={false}
              name="Best Case (8%)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
