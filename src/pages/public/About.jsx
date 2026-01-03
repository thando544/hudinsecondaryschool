export default function About() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Page Header */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0A1F44]">
            About Hudin Secondary School
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            Hudin Secondary School is a reputable learning institution located
            in Victoria Falls, Zimbabwe, dedicated to providing quality
            secondary education grounded in discipline, excellence, and
            integrity.
          </p>
        </section>

        {/* School Overview */}
        <section className="mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44] mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Established with the vision of nurturing academically strong and
              morally upright students, Hudin Secondary School offers a balanced
              curriculum that prepares learners for national examinations and
              future academic pursuits.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our school provides a safe, supportive, and disciplined
              environment where students are encouraged to reach their full
              potential both inside and outside the classroom.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl h-72 flex items-center justify-center text-gray-400">
            {/* Replace with real school image later */}
            School Image Placeholder
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mt-24 grid md:grid-cols-2 gap-12">
          <div className="border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To provide high-quality education that fosters academic
              excellence, discipline, and responsible citizenship through
              dedicated teaching and continuous learning.
            </p>
          </div>

          <div className="border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-[#0A1F44] mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a leading secondary school recognized for producing
              confident, skilled, and ethical learners prepared to contribute
              positively to society.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className="mt-24">
          <h2 className="text-2xl font-semibold text-[#0A1F44] text-center mb-10">
            Our Core Values
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Academic Excellence",
              "Discipline & Integrity",
              "Respect & Responsibility",
              "Community & Teamwork",
            ].map((value, index) => (
              <div
                key={index}
                className="border rounded-lg p-6 text-center hover:shadow-md transition"
              >
                <p className="text-gray-700 font-medium">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mt-24 bg-gray-50 border rounded-xl p-12 text-center">
          <h2 className="text-2xl font-semibold text-[#0A1F44] mb-6">
            Why Choose Hudin Secondary School?
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Hudin Secondary School, we combine academic rigor with personal
            development. Our experienced teachers, structured learning approach,
            and strong communication with parents ensure that every student
            receives the guidance needed to succeed.
          </p>
        </section>
      </div>
    </main>
  );
}
