import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";

const LanguageToggle = () => {
    const { language, setLanguage } = useTranslation();

    const toggleLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-gray-300 hover:text-white"
            title={`Switch to ${language === "es" ? "English" : "Español"}`}
        >
            <Globe size={18} />
            <span className="text-sm font-medium">
                {language === "es" ? "EN" : "ES"}
            </span>
        </motion.button>
    );
};

export default LanguageToggle;
