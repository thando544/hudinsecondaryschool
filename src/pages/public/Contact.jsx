export default function Contact() {
  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-[#0A1F44]">
            Contact Hudin Secondary School
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            We are here to assist parents, guardians, and prospective students.
            Reach out to us for inquiries, admissions, or school visits.
          </p>
        </section>


        <section className="mt-20 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44] mb-6">
              Get in Touch
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                <strong>Address:</strong> Victoria Falls, Zimbabwe
              </p>
              <p>
                <strong>Phone:</strong> +263 XX XXX XXXX
              </p>
              <p>
                <strong>Email:</strong> info@hudinschool.co.zw
              </p>
              <p>
                <strong>Office Hours:</strong> Monday – Friday, 08:00 – 16:30
              </p>
            </div>
            <div className="mt-8 h-64 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
              Map Placeholder
            </div>
          </div>

          <div className="border rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-[#0A1F44] mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                  placeholder="Reason for contacting us"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0A1F44]"
                  placeholder="Type your message here"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0A1F44] text-white py-3 rounded-md hover:bg-blue-900 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
