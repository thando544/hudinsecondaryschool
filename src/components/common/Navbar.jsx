import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/gallery", name: "Gallery" },
    { to: "/contact", name: "Contact" },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="w-[90px] h-[60px] font-bold text-navy">
          <img
            src="https://res.cloudinary.com/dptomokgz/image/upload/v1767714981/hudiniLogo_vbdark.png"
            alt="hudini logo"
            className="w-full h-full object-center object-contain"
          />
        </Link>

   
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-navy border-b-2 border-navy"
                    : "text-gray-700 hover:text-navy"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/auth/login"
            className="text-navy font-medium hover:underline"
          >
            Login
          </Link>

          <Link
            to="/enroll"
            className="bg-navy text-white px-5 py-2 rounded font-semibold hover:bg-navy/90 transition"
          >
            Enroll Now
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-navy"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-navy font-medium"
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-navy font-medium"
            >
              Login
            </Link>

            <Link
              to="/enroll"
              onClick={() => setMenuOpen(false)}
              className="bg-navy text-white text-center py-3 rounded font-semibold"
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
