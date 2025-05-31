import React, { createContext, useState, useEffect } from "react";
import { translations } from "../translations/translations";

export type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

interface LanguageProviderProps {
    children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
}) => {
    const [language, setLanguage] = useState<Language>(() => {
        // Check localStorage first, then browser language, fallback to Spanish
        const savedLanguage = localStorage.getItem(
            "portfolio-language"
        ) as Language;
        if (
            savedLanguage &&
            (savedLanguage === "es" || savedLanguage === "en")
        ) {
            return savedLanguage;
        }

        // Check browser language
        const browserLanguage = navigator.language.toLowerCase();
        if (browserLanguage.startsWith("en")) {
            return "en";
        }

        return "es"; // Default to Spanish
    });

    useEffect(() => {
        localStorage.setItem("portfolio-language", language);
    }, [language]);

    const t = (key: string): string => {
        const keys = key.split(".");
        let value: any = translations[language];

        for (const k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};
