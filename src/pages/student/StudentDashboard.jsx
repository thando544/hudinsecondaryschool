import {
  LayoutDashboard,
  BookOpen,
  CreditCard,
  Settings,
  LogOut,
  Bell,
} from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0A1F44] text-white p-6 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold mb-10">Hudin School</h2>

        <nav className="space-y-4 text-sm flex-1">
          <NavItem
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            active
          />
          <NavItem icon={<BookOpen size={18} />} label="Subjects" />
          <NavItem icon={<CreditCard size={18} />} label="Payments" />
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </nav>

        <NavItem icon={<LogOut size={18} />} label="Logout" />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 space-y-6">
        {/* Welcome */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-[#0A1F44]">
              Welcome back 👋
            </h1>
            <p className="text-sm text-gray-500">
              Here’s an overview of your academic journey
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard title="Registered Subjects" />
          <StatCard title="Completed Lessons" />
          <StatCard title="Pending Assignments" />
        </div>

        {/* SUBJECTS */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-[#0A1F44] mb-4">My Subjects</h2>

          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2">Subject</th>
                <th>Teacher</th>
                <th>Schedule</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <TableRow subject="Mathematics" />
              <TableRow subject="English" />
              <TableRow subject="Science" />
            </tbody>
          </table>
        </div>
      </main>

      {/* RIGHT PANEL */}
      <aside className="w-80 bg-white p-6 hidden lg:block border-l space-y-6">
        <div className="text-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3" />
          <h3 className="font-semibold text-[#0A1F44]">Student Profile</h3>
          <p className="text-sm text-gray-500">Profile data will appear here</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <p className="font-medium text-[#0A1F44] mb-1">Academic Progress</p>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="h-2 w-0 bg-[#0A1F44] rounded" />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Progress available once results are published
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 flex items-center gap-3">
          <Bell size={18} className="text-[#0A1F44]" />
          <p className="text-sm text-gray-600">No new notifications</p>
        </div>
      </aside>
    </div>
  );
}

function NavItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer
      ${active ? "bg-white/10" : "opacity-80 hover:opacity-100"}`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function StatCard({ title }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <h3 className="text-2xl font-bold text-[#0A1F44] mt-1">—</h3>
    </div>
  );
}

function TableRow({ subject }) {
  return (
    <tr className="border-b last:border-0">
      <td className="py-3">{subject}</td>
      <td>—</td>
      <td>—</td>
      <td className="text-blue-600">In Progress</td>
    </tr>
  );
}
