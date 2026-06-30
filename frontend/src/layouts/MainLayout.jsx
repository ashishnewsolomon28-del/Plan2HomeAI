import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#F8F5EF]">

      <Sidebar />

      <div className="flex-1 p-8">

        <Navbar />

        {children}

      </div>

    </div>
  );
}