import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-sm shadow-subtle' 
          : 'bg-background'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/home-page" 
            className="flex items-center space-x-3 lg:space-x-4 focus-ring rounded-lg"
          >
            <div className="flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary rounded-lg">
              <Icon 
                name="Factory" 
                size={28} 
                color="white" 
                strokeWidth={2}
                className="sm:w-8 sm:h-8 lg:w-10 lg:h-10"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-primary">
                INDUTECH
              </span>
              <span className="text-sm sm:text-base lg:text-lg font-caption text-muted-foreground -mt-1">
                2025
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-3 xl:px-6 xl:py-4 rounded-lg text-base xl:text-lg font-medium transition-smooth focus-ring ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                {item?.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="lg:hidden w-12 h-12 sm:w-14 sm:h-14"
            aria-label="Toggle mobile menu"
          >
            <Icon 
              name={isMobileMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="sm:w-7 sm:h-7"
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
          <nav className="px-6 py-6 bg-card border-t border-border">
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`block px-6 py-4 rounded-lg text-lg font-medium transition-smooth focus-ring ${
                    isActivePath(item?.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
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