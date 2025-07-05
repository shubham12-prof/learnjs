"use client"
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Learning Hub 🎓</h1>
      <p className="text-lg text-gray-600 mb-8">Learn JavaScript, React, and Node.js step-by-step</p>
      <Link
        href="/learn"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Start Learning
      </Link>
    </main>
  );
}
