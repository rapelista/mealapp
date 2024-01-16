import { Link } from "react-router-dom";

export const Card = ({ to, thumbnail, name }) => {
    return (
        <Link
            to={to}
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
                    className="px-2 font-semibold text-center text-white text-medium md:text-xl"
                >
                    {name}
                </h1>
            </div>
        </Link>
    );
};
