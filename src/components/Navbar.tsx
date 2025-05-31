import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import LanguageToggle from "./LanguageToggle";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const { t } = useTranslation();

    const navItems = [
        { name: t("home"), path: "/" },
        { name: t("projects"), path: "/projects" },
        { name: t("about"), path: "/about" },
        { name: t("contact"), path: "/contact" },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold text-white hover:text-blue-400 transition-colors"
                    >
                        Portfolio
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    location.pathname === item.path
                                        ? "text-blue-400 bg-blue-400/10"
                                        : "text-gray-300 hover:text-white hover:bg-gray-800"
                                }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <LanguageToggle />
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <LanguageToggle />
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                            location.pathname === item.path
                                                ? "text-blue-400 bg-blue-400/10"
                                                : "text-gray-300 hover:text-white hover:bg-gray-800"
                                        }`}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
