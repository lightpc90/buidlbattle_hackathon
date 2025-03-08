"use client";

import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import { ContractAnalysis } from "@/components/contracts/ContractAnalysis";

export default function AnalyzePage() {
  const [contract, setContract] = useState("");
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeContract = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contract }),
      });
      const data = await response.json();
      setAnalysis(data);
    } catch (error) {
      console.error("Error analyzing contract:", error);
    }
    setLoading(false);
  };

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">Analyze Smart Contract</h1>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-lg border bg-card">
            <Editor
              height="400px"
              defaultLanguage="lisp"
              value={contract}
              onChange={(value) => setContract(value || "")}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          </div>
          <Button 
            onClick={analyzeContract} 
            disabled={!contract || loading}
            className="w-full"
          >
            {loading ? "Analyzing..." : "Analyze Contract"}
          </Button>
        </div>
        <ContractAnalysis analysis={analysis} loading={loading} />
      </div>
    </div>
  );
} 