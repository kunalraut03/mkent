import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, CloudSun, Maximize, Bug, Droplets, Thermometer, Activity, Sun } from 'lucide-react';
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

    // Helper: pick icon based on title keywords for flexibility
    const getIconForTitle = (title = '') => {
        const t = title.toLowerCase();
        if (t.includes('mulch') || t.includes('water')) {
            return <Droplets size={40} className="uc-icon text-blue" />;
        }
        if (t.includes('nursery') || t.includes('microclimate')) {
            return <Thermometer size={40} className="uc-icon text-orange" />;
        }
        if (t.includes('irrigation')) {
            return <CloudSun size={40} className="uc-icon text-blue" />;
        }
        if (t.includes('protected') || t.includes('cultivation')) {
            return <Leaf size={40} className="uc-icon text-green" />;
        }
        if (t.includes('climate')) {
            return <Sun size={40} className="uc-icon text-red" />;
        }
        if (t.includes('disease') || t.includes('pest')) {
            return <Bug size={40} className="uc-icon text-red" />;
        }
        if (t.includes('health')) {
            return <Activity size={40} className="uc-icon text-orange" />;
        }
        // fallback icon
        return <Maximize size={40} className="uc-icon text-green" />;
    };

    // Helper: derive partner link from leading partner tag in desc, e.g. (Fasal) or (Agriplast + Fasal)
    const getLinkForDesc = (desc = '') => {
        const tag = desc.startsWith('(') ? desc.split('\n')[0] : '';
        const hasFasal = /Fasal/i.test(tag);
        const hasAgriplast = /Agriplast/i.test(tag);
        if (hasFasal && !hasAgriplast) return '/fasal#enquiry';
        if (hasAgriplast && !hasFasal) return '/agriplast#enquiry';
        if (hasFasal && hasAgriplast) {
            // default to contact if both partners; user can choose later
            return '/contact#enquiry';
        }
        return '/contact';
    };

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
                        const desc = useCase.desc || "";
                        const icon = getIconForTitle(useCase.title);
                        const link = getLinkForDesc(desc);

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
                                    {icon}
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
                                    <Link to={link} className="learn-more-link">
                                        Enquire Now <ArrowRight size={16} />
                                    </Link>
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
