import { FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b1c2d] text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src="https://res.cloudinary.com/dptomokgz/image/upload/v1767714981/hudiniLogo_vbdark.png"
              alt="Hudini Logo"
              className="h-10 w-10 object-contain"
            />
            <h4 className="text-white font-semibold text-lg">
              HSST
            </h4>
          </div>

          <p className="text-sm leading-relaxed text-slate-400">
            Empowering learners through discipline, academic excellence, and
            leadership development.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 pt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="p-2 rounded bg-[#112a45] text-blue-400 hover:bg-blue-500 hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://wa.me/263780328658"
              aria-label="WhatsApp"
              className="p-2 rounded bg-[#112a45] text-green-400 hover:bg-green-500 hover:text-white transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {[
              "About Us",
              "Admissions",
              "Academics",
              "News & Events",
              "Contact",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Portals */}
        <div>
          <h4 className="text-white font-semibold mb-4">Portals</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="/student/dashboard" className="hover:text-blue-400">
                Student Portal
              </a>
            </li>
            <li>
              <a href="/parent/dashboard" className="hover:text-blue-400">
                Parent Portal
              </a>
            </li>
            <li>
              <a href="/admin/dashboard" className="hover:text-blue-400">
                Admin Portal
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-2">
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <p className="text-sm">Victoria Falls, Zimbabwe</p>
          <p className="text-sm">+263 78 032 8658</p>
          <p className="text-sm">info@hudinschool.co.zw</p>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm text-blue-400 hover:text-blue-300"
          >
            <FaMapMarkerAlt />
            View on Google Maps
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900 px-4 py-6 text-center text-xs sm:text-sm">
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
            className="text-blue-400 font-medium hover:underline"
          >
            TMC Tech Solutions
          </a>
        </p>
      </div>
    </footer>
  );
}
