import React from 'react';
import { motion } from 'framer-motion';

const insights = {
    'stretch-ceiling': "Reflect light to create an illusion of infinite height. Use glossy finishes in compact areas to dramatically expand perception.",
    'wallpaper': "Walls are the canvas of mood. Texture adds depth where color alone falls flat; consider metallic accents for evening elegance.",
    'blinds': "Shadow is just as important as light. Layering sheers with block-outs allows you to sculpt the day's ambiance hour by hour.",
    'sofa-upholstery': "Touch is the first sense of comfort. Prioritize tactile richness-velvets for warmth, linens for breathability-to ground the living experience.",
    'wooden-flooring': "Ground your space with organic warmth. The grain direction guides the eye, subtly dictating the flow and energy of a room.",
    'acoustic-panels': "Silence is the ultimate luxury. Beyond aesthetics, dampen the noise of modern life to create a sanctuary of focus and calm.",
    'decking-cladding': "Architecture shouldn't stop at the structure. Use cladding to add three-dimensional rhythm to flat facades and feature walls.",
    'curtains': "Softness balances structure. Let fabric pool slightly on the floor for a relaxed, European look that softens modern architectural lines.",
    'pergolas-gazebos': "Blur the boundary between indoors and out. A pergola isn't just a roof; it's a transition zone that extends your living area into nature.",
    'wall-to-wall-carpets': "Softness underfoot transforms a room's acoustics and comfort level, creating a truly luxurious, hotel-like atmosphere.",
    'vertical-garden': "Bring life to static walls. Vertical gardens introduce organic chaos that balances the rigid lines of modern architecture.",
    'default': "Good design is not just about how it looks, but how it feels. Every element should contribute to a cohesive narrative of comfort and style."
};

export default function DesignGuidanceBlock({ productId }) {
    const insight = insights[productId] || insights['default'];

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pl-6 border-l w-full border-heading/20 py-4"
        >
            <h3 className="text-heading font-serif text-lg mb-3 tracking-wide">Design Insight</h3>
            <p className="text-body-text font-serif italic text-xl leading-relaxed opacity-80">
                "{insight}"
            </p>
        </motion.div>
    );
}
