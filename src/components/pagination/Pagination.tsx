"use client";

// Description: A navigation tool to traverse through large movie datasets.
// Preserves current query/genre search context using Next.js navigation.

import { useRouter, useSearchParams } from "next/navigation";

type PaginationProps = {
    totalPages?: number;
    currentPage?: number;
    query?: string;
    genre?: string;
};

export const Pagination = ({ totalPages = 500 }: PaginationProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentPage = Number(searchParams.get("page") || "1");
    const maxPage = Math.min(totalPages || 1, 500);

    const goToPage = (newPage: number) => {
        if (newPage < 1 || newPage > maxPage || newPage === currentPage) return;

        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());

        router.push(`/?${params.toString()}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex items-center justify-center gap-2 sm:gap-3 py-3 px-4 my-10 bg-white/70 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-200/80 dark:border-gray-800/80 max-w-fit mx-auto shadow-lg shadow-black/5 dark:shadow-orange-950/10 transition-all">
            {currentPage > 2 && (
                <button
                    type="button"
                    onClick={() => goToPage(1)}
                    title="First Page"
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 text-gray-600 dark:text-gray-300 font-bold text-xs rounded-xl transition-all duration-200 cursor-pointer active:scale-95"
                >
                    « 1
                </button>
            )}

            <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => goToPage(currentPage - 1)}
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 text-gray-700 dark:text-gray-200 font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-sm enabled:hover:border-orange-500 enabled:hover:text-orange-500 enabled:active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider"
            >
                PREV
            </button>

            <div className="flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-100/80 dark:bg-gray-800/60 rounded-xl border border-gray-200/50 dark:border-gray-700/50 select-none">
                <span className="font-extrabold text-[11px] sm:text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    PAGE
                </span>
                <span className="text-orange-500 text-sm sm:text-base font-black px-1">
                    {currentPage}
                </span>
                <span className="text-xs text-gray-400 dark:text-gray-500 font-bold">
                    / {maxPage}
                </span>
            </div>

            <button
                type="button"
                disabled={currentPage >= maxPage}
                onClick={() => goToPage(currentPage + 1)}
                className="px-4 py-2 sm:px-5 sm:py-2.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md shadow-orange-500/25 enabled:active:scale-95 disabled:opacity-30 disabled:bg-gray-400 dark:disabled:bg-gray-800 disabled:shadow-none disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider"
            >
                NEXT
            </button>

            {currentPage < maxPage - 1 && (
                <button
                    type="button"
                    onClick={() => goToPage(maxPage)}
                    title="Last Page"
                    className="px-3 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 text-gray-600 dark:text-gray-300 font-bold text-xs rounded-xl transition-all duration-200 cursor-pointer active:scale-95"
                >
                    {maxPage} »
                </button>
            )}
        </div>
    );
};

export default Pagination;
