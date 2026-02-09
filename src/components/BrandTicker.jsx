import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useRef } from 'react';

const brands = [
    "D'Decor", "GMF", "Rumors", "Warwick", "Atmosphere", "Casamance",
    "Marburg Wallcoverings", "Nilaya", "Excel Wallcoverings", "Kazāgē",
    "Versace", "Designers Guild", "Livin Blinds", "TOSO (Japan)", "Somfy",
    "AD", "Divine", "NBT", "Vald’or", "Newmat", "Greenpanel",
    "Asian TESA", "HI-MACS", "LG Hausys", "DuPont"
];

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${v}%`);
    const skew = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]); // Skew based on speed

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);

        // Wrap logic
        // Increased wrap threshold to account for longer list
        if (baseX.get() <= -100) {
            baseX.set(0);
        } else if (baseX.get() >= 0) {
            baseX.set(-100);
        }
    });

    return (
        <motion.div className="flex whitespace-nowrap gap-16" style={{ x, skewX: skew }}>
            {children}
            {children}
        </motion.div>
    );
}

export default function BrandTicker() {
    return (
        <div className="bg-blush border-b border-soft-border py-12 overflow-hidden relative">
            <ParallaxText baseVelocity={3}>
                {brands.map((brand, index) => (
                    <span
                        key={index}
                        className="text-3xl md:text-5xl font-serif text-heading/20 font-bold uppercase tracking-widest px-8 hover:text-heading transition-colors cursor-default block"
                    >
                        {brand}
                    </span>
                ))}
            </ParallaxText>

            {/* Fade Edges for depth */}
            <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-blush to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-blush to-transparent z-10 pointer-events-none"></div>
        </div>
    );
}
