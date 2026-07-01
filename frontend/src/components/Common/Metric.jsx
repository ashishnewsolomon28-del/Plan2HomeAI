export default function Metric({ label, value }) {
  return (
    <div className="flex justify-between py-2 border-b last:border-b-0">
      <span className="text-gray-600">
        {label}
      </span>

      <span className="font-semibold text-gray-800">
        {value}
      </span>
    </div>
  );
}