import { useState, useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowLeft, User, Phone, Mail } from 'lucide-react';
import BlurText from '../components/react-bits/BlurText';
import DesignGuidanceBlock from '../components/DesignGuidanceBlock';

// Window Pan Image Component
const WindowPanImage = ({ src, alt, layoutId }) => {
    const containerRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring physics for laggy "pan" feel
    const springX = useSpring(x, { stiffness: 100, damping: 30 });
    const springY = useSpring(y, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e) => {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        // Calculate distance from center
        const offsetX = e.clientX - centerX;
        const offsetY = e.clientY - centerY;

        // Move image OPPOSITE to mouse (pan effect)
        // Max shift of 20px
        const maxShift = 20;
        const moveX = (offsetX / (width / 2)) * -maxShift;
        const moveY = (offsetY / (height / 2)) * -maxShift;

        // Update motion values
        x.set(moveX);
        y.set(moveY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-[85vh] overflow-hidden rounded-sm cursor-none"
        >
            <motion.img
                layoutId={layoutId}
                src={src}
                alt={alt}
                style={{ x: springX, y: springY, scale: 1.15 }} // 1.15 scale to avoid edges showing
                className="w-full h-full object-cover pointer-events-none"
            />
            {/* Optional: Subtle Overlay/Vignette */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        </div>
    );
};

export default function ProductDetail() {
    const { id } = useParams();
    const product = products.find(p => p.id === id);

    if (!product) return <div className="text-white text-center pt-32">Product not found</div>;

    // Use gallery if available, otherwise just use the main image as a single item array
    const displayImages = (product.gallery && product.gallery.length > 0)
        ? product.gallery
        : [product.image];
    const relatedProjects = products
        .filter(p => p.id !== id)
        .slice(0, 3)
        .map(p => ({
            ...p,
            location: "Jaipur, India",
            client: "Private Residence"
        }));

    return (

        <div className="bg-blush min-h-screen">
            {/* Header */}
            <div className="container mx-auto px-6 pt-32 pb-8">
                <Link to="/our-products" className="inline-flex items-center text-body-text hover:text-cta transition-colors gap-2 uppercase tracking-widest text-xs font-bold">
                    <ArrowLeft size={16} /> Back to Collection
                </Link>
            </div>

            <main className="container mx-auto px-6 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* LEft Column: Visuals (Editorial Stack) */}
                    <div className="lg:col-span-7 space-y-24">
                        {displayImages.map((img, index) => (
                            <WindowPanImage
                                key={index}
                                src={img}
                                alt={`${product.title} - View ${index + 1}`}
                                layoutId={index === 0 ? product.id : null}
                            />
                        ))}
                    </div>

                    {/* Right Column: Info (Sticky) */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-24 h-fit space-y-12">

                            {/* Title & Description */}
                            <div>
                                <span className="text-cta tracking-[0.2em] uppercase text-xs font-bold mb-4 block">Signature Collection</span>
                                <div className="text-5xl md:text-7xl font-serif text-heading mb-6 leading-none">
                                    <BlurText text={product.title} delay={0.1} />
                                </div>

                                {/* Application Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {['Living Room', 'Commercial Grade', 'Acoustic'].map((tag, i) => (
                                        <span key={i} className="px-3 py-1 rounded-full border border-soft-border text-body-text text-[10px] uppercase tracking-wider bg-white/40">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-heading text-lg leading-relaxed font-light">
                                    {product.longDescription || product.description}
                                </p>
                            </div>

                            {/* Designer's Note */}
                            <div className="pl-6 border-l-2 border-cta py-2">
                                <p className="text-3xl font-serif italic text-heading/90 leading-tight">
                                    "Designed to define spaces with acoustic perfection and visual warmth."
                                </p>
                            </div>

                            {/* Editorial Insight Block */}
                            <DesignGuidanceBlock productId={product.id} />



                        </div>
                    </div>

                </div>
            </main>

            {/* Live Implementations / Related Projects */}
            <div className="container mx-auto px-6 mt-12 mb-20 border-t border-black/5 pt-16">
                <div className="flex items-end justify-between mb-12">
                    <h3 className="text-3xl font-serif text-heading">Live Implementations</h3>
                    <Link to="/our-products" className="text-xs text-cta uppercase tracking-widest hover:text-heading transition-colors">View All &rarr;</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {relatedProjects.map((p, idx) => (
                        <Link to={`/product/${p.id}`} key={idx} className="group cursor-pointer">
                            <div className="overflow-hidden rounded-xl aspect-[4/5] mb-4 relative">
                                <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={p.title} />
                                <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors" />
                            </div>
                            <h4 className="text-heading font-serif text-xl">{p.title}</h4>
                            <p className="text-body-text text-sm">{p.category || "Collection"}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
