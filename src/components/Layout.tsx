import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedBackground from "./AnimatedBackground";

const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col relative">
            <AnimatedBackground />
            <Navbar />
            <main className="flex-1 relative z-10">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
