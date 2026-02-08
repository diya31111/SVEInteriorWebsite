import { motion } from 'framer-motion';

export default function BlurText({ text, className = "", delay = 0 }) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 10,
            filter: 'blur(10px)',
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ display: "flex", flexWrap: "wrap" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {words.map((word, wordIndex) => (
                <span key={wordIndex} className={`inline-block whitespace-nowrap ${wordIndex < words.length - 1 ? 'mr-[0.25em]' : ''}`}>
                    {word.split("").map((char, charIndex) => (
                        <motion.span variants={child} key={charIndex} className="inline-block relative">
                            {char}
                        </motion.span>
                    ))}
                </span>
            ))}
        </motion.div>
    );
}
