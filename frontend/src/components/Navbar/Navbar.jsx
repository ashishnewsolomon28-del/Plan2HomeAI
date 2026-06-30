import { Bell, Search, UserCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-white rounded-2xl shadow-sm px-8 flex items-center justify-between mb-8">

      {/* Left Side */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Dashboard
        </h2>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="flex items-center bg-gray-100 rounded-xl px-4 py-2 w-80">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search projects..."
            className="ml-2 bg-transparent outline-none w-full"
          />
        </div>

        {/* Notification */}
        <button className="p-3 rounded-xl bg-gray-100 hover:bg-gray-200">
          <Bell size={20} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <UserCircle
            size={42}
            className="text-[#2F80ED]"
          />

          <div>
            <p className="font-semibold">
              Ashish
            </p>

            <p className="text-xs text-gray-500">
              Premium User
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}