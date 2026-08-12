// Description: Main Server Component Header layout for Next.js App Router.
// Assembles server-rendered genres with light client interactive islands.

import { IGenre } from "@/models/IGenreModel";
import Link from "next/link";
import { GenresNav } from "../genres-nav/GenresNav";
import SearchForm from "../search-form/SearchForm";
import UserInfo from "../user-info/UserInfo";
import FavoritesBadge from "./FavoritesBadge";
import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
    genres?: IGenre[];
    activeGenreId?: string;
};

export const Header = ({ genres = [], activeGenreId }: HeaderProps) => {
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-gray-900/90 border-b border-gray-200/80 dark:border-gray-800 transition-colors duration-300 shadow-sm">
            <div className="flex flex-row justify-between items-center px-4 sm:px-6 h-16 max-w-7xl mx-auto gap-4">
                {/* Logo (Server) */}
                <Link
                    href="/?page=1"
                    className="text-xl sm:text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity flex-shrink-0 text-gray-900 dark:text-white uppercase"
                >
                    MOVIE<span className="text-orange-500">STORM</span>
                </Link>

                {/* SearchForm (Client Island) */}
                <div className="flex-1 max-w-md hidden sm:flex items-center justify-center">
                    <SearchForm />
                </div>

                {/* Right Nav (Client Islands) */}
                <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0 justify-end">
                    <ThemeToggle />
                    <FavoritesBadge />
                    <UserInfo />
                </div>
            </div>

            {/* Mobile Search */}
            <div className="sm:hidden px-4 pb-3">
                <SearchForm />
            </div>

            {/* GenresNav (Server) */}
            {genres.length > 0 && (
                <div className="border-t border-gray-100 dark:border-gray-800/60 bg-gray-50/50 dark:bg-gray-950/40 px-4 py-1.5 overflow-x-auto no-scrollbar">
                    <GenresNav genres={genres} activeGenreId={activeGenreId} />
                </div>
            )}
        </header>
    );
};

export default Header;
