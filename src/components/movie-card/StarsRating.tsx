// A precise visual rating system that converts a 10-point scale into a user-friendly 5-star display.
// It features smooth color transitions and a clear, accessible layout.

type RatingPropsType = {
    rating: number;
};

export const StarsRating = ({ rating }: RatingPropsType) => {
    const starsCount = Math.round(rating / 2);
    const formattedRating = rating ? rating.toFixed(1) : "N/A";

    return (
        <div className="flex items-center gap-1.5 my-1" title={`Rating: ${formattedRating} / 10`}>
            <div className="flex items-center gap-0.5 group/stars">
                {[1, 2, 3, 4, 5].map((star) => (
                    <span
                        key={star}
                        className={`text-base transition-transform duration-200 group-hover/stars:scale-105 ${
                            star <= starsCount
                                ? "text-amber-400 drop-shadow-[0_0_4px_rgba(251,191,36,0.4)]"
                                : "text-gray-300 dark:text-gray-600"
                        }`}
                    >
                        ★
                    </span>
                ))}
            </div>

            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
                {formattedRating}
            </span>
        </div>
    );
};

export default StarsRating;
