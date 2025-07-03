import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, Rocket } from 'lucide-react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#41e3fe] to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 group-hover:text-[#41e3fe] transition-colors">
                  JobsForce.ai
                </div>
                <div className="text-xs text-gray-500 font-medium">AI-Powered Career Success</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    location.pathname === item.path
                      ? 'text-[#41e3fe] bg-[#41e3fe]/10'
                      : 'text-gray-700 hover:text-[#41e3fe] hover:bg-[#41e3fe]/5'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#41e3fe] rounded-full"></div>
                  )}
                </Link>
              ))}
              <Link
                to="/#waitlist"
                className="bg-gradient-to-r from-[#41e3fe] to-blue-500 text-white px-8 py-3 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold flex items-center gap-2 group"
              >
                <Rocket size={18} />
                Join Waitlist
                <div className="w-2 h-2 bg-white/30 rounded-full group-hover:animate-ping"></div>
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 rounded-xl bg-gray-100 hover:bg-[#41e3fe]/10 transition-all duration-300 hover:scale-105"
            >
              {isMenuOpen ? (
                <X className="text-gray-700" size={24} />
              ) : (
                <Menu className="text-gray-700" size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-6 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 transform ${
                      location.pathname === item.path
                        ? 'text-[#41e3fe] bg-gradient-to-r from-[#41e3fe]/10 to-blue-500/10 border border-[#41e3fe]/20'
                        : 'text-gray-700 hover:text-[#41e3fe] hover:bg-[#41e3fe]/5'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/#waitlist"
                  className="block bg-gradient-to-r from-[#41e3fe] to-blue-500 text-white px-6 py-4 rounded-2xl font-semibold text-center hover:shadow-xl transition-all duration-300 hover:scale-105 mt-6"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Rocket size={18} />
                    Join Waitlist
                  </div>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#41e3fe]/5 to-blue-500/5"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#41e3fe] to-blue-500"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#41e3fe] to-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="text-white" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold">JobsForce.ai</div>
                  <div className="text-sm text-gray-400">AI-Powered Career Success</div>
                </div>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
                Revolutionizing job searches worldwide with cutting-edge AI automation 
                and expert human guidance. Your career success is our mission.
              </p>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-300">Currently serving 5,000+ professionals</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-[#41e3fe]">Solutions</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link to="/features" className="hover:text-[#41e3fe] transition-colors hover:translate-x-2 transform duration-300 block">Chrome Extension</Link></li>
                <li><Link to="/features" className="hover:text-[#41e3fe] transition-colors hover:translate-x-2 transform duration-300 block">Human Agent Service</Link></li>
                <li><Link to="/pricing" className="hover:text-[#41e3fe] transition-colors hover:translate-x-2 transform duration-300 block">Enterprise Plans</Link></li>
                <li><a href="#" className="hover:text-[#41e3fe] transition-colors hover:translate-x-2 transform duration-300 block">API Access</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-xl mb-6 text-[#41e3fe]">Company</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-[#41e3fe] transition-colors hover:translate-x-2 transform duration-300 block">About Us</a></li>
                <li><Link to="/careers" className="hover:text-[#41e3fe] transition-colors hover:translate-x-2 transform duration-300 block">Careers</Link></li>
                <li><a href="#" className="hover:text-[#41e3fe] transition-colors hover:translate-x-2 transform duration-300 block">Press Kit</a></li>
                <li><a href="#" className="hover:text-[#41e3fe] transition-colors hover:translate-x-2 transform duration-300 block">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 flex items-center gap-2">
              <span>&copy; 2025 JobsForce.ai. All rights reserved.</span>
              <div className="w-2 h-2 bg-[#41e3fe] rounded-full animate-pulse"></div>
            </p>
            <div className="flex items-center gap-8 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#41e3fe] transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#41e3fe] transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-[#41e3fe] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;