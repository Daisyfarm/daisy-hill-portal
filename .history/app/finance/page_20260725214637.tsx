import React from 'react';

export default function FinanceDashboard() {
  return (
    <div className="p-6 space-y-6 bg-gray-900 min-h-screen text-white">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Finance Dashboard</h1>
        <p className="text-gray-400">Overview of your financial performance and transactions.</p>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <p className="text-sm font-medium text-gray-400">Total Revenue</p>
          <p className="text-2xl font-bold mt-2 text-emerald-400">$45,231.89</p>
          <span className="text-xs text-emerald-500 mt-1 inline-block">+20.1% from last month</span>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <p className="text-sm font-medium text-gray-400">Expenses</p>
          <p className="text-2xl font-bold mt-2 text-rose-400">$12,450.00</p>
          <span className="text-xs text-rose-500 mt-1 inline-block">+4.5% from last month</span>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
          <p className="text-sm font-medium text-gray-400">Net Profit</p>
          <p className="text-2xl font-bold mt-2 text-blue-400">$32,781.89</p>
          <span className="text-xs text-blue-500 mt-1 inline-block">+12.3% from last month</span>
        </div>
      </div>

      {/* Recent Transactions Table Section */}
      <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Recent Transactions</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-750 text-gray-400 text-sm border-b border-gray-700">
                <th className="p-4">Description</th>
                <th className="p-4">Category</th>
                <th className="p-4">Date</th>
                <th className="p-4 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700 text-sm">
              <tr>
                <td className="p-4 font-medium">Client Payment #1042</td>
                <td className="p-4 text-gray-400">Income</td>
                <td className="p-4 text-gray-400">July 25, 2026</td>
                <td className="p-4 text-right text-emerald-400">+$1,250.00</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Cloud Server Hosting</td>
                <td className="p-4 text-gray-400">Infrastructure</td>
                <td className="p-4 text-gray-400">July 24, 2026</td>
                <td className="p-4 text-right text-rose-400">-$140.00</td>
              </tr>
              <tr>
                <td className="p-4 font-medium">Software License Subscription</td>
                <td className="p-4 text-gray-400">Tools</td>
                <td className="p-4 text-gray-400">July 22, 2026</td>
                <td className="p-4 text-right text-rose-400">-$45.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}