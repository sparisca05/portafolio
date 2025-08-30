import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { useTranslation } from "../hooks/useTranslation";
import Evagent from "../assets/images/evagent.webp";
import EventosEIA from "../assets/images/eventoseiabg.jpg";
import ParcodeLogo from "../assets/images/icono-logo-blanco.webp";
import MakeFunnel from "../assets/images/make-funnel.webp";

const Projects = () => {
    const { t, language } = useTranslation();

    useEffect(() => {
        const title =
            language === "en"
                ? "My Projects | Simón Parisca - Full Stack Developer"
                : "Proyectos | Simón Parisca - Desarrollador Full Stack";
        document.title = title;
    }, [language, location.pathname]);

    const projects = [
        {
            id: 1,
            titleKey: "eventosEiaTitle",
            descriptionKey: "eventosEiaDescription",
            image: EventosEIA,
            technologies: [
                "React",
                "SpringBoot",
                "PostgreSQL",
                "JWT Auth",
                "Bootstrap",
                "Docker",
                "Cloudinary",
            ],
            githubUrl: "https://github.com/sparisca05/proyectoweb",
            liveUrl: "https://proyectoweb-liart.vercel.app/",
            featured: true,
        },
        {
            id: 2,
            titleKey: "parcodeTitle",
            descriptionKey: "parcodeDescription",
            image: ParcodeLogo,
            technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
            liveUrl: "https://parcode.vercel.app",
            featured: false,
        },
        {
            id: 3,
            titleKey: "portfolioTitle",
            descriptionKey: "portfolioDescription",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
            technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
            githubUrl: "https://github.com",
            liveUrl: "https://portafolio-drab-five-86.vercel.app",
            featured: false,
        },
        {
            id: 4,
            titleKey: "evagentTitle",
            descriptionKey: "evagentDescription",
            image: Evagent,
            technologies: [
                "React",
                "TypeScript",
                "Python",
                "FastAPI",
                "AI Agents",
                "Azure OpenAI",
                "Semantic Kernel",
                "Apify",
            ],
            githubUrl: "https://github.com/sparisca05/portafolio",
            liveUrl: "https://evagent.vercel.app",
            featured: true,
        },
        {
            id: 5,
            titleKey: "makeFunnelTitle",
            descriptionKey: "makeFunnelDescription",
            image: MakeFunnel,
            technologies: [
                "Make",
                "AI",
                "Tally",
                "Notion AI",
                "GPT-4",
                "DALLE-3",
            ],
            featured: true,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                duration: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    const ProjectCard = ({ project }: { project: any; index: number }) => (
        <motion.div
            variants={itemVariants}
            className={`group relative overflow-hidden rounded-2xl bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-gray-600 transition-all duration-300 ${
                project.featured ? "md:col-span-2" : ""
            }`}
        >
            <div className="relative overflow-hidden">
                <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {/* Project links overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                        >
                            <Github size={20} className="text-white" />
                        </a>
                    )}
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-black/50 backdrop-blur-sm rounded-full hover:bg-black/70 transition-colors"
                        >
                            <ExternalLink size={20} className="text-white" />
                        </a>
                    )}
                </div>{" "}
                {project.featured && (
                    <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                            {t("featured")}
                        </span>
                    </div>
                )}
            </div>{" "}
            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {t(project.titleKey)}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                    {t(project.descriptionKey)}
                </p>

                <div className="flex flex-wrap gap-2">
                    {project.technologies.map(
                        (tech: string, techIndex: number) => (
                            <span
                                key={techIndex}
                                className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-colors cursor-default"
                            >
                                {tech}
                            </span>
                        )
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <PageTransition>
            <div className="min-h-screen bg-gray-900">
                <div className="container mx-auto px-6 py-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            {t("myProjects").split(" ")[0]}{" "}
                            <span className="text-blue-400">
                                {t("myProjects").split(" ")[1]}
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            {t("projectsDescription")}
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
                    >
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </motion.div>

                    {/* Call to Action */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="text-center mt-20"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">
                            {t("haveProjectIdea")}
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            {t("collaborateText")}
                        </p>{" "}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => (window.location.href = "/contact")}
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-blue-500/25 cursor-pointer"
                        >
                            {t("workTogether")}
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Projects;
