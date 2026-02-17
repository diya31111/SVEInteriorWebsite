import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { posts } from '../data/posts';

export default function Blog() {
    return (
        <div className="bg-blush min-h-screen pt-32 pb-24">
            {/* Header */}
            <div className="container mx-auto px-6 mb-20 text-center">
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
                    The Design <span className="italic font-light" style={{ color: '#C08A7A' }}>Blog</span>
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

            {/* Alternating Blog Rows */}
            <div className="container mx-auto px-6 lg:px-12">
                {posts.map((post, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="mb-20 last:mb-0"
                        >
                            {/* Card with glassmorphism-style surface */}
                            <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 border border-soft-border rounded-xl overflow-hidden bg-secondary hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group`}>
                                {/* Image Side — 50% */}
                                <div className="w-full md:w-1/2 relative overflow-hidden">
                                    <Link to={`/blog/${post.id}`} className="block h-full">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full min-h-[300px] md:min-h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </Link>
                                </div>

                                {/* Text Side — 50% */}
                                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    {/* Category & Date */}
                                    <div className="flex items-center gap-3 mb-4 text-[10px] sm:text-xs tracking-widest uppercase font-bold">
                                        <span className="text-cta">{post.category || "Design"}</span>
                                        <span className="text-soft-border">•</span>
                                        <span className="text-body-text/60">{post.date}</span>
                                    </div>

                                    {/* Title — Serif, Brand Burgundy */}
                                    <Link to={`/blog/${post.id}`}>
                                        <h2 className="text-xl md:text-2xl font-serif font-bold text-heading mb-0 leading-tight hover:text-cta transition-colors duration-300">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    {/* Divider */}
                                    <div className="w-full h-px bg-soft-border my-5"></div>

                                    {/* Excerpt */}
                                    <p className="text-body-text text-sm md:text-base leading-relaxed font-light mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* SEO Keyword Tags — Brand burgundy/deep chocolate */}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {post.tags.map((tag, i) => (
                                                <span
                                                    key={i}
                                                    className="inline-block text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-sm border border-heading/20 text-heading/80 bg-blush/30"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {/* Read More Button — Dark branded */}
                                    <div className="mt-auto">
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-3 group/btn"
                                        >
                                            <span className="text-sm font-bold uppercase tracking-widest text-heading">
                                                Read More
                                            </span>
                                            <span className="w-8 h-8 bg-heading flex items-center justify-center rounded-sm group-hover/btn:bg-cta transition-colors duration-300">
                                                <ArrowRight size={14} className="text-white" />
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </div>
    );
}
