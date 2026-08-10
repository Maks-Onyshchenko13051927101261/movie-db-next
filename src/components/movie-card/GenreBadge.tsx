type GenreBadgeProps = {
    name: string;
};

export const GenreBadge = ({ name }: GenreBadgeProps) => {
    return (
        <span className="inline-block px-2 py-0.5 bg-orange-100 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 text-[10px] font-bold rounded-md uppercase tracking-wider border border-orange-200 dark:border-orange-900/50 hover:bg-orange-500 hover:text-white transition-colors duration-200">
            {name}
        </span>
    );
};

export default GenreBadge;
