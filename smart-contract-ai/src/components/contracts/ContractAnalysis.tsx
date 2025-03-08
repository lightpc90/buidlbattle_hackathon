export function ContractAnalysis({ analysis, loading }) {
  if (loading) {
    return (
      <div className="rounded-lg border bg-card p-4">
        Analyzing contract...
      </div>
    );
  }

  if (!analysis) {
    return (
      <div className="rounded-lg border bg-card p-4">
        Enter a contract and click analyze to see the results
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card p-4 space-y-4">
      <div>
        <h3 className="font-semibold">Contract Overview</h3>
        <p className="text-sm text-muted-foreground">{analysis.overview}</p>
      </div>
      <div>
        <h3 className="font-semibold">Security Analysis</h3>
        <ul className="list-disc list-inside text-sm text-muted-foreground">
          {analysis.security.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
} 