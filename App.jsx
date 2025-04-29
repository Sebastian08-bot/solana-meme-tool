// App til at analysere nye Solana meme coins

import { useState } from "react";

export default function App() {
  const [tokenAddress, setTokenAddress] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!tokenAddress) return;
    setLoading(true);

    // Dummy analyse-data – skal udskiftes med API-kald senere
    setTimeout(() => {
      setAnalysis({
        rugRisk: "Low",
        devHolding: "2.3%",
        holders: 1832,
        liquidity: "$23.1K",
        score: 91,
      });
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Solana Meme Coin Analyzer</h1>

      <input
        type="text"
        placeholder="Indsæt token address..."
        value={tokenAddress}
        onChange={(e) => setTokenAddress(e.target.value)}
        className="w-full max-w-md p-2 text-black mb-4 rounded"
      />

      <button
        onClick={handleAnalyze}
        className="bg-green-500 text-black px-4 py-2 rounded"
      >
        Analyser
      </button>

      {loading && <p className="mt-4">Analyserer token...</p>}

      {analysis && (
        <div className="mt-6 bg-gray-800 p-4 rounded">
          <p><strong>Rug Risk:</strong> {analysis.rugRisk}</p>
          <p><strong>Dev Holding:</strong> {analysis.devHolding}</p>
          <p><strong>Holders:</strong> {analysis.holders}</p>
          <p><strong>Liquidity:</strong> {analysis.liquidity}</p>
          <p><strong>Score:</strong> {analysis.score}/100</p>
        </div>
      )}
    </div>
  );
}
