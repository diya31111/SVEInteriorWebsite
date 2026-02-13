import { motion } from 'framer-motion';

const clients = [
    // Hospitality & Corporate
    { name: 'Radisson', logo: 'https://cdn.worldvectorlogo.com/logos/radisson-blu.svg' },
    { name: 'State Bank of India', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/2048px-SBI-logo.svg.png' },
    { name: 'Audi', logo: 'https://cdn.worldvectorlogo.com/logos/audi-13.svg' },
    { name: 'Honda', logo: 'https://cdn.worldvectorlogo.com/logos/honda-12.svg' },
    { name: 'KIA', logo: 'https://cdn.worldvectorlogo.com/logos/kia-3.svg' },
    { name: 'Nexa', logo: 'https://cdn.worldvectorlogo.com/logos/nexa.svg' },

    // Construction & Materials
    { name: 'Asian Paints', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/Asian_Paints_Logo_2012.svg/1200px-Asian_Paints_Logo_2012.svg.png' },
    { name: 'Greenply', logo: 'https://companieslogo.com/img/orig/GREENPLY.NS-628469ad.png?t=1612567268' },
    { name: 'CenturyPly', logo: 'https://companieslogo.com/img/orig/CENTURYPLY.NS-4752c035.png?t=1611209701' },
    { name: 'Jaquar', logo: 'https://seeklogo.com/images/J/jaquar-logo-5D1828D2DC-seeklogo.com.png' },
    { name: 'Havells', logo: 'https://cdn.worldvectorlogo.com/logos/havells-logo.svg' },
    { name: 'Philips', logo: 'https://cdn.worldvectorlogo.com/logos/philips-1.svg' },

    // Interior & Decor
    { name: "D'Decor", logo: 'https://seeklogo.com/images/D/d-decor-logo-8A19163836-seeklogo.com.png' },
    { name: 'Kajaria', logo: 'https://cdn.worldvectorlogo.com/logos/kajaria-tiles.svg' },
    { name: 'Somany', logo: 'https://cdn.worldvectorlogo.com/logos/somany-tiles.svg' },
    { name: 'Fenesta', logo: 'https://seeklogo.com/images/F/fenesta-windows-logo-DA2E43B378-seeklogo.com.png' },
    { name: 'Saint-Gobain', logo: 'https://cdn.worldvectorlogo.com/logos/saint-gobain.svg' },
    { name: 'Pidilite', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Pidilite_logo.svg/1200px-Pidilite_logo.svg.png' },

    // Additional Fillers to reach 20+
    { name: 'RK Marble', logo: 'https://www.rkmarble.com/wp-content/uploads/2023/11/logo.png' }, // Direct from source if possible
    { name: 'Marriott', logo: 'https://cdn.worldvectorlogo.com/logos/marriott.svg' },
    { name: 'Hyatt', logo: 'https://cdn.worldvectorlogo.com/logos/hyatt.svg' },
    { name: 'Taj Hotels', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/Taj_Hotels_logo.svg/1200px-Taj_Hotels_logo.svg.png' },
    { name: 'Oberoi Hotels', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Oberoi_Hotels_Logo.svg/1200px-Oberoi_Hotels_Logo.svg.png' },
    { name: 'DLF', logo: 'https://cdn.worldvectorlogo.com/logos/dlf.svg' }
];

export default function ClientsGrid() {
    return (
        <section className="py-24 bg-white">
            <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-gold tracking-[0.2em] uppercase text-xs font-bold block mb-4">Trusted By The Best</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-heading">Our Esteemed <span className="italic text-body-text font-light">Clients</span></h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-soft-border">
                    {clients.map((client, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group relative border-r border-b border-soft-border p-8 h-40 flex items-center justify-center bg-white hover:bg-gray-50/50 transition-colors cursor-default"
                        >
                            {/* Logo */}
                            <img
                                src={client.logo}
                                alt={`${client.name} Logo`}
                                loading="lazy"
                                className="max-h-12 w-auto max-w-[80%] object-contain transition-all duration-500 transform group-hover:scale-110"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
