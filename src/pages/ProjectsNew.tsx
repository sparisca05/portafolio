import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import PageTransition from "../components/PageTransition";

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description:
                "Una plataforma de comercio electrónico completa con React, Node.js y MongoDB. Incluye carrito de compras, sistema de pagos y panel de administración.",
            image: "https://via.placeholder.com/400x250?text=E-commerce+Project",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
        },
        {
            id: 2,
            title: "Task Manager App",
            description:
                "Aplicación de gestión de tareas con funcionalidades avanzadas como drag & drop, colaboración en tiempo real y notificaciones.",
            image: "https://via.placeholder.com/400x250?text=Task+Manager",
            technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description:
                "Dashboard del clima con visualización de datos en tiempo real, mapas interactivos y pronósticos extendidos.",
            image: "https://via.placeholder.com/400x250?text=Weather+Dashboard",
            technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
            githubUrl: "https://github.com",
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
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
                            Mis <span className="text-blue-400">Proyectos</span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Una colección de proyectos que demuestran mis
                            habilidades en desarrollo web y software. Cada
                            proyecto representa diferentes tecnologías y
                            desafíos únicos.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                            >
                                <div className="relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                                        <motion.a
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 bg-gray-900 rounded-full text-white hover:bg-gray-700 transition-colors"
                                        >
                                            <Github size={20} />
                                        </motion.a>
                                        {project.liveUrl && (
                                            <motion.a
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-white">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-400 mb-4 text-sm">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-blue-600/20 text-blue-400 text-xs rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Projects;
