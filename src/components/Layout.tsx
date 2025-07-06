import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bannerData, setBannerData] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const location = useLocation();

  // WebSocket connection for banner notifications
  useEffect(() => {
    const ws = new WebSocket('wss://devapi.jobsforce.ai/ws-notify-new');
    
    ws.onopen = () => {
      console.log('Connected to notification WebSocket');
    };
    
    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'announcement') {
          setBannerData(data);
          setShowBanner(true);
        }
      } catch (error) {
        console.error('Error parsing WebSocket message:', error);
      }
    };
    
    ws.onclose = () => {
      console.log('Disconnected from notification WebSocket');
    };
    
    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    
    return () => {
      ws.close();
    };
  }, []);

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

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  const handleBannerClick = () => {
    if (bannerData?.link) {
      window.open(bannerData.link, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Announcement Banner */}
      

      {/* Professional Header */}
     {/* Professional Header with Banner */}
      <header className="fixed top-0 w-full z-50">
        {/* Announcement Banner */}
        {showBanner && bannerData && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 relative">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              <div 
                className="flex-1 text-center cursor-pointer hover:opacity-90 transition-opacity"
                onClick={handleBannerClick}
              >
                <p className="text-sm font-medium">
                  {bannerData.message}
                </p>
              </div>
              <button
                onClick={handleBannerClose}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Navigation Bar */}
        <div
          className={`transition-all duration-300 ${
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
                    alt="Jobsforce.ai Logo"
                  />
                </div>
                <div className="text-xl font-bold text-gray-900">
                  Jobsforce.ai
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
                <Link to="/waitlist">
                  <div className="cursor-pointer relative px-4 py-2 text-lg font-medium text-white rounded-full bg-gradient-to-r from-cyan-400 to-blue-500  shadow-lg transform scale-105 transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Rocket size={16} />
                      <span>Join Waitlist</span>
                      <motion.svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transform group-hover:translate-x-1 transition-transform duration-200"
                        initial={{ opacity: 0, x: -5 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </motion.svg>
                    </span>

                    {/* Hover Effect - Light Sweep */}
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                      <div className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/10 to-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_1.5s_ease-in-out_infinite] transform rotate-45"></div>
                    </div>
                  </div>
                </Link>
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
                  <Link to="/waitlist">
                    <div className="cursor-pointer relative px-8 py-4 text-lg font-medium text-white rounded-full bg-gradient-to-r from-cyan-400 to-blue-500  shadow-lg transform scale-105 transition-all duration-300 hover:scale-[1.02] group overflow-hidden">
                      {/* Content */}
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <Rocket size={16} />
                        <span>Join Waitlist</span>
                        <motion.svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transform group-hover:translate-x-1 transition-transform duration-200"
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </motion.svg>
                      </span>

                      {/* Hover Effect - Light Sweep */}
                      <div className="absolute inset-0 overflow-hidden rounded-full">
                        <div className="absolute -inset-8 bg-gradient-to-r from-white/30 via-white/10 to-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-[sweep_1.5s_ease-in-out_infinite] transform rotate-45"></div>
                      </div>
                      
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative" style={{ paddingTop: showBanner && bannerData ? '120px' : '68px' }}>
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
                © 2025 Jobsforce.ai. All rights reserved.
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