
import { Link } from "react-router-dom";
export default function HeroSection() {


  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-blue-100 text-blue-800">
            Victoria Falls • Zimbabwe
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0A1F44] leading-tight">
            Building Academic Excellence <br />
            for the Next Generation
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl text-lg">
            Hudini School of Science and Technology College provides a
            disciplined, supportive, and innovative learning environment that
            empowers students to achieve academic success and personal growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-[#0A1F44] text-white px-7 py-3 rounded-md hover:bg-blue-900 transition font-medium">
              <Link to="/auth/login">Apply for Enrollment</Link>
            </button>
            <button className="border border-[#0A1F44] text-[#0A1F44] px-7 py-3 rounded-md hover:bg-[#0A1F44] hover:text-white transition font-medium">
              View School Prospectus
            </button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <div>
              <h3 className="text-2xl font-bold text-[#0A1F44]">95%</h3>
              <p className="text-sm text-gray-600">Pass Rate</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0A1F44]">40+</h3>
              <p className="text-sm text-gray-600">Qualified Teachers</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#0A1F44]">600+</h3>
              <p className="text-sm text-gray-600">Students Enrolled</p>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#0A1F44] mb-2">
            Student Enrollment
          </h3>
          <p className="text-gray-600 mb-6 text-sm">
            Submit your application and our admissions team will contact you.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Student Full Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md focus:ring-2 focus:ring-blue-200 outline-none"
            />

            <select className="w-full border border-gray-300 px-4 py-3 rounded-md">
              <option>Select Grade Applying For</option>
              <option>Form 1</option>
              <option>Form 2</option>
              <option>Form 3</option>
              <option>Form 4</option>
              <option>Lower 6</option>
              <option>Upper 6</option>
            </select>

            <input
              type="text"
              placeholder="Parent / Guardian Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
              required
            />

            <input
              type="tel"
              placeholder="Parent Phone Number"
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
              required
            />

            <input
              type="email"
              placeholder="Parent Email Address"
              className="w-full border border-gray-300 px-4 py-3 rounded-md"
              required
            />

            <button  className="w-full bg-[#0A1F44] text-white py-3 rounded-md hover:bg-blue-900 font-medium transition">
              Submit Application
            </button>

            <p className="text-xs text-gray-500 text-center">
              We respect your privacy. Your information is safe with us.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
