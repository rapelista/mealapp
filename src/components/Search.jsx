import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const Search = ({ ...props }) => {
    return (
        <div className="relative w-full mx-auto md:w-5/12">
            <input
                type="text"
                className="w-full h-12 px-4 transition-colors duration-300 ease-in-out bg-gray-100 border-0 rounded-lg outline-none focus:bg-gray-200"
                placeholder="Search"
                {...props}
            />
            <MagnifyingGlassIcon
                className="absolute h-8 stroke-2 right-2 top-2 fill-gray-600/70"
            />
        </div>
    );
};
