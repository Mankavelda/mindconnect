"use client"; // For Next.js 13+ App Directory
import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, selectedValue, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-full md:w-full">
      <div
        onClick={toggleDropdown}
        className="relative bg-white border border-gray-300 rounded-md px-3 py-3 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
      >
        <span className="block truncate">{options.find(option => option.value === selectedValue)?.label || 'Select an option'}</span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </div>
      {/* This is the code here with max-h-32 you can go to 32,36 48,56 depending on the max height exp max-h-56 */}
      <ul
        className={`${isOpen ? 'block' : 'hidden'} absolute max-h-32 overflow-y-auto z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg mt-1`}
      >
        {options.map((option) => (
          <li
            key={option.value}
            onClick={() => handleOptionClick(option.value)}
            className="px-3 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
