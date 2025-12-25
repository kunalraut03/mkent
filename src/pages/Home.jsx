import React from 'react';
import Hero from '../components/Hero';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sprout, Droplets, Shield, TrendingUp, CloudRain, Eye, Brain, ShieldCheck, Users, Briefcase, ShoppingBag, Building } from 'lucide-react';
import './Home.css';

const Home = () => {
    const { t } = useTranslation();

    const solutions = [
        { icon: <Brain size={32} color="#3b82f6" />, title: t('home.whatWeEnable.intelligence'), link: "/fasal" },
        { icon: <Droplets size={32} color="#ef4444" />, title: t('home.whatWeEnable.decisions'), link: "/fasal" },
        { icon: <Shield size={32} color="#16a34a" />, title: t('home.whatWeEnable.protection'), link: "/agriplast" },
        { icon: <TrendingUp size={32} color="#f59e0b" />, title: t('home.whatWeEnable.yield'), link: "/agriplast" },
        { icon: <CloudRain size={32} color="#6366f1" />, title: t('home.whatWeEnable.climate'), link: "/fasal" },
    ];

    const audiences = [
        { icon: <Sprout size={24} />, title: t('home.whoWeServe.farmers'), color: "#16a34a" },
        { icon: <ShoppingBag size={24} />, title: t('home.whoWeServe.dealers'), color: "#f59e0b" },
        { icon: <Briefcase size={24} />, title: t('home.whoWeServe.enterprises'), color: "#3b82f6" },
        { icon: <Building size={24} />, title: t('home.whoWeServe.greenhouse'), color: "#06b6d4" },
        { icon: <Users size={24} />, title: t('home.whoWeServe.institutional'), color: "#8b5cf6" },
    ];

    return (
        <div className="home-page">
            <Hero />

            {/* What We Enable Section */}
            <section className="section bg-light">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('home.whatWeEnable.title')}
                    </motion.h2>
                    <div className="solutions-grid">
                        {solutions.map((sol, index) => (
                            <Link to={sol.link} key={index} className="solution-card-link">
                                <motion.div
                                    className="solution-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <div className="icon-wrapper">{sol.icon}</div>
                                    <h3>{sol.title}</h3>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section bg-darker">
                <div className="container">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('home.howItWorks.title')}
                    </motion.h2>
                    <div className="process-steps">
                        <div className="step-card">
                            <Eye size={48} className="step-icon text-blue" />
                            <h3>{t('home.howItWorks.observe')}</h3>
                            <p>{t('home.howItWorks.observeDesc')}</p>
                        </div>
                        <div className="step-connector"></div>
                        <div className="step-card">
                            <Brain size={48} className="step-icon text-red" />
                            <h3>{t('home.howItWorks.decide')}</h3>
                            <p>{t('home.howItWorks.decideDesc')}</p>
                        </div>
                        <div className="step-connector"></div>
                        <div className="step-card">
                            <ShieldCheck size={48} className="step-icon text-green" />
                            <h3>{t('home.howItWorks.protect')}</h3>
                            <p>{t('home.howItWorks.protectDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Serve Section */}
            <section className="section bg-gradient">
                <div className="container">
                    <motion.h2
                        className="section-title text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {t('home.whoWeServe.title')}
                    </motion.h2>
                    <div className="audience-grid">
                        {audiences.map((aud, index) => (
                            <motion.div
                                key={index}
                                className="audience-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                style={{ borderTop: `4px solid ${aud.color}` }}
                            >
                                <div className="aud-icon" style={{ color: aud.color }}>{aud.icon}</div>
                                <span>{aud.title}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="section trust-section" id="trusted-by">
                <div className="container">
                    <h3>{t('home.trust.title')}</h3>
                    <div className="partners-strip">
                        <a href='https://agriplast.co.in' target="_blank" rel="noopener noreferrer"><span className="partner-logo-text">Agriplast</span></a>
                        <a href='https://fasal.co' target="_blank" rel="noopener noreferrer"><span className="partner-logo-text">Fasal</span></a>
                        {/* Map My Crop removed */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
