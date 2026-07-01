export default function AIProgress({ progress, stage }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        marginTop: "30px",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <h2>🤖 AI Analysis Running</h2>

      <p>{stage}</p>

      <div
        style={{
          width: "100%",
          height: "18px",
          background: "#e5e7eb",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "#2563eb",
            transition: "0.4s",
          }}
        />
      </div>

      <p style={{ marginTop: "15px" }}>
        {progress}% Complete
      </p>
    </div>
  );
}