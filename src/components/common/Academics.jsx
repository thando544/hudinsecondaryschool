import {
  FlaskConical,
  Calculator,
  Languages,
  Globe,
  Monitor,
  PenTool,
} from "lucide-react";

export default function Academics() {
  const departments = [
    {
      title: "Sciences",
      subjects: ["Mathematics", "Biology", "Chemistry", "Physics"],
      icon: FlaskConical,
    },
    {
      title: "Commercials",
      subjects: ["Accounting", "Business Studies", "Economics"],
      icon: Calculator,
    },
    {
      title: "Languages",
      subjects: ["English", "Shona", "Ndebele"],
      icon: Languages,
    },
    {
      title: "Humanities",
      subjects: ["Geography", "History", "Religious Studies"],
      icon: Globe,
    },
    {
      title: "ICT & Technology",
      subjects: ["Computer Studies", "Information Technology"],
      icon: Monitor,
    },
    {
      title: "Creative & Practical",
      subjects: ["Art & Design", "Fashion & Fabrics", "Wood Technology"],
      icon: PenTool,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">
            Our Academic Departments
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Hudin Secondary School offers a well-balanced curriculum designed to
            prepare students for national examinations and future careers.
          </p>
        </div>

        {/* Departments Grid */}
        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => {
            const Icon = dept.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border p-6 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-[#0A1F44]">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-[#0A1F44]">
                    {dept.title}
                  </h3>
                </div>

                <ul className="space-y-2 text-gray-600 text-sm">
                  {dept.subjects.map((subject, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0A1F44]" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our curriculum aligns with national education standards and is
            delivered by experienced educators committed to student success.
          </p>
        </div>
      </div>
    </section>
  );
}
  