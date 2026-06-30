import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { saveProject } from "../services/projectService";

export default function NewProject() {
    const navigate = useNavigate();
  const [projectName, setProjectName] = useState("");
  function handleNext() {
  saveProject({
    name: projectName,
  });

  navigate("/");
}

  return (
    <MainLayout>
      <div className="max-w-3xl mx-auto">

        {/* Progress */}
        <p className="text-blue-600 font-semibold mb-2">
          Step 1 of 7
        </p>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-10">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: "14%" }}
          ></div>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg p-10">

          <h1 className="text-4xl font-bold text-gray-800">
            👋 Welcome
          </h1>

          <p className="text-gray-500 mt-3 mb-8">
            Let's create your dream home project.
          </p>

          <label className="block text-lg font-semibold mb-3">
            Project Name
          </label>

          <input
            type="text"
            placeholder="Example: Ashish Residence"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="w-full border rounded-xl p-4 text-lg"
          />

          <div className="mt-10 flex justify-end">

            <button
  onClick={handleNext}
  disabled={!projectName}
              className={`px-8 py-4 rounded-xl font-semibold text-white transition ${
                projectName
                  ? "bg-[#2F80ED] hover:bg-blue-700"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Next →
            </button>

          </div>

        </div>

      </div>
    </MainLayout>
  );
}