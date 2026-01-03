import {
  LayoutDashboard,
  Users,
  CreditCard,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

export default function ParentDashboard() {
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
          <NavItem icon={<Users size={18} />} label="My Children" />
          <NavItem icon={<CreditCard size={18} />} label="Fees & Payments" />
          <NavItem icon={<Bell size={18} />} label="Notices" />
          <NavItem icon={<Settings size={18} />} label="Settings" />
        </nav>

        <NavItem icon={<LogOut size={18} />} label="Logout" />
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-6 space-y-6">
        {/* HEADER */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h1 className="text-xl font-semibold text-[#0A1F44]">
            Parent Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Monitor your child’s academic progress and school updates
          </p>
        </div>

        {/* CHILDREN OVERVIEW */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-[#0A1F44] mb-4">My Children</h2>

          <table className="w-full text-sm">
            <thead className="text-left text-gray-500 border-b">
              <tr>
                <th className="py-2">Name</th>
                <th>Grade</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              <ChildRow />
              <ChildRow />
            </tbody>
          </table>
        </div>

        {/* FEES */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="font-semibold text-[#0A1F44] mb-2">Fees Overview</h2>
          <p className="text-sm text-gray-500">
            Pending balances will appear once finance records are available
          </p>

          <div className="mt-4 text-[#0A1F44] font-bold text-2xl">—</div>
        </div>
      </main>

      {/* RIGHT PANEL */}
      <aside className="w-80 bg-white p-6 hidden lg:block border-l space-y-6">
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="font-medium text-[#0A1F44]">School Notifications</h3>
          <p className="text-sm text-gray-500 mt-1">
            Important school updates will appear here
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="font-medium text-[#0A1F44]">Academic Calendar</h3>
          <p className="text-sm text-gray-500 mt-1">
            Upcoming events and meetings will be shown here
          </p>
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

function ChildRow() {
  return (
    <tr className="border-b last:border-0">
      <td className="py-3">—</td>
      <td>—</td>
      <td>—</td>
      <td className="text-blue-600">Active</td>
    </tr>
  );
}
