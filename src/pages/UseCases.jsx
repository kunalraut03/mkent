import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, CloudSun, Maximize, Bug, Droplets, Thermometer, Activity, QrCode, Plane, Sun, Sprout } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './UseCases.css';

const UseCases = () => {
    const { t } = useTranslation();
    const useCases = t('useCases.applications', { returnObjects: true });
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    // Configuration for icons and links matching the 9 use cases
    const useCaseConfig = [
        { icon: <Droplets size={40} className="uc-icon text-blue" />, link: "/agriplast#enquiry" }, // Mulching-Led
        { icon: <Thermometer size={40} className="uc-icon text-orange" />, link: "/agriplast#enquiry" }, // Nursery
        { icon: <Maximize size={40} className="uc-icon text-green" />, link: "/map-my-crop#enquiry" }, // Satellite
        { icon: <Bug size={40} className="uc-icon text-red" />, link: "/fasal#enquiry" }, // Pest
        { icon: <CloudSun size={40} className="uc-icon text-blue" />, link: "/fasal#enquiry" }, // Smart Irrigation
        { icon: <Leaf size={40} className="uc-icon text-green" />, link: "/agriplast#enquiry" }, // Protected Cultivation
        { icon: <Activity size={40} className="uc-icon text-orange" />, link: "/map-my-crop#enquiry" }, // Crop Health
        { icon: <Sun size={40} className="uc-icon text-red" />, link: "/fasal#enquiry" }, // Climate Resilient
        { icon: <Sprout size={40} className="uc-icon text-green" />, link: "/fasal#enquiry" } // Advisory
    ];

    if (!Array.isArray(useCases)) {
        return <div className="container py-5 text-center">Loading...</div>;
    }

    const handleScroll = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return (
        <div className="use-cases-page">
            <div className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {t('useCases.title')}
                    </motion.h1>
                </div>
            </div>

            <div className="container py-5">
                <div className="use-cases-grid">
                    {useCases.map((useCase, index) => {
                        const config = useCaseConfig[index] || { icon: <Leaf />, link: "/contact" };
                        const desc = useCase.desc || "";

                        return (
                            <motion.div
                                key={index}
                                className="use-case-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="card-icon">
                                    {config.icon}
                                </div>
                                <div className="card-content">
                                    <h3>{useCase.title}</h3>
                                    {desc.startsWith('(') ? (
                                        <>
                                            <span className="partner-tag">
                                                {desc.split('\n')[0].replace(/[()]/g, '')}
                                            </span>
                                            <p>{desc.split('\n').slice(1).join('\n')}</p>
                                        </>
                                    ) : (
                                        <p>{desc}</p>
                                    )}
                                    {/* Using standard Link with hash */}
                                    <a href={config.link} className="learn-more-link">
                                        Enquire Now <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="cta-section">
                <div className="container text-center">
                    <h2>Ready to optimize your farm?</h2>
                    <Link to="/contact" className="btn btn-primary" onClick={handleScroll}>Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default UseCases;
