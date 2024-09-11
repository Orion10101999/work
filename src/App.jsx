import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const [amount1, setAmount1] = useState('');
  const [utr1, setUtr1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [utr2, setUtr2] = useState('');

  const handleCheckMatch = () => {
    // Check if all fields are filled
    if (!amount1 || !utr1 || !amount2 || !utr2) {
      toast.error('Please fill out all fields', {
        position: 'top-center',
        duration: 3000,
      });
      return;
    }

    // Check if amounts and UTRs match
    if (amount1 === amount2 && utr1 === utr2) {
      toast.success('Sahi hai', {
        position: 'top-center',
        duration: 3000,
      });
    } else {
      toast.error('Galat Hai', {
        position: 'top-center',
        duration: 3000,
      });
    }
  };

  return (
    <div className="p-2 flex justify-center flex-col items-center bg-slate-300 h-screen">
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2 text-green-700">First Set of Inputs</h2>
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
        <h2 className="text-xl font-semibold mb-2 text-red-700">Second Set of Inputs</h2>
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

      {/* Add Toaster here */}
      <Toaster />
    </div>
  );
}

export default App;
