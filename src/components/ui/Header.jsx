import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'Home', path: '/home-page' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Expert Talk', path: '/expert-talk' },
    { label: 'Committee', path: '/committee' },
    { label: 'Abstract Submission', path: '/abstract-submission' },
    { label: 'Registration', path: '/registration' },
    { label: 'Accommodation', path: '/accommodation' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Contact Us', path: '/contact-us' }
  ];

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="w-full">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24 px-3 sm:px-4 lg:px-8">
          {/* Logo */}
          <Link 
            to="/home-page" 
            className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 focus-ring rounded-lg flex-shrink-0"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
              <img 
                src="/assets/images/Indutech_logo.png" 
                alt="INDUTECH 2025 Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-heading font-bold text-primary">
                INDUTECH
              </span>
              <span className="text-xs sm:text-sm font-caption text-muted-foreground -mt-1">
                2025
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 2xl:space-x-2">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-2 py-2 2xl:px-3 2xl:py-3 rounded-lg text-xs 2xl:text-sm font-medium transition-smooth focus-ring whitespace-nowrap ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          {/* Tablet Navigation - Condensed */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-1">
            {navigationItems?.slice(0, 6).map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-2 py-2 rounded-lg text-xs font-medium transition-smooth focus-ring whitespace-nowrap ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {item?.label === 'Abstract Submission' ? 'Abstract' : 
                 item?.label === 'Expert Talk' ? 'Experts' :
                 item?.label === 'Contact Us' ? 'Contact' : item?.label}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-2 py-2 rounded-lg text-xs font-medium text-foreground hover:bg-muted transition-smooth">
                More
              </button>
              <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {navigationItems?.slice(6).map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    className="block px-3 py-2 text-xs text-foreground hover:bg-muted rounded-lg"
                  >
                    {item?.label}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="lg:hidden w-10 h-10 sm:w-12 sm:h-12"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={20} 
              className="sm:w-6 sm:h-6"
            />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen 
              ? 'max-h-screen opacity-100' :'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-4 py-4 bg-white border-t border-gray-200 shadow-lg">
            <div className="space-y-1 max-h-80 overflow-y-auto">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-smooth focus-ring ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-gray-100'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item?.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;