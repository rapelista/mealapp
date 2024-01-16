import { NavLink, Link } from "react-router-dom";
import { Images } from "../../utils/Images";

export const Navbar = () => {
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
            text: "Ingredients",
            path: "/ingredients",
        },
        {
            text: "Local Culinary",
            path: "/local-culinary",
        }
    ];

    return (
        <nav
            className="flex items-center justify-between px-4 py-8 border-b-2 border-gray-200"
        >
            <Link to="/">
                <img src={Images.Logo} alt="Mealapp" className="h-12" />
            </Link>

            <div className="hidden gap-4 md:flex">
                {
                    navlinks.map((link, key) => {
                        return (
                            <NavLink
                                key={key}
                                to={link.path}
                                className={({ isActive }) => {
                                    return isActive && "border-b-2 border-orange-500";
                                }}
                            >
                                {link.text}
                            </NavLink>
                        );
                    })
                }
            </div>
        </nav>
    );
};
