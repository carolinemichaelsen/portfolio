'use client';
import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
      <div className="sticky inline-block top-0 left-0 w-full p-2">
        <button
          className="px-3 py-2 bg-purple-200 text-zinc-500 rounded-full"
          onClick={toggleDropdown}
        >
          {isOpen ? <AiOutlineClose className="inline" /> : <AiOutlineMenu className="inline" />}
        </button>
        {isOpen && (
          <div className="absolute mt-2 py-2 bg-zinc-300 opacity-80 border rounded-md shadow-md">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeDropdown}
            >
            </button>
            <ul className="list-none pl-2 text-sm">
              <li className="p-3 hover:text-purple-400 cursor-pointer"><a>about</a></li>
              <li className="p-3 hover:bg-gray-100 cursor-pointer">projetos</li>
              <li className="p-3 hover:bg-gray-100 cursor-pointer">contato</li>
            </ul>
          </div>
        )}
      </div>
  );
};

export default DropdownMenu;
