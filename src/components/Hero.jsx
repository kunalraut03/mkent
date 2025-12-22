import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const words = [
    { key: "hero.words.innovative", color: "linear-gradient(90deg, #14b8a6, #2dd4bf)" },
    { key: "hero.words.intelligent", color: "linear-gradient(90deg, #3b82f6, #60a5fa)" },
    { key: "hero.words.sustainable", color: "linear-gradient(90deg, #22c55e, #4ade80)" },
    { key: "hero.words.resilient", color: "linear-gradient(90deg, #f97316, #fbbf24)" },
    { key: "hero.words.adaptive", color: "linear-gradient(90deg, #8b5cf6, #a78bfa)" },
    { key: "hero.words.efficient", color: "linear-gradient(90deg, #ec4899, #f472b6)" }
];

const Hero = () => {
    const [index, setIndex] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero">
            <div className="hero-background"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="hero-text"
                >
                    <h1>
                        {t('hero.empowering')} <br />
                        <span className="rolling-text-container">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        backgroundImage: words[index].color,
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        display: 'inline-block'
                                    }}
                                >
                                    {t(words[index].key)}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                        <br />
                        {t('hero.solutions')}
                    </h1>
                    <p>{t('hero.trustedPartner')}</p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary">
                            {t('hero.getStarted')} <ArrowRight size={20} />
                        </Link>
                        <button
                            className="btn btn-secondary"
                            onClick={() => {
                                document.getElementById('trusted-by')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {t('hero.ourPartners')}
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
