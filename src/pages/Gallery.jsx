import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

// Import images ONLY
const imageModules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,svg,webp}', { eager: true });

const Gallery = () => {
    const { t } = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const images = Object.values(imageModules).map((mod) => mod.default);

    useEffect(() => {
        if (!isPaused && images.length > 0) {
            const interval = setInterval(() => {
                paginate(1);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [currentIndex, isPaused, images.length]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0) nextIndex = images.length - 1;
            if (nextIndex >= images.length) nextIndex = 0;
            return nextIndex;
        });
    };

    return (
        <div className="gallery-page">
            <div className="gallery-container">
                <div className="gallery-header">
                    <h1>{t('nav.gallery')}</h1>
                    <p>{t('gallery.subtitle', 'Explore our Visual Journey')}</p>
                </div>

                {images.length === 0 ? (
                    <div className="no-items">
                        <p>No images found in the gallery.</p>
                    </div>
                ) : (
                    <div
                        className="carousel-container"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <div className="carousel-wrapper">
                            <AnimatePresence initial={false} custom={direction}>
                                <motion.img
                                    key={currentIndex}
                                    src={images[currentIndex]}
                                    custom={direction}
                                    variants={slideVariants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        x: { type: "spring", stiffness: 300, damping: 30 },
                                        opacity: { duration: 0.2 }
                                    }}
                                    drag="x"
                                    dragConstraints={{ left: 0, right: 0 }}
                                    dragElastic={1}
                                    onDragEnd={(e, { offset, velocity }) => {
                                        const swipe = swipePower(offset.x, velocity.x);

                                        if (swipe < -swipeConfidenceThreshold) {
                                            paginate(1);
                                        } else if (swipe > swipeConfidenceThreshold) {
                                            paginate(-1);
                                        }
                                    }}
                                    className="carousel-image"
                                    alt={`Gallery image ${currentIndex + 1}`}
                                />
                            </AnimatePresence>
                        </div>

                        {/* Controls Overlay */}
                        <div className="carousel-controls">
                            <button className="control-btn prev" onClick={() => paginate(-1)}>
                                <ChevronLeft size={32} />
                            </button>
                            <button className="control-btn next" onClick={() => paginate(1)}>
                                <ChevronRight size={32} />
                            </button>
                        </div>

                        {/* Pagination Dots */}
                        <div className="carousel-dots">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1);
                                        setCurrentIndex(index);
                                    }}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
