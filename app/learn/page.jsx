"use client";

import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import ContentDisplay from "../../components/ContentDisplay";

export default function LearnPage() {
  const [selected, setSelected] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMobileClose = () => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row relative">
      {isMobile && (
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md lg:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleMobileClose}
        />
      )}

      <div
        className={`
          fixed lg:sticky top-0 left-0 h-full w-80 z-50
          transition-transform duration-300 ease-in-out
          bg-gray-100 border-r shadow-md
          ${
            isMobile
              ? isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : ""
          }
        `}
      >
        <Sidebar onSelect={setSelected} onMobileClose={handleMobileClose} />
      </div>

      <main className="flex-1 p-4 lg:p-6 pt-20 lg:pt-6 z-10">
        <div className="max-w-3xl mx-auto">
          <ContentDisplay selected={selected} />
        </div>
      </main>
    </div>
  );
}
