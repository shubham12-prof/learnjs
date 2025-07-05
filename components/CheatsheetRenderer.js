"use-client"
export default function CheatsheetRenderer({ sections, title, subtitle }) {
    return (
        <div className="space-y-6">
            <p className="text-gray-700 mb-6">{subtitle}</p>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600">Complete guide with examples and explanations</p>
            </div>

            <div className="space-y-4">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xs">
                                {section.id}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{section.title}</h3>
                        </div>

                        <p className="text-gray-600 mb-3 flex items-center gap-2 text-sm">
                            <span className="text-blue-500">💡</span>
                            {section.description}
                        </p>

                        <pre className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto text-sm">
                            <code>{section.code}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
}