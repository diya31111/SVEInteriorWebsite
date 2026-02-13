import { motion } from 'framer-motion';

const brands = [
    { name: "D'Dedcor", logo: "https://seeklogo.com/images/D/d-decor-logo-8A19163836-seeklogo.com.png" },
    { name: "GM Fabrics", logo: "https://seeklogo.com/images/G/gm-fabrics-logo-1C55353896-seeklogo.com.png" }, // Best guess/source
    { name: "Rumors", logo: "https://rumorsindia.in/wp-content/uploads/2020/09/Rumors-Logo-1.png" }, // From official site pattern
    { name: "Warwick", logo: "https://warwick.com.au/wp-content/uploads/2020/10/Warwick-Logo-Black.png" }, // From official site
    { name: "Atmosphere", logo: "https://seeklogo.com/images/A/atmosphere-logo-9543887019-seeklogo.com.png" },
    { name: "Casamance", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Casamance_logo.png" }, // Wiki fallback
    { name: "Versace", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Versace_Medusa_Logo.svg/1200px-Versace_Medusa_Logo.svg.png" },
    { name: "DuPont", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/DuPont_logo.svg/2560px-DuPont_logo.svg.png" }
];

export default function BrandPartners() {
    return (
        <section className="py-24 bg-white border-t border-soft-border">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-heading mb-6">Our Premium <span className="italic text-cta">Product Partners</span></h2>
                    <p className="text-body-text max-w-2xl mx-auto font-light text-lg">
                        We take pride in offering products from these globally renowned brands to ensure the highest quality for your spaces.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 border-t border-l border-soft-border">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group relative border-r border-b border-soft-border p-8 h-48 flex items-center justify-center bg-white hover:bg-gray-50/50 transition-colors cursor-default"
                        >
                            {/* Logo */}
                            <img
                                src={brand.logo}
                                alt={`${brand.name} Logo`}
                                loading="lazy"
                                className="max-h-16 w-auto max-w-[80%] object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML += `<span class="text-heading font-serif font-bold text-xl">${brand.name}</span>`;
                                }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
