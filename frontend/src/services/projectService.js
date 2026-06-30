const STORAGE_KEY = "plan2home-projects";

export function getProjects() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveProject(project) {
  const projects = getProjects();

  projects.push({
    id: Date.now(),
    name: project.name,
    status: "Waiting for Floor Plan",
    created: new Date().toLocaleDateString(),
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}