import React, { useState } from "react";

export default function BudgetCalculator() {
  const [days, setDays] = useState("");
  const [budget, setBudget] = useState("");
  const [result, setResult] = useState("");
  const [warning, setWarning] = useState("");

  const handleCalculate = () => {
    const tripDays = parseInt(days);
    const totalBudget = parseInt(budget);

    // Reset warnings
    setWarning("");
    setResult("");

    // Validate inputs
    if (!tripDays || !totalBudget) {
      setWarning("⚠️ Please enter valid numbers for both fields.");
      return;
    }
    if (tripDays <= 0 || tripDays > 60) {
      setWarning("⚠️ Trip days should be between 1 and 60.");
      return;
    }
    if (totalBudget < 100) {
      setWarning("⚠️ Budget is too low. Minimum should be at least ₹100.");
      return;
    }
    if (totalBudget > 400000) {
      setWarning("⚠️ Budget limit exceeded. Please keep under ₹4,00,000.");
      return;
    }

    // Suggest if budget is very low per day
    const perDay = totalBudget / tripDays;
    if (perDay < 500) {
      setWarning(
        `⚠️ Your daily budget (₹${perDay.toFixed(
          2
        )}) seems too low. Consider increasing your total budget.`
      );
    }

    // Final result
    setResult(
      `✅ Total Budget: ₹${totalBudget}\n📅 Trip Duration: ${tripDays} days\n💰 Daily Budget: ₹${perDay.toFixed(
        2
      )}`
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
      <div className="bg-black/60 p-6 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">💸 Budget Calculator</h2>

        <label className="block mb-2">Number of Days:</label>
        <input
          type="number"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full p-2 rounded text-black mb-4"
          placeholder="Enter trip days (max 60)"
        />

        <label className="block mb-2">Total Budget (₹):</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          className="w-full p-2 rounded text-black mb-4"
          placeholder="Enter budget amount (₹100 - ₹4,00,000)"
        />

        <button
          onClick={handleCalculate}
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded font-bold"
        >
          Calculate
        </button>

        {warning && (
          <div className="mt-4 text-yellow-400 font-semibold whitespace-pre-line">
            {warning}
          </div>
        )}

        {result && (
          <div className="mt-4 text-green-300 whitespace-pre-line">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
