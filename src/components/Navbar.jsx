import { NavLink, Link } from "react-router-dom";
import { Images } from "../utils/Images";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const closeNavbar = () => {
        setIsExpanded(false);
    };

    const openNavbar = () => {
        setIsExpanded(true);
    };

    const navlinks = [
        {
            text: "Home",
            path: "/"
        },
        {
            text: "Meals",
            path: "/meals",
        },
        {
            text: "Local Culinary",
            path: "/local-culinary",
        }
    ];

    return (
        <nav
            className="fixed top-0 flex items-center justify-between w-full bg-white border-b-2 border-gray-200 md:p-8 z-[100]"
        >
            <Link to="/">
                <img src={Images.Logo} alt="Mealapp" className="h-12 m-4 md:m-0" />
            </Link>

            <button
                onClick={openNavbar}
                className="block m-4 md:hidden"
            >
                <Bars3Icon
                    className="h-8"
                />
            </button>

            <div className={`fixed top-0 z-50 flex flex-col w-full h-screen gap-0 bg-white md:h-fit md:gap-8 md:w-fit md:flex-row md:relative transition-transform duration-200 ${isExpanded ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}>
                <button
                    onClick={closeNavbar}
                    className="absolute right-0 block m-2 md:hidden"
                >
                    <XMarkIcon
                        className="h-8"
                    />
                </button>

                {
                    navlinks.map((link, key) => (
                        <NavLink
                            key={key}
                            to={link.path}
                            className={({ isActive }) => {
                                return `p-4 md:px-0 md:pt-0 md:pb-2 border-b-2 w-full" ${isActive ? "border-orange-500 text-orange-500" : "border-white text-black"}`;
                            }}
                            onClick={closeNavbar}
                        >
                            {link.text}
                        </NavLink>
                    ))
                }
            </div>
        </nav>
    );
};
