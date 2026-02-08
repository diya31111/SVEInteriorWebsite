import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { label: "Years Experience", value: 20, suffix: "+", width: "85%" },
    { label: "Skilled Team", value: 45, suffix: "", width: "70%" },
    { label: "Completed Projects", value: 4678, suffix: "", width: "95%" },
    { label: "Corporate Clients", value: 570, suffix: "", width: "80%" },
];

const StatBar = ({ label, value, suffix, delay, width }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <div ref={ref} className="mb-10">
            <div className="flex justify-between items-end mb-3">
                <h4 className="text-sm font-bold text-muted-brown uppercase tracking-[0.2em]">{label}</h4>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ duration: 1, delay: delay + 0.5, ease: "easeOut" }}
                    className="text-4xl font-serif text-heading leading-none"
                >
                    {value}{suffix}
                </motion.div>
            </div>
            <div className="relative h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: width } : { width: 0 }}
                    transition={{ duration: 1.5, delay: delay, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-gold/50 via-gold to-gold/50 absolute left-0 top-0"
                />
            </div>
        </div>
    );
};

export default function About() {
    return (
        <div className="bg-blush min-h-screen pt-32 pb-20 overflow-hidden">

            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-heading tracking-[0.2em] uppercase text-xs font-bold block mb-4">Discover Elegance</span>
                        <h1 className="text-5xl md:text-6xl font-serif text-heading mb-8 leading-tight">
                            The Premier Home Furnishing Showroom in <span className="text-cta italic">Jaipur</span>
                        </h1>
                        <p className="text-body-text text-lg leading-relaxed mb-6">
                            SVE Interior is an affordable home furnishing showroom in Rajapark, Jaipur. With the most efficient and qualified team of professionals, we bring to the attention of our clients a unique and trendy home and office décor through our unique styles and innovative products. We are definitely your best choice when it comes to home furnishing.
                        </p>
                        <p className="text-body-text leading-relaxed mb-12 font-light">
                            Established with a vision to redefine home decor and interior design, SVE Interior has curated a stunning collection of furnishings that cater to the discerning tastes of its clientele. From opulent sofas and luxurious beds to exquisite rugs and statement lighting, every piece in the showroom reflects a commitment to excellence and sophistication.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 pt-8 border-t border-black/5">
                            {stats.map((stat, index) => (
                                <StatBar key={index} {...stat} delay={0.2 * index} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="relative h-[800px] w-full"
                    >
                        <div className="absolute top-0 right-0 w-[80%] h-[80%] border border-gold/20 rounded-tr-[100px] z-0 translate-x-8 -translate-y-8"></div>
                        <img
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop"
                            alt="Luxury Interior Showroom"
                            className="relative z-10 w-full h-full object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-rose/90 backdrop-blur-xl z-20 rounded-full flex items-center justify-center p-6 border border-gold/30 hidden md:flex shadow-2xl">
                            <p className="text-white font-serif text-center italic text-lg leading-tight">"Design is our Passion"</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Design is Our Passion Section */}
            <section className="bg-white py-32 my-32 relative">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-rose/20 to-transparent"></div>
                    <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-rose/20 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 max-w-6xl relative z-10">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <motion.img
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
                                alt="Design Passion"
                                className="w-full h-[600px] object-cover rounded-lg shadow-lg filter brightness-95 hover:brightness-100 transition-all duration-700"
                            />
                        </div>
                        <div className="w-full md:w-1/2">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-5xl font-serif text-heading mb-10"
                            >
                                Design is Our <span className="text-cta italic">Passion</span>
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="space-y-6 text-body-text font-light text-lg leading-relaxed"
                            >
                                <p>
                                    SVE Interior is providing excellent interior designing with the best designs and creativity to all our reputed customers. Since our beginning in the marketplace, we have been offering more premium & economic modern Interior designing & flooring services to our valuable clients.
                                </p>
                                <p>
                                    Our services are extremely efficient, effective and very affordable in India. With its exquisite collection, impeccable craftsmanship, and personalized service, SVE Interior has earned its reputation as the best home furnishing showroom and store in the city.
                                </p>
                                <p className="border-l-2 border-cta pl-6 italic text-heading/80">
                                    "For those who seek to transform their homes into havens of elegance and style, SVE Interior is the ultimate destination."
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Now We Have Section */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl font-serif text-heading mb-8">Now We <span className="text-cta italic">Have</span></h2>
                        <p className="text-body-text leading-loose mb-8 text-lg">
                            We use next-gen Design, Technology, Furniture & Implementation methods, to solve not just today’s Home Interior needs, but even the ones you don’t foresee for tomorrow.
                        </p>
                        <p className="text-body-text leading-loose mb-12 text-lg">
                            We are a full home furnishing solution company that understands your need for an affordable, reliable and professional interior solution service. With a curated collection of home furnishing products, a team of talented professionals and a commitment to exceed your expectations.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            {['Curated Collections', 'Talented Professionals', 'Quality & Affordability', 'Next-Gen Technology'].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 border border-black/10 bg-white/40 rounded-lg hover:bg-rose/10 transition-colors cursor-default">
                                    <div className="w-2 h-2 bg-cta rounded-full"></div>
                                    <span className="text-heading text-sm uppercase tracking-wider">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className="relative h-[600px] group">
                        <div className="absolute inset-0 bg-gold/5 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl filter grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700"
                            alt="Interior Detail"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
