// @file Favorites View Layout
// @module app/favorites/layout
// Layout wrapper specifically tailored for user bookmark management.
// Provides structural alignment for personal curated lists and action toolbars.

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Favorites",
    description: "Your personalized list of saved favorite movies.",
};

type Props = { children: React.ReactNode };
const FavoritesLayout = ({ children }: Props) => {
    return <div>{children}</div>;
};
export default FavoritesLayout;
