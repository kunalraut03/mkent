import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import EnquiryForm from '../components/EnquiryForm';
import './PartnerPage.css';

const PartnerPage = ({ title, description, features, products = [], color, theme = 'dark' }) => {
    const { t } = useTranslation();
    return (
        <div className="partner-page">
            <div className="partner-hero" style={{
                background: `radial-gradient(circle at top right, ${color}30, transparent 60%), var(--bg-primary)`
            }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="subtitle">{t('partners.ourPartner')}</span>
                        <h1 style={{ color: color }}>{title}</h1>
                        <p className="description">{description}</p>
                    </motion.div>
                </div>
            </div>

            <div className="container partner-content">
                <h2>{t('partners.keyFeatures')}</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ borderTop: `4px solid ${color}` }}
                        >
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {products.length > 0 && (
                    <div className="products-section" style={{ marginTop: '4rem' }}>
                        <h2>{t('partners.productRange')}</h2>
                        <div className="products-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                            gap: '1.5rem',
                            marginTop: '2rem'
                        }}>
                            {products.map((product, index) => (
                                <motion.div
                                    key={index}
                                    className="product-card"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    style={{
                                        background: 'rgba(255,255,255,0.03)',
                                        padding: '1.5rem',
                                        borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}
                                >
                                    <h4 style={{ color: color, marginBottom: '0.5rem' }}>
                                        {typeof product === 'string' ? product : product.title}
                                    </h4>
                                    {typeof product !== 'string' && product.desc && (
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                                            {product.desc}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}

                <div id="enquiry">
                    <EnquiryForm products={products} partnerName={title} source={title} />
                </div>
            </div>
        </div>
    );
};

export default PartnerPage;
