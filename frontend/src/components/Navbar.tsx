import React, { useState } from "react";
import Link from "next/link";
import TransferLogo from "./assets/transferIcon.png";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { id: 0, href: "/", name: "Home" },
    { id: 1, href: "/vehicles", name: "Vehicles" },
    { id: 2, href: "/transfers", name: "Transfers" },
    { id: 3, href: "/history", name: "History" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <span className="text-3xl font-bold text-secondary">Vehicle</span>
            <Image src={TransferLogo} alt="Transfer logo" className="w-20" />
            <span className="text-3xl font-bold text-accent">Transfer</span>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {links.map((el) => (
                <Link
                  key={el.id}
                  href={el.href}
                  className="text-secondary hover:bg-accent hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {el.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-white hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((el) => (
              <Link
                key={el.id}
                href={el.href}
                className="text-secondary hover:bg-accent hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {el.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
