// src/app/(public)/favorites/layout.tsx

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
