import { GraduationCap, ShieldCheck, BookOpen, Users } from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      title: "Qualified & Dedicated Teachers",
      description:
        "Our educators are highly trained, experienced, and committed to nurturing academic excellence and discipline.",
      icon: GraduationCap,
    },
    {
      title: "Excellent Academic Results",
      description:
        "We consistently achieve strong pass rates through structured learning, assessment, and student support.",
      icon: BookOpen,
    },
    {
      title: "Safe & Disciplined Environment",
      description:
        "A secure campus with clear values, discipline, and student wellbeing at the core of everything we do.",
      icon: ShieldCheck,
    },
    {
      title: "Student-Centered Community",
      description:
        "We promote leadership, teamwork, and personal growth beyond the classroom.",
      icon: Users,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">
            Why Choose Hudin Secondary School
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We provide a balanced education that combines academic excellence,
            discipline, and holistic student development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white border rounded-xl p-6 text-center hover:shadow-xl transition duration-300"
              >
                <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-[#0A1F44] group-hover:bg-[#0A1F44] group-hover:text-white transition">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-[#0A1F44]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
