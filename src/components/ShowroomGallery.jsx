import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const showroomImages = [
    {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
        alt: "Luxury Fabric Collection",
        caption: "Exquisite Fabric Library"
    },
    {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
        alt: "Modern Living Setup",
        caption: "Live Concept Suites"
    },
    {
        src: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop",
        alt: "Wallpaper Studio",
        caption: "Wallpaper Studio"
    },
    {
        src: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop",
        alt: "Design Consultation Area",
        caption: "Design Consultation Lounge"
    }
];

export default function ShowroomGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-heading mb-4">Our Premier Showroom in <span className="italic text-cta">Raja Park</span></h2>
                    <p className="text-body-text max-w-2xl mx-auto font-light">Experience our collections firsthand in our immersive design studio.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {showroomImages.map((img, index) => (
                        <motion.div
                            key={index}
                            layoutId={`img-${index}`}
                            onClick={() => setSelectedImage(img)}
                            className="group relative aspect-[3/4] overflow-hidden rounded-lg cursor-zoom-in"
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-white/90 text-heading px-4 py-2 rounded-full text-xs uppercase tracking-widest font-bold flex items-center gap-2">
                                    <ZoomIn size={14} /> View
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-white font-serif text-lg">{img.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
                        >
                            <X size={32} />
                        </button>
                        <motion.img
                            layoutId={selectedImage.layoutId}
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="absolute bottom-8 left-0 w-full text-center text-white/80 font-serif text-xl">
                            {selectedImage.caption}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
