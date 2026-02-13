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
                        <Link
                            key={product.id}
                            to={`/collections/${product.id}`}
                            className="break-inside-avoid mb-8 cursor-pointer group block"
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
                        </Link>
                    ))}
                </div>



            </div>
        </div>
    );
}
