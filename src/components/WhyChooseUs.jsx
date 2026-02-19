import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpotlightCard from './react-bits/SpotlightCard';
import { PenTool, Box, CheckCircle, Users, ShieldCheck, DollarSign, Wrench, Clock, ArrowRight } from 'lucide-react';

const features = [
    {
        icon: PenTool,
        title: "Personal Designer",
        description: "Transform your needs into functional & aesthetic designs with expert guidance."
    },
    {
        icon: Box,
        title: "VR Experience",
        description: "Try before you buy with our state-of-the-art Virtual Reality technology."
    },
    {
        icon: CheckCircle,
        title: "Impeccable Implementation",
        description: "Daily updates and personal assistance to turn design into reality."
    },
    {
        icon: Users,
        title: "Reputed Partners",
        description: " Collaborating with category experts to ensure top-tier quality."
    },
    {
        icon: ShieldCheck,
        title: "Built to Last",
        description: "Best raw materials, German machinery, and exemplary factory finish."
    },
    {
        icon: DollarSign,
        title: "Transparent Prices",
        description: "Same price guarantee whether you buy from us or our partners."
    },
    {
        icon: Wrench,
        title: "Professional Installation",
        description: "Services provided by the industry's best trained installers."
    },
    {
        icon: Clock,
        title: "Timely Accomplishments",
        description: "Committed to delivering your dream project on time, every time."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 lg:pb-36 bg-rose relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold tracking-[0.2em] uppercase text-sm font-bold mb-4"
                    >
                        The SVE Standard
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif text-white-text"
                    >
                        Why Discerning Clients <span className="italic text-white">Choose Us</span>
                    </motion.h2>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {features.map((feature, index) => (
                        <SpotlightCard
                            key={index}
                            className={`bg-[#f4e9e2] rounded-xl group border border-soft-border ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
                            spotlightColor="rgba(212, 175, 55, 0.15)"
                        >
                            <div className="p-8 h-full relative z-10">
                                <div className="w-12 h-12 bg-rose/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-rose/20 transition-colors duration-500">
                                    <feature.icon className="text-rose group-hover:drop-shadow-[0_0_8px_rgba(140,94,90,0.5)] transition-all duration-500" size={24} />
                                </div>
                                <h4 className="text-xl font-serif text-heading mb-3 group-hover:text-cta transition-colors duration-300">{feature.title}</h4>
                                <p className="text-body-text text-sm leading-relaxed mb-4 transition-colors duration-300">
                                    {feature.description}
                                </p>
                                {feature.title === "VR Experience" && (
                                    <Link to="/contact-us" className="inline-flex items-center gap-2 text-cta text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                        Book Session <ArrowRight size={14} />
                                    </Link>
                                )}
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
