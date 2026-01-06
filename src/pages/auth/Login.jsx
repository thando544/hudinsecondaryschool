import { useState } from "react";

export default function Login() {
  const [role, setRole] = useState("student");

  return (
    <main className="pt-32 pb-24 bg-gray-50">
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl border">
        <h1 className="text-3xl font-bold text-[#0A1F44] text-center">
          Portal Login
        </h1>

        <div className="flex justify-center gap-3 mt-6">
          {["student", "parent", "staff"].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`px-4 py-2 rounded ${
                role === r ? "bg-[#0A1F44] text-white" : "border text-gray-600"
              }`}
            >
              {r.charAt(0).toUpperCase() + r.slice(1)}
            </button>
          ))}
        </div>
        <form className="mt-8 space-y-5">
          <input className="border p-3 rounded w-full" placeholder="Email" />
          <input
            className="border p-3 rounded w-full"
            type="password"
            placeholder="Password"
          />

          <button className="w-full bg-[#0A1F44] text-white py-3 rounded">
            Login as {role}
          </button>
        </form>
      </div>
    </main>
  );
}
