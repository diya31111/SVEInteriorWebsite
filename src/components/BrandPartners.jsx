import { motion } from 'framer-motion';

const brands = [
    // Textile & Fabric
    { name: "D'Decor", logo: "https://ddecor.com/assets/images/logo.png" },
    { name: "GMF Fabrics", logo: "https://www.gmfabrics.com/images/logo.png" },
    { name: "Rumors", logo: "https://rumorsindia.in/wp-content/uploads/2020/09/Rumors-Logo-1.png" },
    { name: "Warwick", logo: "https://warwick.com.au/wp-content/uploads/2020/10/Warwick-Logo-Black.png" },
    { name: "Atmosphere", logo: "https://www.atmospherefabrics.com/images/atmosphere-logo.png" },
    { name: "Casamance", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e9/Casamance_logo.png" },
    { name: "Designers Guild", logo: "https://www.designersguild.com/content/images/logo.svg" },

    // Wallcoverings
    { name: "Marshalls", logo: "https://www.marshallswallcoverings.com/images/logo.png" },
    { name: "Nilaya", logo: "https://www.asianpaints.com/content/dam/asian_paints/nilaya/nilaya-logo.png" },
    { name: "Excel Wallpaper", logo: null },

    // Window Solutions
    { name: "Livin Blinds", logo: null },
    { name: "TOSO Japan", logo: "https://www.toso.co.jp/common/images/logo.svg" },
    { name: "Somfy", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Somfy_logo.svg/512px-Somfy_logo.svg.png" },
    { name: "Vista", logo: null },

    // Surfaces & Materials
    { name: "Kazage", logo: null },
    { name: "Divine", logo: null },
    { name: "NBT", logo: null },
    { name: "Newmat", logo: "https://www.newmat.com/wp-content/themes/newmat/images/logo-newmat.png" },
    { name: "Greenply", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Greenply_Industries_logo.svg/512px-Greenply_Industries_logo.svg.png" },
    { name: "Action TESA", logo: "https://www.actiontesa.com/images/logo.png" },
    { name: "HI-MACS", logo: "https://www.himacs.eu/sites/default/files/himacs-logo.svg" },
    { name: "DuPont", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/DuPont_logo.svg/512px-DuPont_logo.svg.png" },

    // Luxury & Editorial
    { name: "Versace", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Versace_Medusa_Logo.svg/512px-Versace_Medusa_Logo.svg.png" },
    { name: "AD", logo: null }
];

function BrandLogo({ brand, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            className="group relative border-r border-b border-soft-border p-6 h-32 flex items-center justify-center bg-white hover:bg-blush/30 transition-colors duration-300 cursor-default"
        >
            {brand.logo ? (
                <img
                    src={brand.logo}
                    alt={`${brand.name} Logo`}
                    loading="lazy"
                    className="max-h-10 w-auto max-w-[80%] object-contain transition-all duration-500 transform group-hover:scale-110"
                    onError={(e) => {
                        // Replace broken image with styled text
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
            ) : null}
            {/* Text fallback — always rendered, shown when no logo or logo fails */}
            <span
                className={`font-serif font-bold text-heading text-center leading-tight tracking-tight group-hover:text-cta transition-colors duration-300 ${brand.logo ? 'hidden' : 'flex'} items-center justify-center`}
                style={{ fontSize: brand.name.length > 12 ? '0.8rem' : brand.name.length > 8 ? '0.95rem' : '1.1rem' }}
            >
                {brand.name}
            </span>
        </motion.div>
    );
}

export default function BrandPartners() {
    return (
        <section className="py-24 bg-white border-t border-soft-border">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-heading mb-6">A Legacy of Luxury: <span className="italic text-cta">Our Global Brand Partners</span></h2>
                    <p className="text-body-text max-w-2xl mx-auto font-light text-lg">
                        Partnering with the world's most elite textile and decor brands—from Versace to D'Decor—to bring international quality and designer elegance to your doorstep.
                    </p>
                </div>

                {/* 8-column grid on desktop */}
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 border-t border-l border-soft-border">
                    {brands.map((brand, index) => (
                        <BrandLogo key={index} brand={brand} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
