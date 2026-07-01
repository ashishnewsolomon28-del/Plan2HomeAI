import RoomSummaryCard from "./RoomSummaryCard";
import VastuCard from "./VastuCard";
export default function AISummary({ data }) {
  if (!data) return null;

  return (
  <div style={{ marginTop: "30px" }}>

    <h1
      style={{
        marginBottom: "25px",
      }}
    >
      AI Analysis Report
    </h1>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >

      <RoomSummaryCard
        data={data}
      />

      <VastuCard
        data={data}
      />

    </div>

  </div>
);
}