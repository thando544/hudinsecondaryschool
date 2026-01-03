export default function PrimaryCTA() {
  return (
    <section className="py-24 bg-[#0A1F44] text-white text-center">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold">
          Enroll Your Child at Hudin Secondary School
        </h2>

        <p className="mt-6 text-gray-200 text-lg">
          Give your child access to quality education, discipline, and academic
          excellence.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-white text-[#0A1F44] font-semibold rounded-md hover:bg-gray-100 transition">
            Apply for Enrollment
          </button>

          <button className="px-8 py-3 border border-white rounded-md hover:bg-white hover:text-[#0A1F44] transition">
            Contact Admissions
          </button>
        </div>
      </div>
    </section>
  );
}
