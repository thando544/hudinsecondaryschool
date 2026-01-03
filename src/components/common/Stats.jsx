import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, GraduationCap, BookOpen, Trophy } from "lucide-react";

export default function SchoolStats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      label: "Enrolled Students",
      value: 850,
      icon: Users,
    },
    {
      label: "Qualified Teachers",
      value: 45,
      icon: GraduationCap,
    },
    {
      label: "Subjects Offered",
      value: 18,
      icon: BookOpen,
    },
    {
      label: "Years of Excellence",
      value: 20,
      icon: Trophy,
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0A1F44]">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-white"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 mb-4">
                  <Icon size={28} />
                </div>

                <h3 className="text-4xl font-bold">
                  {inView && <CountUp end={stat.value} duration={2.5} />}+
                </h3>

                <p className="mt-2 text-sm tracking-wide text-gray-200 uppercase">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
