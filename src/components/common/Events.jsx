import { CalendarDays, Megaphone } from "lucide-react";

export default function Events() {
  const events = [
    {
      title: "Form 1 Entrance Assessments",
      date: "15 February 2026",
      type: "Event",
    },
    {
      title: "Mid-Term Examinations",
      date: "10 March 2026",
      type: "Announcement",
    },
    {
      title: "Parents Consultation Day",
      date: "22 March 2026",
      type: "Event",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A1F44]">
            School Events & Announcements
          </h2>
          <p className="mt-4 text-gray-600">
            Stay updated with important dates and school activities.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {events.map((item, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-4 text-[#0A1F44]">
                {item.type === "Event" ? (
                  <CalendarDays size={22} />
                ) : (
                  <Megaphone size={22} />
                )}
                <span className="text-sm uppercase tracking-wide">
                  {item.type}
                </span>
              </div>

              <h3 className="font-semibold text-lg text-[#0A1F44]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
