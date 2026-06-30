import {
  LayoutDashboard,
  FolderKanban,
  Upload,
  Sparkles,
  Image,
  FileText,
  Settings,
  Home,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: FolderKanban, label: "Projects" },
  { icon: Upload, label: "Upload Plan" },
  { icon: Sparkles, label: "AI Studio" },
  { icon: Image, label: "Gallery" },
  { icon: FileText, label: "Reports" },
  { icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#2D3238] text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <Home size={30} className="text-[#D4AF37]" />
          <div>
            <h1 className="text-xl font-bold">Plan2Home AI</h1>
            <p className="text-xs text-gray-400">Foundation Edition</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
              className="w-full flex items-center gap-3 px-6 py-4 hover:bg-[#3A424A] transition-all"
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-5 border-t border-gray-700 text-xs text-gray-400">
        Version 0.7
      </div>
    </aside>
  );
}