"use client";

// Description: The main search engine of the application.
// Synchronizes user input with Next.js URL Search Parameters via next/navigation.

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";

type SearchFormData = {
    title: string;
};

export const SearchForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentQuery = searchParams.get("query") || "";

    const { register, handleSubmit, reset } = useForm<SearchFormData>({
        defaultValues: {
            title: currentQuery,
        },
    });

    const onSubmit = (data: SearchFormData) => {
        const query = data.title.trim();
        if (query) {
            router.push(`/?query=${encodeURIComponent(query)}&page=1`);
        } else {
            router.push("/?page=1");
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md relative group flex items-center"
        >
            <div className="flex items-center w-full bg-gray-100 dark:bg-gray-800/80 rounded-2xl px-3.5 py-1 border border-gray-200/80 dark:border-gray-700/80 focus-within:border-orange-500 focus-within:ring-2 focus-within:ring-orange-500/20 focus-within:bg-white dark:focus-within:bg-gray-800 transition-all duration-200 shadow-sm relative">
                <span className="text-gray-400 mr-2 text-sm select-none">🔍</span>
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    className="w-full bg-transparent py-2 text-xs sm:text-sm font-medium outline-none text-gray-900 dark:text-white placeholder:text-gray-400"
                    {...register("title")}
                />

                <button
                    type="submit"
                    className="ml-2 px-4 py-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-orange-500/20 flex-shrink-0 cursor-pointer uppercase tracking-wider"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default SearchForm;
