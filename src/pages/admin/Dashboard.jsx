import {
  LayoutDashboard,
  Users,
  GraduationCap,
  UserCog,
  Bell,
  Calendar,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* SIDEBAR */}
      <aside className="w-64 bg-[#0A1F44] text-white p-6 hidden md:flex flex-col">
        <h2 className="text-2xl font-bold mb-10">Hudin Admin</h2>

        <nav className="space-y-3 text-sm flex-1">
          <NavItem
            icon={<LayoutDashboard size={18} />}
            label="Dashboard"
            active
          />
          <NavItem icon={<GraduationCap size={18} />} label="Students" />
          <NavItem icon={<Users size={18} />} label="Parents" />
          <NavItem icon={<UserCog size={18} />} label="Staff" />
          <NavItem icon={<FileText size={18} />} label="Enrollments" />
          <NavItem icon={<Calendar size={18} />} label="Meetings" />
          <NavItem icon={<Bell size={18} />} label="Notifications" />
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </nav>

        <NavItem icon={<LogOut size={18} />} label="Logout" />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 space-y-6">
        {/* HEADER */}
        <div className="bg-white rounded-xl p-6 shadow-sm flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-[#0A1F44]">
              Admin Dashboard
            </h1>
            <p className="text-sm text-gray-500">
              School overview and management controls
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Total Students" />
          <StatCard title="Total Staff" />
          <StatCard title="Pending Enrollments" />
          <StatCard title="Active Classes" />
        </div>

        {/* ENROLLMENTS TABLE */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-[#0A1F44] mb-4">
            Recent Enrollment Requests
          </h2>

          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2">Student Name</th>
                <th>Grade</th>
                <th>Parent</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <EnrollmentRow />
              <EnrollmentRow />
            </tbody>
          </table>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-[#0A1F44] mb-2">
            Admin Notifications
          </h2>
          <p className="text-sm text-gray-500">
            System and school alerts will appear here
          </p>
        </div>
      </main>
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

function EnrollmentRow() {
  return (
    <tr className="border-b last:border-0">
      <td className="py-3">—</td>
      <td>—</td>
      <td>—</td>
      <td className="text-orange-600">Pending</td>
      <td>
        <button className="text-blue-600 hover:underline text-sm">
          Review
        </button>
      </td>
    </tr>
  );
}
