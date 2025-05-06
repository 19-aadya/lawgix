  "use client"
  import React, { useState } from "react";
  import { ChevronDown, Menu } from "lucide-react";

  function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
      <header className="bg-gray-800 text-white fixed top-0 left-0 w-full z-50">
        <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
            <span className="font-bold text-xl text-white">Lawless</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6 items-center">
            <a href="/Home" className="hover:underline text-white">Home</a>
            <a href="#" className="hover:underline text-white">Features</a>
            <a href="#" className="hover:underline text-white">Marketplace</a>

            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-1 hover:underline text-white"
              >
                <span>Company</span>
                <ChevronDown size={16} />
              </button>

              {isOpen && (
                <div className="absolute top-full mt-2 flex z-20 bg-white text-gray-900 rounded-lg shadow-lg">
                  {/* Left */}
                  <div className="p-4 w-64 space-y-4 border-r border-gray-200 bg-gray-50">
                    {[
                      ["Explore Design Work", "Trending designs to inspire you"],
                      ["New & Noteworthy", "Up-and-coming designers"],
                      ["Playoffs", "Work designers are riffing on"],
                      ["Blog", "Interviews, tutorials, and more"],
                      ["Weekly Warm-up", "Prompt to flex your skills"]
                    ].map(([title, desc], i) => (
                      <div key={i}>
                        <p className="font-semibold text-gray-900">{title}</p>
                        <p className="text-sm text-gray-500">{desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Right */}
                  <div className="p-4 w-48 space-y-2 bg-white">
                    <h4 className="font-bold mb-2 text-gray-900">Browse categories</h4>
                    {[
                      "Animation", "Branding", "Illustration", "Mobile",
                      "Print", "Product Design", "Web Design"
                    ].map((item, i) => (
                      <p key={i} className="text-sm text-gray-500 hover:underline">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="hover:underline text-white">Team</a>
            <a href="#" className="hover:underline text-white">Contact</a>
          </nav>

          {/* Login/Signup */}
          <div className="hidden sm:flex space-x-4">
            <button className="hover:underline text-white">Login</button>
            <button className="bg-blue-900 px-4 py-1 rounded hover:bg-indigo-500 text-white">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white">
            <Menu />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="bg-gray-800 lg:hidden p-4 space-y-4 text-sm text-white">
            <a href="#" className="block">Home</a>
            <a href="#" className="block">Features</a>
            <a href="#" className="block">Marketplace</a>
            <a href="#" className="block">Company</a>
            <a href="#" className="block">Team</a>
            <a href="#" className="block">Contact</a>
            <div className="flex justify-between pt-4 border-t border-gray-700">
              <button className="hover:underline">Login</button>
              <button className="bg-blue-900 px-4 py-1 rounded hover:bg-indigo-500 text-white">
                Sign up
              </button>
            </div>
          </div>
        )}
      </header>
    );
  }

  export default Header;
