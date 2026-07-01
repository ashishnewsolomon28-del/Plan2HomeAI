export default function AnalyzeButton({ onAnalyze, disabled }) {
  return (
    <button
      onClick={onAnalyze}
      disabled={disabled}
      style={{
        background: disabled ? "#94a3b8" : "#2563eb",
        color: "#fff",
        border: "none",
        padding: "16px 34px",
        borderRadius: "12px",
        fontSize: "18px",
        fontWeight: "600",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "0.25s",
        marginTop: "20px",
      }}
    >
      🤖 Analyze with AI
    </button>
  );
}