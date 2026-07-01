export default function RoomSummaryCard({ data }) {
  if (!data) return null;

  return (
    <div
      style={{
        background: "#fff",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,.08)",
        marginBottom: "20px",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>
        🏠 Room Summary
      </h2>

      <table style={{ width: "100%" }}>
        <tbody>

          <tr>
            <td>Bedrooms</td>
            <td><strong>{data.rooms.bedrooms}</strong></td>
          </tr>

          <tr>
            <td>Bathrooms</td>
            <td><strong>{data.rooms.bathrooms}</strong></td>
          </tr>

          <tr>
            <td>Kitchen</td>
            <td><strong>{data.rooms.kitchen}</strong></td>
          </tr>

          <tr>
            <td>Living Room</td>
            <td><strong>{data.rooms.livingRoom}</strong></td>
          </tr>

          <tr>
            <td>Dining Room</td>
            <td><strong>{data.rooms.diningRoom}</strong></td>
          </tr>

          <tr>
            <td>Built-up Area</td>
            <td>
              <strong>
                {data.area.builtUp} {data.area.unit}
              </strong>
            </td>
          </tr>

        </tbody>
      </table>

    </div>
  );
}