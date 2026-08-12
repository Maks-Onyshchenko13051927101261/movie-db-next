// @file Movies Sub-Layout
// @module app/(public)/movies/[id]/layout
// Specialized layout container for movie-related pages.
// Enforces consistent max-width boundaries and responsive padding across dynamic catalog screens.

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Movie Details",
    description: "View detailed information about this movie.",
};
type Props = { children: React.ReactNode };
const MovieLayout = ({ children }: Props) => {
    return <div>{children}</div>;
};
export default MovieLayout;
