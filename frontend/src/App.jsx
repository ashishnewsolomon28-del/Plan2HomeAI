import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import NewProject from "./pages/NewProject";
import ProjectWorkspace from "./pages/ProjectWorkspace";
import ImportFloorPlan from "./pages/ImportFloorPlan";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new-project" element={<NewProject />} />
      <Route path="/project/:id" element={<ProjectWorkspace />} />
      <Route path="/project/:id/import" element={<ImportFloorPlan />} />
      </Routes>
    </BrowserRouter>
  );
}