import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { galleryImages } from '../data/gallery';

const categories = ['All', ...new Set(galleryImages.map((img) => img.category))];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedImage, setSelectedImage] = useState(null);

    const filtered =
        activeCategory === 'All'
            ? galleryImages
            : galleryImages.filter((img) => img.category === activeCategory);

    return (
        <div className="bg-blush min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mb-16 text-left">
                    <h1 className="text-5xl md:text-7xl font-serif text-heading mb-6">
                        Our Gallery
                    </h1>
                    <p className="text-body-text max-w-2xl font-light text-lg">
                        A curated showcase of our finest interior projects — each space
                        thoughtfully designed to inspire and delight.
                    </p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${activeCategory === cat
                                    ? 'bg-[var(--bg-rose)] text-white border-[var(--bg-rose)]'
                                    : 'bg-white/60 text-[var(--text-heading)] border-[var(--border-soft)] hover:bg-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid */}
                <motion.div
                    layout
                    className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((img) => (
                            <motion.div
                                key={img.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.35 }}
                                className="break-inside-avoid cursor-pointer group"
                                onClick={() => setSelectedImage(img)}
                            >
                                <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-soft-border">
                                    <img
                                        src={img.image}
                                        alt={img.title}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                                    <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-white text-lg font-serif">
                                            {img.title}
                                        </h3>
                                        <span className="text-white/70 text-xs tracking-widest uppercase">
                                            {img.category}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25 }}
                            className="relative max-w-4xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors"
                            >
                                <X size={28} />
                            </button>
                            <img
                                src={selectedImage.image}
                                alt={selectedImage.title}
                                className="w-full rounded-xl shadow-2xl"
                            />
                            <div className="mt-4 text-center">
                                <h3 className="text-white text-2xl font-serif">
                                    {selectedImage.title}
                                </h3>
                                <span className="text-white/60 text-sm tracking-widest uppercase">
                                    {selectedImage.category}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
