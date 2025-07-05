"use client";

export default function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    <div className="flex items-center space-x-2 text-xl font-bold text-blue-600">
                        <span>📚</span>
                        <span className="text-gray-900">LearnHub</span>
                    </div>


                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                            Home
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                            Courses
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                            Resources
                        </a>
                        <a href="#" className="text-gray-700 hover:text-blue-600 text-sm font-medium">
                            About
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
