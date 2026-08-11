// Reusable UI loader component with CSS spin animation.

export default function Loading() {
    return (
        <main className="max-w-7xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest animate-pulse">
                    Loading MovieStorm...
                </p>
            </div>
        </main>
    );
}
