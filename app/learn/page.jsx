"use client";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import ContentDisplay from "../../components/ContentDisplay";

export default function LearnPage() {
  const [selected, setSelected] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex justify-center">
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

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex justify-center">
        <div className="flex max-w-6xl w-full mx-auto">
          <div
            className={`
            fixed lg:fixed top-0 left-0 h-full w-80
            bg-gray-100 border-r z-45 flex-shrink-0
            transition-transform duration-300 ease-in-out
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }
          `}
          >
            <Sidebar onSelect={setSelected} />
          </div>

          <main className="flex w-full items-center justify-center p-4 lg:p-6 ml-0 lg:ml-80 pt-16 lg:pt-6">
            <div className="max-w-3xl w-full">
              <ContentDisplay selected={selected} />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
