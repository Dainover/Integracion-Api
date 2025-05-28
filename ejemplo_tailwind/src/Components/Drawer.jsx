import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline'; // Necesitarás instalar @heroicons/react

const Drawer = ({ isOpen, onClose, children, title = "Drawer Title" }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
        onClick={onClose}
      ></div>

      {/* Drawer Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Close drawer"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="p-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
