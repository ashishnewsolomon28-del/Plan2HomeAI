import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { getProjects } from "../services/projectService";
export default function Dashboard() {
      const navigate = useNavigate();
const [projects, setProjects] = useState([]);

useEffect(() => {
  setProjects(getProjects());
}, []);
  return (
    <MainLayout>

      <h1 className="text-4xl font-bold text-gray-800">
        Welcome back 👋
      </h1>

      <p className="text-gray-500 mt-2 mb-10">
        Ready to build your dream home?
      </p>

      <button
  onClick={() => navigate("/new-project")}
  className="bg-[#2F80ED] hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold"
>
  + Create New Project
</button>
<div className="mt-12">
  <h2 className="text-2xl font-bold text-gray-800 mb-6">
    My Projects
  </h2>

  {projects.length === 0 ? (
    <div className="bg-white rounded-2xl p-8 shadow">
      No projects yet.
    </div>
  ) : (
    <div className="grid gap-5">
      {projects.map((project) => (
        <div
  key={project.id}
  onClick={() => navigate(`/project/${project.id}`)}
  className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition cursor-pointer"
>
          <h3 className="text-xl font-semibold">
            🏠 {project.name}
          </h3>

          <p className="text-gray-500 mt-2">
            {project.status}
          </p>

          <p className="text-sm text-gray-400 mt-4">
            Created: {project.created}
          </p>
        </div>
      ))}
    </div>
  )}
</div>
    </MainLayout>
  );
}