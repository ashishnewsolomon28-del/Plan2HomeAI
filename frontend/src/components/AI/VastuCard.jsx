import Card from "../Common/Card";

export default function VastuCard({ data }) {
  if (!data) return null;

  const score = data.vastu.score;

  return (
    <Card title="🧭 Vastu Score">

      <div
        style={{
          textAlign: "center",
          marginBottom: "20px",
        }}
      >

        <h1
          style={{
            fontSize: "48px",
            color: "#2563eb",
            margin: 0,
          }}
        >
          {score}
        </h1>

        <p
          style={{
            color: "#6b7280",
            marginTop: "5px",
          }}
        >
          out of 100
        </p>

      </div>

      {data.vastu.recommendations.map((item, index) => (

        <div
          key={index}
          style={{
            padding: "10px 0",
            borderTop: "1px solid #eee",
          }}
        >

          ✅ {item}

        </div>

      ))}

    </Card>
  );
}