import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Rocket } from "lucide-react";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Professional Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
            : "bg-transparent border-b-2 border-slate-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10  rounded-lg flex items-center justify-center">
                <img
                  src="./models/logo-blacktext.webp"
                  alt="JobsForce.ai Logo"
                />
              </div>
              <div className="text-xl font-bold text-gray-900">
                JobsForce.ai
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-3 py-2 font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-[#0595f6]"
                      : "text-gray-700 hover:text-[#0595f6]"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0595f6]"></div>
                  )}
                </Link>
              ))}
              <div className="bg-[#0595f6] text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200 font-medium flex items-center gap-2">
                <Rocket size={16} />
                <a href="/#waitlist">Join waitlist</a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="text-gray-700" size={24} />
              ) : (
                <Menu className="text-gray-700" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div className="bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-3 rounded-md font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? "text-[#0595f6] bg-blue-50"
                        : "text-gray-700 hover:text-[#0595f6] hover:bg-gray-50"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/#waitlist"
                  className="block bg-[#0595f6] text-white px-4 py-3 rounded-md font-medium text-center hover:bg-blue-600 transition-colors duration-200 mt-4"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Rocket size={16} />
                    Join Waitlist
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        <div className="fixed w-[25rem] h-[25rem] rounded-full bg-[hsl(256,100%,78%)] blur-[250px] bottom-0 -translate-x-1/3 -translate-y-1/2 right-0"></div>
        <div className="fixed w-[25rem] h-[25rem] rounded-full bg-[#41E2FF] blur-[250px] bottom-0 translate-x-1/3 translate-y-1/2 right-0"></div>
        <Outlet />
      </main>

      <hr className="border-gray-200" />

      {/* Simple Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2025 JobsForce.ai. All rights reserved.
              </p>
              <nav className="flex space-x-6">
                <Link
                  to="/careers"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Careers
                </Link>
                <Link
                  to="/pricing"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Pricing
                </Link>
                <Link
                  to="/features"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  Features
                </Link>
              </nav>
            </div>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">
              E-Verified Company | Company ID 2670995
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
