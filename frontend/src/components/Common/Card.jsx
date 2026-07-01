export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      {title && (
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          {title}
        </h2>
      )}

      {children}
    </div>
  );
}