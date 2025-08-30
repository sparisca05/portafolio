import { useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Code, Database, Globe, BotIcon, Megaphone } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { useTranslation } from "../hooks/useTranslation";
import profileImage from "../assets/images/mypic.jpeg";

const About = () => {
    const { t, language } = useTranslation();

    useEffect(() => {
        const title =
            language === "en"
                ? "About Me | Simón Parisca - Full Stack Developer"
                : "Acerca de | Simón Parisca - Desarrollador Full Stack";
        document.title = title;
    }, [language]);

    const skills = [
        {
            categoryKey: "frontend",
            icon: <Globe className="w-6 h-6" />,
            technologies: [
                "React",
                "React Native",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Bootstrap",
                "HTML5",
                "CSS3",
            ],
        },
        {
            categoryKey: "backend",
            icon: <Database className="w-6 h-6" />,
            technologies: [
                "Java",
                "Python",
                "JavaScript",
                "Spring Boot",
                "FastAPI",
                "Django",
                "Node.js",
                "PostgreSQL",
                "MySQL",
                "REST APIs",
            ],
        },
        {
            categoryKey: "toolsOthers",
            icon: <Code className="w-6 h-6" />,
            technologies: [
                "Git",
                "Docker",
                "Postman",
                "CI/CD",
                "Supabase",
                "Expo",
                "Vite",
                "JWT",
                "Linux CLI",
                "WSL",
            ],
        },
        {
            categoryKey: "cloud",
            icon: <Cloud className="w-6 h-6" />,
            technologies: ["AWS", "Azure", "Vercel", "Render", "Cloudinary"],
        },
        {
            categoryKey: "ai",
            icon: <BotIcon className="w-6 h-6" />,
            technologies: [
                "OpenAI",
                "Azure AI Foundry",
                "Google Gemini AI",
                "Agentic AI",
            ],
        },
        {
            categoryKey: "marketing",
            icon: <Megaphone className="w-6 h-6" />,
            technologies: [
                "Make",
                "Lead Generation",
                "Social Media Automation",
                "Marketing Campaigns",
                "Content Creation",
                "CRM Integration",
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <PageTransition>
            <div className="min-h-screen pt-24 pb-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            {t("aboutMe").split(" ")[0]}{" "}
                            <span className="text-blue-400">
                                {t("aboutMe").split(" ")[1]}
                            </span>
                        </h1>
                    </motion.div>

                    <div className="gap-12 mb-16">
                        {/* About Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-12 space-y-6"
                        >
                            <div className="relative">
                                <img
                                    src={profileImage}
                                    alt="Simón Parisca - Desarrollador Web"
                                    className="w-58 h-58 rounded-full mx-auto lg:mx-0 object-cover shadow-lg"
                                />
                                <div className="absolute inset-0 rounded-full border-4 border-blue-400/20"></div>
                            </div>

                            <div className="text-gray-300 space-y-4">
                                <p className="text-lg leading-relaxed">
                                    {t("aboutDescription1")}
                                </p>
                                <p className="leading-relaxed">
                                    {t("aboutDescription2")}
                                </p>
                                <p className="leading-relaxed">
                                    {t("aboutDescription3")}
                                </p>
                            </div>
                        </motion.div>

                        {/* Skills */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h2 className="text-2xl font-semibold mb-8 text-center lg:text-left">
                                {t("technicalSkills")}
                            </h2>
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                            >
                                {skills.map((skill) => (
                                    <motion.div
                                        key={skill.categoryKey}
                                        variants={itemVariants}
                                        className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
                                    >
                                        <div className="flex items-center mb-4">
                                            <div className="text-blue-400 mr-3">
                                                {skill.icon}
                                            </div>
                                            <h3 className="text-lg font-semibold text-white">
                                                {t(skill.categoryKey)}
                                            </h3>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.technologies.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-colors cursor-default"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mt-16"
                    >
                        <h2 className="text-2xl font-semibold mb-8 text-center">
                            {t("certifications")}
                        </h2>
                        <div className="space-y-8">
                            <div className="bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {t("ehcaTitle")}
                                    </h3>
                                    <span className="text-blue-400 font-medium block mb-2">
                                        {t("ehcaDate")}
                                    </span>
                                </div>
                                <a
                                    href="/CV/EHCA_Certification.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 md:mt-0 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-center"
                                >
                                    {t("ehcaDownload")}
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Experience Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-16"
                    >
                        <h2 className="text-2xl font-semibold mb-8 text-center">
                            {t("experience")}
                        </h2>
                        <div className="space-y-8">
                            <div className="bg-gray-800 rounded-lg p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-white">
                                        {t("coFounderDeveloper")}
                                    </h3>
                                    <span className="text-blue-400 font-medium">
                                        2024 - {t("currentTime")}
                                    </span>
                                </div>
                                <p className="text-gray-400 mb-2">Parcode</p>
                                <p className="text-gray-300 mb-4">
                                    {t("coFounderDescription")}
                                </p>
                                <a
                                    href="https://parcode.vercel.app"
                                    target="_blank"
                                    className="text-blue-400 hover:underline"
                                >
                                    {t("website")}
                                </a>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-white">
                                        {t("webDeveloper")}
                                    </h3>
                                    <span className="text-blue-400 font-medium">
                                        2023 - 2024
                                    </span>
                                </div>
                                <p className="text-gray-400 mb-2">Freelancer</p>
                                <p className="text-gray-300">
                                    {t("freelancerDescription")}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;
