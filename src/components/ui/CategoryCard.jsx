import { Link } from "react-router-dom";

export const CategoryCard = ({ name, thumbnail }) => {
    return (
        <Link
            to={`/meals/${name.toLowerCase()}`}
            className="relative mx-auto overflow-hidden rounded-xl group"
        >
            <img
                src={thumbnail}
                alt={name}
                className="transition-all duration-200 scale-110 duration group-hover:scale-125"
            />
            <div
                className="absolute top-0 flex items-center justify-center w-full h-full py-2 transition-all bg-slate-600/40 group-hover:bg-slate-600/10"
            >
                <h1
                    className="text-xl font-semibold text-white"
                >
                    {name}
                </h1>
            </div>
        </Link>
    );
};
