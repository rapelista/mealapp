import { Link, Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";

export const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <div className="flex flex-col justify-between min-h-screen gap-8 mt-24">
                <Outlet />
                <Footer />
            </div>
        </>
    );
};
