import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiBrain } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";

export default function Sidebar({ pageTitle = "Dashboard" }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Profile", path: "/profile" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Mobile Top Bar - Only shows Hamburger if closed */}
      {!isOpen && (
        <div className="md:hidden fixed top-4 left-4 z-50 flex items-center px-4">
          <button
            className="p-2 bg-white/10 rounded-lg backdrop-blur-lg text-white shadow-md hover:bg-white/20 transition"
            onClick={() => setIsOpen(true)}
          >
            <HiMenu size={24} />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64
          bg-gradient-to-b from-indigo-950 via-slate-900 to-black
          border-r border-white/10
          px-6 py-8
          transform transition-transform duration-300 ease-in-out
          z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:fixed md:block
        `}
      >
        {/* Logo + Close Button (Mobile Only when Sidebar is Open) */}
        <div className="flex items-center justify-between mb-6 md:mb-12">
          {/* MindShift Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-yellow-400 text-slate-900">
              <GiBrain size={22} />
            </div>
            <h1 className="text-xl font-bold tracking-wide text-white">
              <span className="text-yellow-400">Mind</span>
              <span className="text-emerald-400">Shift</span>
            </h1>
          </div>

          {/* Close Button - Mobile Only */}
          {isOpen && (
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 bg-white/10 rounded-lg backdrop-blur-lg text-white shadow-md hover:bg-white/20 transition md:hidden"
            >
              <HiX size={24} />
            </button>
          )}
        </div>

        {/* Dashboard & Profile */}
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white mb-2 truncate">
            {pageTitle}
          </h2>
          <div className="flex pt-10 items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-yellow-400 flex items-center justify-center font-bold text-slate-900">
              T
            </div>
            <span className="text-white font-medium truncate">Testimony</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white/10 text-yellow-400 shadow-inner border-l-4 border-yellow-400"
                    : "text-gray-300 hover:bg-white/5 hover:text-emerald-400"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-60"></span>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-6 left-6 right-6 text-xs text-gray-400">
          <div className="h-px bg-white/10 mb-4"></div>
          <p>© {new Date().getFullYear()} MindShift</p>
          <p className="opacity-70">Transform your thinking</p>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
