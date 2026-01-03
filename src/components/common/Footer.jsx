import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Main Content */}
      <div
        className="
          max-w-7xl mx-auto px-4 py-12
          grid gap-10
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {/* Branding */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Hudin Secondary School Logo"
              className="h-10 w-10 object-contain"
            />
            <h4 className="text-white font-semibold text-base sm:text-lg">
              Hudin Secondary School
            </h4>
          </div>

          <p className="text-sm leading-relaxed">
            Empowering learners through discipline, academic excellence, and
            leadership development.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="
                p-2 rounded bg-slate-800
                hover:bg-slate-700 transition
              "
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/263780328658"
              aria-label="WhatsApp"
              className="
                p-2 rounded bg-slate-800
                hover:bg-slate-700 transition
              "
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold text-base mb-4">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/admissions" className="hover:text-white">
                Admissions
              </a>
            </li>
            <li>
              <a href="/academics" className="hover:text-white">
                Academics
              </a>
            </li>
            <li>
              <a href="/news" className="hover:text-white">
                News & Events
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold text-base mb-4">Portals</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/student/dashboard" className="hover:text-white">
                Student Portal
              </a>
            </li>
            <li>
              <a href="/parent/dashboard" className="hover:text-white">
                Parent Portal
              </a>
            </li>
            <li>
              <a href="/admin/dashboard" className="hover:text-white">
                Admin Portal
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-base mb-4">
            Contact Us
          </h4>
          <p className="text-sm">Victoria Falls, Zimbabwe</p>
          <p className="text-sm">+263 78 032 8658</p>
          <p className="text-sm">info@hudinschool.co.zw</p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 mt-3 text-sm
              hover:text-white
            "
          >
            <FaMapMarkerAlt />
            View on Google Maps
          </a>
        </div>
      </div>
      <div
        className="
          border-t border-slate-700
          px-4 py-6 text-center
          text-xs sm:text-sm
        "
      >
        <p className="text-slate-400">
          © {new Date().getFullYear()} Hudin Secondary School. All Rights
          Reserved.
        </p>
        <p className="mt-2">
          Designed & Developed by{" "}
          <a
            href="https://thandoitsupport.kesug.com/?i=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:underline"
          >
            TMC Tech Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
