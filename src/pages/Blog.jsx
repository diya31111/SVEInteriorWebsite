import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import BlogCard from '../components/BlogCard';
import { ArrowUpRight } from 'lucide-react';

export default function Blog() {
    return (
        <div className="bg-white min-h-screen pt-32 pb-20">
            {/* Header */}
            <div className="container mx-auto px-6 mb-20 text-center relative">
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-cta tracking-[0.3em] uppercase text-xs font-bold block mb-6"
                >
                    Insights & Inspiration
                </motion.span>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-serif text-heading mb-8"
                >
                    The Design <span className="text-body-text italic font-light">Blog</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-body-text max-w-2xl mx-auto font-light leading-relaxed text-lg"
                >
                    Exploring the intersection of luxury, comfort, and architectural innovation.
                </motion.p>
            </div>

            {/* Editorial Grid */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {posts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            className="h-full"
                        >
                            <BlogCard post={post} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
