import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            icon: <Github className="w-5 h-5" />,
            href: "https://github.com/sparisca05",
            label: "GitHub",
        },
        {
            icon: <Linkedin className="w-5 h-5" />,
            href: "https://www.linkedin.com/in/simón-parisca-12ba65298/",
            label: "LinkedIn",
        },
        {
            icon: <Mail className="w-5 h-5" />,
            href: "mailto:simonpariscam@gmail.com",
            label: "Email",
        },
    ];

    return (
        <footer className="bg-gray-800 border-t border-gray-700">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div className="text-gray-400 text-sm">
                        © {currentYear} Portfolio Simón Parisca. By me.
                    </div>

                    <div className="flex space-x-4">
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-gray-700"
                                aria-label={link.label}
                            >
                                {link.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
