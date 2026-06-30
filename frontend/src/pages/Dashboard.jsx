function Dashboard() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FAF7F2",
        padding: "40px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
 <h1
  style={{
    color: "#2D3238",
    fontSize: "42px",
  }}
>
    🏡 Plan2Home AI
</h1>
      <p
        style={{
          color: "#666",
          fontSize: "20px",
          marginBottom: "40px",
        }}
      >
        Upload your floor plan. Let AI bring it to life.
      </p>

      <button
        style={{
          background: "#2F80ED",
          color: "white",
          border: "none",
          padding: "16px 30px",
          borderRadius: "12px",
          fontSize: "18px",
          cursor: "pointer",
        }}
      >
        + Create New Project
      </button>

      <div
        style={{
          marginTop: "50px",
          background: "white",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h2>Upload Floor Plan</h2>

        <div
          style={{
            marginTop: "20px",
            border: "2px dashed #2F80ED",
            borderRadius: "20px",
            padding: "60px",
            textAlign: "center",
            color: "#666",
          }}
        >
          📄 Drag & Drop PDF Here
          <br />
          <br />
          or click to browse
        </div>
      </div>
    </div>
  );
}

export default Dashboard;