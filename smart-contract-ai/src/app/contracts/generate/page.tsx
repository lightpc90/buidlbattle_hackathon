"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ContractPreview } from "@/components/contracts/ContractPreview";

export default function GeneratePage() {
  const [prompt, setPrompt] = useState("");
  const [generatedContract, setGeneratedContract] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateContract = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      setGeneratedContract(data);
    } catch (error) {
      console.error("Error generating contract:", error);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Generate Smart Contract</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <Textarea
            placeholder="Describe the smart contract you want to create..."
            className="min-h-[200px]"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button 
            onClick={generateContract} 
            disabled={!prompt || loading}
            className="w-full"
          >
            {loading ? "Generating..." : "Generate Contract"}
          </Button>
        </div>
        <ContractPreview contract={generatedContract} loading={loading} />
      </div>
    </div>
  );
} 