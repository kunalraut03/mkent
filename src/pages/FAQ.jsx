import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
    const { t } = useTranslation();
    const faqs = t('faq', { returnObjects: true });

    // State to track expanded questions. Format: `${categoryIndex}-${questionIndex}`
    const [expanded, setExpanded] = useState(null);

    const toggleAccordion = (index) => {
        setExpanded(expanded === index ? null : index);
    };

    if (!faqs || !faqs.categories) return <div className="container py-5 text-center">Loading...</div>;

    return (
        <div className="faq-page">
            <div className="page-header">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {faqs.title}
                    </motion.h1>
                </div>
            </div>

            <div className="container py-5 faq-content">
                {faqs.categories.map((category, catIndex) => (
                    <div key={catIndex} className="faq-category">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            {category.title}
                        </motion.h2>
                        <div className="faq-list">
                            {category.items.map((item, index) => {
                                const uniqueId = `${catIndex}-${index}`;
                                const isOpen = expanded === uniqueId;

                                return (
                                    <motion.div
                                        key={index}
                                        className={`faq-item ${isOpen ? 'open' : ''}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <button
                                            className="faq-question"
                                            onClick={() => toggleAccordion(uniqueId)}
                                            aria-expanded={isOpen}
                                        >
                                            <span className="q-icon"><HelpCircle size={18} /></span>
                                            <span className="q-text">{item.q}</span>
                                            <span className="toggle-icon">
                                                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    className="faq-answer"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="answer-content">
                                                        {item.a}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
