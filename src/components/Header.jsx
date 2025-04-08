// src/components/Header.jsx
import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Import menu icons

const Header = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu (used when a link is clicked)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // Apply positioning, z-index, and styling to the main header element
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-gray-100 py-1 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
            {/* Logo/Title Link */}
            <Link to="/" className="text-xl font-bold text-gray-800" onClick={closeMobileMenu}> {/* Close menu on logo click too */}
              Anastasia's Portfolio
            </Link>

            {/* Desktop Navigation (Hidden on small screens) */}
            <nav className="hidden md:flex space-x-4">
             <Link to="/casestudypage" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Case Studies</Link>
             <Link to="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
             <Link to="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </nav>

            {/* Mobile Menu Button (Visible on small screens) */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon changes based on menu state */}
                {isMobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
        </div>

        {/* Mobile Menu Panel (Conditionally rendered) */}
        {/* Uses absolute positioning relative to the header */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-100 shadow-lg" id="mobile-menu">
            <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Mobile navigation links */}
              <Link
                to="/casestudypage"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu} // Close menu on click
              >
                Case Studies
              </Link>
              <Link
                to="/about"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu} // Close menu on click
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-gray-900 hover:bg-gray-200 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMobileMenu} // Close menu on click
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
    </header>
  );
};

export default Header;
