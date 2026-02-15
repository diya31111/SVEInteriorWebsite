import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/gallery';
import BlurText from '../components/react-bits/BlurText';
import CircularGallery from '../components/react-bits/CircularGallery';

export default function Gallery() {
    // Map gallery images to CircularGallery format
    // Using 'category' as the text for shorter titles as requested by user.
    const circularItems = galleryImages.map(item => ({
        image: item.image,
        text: {
            title: item.title,
            subtitle: item.category.toUpperCase()
        }
    }));

    return (
        <div className="bg-blush min-h-screen pt-32 pb-20">
            <div className="container mx-auto px-6 mb-12">
                <BlurText
                    text="Our Gallery"
                    className="text-4xl md:text-5xl font-serif text-heading mb-8 text-center"
                    delay={15}
                    animateBy="words"
                    direction="top"
                />
                <p className="text-body-text text-center max-w-2xl mx-auto mb-16">
                    A curated selection of our finest interior transformations.
                    <br /><span className="text-xs text-gold uppercase tracking-widest mt-2 block">Drag to Explore</span>
                </p>
            </div>

            {/* Circular Gallery Container */}
            <div style={{ height: '800px', position: 'relative', width: '100%', overflow: 'hidden' }}>
                <CircularGallery
                    items={circularItems}
                    bend={2}
                    textColor="#7A5C58" // using text-heading hex directly as it might be passed to canvas/webgl
                    borderRadius={0.05}
                    font="bold 40px serif" // Larger, serif font for luxury feel
                />
            </div>
        </div>
    );
}
