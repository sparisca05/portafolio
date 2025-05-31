import { useState } from "react";
import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Github,
    Linkedin,
    CheckCircle,
    AlertCircle,
} from "lucide-react";
import PageTransition from "../components/PageTransition";
import { useTranslation } from "../hooks/useTranslation";
import emailjs from "@emailjs/browser";
const serviceIdSecret = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateIdSecret = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKeySecret = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<
        "idle" | "success" | "error"
    >("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus("idle");

        try {
            // Configuración de EmailJS - Reemplaza con tus propios IDs
            const serviceId = serviceIdSecret;
            const templateId = templateIdSecret;
            const publicKey = publicKeySecret;

            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_name: "Simón Parisca",
            };

            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            setSubmitStatus("success");
            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            console.error("Error sending email:", error);
            setSubmitStatus("error");
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail className="w-6 h-6" />,
            labelKey: "email",
            value: "simonpariscam@gmail.com",
            href: "mailto:simonpariscam@gmail.com",
        },
        {
            icon: <Phone className="w-6 h-6" />,
            labelKey: "phone",
            value: "+57 (318) 892-8792",
            href: "tel:+573188928792",
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            labelKey: "location",
            valueKey: "locationValue",
            href: "#",
        },
    ];

    const socialLinks = [
        {
            icon: <Github className="w-6 h-6" />,
            label: "GitHub",
            href: "https://github.com/sparisca05",
        },
        {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/simón-parisca-12ba65298/",
        },
    ];

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
                            <span className="text-blue-400">
                                {t("contactTitle")}
                            </span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            {t("contactDescription")}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-gray-800 rounded-lg p-8"
                        >
                            <h2 className="text-2xl font-semibold mb-6 text-white">
                                {t("sendMessage")}
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            {t("name")}
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                            placeholder={t("yourName")}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-300 mb-2"
                                        >
                                            {t("email")}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                            placeholder="tu@email.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        {t("subject")}
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                                        placeholder={t("subjectPlaceholder")}
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-300 mb-2"
                                    >
                                        {t("message")}
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                                        placeholder={t("messagePlaceholder")}
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg transition-colors"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            <span>{t("sending")}</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>{t("sendMessageBtn")}</span>
                                        </>
                                    )}
                                </motion.button>

                                {/* Status Messages */}
                                {submitStatus === "success" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg"
                                    >
                                        <CheckCircle className="w-5 h-5" />
                                        <span>{t("successMessage")}</span>
                                    </motion.div>
                                )}

                                {submitStatus === "error" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg"
                                    >
                                        <AlertCircle className="w-5 h-5" />
                                        <span>{t("errorMessage")}</span>
                                    </motion.div>
                                )}
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-2xl font-semibold mb-6 text-white">
                                    {t("contactInfo")}
                                </h2>
                                <div className="space-y-4">
                                    {contactInfo.map((info, index) => (
                                        <motion.div
                                            key={info.labelKey}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: 0.1 * index,
                                            }}
                                            className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors"
                                        >
                                            <div className="text-blue-400">
                                                {info.icon}
                                            </div>
                                            <div>
                                                <p className="text-sm text-gray-400">
                                                    {t(info.labelKey)}
                                                </p>
                                                {info.href !== "#" ? (
                                                    <a
                                                        href={info.href}
                                                        className="text-white hover:text-blue-400 transition-colors"
                                                    >
                                                        {info.value ||
                                                            t(info.valueKey!)}
                                                    </a>
                                                ) : (
                                                    <p className="text-white">
                                                        {info.value ||
                                                            t(info.valueKey!)}
                                                    </p>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-white">
                                    {t("followMe")}
                                </h3>
                                <div className="flex space-x-4">
                                    {socialLinks.map((link) => (
                                        <motion.a
                                            key={link.label}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-lg text-gray-400 hover:text-white hover:bg-blue-600 transition-colors"
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-lg p-6">
                                <h3 className="text-xl font-semibold mb-4 text-white">
                                    {t("readyToCollaborate")}
                                </h3>
                                <p className="text-gray-400 mb-4">
                                    {t("collaborateDescription")}
                                </p>
                                <p className="text-sm text-gray-500">
                                    {t("responseTime")}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default Contact;
