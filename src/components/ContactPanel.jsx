import React, { useEffect } from 'react';
import { XMarkIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const ContactPanel = ({ isOpen, onClose }) => {
  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out z-40 ${
          isOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div 
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white shadow-xl transform transition-all duration-500 ease-in-out z-50
          ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-panel-title"
      >
        <div className="h-full flex flex-col">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center bg-gray-50">
            <h2 id="contact-panel-title" className="text-2xl font-semibold text-gray-800">
              Contact Me
            </h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-200 transition-colors duration-200"
              aria-label="Close contact panel"
            >
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="flex-1 px-6 py-8 overflow-y-auto">
            <p className="text-gray-600 mb-8 animate-fadeIn">
              I'd love to hear from you! Feel free to reach out through any of these channels.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:anastasia.novelly.ux@example.com"
                className="flex items-center space-x-3 text-gray-700 hover:text-primary p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-2"
              >
                <EnvelopeIcon className="h-6 w-6 flex-shrink-0" />
                <span>anastasia.novelly.ux@example.com</span>
              </a>

              <a 
                href="#!"
                className="flex items-center space-x-3 text-gray-700 hover:text-primary p-3 rounded-lg hover:bg-gray-50 transition-all duration-200 transform hover:translate-x-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlobeAltIcon className="h-6 w-6 flex-shrink-0" />
                <span>My LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPanel;
