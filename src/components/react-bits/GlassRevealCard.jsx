import { motion } from 'framer-motion';

export default function GlassRevealCard({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                filter: "blur(20px)",
                scale: 0.95
            }}
            whileInView={{
                opacity: 1,
                filter: "blur(0px)",
                scale: 1
            }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: 1.2,
                ease: "easeOut",
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
