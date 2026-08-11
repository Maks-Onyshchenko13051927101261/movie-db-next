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

    const changePage = (step: number) => {
        const newPage = currentPage + step;
        if (newPage < 1 || newPage > maxPage) return;

        // Create a copy of the current settings to save the genre or query
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());

        router.push(`/?${params.toString()}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="flex justify-center items-center gap-6 py-8 my-8 bg-gray-50/80 dark:bg-gray-900/50 rounded-2xl border border-gray-100 dark:border-gray-800/80 max-w-xl mx-auto shadow-sm">
            <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => changePage(-1)}
                className="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-sm enabled:hover:border-orange-500 enabled:hover:text-orange-500 enabled:active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider"
            >
                Prev
            </button>

            <span className="font-extrabold text-xs sm:text-sm text-gray-600 dark:text-gray-400 tracking-widest uppercase">
                Page{" "}
                <span className="text-orange-500 text-lg sm:text-xl font-black">{currentPage}</span>{" "}
                / {maxPage}
            </span>

            <button
                type="button"
                disabled={currentPage >= maxPage}
                onClick={() => changePage(1)}
                className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 shadow-md shadow-orange-500/20 enabled:active:scale-95 disabled:opacity-40 disabled:bg-gray-400 dark:disabled:bg-gray-800 disabled:shadow-none disabled:cursor-not-allowed cursor-pointer uppercase tracking-wider"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
