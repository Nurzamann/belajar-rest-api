import React from "react";

const Navbar: React.FC = () => (
  <header className="bg-gray-900 text-white shadow fixed w-full z-50">
    <div className="container mx-auto flex justify-between px-6 py-4">
      <h1 className="text-xl font-bold">REST Demo</h1>
      <nav className="hidden sm:flex gap-6 text-sm">
        <a href="#home"    className="hover:text-blue-400">Home</a>
        <a href="#project" className="hover:text-blue-400">Project</a>
        <a href="#about"   className="hover:text-blue-400">About</a>
        <a href="#contact" className="hover:text-blue-400">Contact</a>
      </nav>
    </div>
  </header>
);

export default Navbar;
