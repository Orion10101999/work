import React, { useState } from 'react';
import './App.css'; // Ensure you have your tailwind imports here

function App() {
  const [amount1, setAmount1] = useState('');
  const [utr1, setUtr1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [utr2, setUtr2] = useState('');

  const handleCheckMatch = () => {
    if (amount1 === amount2 && utr1 === utr2) {
      alert('true');
    } else {
      alert('false');
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Input Match Checker</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">First Set of Inputs</h2>
        <div className="mb-4">
          <label htmlFor="amount1" className="block text-lg">Amount:</label>
          <input
            type="text"
            id="amount1"
            value={amount1}
            onChange={(e) => setAmount1(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="utr1" className="block text-lg">UTR Number:</label>
          <input
            type="text"
            id="utr1"
            value={utr1}
            onChange={(e) => setUtr1(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Second Set of Inputs</h2>
        <div className="mb-4">
          <label htmlFor="amount2" className="block text-lg">Amount:</label>
          <input
            type="text"
            id="amount2"
            value={amount2}
            onChange={(e) => setAmount2(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="utr2" className="block text-lg">UTR Number:</label>
          <input
            type="text"
            id="utr2"
            value={utr2}
            onChange={(e) => setUtr2(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
      </div>

      <button
        onClick={handleCheckMatch}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Check Match
      </button>
    </div>
  );
}

export default App;
