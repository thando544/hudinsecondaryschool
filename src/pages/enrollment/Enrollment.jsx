export default function Enrollment() {
  return (
    <div className="min-h-screen bg-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-8">
        <h1 className="text-2xl font-bold text-[#0A1F44] mb-2">
          Student Enrollment
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          Complete the form below to apply for enrollment at Hudin Secondary
          School
        </p>

        <form className="space-y-6">
          {/* STUDENT INFO */}
          <Section title="Student Information">
            <Input label="Full Name" />
            <Input label="Date of Birth" type="date" />
            <Input label="Grade Applying For" />
          </Section>

          {/* PARENT INFO */}
          <Section title="Parent / Guardian Information">
            <Input label="Parent Full Name" />
            <Input label="Email Address" type="email" />
            <Input label="Phone Number" />
          </Section>

          {/* DOCUMENTS */}
          <Section title="Required Documents">
            <Input label="Birth Certificate" type="file" />
            <Input label="Previous School Report" type="file" />
          </Section>

          <button
            type="submit"
            className="w-full bg-[#0A1F44] text-white py-3 rounded-lg font-semibold hover:bg-blue-900 transition"
          >
            Submit Enrollment Application
          </button>
        </form>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="font-semibold text-[#0A1F44] mb-4">{title}</h2>
      <div className="grid md:grid-cols-2 gap-4">{children}</div>
    </div>
  );
}

function Input({ label, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">{label}</label>
      <input
        type={type}
        className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
      />
    </div>
  );
}
