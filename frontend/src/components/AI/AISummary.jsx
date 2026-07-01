export default function AISummary({ data }) {
  if (!data) return null;

  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "16px",
        marginTop: "30px",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <h2>✅ AI Analysis Complete</h2>

      <h3>{data.projectName}</h3>

      <table style={{ width: "100%", marginTop: "20px" }}>
        <tbody>

          <tr>
            <td>Bedrooms</td>
            <td>{data.rooms.bedrooms}</td>
          </tr>

          <tr>
            <td>Bathrooms</td>
            <td>{data.rooms.bathrooms}</td>
          </tr>

          <tr>
            <td>Kitchen</td>
            <td>{data.rooms.kitchen}</td>
          </tr>

          <tr>
            <td>Living Room</td>
            <td>{data.rooms.livingRoom}</td>
          </tr>

          <tr>
            <td>Dining Room</td>
            <td>{data.rooms.diningRoom}</td>
          </tr>

          <tr>
            <td>Built-up Area</td>
            <td>
              {data.area.builtUp} {data.area.unit}
            </td>
          </tr>

          <tr>
            <td>AI Confidence</td>
            <td>{data.confidence}%</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}