import { Editor } from "@monaco-editor/react";

export function ContractPreview({ contract, loading }) {
  if (loading) {
    return (
      <div className="rounded-lg border bg-card p-4">
        Generating contract...
      </div>
    );
  }

  if (!contract) {
    return (
      <div className="rounded-lg border bg-card p-4">
        Enter a description and click generate to create a contract
      </div>
    );
  }

  return (
    <div className="rounded-lg border bg-card">
      <Editor
        height="400px"
        defaultLanguage="lisp"
        value={contract.code}
        theme="vs-dark"
        options={{
          readOnly: true,
          minimap: { enabled: false },
          fontSize: 14,
        }}
      />
    </div>
  );
} 