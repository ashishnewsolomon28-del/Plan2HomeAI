import MainLayout from "../layouts/MainLayout";
import { useNavigate, useParams } from "react-router-dom";

export default function ProjectWorkspace() {
  const navigate = useNavigate();
const { id } = useParams();

  return (
    <MainLayout>
      <h1 className="text-4xl font-bold text-gray-800">
        🏠 Project Workspace
      </h1>

      <p className="text-gray-500 mt-2">
        Project ID: {id}
      </p>

      <div className="mt-10 bg-white rounded-2xl shadow p-8">
        <h2 className="text-2xl font-semibold">
          Ready to import your floor plan
        </h2>

        <p className="text-gray-500 mt-2">
          This project is waiting for its first floor plan.
        </p>

       <button
  onClick={() => navigate(`/project/${id}/import`)}
  className="mt-8 bg-[#2F80ED] hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
>
  Import Floor Plan
</button>
      </div>
    </MainLayout>
  );
}