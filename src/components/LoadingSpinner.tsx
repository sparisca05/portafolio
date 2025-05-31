import { motion } from "framer-motion";

const LoadingSpinner = () => {
    return (
        <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
            <div className="text-center">
                <motion.div
                    className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-400 mt-4"
                >
                    Cargando...
                </motion.p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
