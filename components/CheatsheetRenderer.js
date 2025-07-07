"use client";

export default function CheatsheetRenderer({ sections, title, subtitle }) {
    return (
        <div className="space-y-4 md:space-y-6 max-w-full">

            <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed px-2 md:px-0">
                {subtitle}
            </p>


            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 md:p-6 rounded-lg md:rounded-xl border-l-4 border-blue-500 mb-4 md:mb-6 mx-2 md:mx-0">
                <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-2">
                    {title}
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                    Complete guide with examples and explanations
                </p>
            </div>


            <div className="space-y-3 md:space-y-4">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className="bg-white rounded-lg border border-gray-200 p-3 md:p-5 hover:shadow-md transition-shadow mx-2 md:mx-0"
                    >

                        <div className="flex items-center gap-2 md:gap-3 mb-3">
                            <div className="w-6 h-6 md:w-7 md:h-7 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0">
                                {section.id}
                            </div>
                            <h3 className="text-base md:text-lg font-semibold text-gray-800 leading-tight">
                                {section.title}
                            </h3>
                        </div>


                        <p className="text-gray-600 mb-3 flex items-start gap-2 text-xs md:text-sm leading-relaxed">
                            <span className="text-blue-500 flex-shrink-0 mt-0.5">💡</span>
                            <span>{section.description}</span>
                        </p>

                        <div className="relative">
                            <pre className="bg-gray-900 text-gray-100 p-3 md:p-4 rounded-lg overflow-x-auto text-xs md:text-sm leading-relaxed">
                                <code className="block whitespace-pre-wrap md:whitespace-pre">
                                    {section.code}
                                </code>
                            </pre>


                            <div className="md:hidden absolute top-2 right-2 text-gray-400 text-xs opacity-70">
                                ↔
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}