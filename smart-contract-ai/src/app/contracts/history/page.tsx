"use client";

import { useEffect, useState } from "react";
import { ContractHistoryItem } from "@/components/contracts/ContractHistoryItem";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await fetch("/api/history");
      const data = await response.json();
      setHistory(data);
    } catch (error) {
      console.error("Error fetching history:", error);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="p-6">Loading history...</div>;
  }

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Contract History</h1>
      <div className="space-y-4">
        {history.map((item) => (
          <ContractHistoryItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
} 