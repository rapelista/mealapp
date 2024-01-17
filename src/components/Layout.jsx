import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = () => {
    return (
        <div className="flex flex-col justify-between min-h-screen gap-8">
            <div>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
