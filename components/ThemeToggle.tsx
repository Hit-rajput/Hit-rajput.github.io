import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
    // 1. Initialize state from local storage or system preference
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme === 'dark';
            }
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        return true;
    });

    // 2. Effect to update the DOM when isDark changes
    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    // 3. Handle the toggle action
    const toggleTheme = () => setIsDark(!isDark);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <motion.button
                onClick={toggleTheme}
                className="relative flex items-center justify-center w-14 h-14 rounded-full glass-panel shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden border border-glass-border"
                data-cursor="block"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                {/* Subtle gradient background on the button itself */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                        <motion.div
                            key="moon"
                            initial={{ y: -20, opacity: 0, rotate: -90 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: 20, opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                            className="text-accent-primary pointer-events-none"
                        >
                            <Moon size={24} fill="currentColor" className="opacity-80" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="sun"
                            initial={{ y: -20, opacity: 0, rotate: -90 }}
                            animate={{ y: 0, opacity: 1, rotate: 0 }}
                            exit={{ y: 20, opacity: 0, rotate: 90 }}
                            transition={{ duration: 0.2 }}
                            className="text-amber-400 pointer-events-none"
                        >
                            <Sun size={24} fill="currentColor" className="opacity-80" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};

export default ThemeToggle;
