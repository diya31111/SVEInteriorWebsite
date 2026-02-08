import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { products } from '../data/products';

export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <div className="bg-blush min-h-screen pt-32 pb-20 px-6">
            <div className="container mx-auto">

                {/* Header */}
                <div className="mb-20 text-left">
                    <h1 className="text-5xl md:text-7xl font-serif text-heading mb-6">Our Collections</h1>
                    <p className="text-body-text max-w-2xl font-light text-lg">
                        Explore our meticulously curated selection of premium interior finishes.
                        Each category is designed to bring specific character and utility to your space.
                    </p>
                </div>

                {/* Simple Grid */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                            className="break-inside-avoid mb-8 cursor-pointer group"
                        >
                            <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square md:aspect-[3/4] shadow-sm hover:shadow-md transition-all duration-300 border border-soft-border">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />

                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-white/90 to-transparent">
                                    <h2 className="text-2xl font-serif text-heading">{product.title}</h2>
                                    <p className="text-body-text text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">Tap for summary</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Product Summary Modal */}
                <AnimatePresence>
                    {selectedProduct && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                            {/* Backdrop */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProduct(null)}
                                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                            />

                            {/* Modal Content */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-heading"
                                >
                                    <X size={20} />
                                </button>

                                {/* Image */}
                                <div className="h-64 sm:h-80 shrink-0 relative">
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-8 overflow-y-auto">
                                    <span className="text-cta text-xs tracking-[0.2em] font-bold uppercase block mb-2">Collection</span>
                                    <h3 className="text-3xl font-serif text-heading mb-4">{selectedProduct.title}</h3>
                                    <p className="text-body-text leading-relaxed mb-8">
                                        {selectedProduct.description}
                                    </p>

                                    <div className="flex gap-4">
                                        <Link
                                            to={`/product/${selectedProduct.id}`}
                                            className="flex-1 bg-cta text-white text-center py-3 rounded-lg uppercase tracking-widest text-xs font-bold hover:bg-rose transition-colors"
                                        >
                                            View Full Details
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    );
}
