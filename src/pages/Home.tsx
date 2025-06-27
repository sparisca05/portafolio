import { useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { useTranslation } from "../hooks/useTranslation";

const Home = () => {
    const { t, language } = useTranslation();
    const location = useLocation();

    useEffect(() => {
        // Update document title based on language and current path
        const title =
            language === "en"
                ? "Simón Parisca - Full Stack Developer"
                : "Simón Parisca - Desarrollador Full Stack";
        document.title = title;
    }, [language, location.pathname]);

    const handleDownloadCV = () => {
        // Choose CV based on language
        const cvPath = language === "en" ? "/CV/CV_EN.pdf" : "/CV/CV.pdf";
        const fileName =
            language === "en"
                ? "Simon_Parisca_CV_EN.pdf"
                : "Simon_Parisca_CV.pdf";

        const link = document.createElement("a");
        link.href = cvPath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <PageTransition>
            <div className="min-h-screen flex flex-col">
                {/* Hero Section */}
                <section className="flex-1 flex items-center justify-center px-4 pt-16">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                {t("greeting")}
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-300 mb-8">
                                {t("role")}
                            </h2>
                            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                                {t("heroDescription")}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                        >
                            <Link to="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors cursor-pointer"
                                >
                                    {t("viewProjects")}
                                </motion.button>
                            </Link>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleDownloadCV}
                                className="px-8 py-3 border border-gray-600 hover:border-gray-500 rounded-lg font-medium transition-colors hover:bg-gray-800"
                            >
                                {t("downloadCV")}
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex justify-center space-x-6"
                        >
                            <motion.a
                                whileHover={{ scale: 1.2, y: -2 }}
                                href="https://github.com/sparisca05"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Github size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, y: -2 }}
                                href="https://linkedin.com/in/simón-parisca-12ba65298/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Linkedin size={24} />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.2, y: -2 }}
                                href="mailto:simonpariscam@gmail.com"
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <Mail size={24} />
                            </motion.a>
                        </motion.div>
                    </div>
                </section>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex justify-center pb-8"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-gray-400"
                    >
                        <ChevronDown size={24} />
                    </motion.div>
                </motion.div>

                {/* Quick Stats Section */}
                <section className="py-16 px-4">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                        >
                            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                                <h3 className="text-3xl font-bold text-blue-400 mb-2">
                                    3+
                                </h3>
                                <p className="text-gray-400">
                                    {t("yearsExperience")}
                                </p>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                                <h3 className="text-3xl font-bold text-purple-400 mb-2">
                                    10+
                                </h3>
                                <p className="text-gray-400">
                                    {t("completedProjects")}
                                </p>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                                <h3 className="text-3xl font-bold text-pink-400 mb-2">
                                    8+
                                </h3>
                                <p className="text-gray-400">
                                    {t("technologies")}
                                </p>
                            </div>
                            <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
                                <h3 className="text-3xl font-bold text-green-400 mb-2">
                                    100%
                                </h3>
                                <p className="text-gray-400">
                                    {t("clientSatisfaction")}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
        </PageTransition>
    );
};

export default Home;
