"use client";

import { useState } from "react";
import {
  Code,
  FileText,
  Repeat,
  Component,
  Database,
  Zap,
  ChevronRight,
} from "lucide-react";

export default function Sidebar({ onSelect, onMobileClose, isOpen = true }) {
  const [activeSection, setActiveSection] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicSelect = (topic) => {
    console.log("Topic selected:", topic);
    setSelectedTopic(topic);

    if (onSelect) {
      onSelect(topic);
    }

    if (onMobileClose) {
      console.log("Closing sidebar");
      onMobileClose();
    }
  };

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const topics = {
    javascript: {
      title: "JavaScript",
      icon: <Code className="w-5 h-5" />,
      gradient: "from-yellow-400 to-orange-500",
      items: [
        {
          id: "js-variables",
          title: "Variables & Data Types",
          icon: <Database className="w-4 h-4" />,
        },
        {
          id: "js-functions",
          title: "JavaScript Function Parameters",
          icon: <Zap className="w-4 h-4" />,
        },
        {
          id: "js-DOM",
          title: "DOM Manipulation",
          icon: <Component className="w-4 h-4" />,
        },
        {
          id: "js-Advance",
          title: "JavaScript Advance",
          icon: <Repeat className="w-4 h-4" />,
        },
        {
          id: "js-AdvancePlus",
          title: "JavaScript Deep Concepts",
          icon: <Zap className="w-4 h-4" />,
        },
        {
          id: "js-loops",
          title: "Loops & Iterations",
          icon: <Repeat className="w-4 h-4" />,
        },
        {
          id: "js-Array",
          title: "JavaScript Array Methods",
          icon: <Repeat className="w-4 h-4" />,
        },
        {
          id: "js-OOP",
          title: "Object-Oriented Programming (OOP)",
          icon: <Component className="w-4 h-4" />,
        },
        {
          id: "js-Extras",
          title: "Error Handling & ES6 Features",
          icon: <Zap className="w-4 h-4" />,
        },
      ],
    },
    react: {
      title: "React",
      icon: <Component className="w-5 h-5" />,
      gradient: "from-blue-400 to-cyan-500",
      items: [
        {
          id: "react-state",
          title: "State Management",
          icon: <Database className="w-4 h-4" />,
        },
        {
          id: "react-props",
          title: "Props & Data Flow",
          icon: <FileText className="w-4 h-4" />,
        },
        {
          id: "react-hooks",
          title: "Hooks & Effects",
          icon: <Zap className="w-4 h-4" />,
        },
      ],
    },
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="flex flex-col w-80 h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 border-r border-slate-200/60 relative">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={() => {
            if (onMobileClose) onMobileClose();
          }}
          className="p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200"
        >
          <svg
            className="w-5 h-5 text-slate-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className="p-6 border-b border-slate-200/50 shrink-0">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
            <span className="text-white text-xl">📚</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Learning Hub
            </h2>
            <p className="text-sm text-slate-500">Interactive Topics</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {Object.entries(topics).map(([key, section]) => (
          <div key={key} className="group">
            <button
              onClick={() => toggleSection(key)}
              className="w-full flex items-center justify-between p-4 bg-white/70 backdrop-blur-sm rounded-2xl border border-slate-200/50 hover:bg-white/90 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`p-2 bg-gradient-to-r ${section.gradient} rounded-xl shadow-md text-white`}
                >
                  {section.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-700">
                    {section.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {section.items.length} topics
                  </p>
                </div>
              </div>
              <ChevronRight
                className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                  activeSection === key ? "rotate-90" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                activeSection === key
                  ? "max-h-[1000px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-3 ml-4 space-y-2">
                {section.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleTopicSelect(item.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-300 text-left group/item transform-gpu ${
                      selectedTopic === item.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-200/50"
                        : "bg-white/50 hover:bg-white/80 text-slate-600 hover:text-slate-800 hover:shadow-md border border-slate-200/30"
                    }`}
                  >
                    <div
                      className={`p-1.5 rounded-lg transition-colors duration-300 ${
                        selectedTopic === item.id
                          ? "bg-white/20 text-white"
                          : "bg-slate-100 text-slate-500 group-hover/item:bg-slate-200"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium">{item.title}</span>
                    </div>
                    {selectedTopic === item.id && (
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 border-t border-slate-200/50 shrink-0">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm">🚀</span>
            </div>
            <div>
              <h4 className="font-semibold text-sm">Ready to Learn?</h4>
              <p className="text-xs text-white/80">Start your coding journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
