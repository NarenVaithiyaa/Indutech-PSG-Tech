import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const BreadcrumbNavigation = () => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
      <Link 
        to="/home-page" 
        className="hover:text-foreground transition-smooth focus-ring rounded px-1"
      >
        Home
      </Link>
      <Icon name="ChevronRight" size={16} />
      <span className="text-foreground font-medium">About Us</span>
    </nav>
  );
};

export default BreadcrumbNavigation;