export default function SupportPage() {
    return (
        <div className="max-w-xl mx-auto space-y-8 text-center pt-10">

            <div className="space-y-4">
                <h1 className="text-3xl font-bold">Support the Project</h1>
                <p className="text-gray-500 text-lg">
                    If you found this tool useful, consider buying me a coffee to keep the servers running! ☕
                </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-8 rounded-3xl">
                <a
                    href="#"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFDD00] text-black font-bold rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
                >
                    <span>☕</span>
                    Buy me a Coffee
                </a>
                <p className="text-xs text-yellow-800/60 mt-4 font-medium uppercase tracking-wide">
                    Thank you for your support
                </p>
            </div>

        </div>
    );
}
