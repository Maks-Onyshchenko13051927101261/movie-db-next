// A resilient image component for movie posters.
// It implements a fixed aspect ratio and a subtle hover "zoom"
// effect to enhance the browsing experience.

import { imageUrl } from "@/services/api.service";
import Image from "next/image";

type PosterPropsType = {
    path: string | null;
    alt: string;
};

export const PosterPreview = ({ path, alt }: PosterPropsType) => {
    const posterUrl = path ? `${imageUrl}${path}` : "/images/no-poster.png";

    return (
        <div className="relative w-full aspect-[2/3] overflow-hidden rounded-t-xl bg-gray-200 dark:bg-gray-800">
            <Image
                src={posterUrl}
                alt={alt || "Movie Poster"}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority
            />
        </div>
    );
};

export default PosterPreview;
