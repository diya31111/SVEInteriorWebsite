import { motion } from 'framer-motion';
import { posts } from '../data/posts';
import BlogCard from '../components/BlogCard';
import { ArrowUpRight } from 'lucide-react';

export default function Blog() {
    const featuredPost = posts[0];
    const gridPosts = posts.slice(1);

    return (

        <div className="bg-blush min-h-screen pt-32 pb-20">
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
                    The Design <span className="text-body-text italic font-light">Journal</span>
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

            {/* Featured Post */}
            <div className="container mx-auto px-6 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="group relative grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-center bg-white lg:bg-transparent rounded-3xl overflow-hidden lg:overflow-visible"
                >
                    <div className="h-[400px] lg:h-[600px] w-full overflow-hidden rounded-none lg:rounded-3xl relative">
                        <div className="absolute inset-0 bg-white/20 group-hover:bg-white/0 transition-all duration-700 z-10" />
                        <img
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                        />
                    </div>
                    <div className="p-8 lg:p-0 flex flex-col justify-center">
                        <div className="mb-6 flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-cta"></span>
                            <span className="text-cta text-xs uppercase tracking-[0.2em] font-bold">Featured Story</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-serif text-heading mb-6 leading-tight group-hover:text-cta transition-colors duration-500">
                            {featuredPost.title}
                        </h2>
                        <p className="text-body-text text-lg leading-relaxed mb-8 font-light line-clamp-3 lg:line-clamp-none">
                            {featuredPost.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {featuredPost.tags?.map((tag, i) => (
                                <span key={i} className="text-xs text-body-text border border-black/10 px-3 py-1 rounded-full uppercase tracking-wider">{tag}</span>
                            ))}
                        </div>
                        <button className="flex items-center gap-3 text-heading text-sm uppercase tracking-widest font-bold group/btn self-start">
                            Read Article
                            <span className="bg-cta/10 p-2 rounded-full text-cta group-hover/btn:bg-cta group-hover/btn:text-white transition-all duration-300">
                                <ArrowUpRight size={18} />
                            </span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Grid Posts */}
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between mb-12 border-b border-black/10 pb-6">
                    <h3 className="text-2xl font-serif text-heading">Latest Articles</h3>
                    <span className="text-body-text text-sm">{gridPosts.length} Articles</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {gridPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <BlogCard post={post} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
