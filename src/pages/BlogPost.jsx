import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag } from 'lucide-react';

export default function BlogPost() {
    const { id } = useParams();
    const post = posts.find(p => p.id === id);

    // Suggest 3 other posts
    const relatedPosts = posts
        .filter(p => p.id !== id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    if (!post) {
        return (
            <div className="min-h-screen grid place-items-center bg-white">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-heading mb-4">Post Not Found</h1>
                    <p className="text-body-text mb-8">The article you're looking for doesn't exist.</p>
                    <Link to="/blog" className="text-cta uppercase tracking-widest text-xs font-bold hover:opacity-70 transition-opacity">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Image */}
            <div className="relative h-[60vh] w-full">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-end items-center text-center px-6 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-white/80 tracking-[0.2em] uppercase text-sm font-bold block mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-white/70 text-sm">
                            <span className="flex items-center gap-2"><Clock size={14} /> {post.date}</span>
                            <span className="flex items-center gap-2"><Tag size={14} /> {post.category || "Interior"}</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-20">
                <Link to="/blog" className="inline-flex items-center gap-2 text-cta uppercase tracking-widest text-xs font-bold mb-12 hover:opacity-70 transition-opacity">
                    <ArrowLeft size={16} /> Back to Journal
                </Link>

                {/* Article Content */}
                <article className="max-w-3xl mx-auto mb-24">
                    {/* Lead excerpt */}
                    <p className="text-xl md:text-2xl font-serif italic text-heading mb-12 leading-relaxed border-l-4 border-cta/30 pl-6">
                        {post.excerpt}
                    </p>

                    {/* HTML Content */}
                    <div
                        className="prose prose-lg max-w-none
                            prose-headings:font-serif prose-headings:text-heading prose-headings:font-bold
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                            prose-p:text-body-text prose-p:font-light prose-p:leading-loose prose-p:text-lg prose-p:mb-6
                            prose-li:text-body-text prose-li:font-light prose-li:text-base prose-li:leading-relaxed
                            prose-strong:text-heading prose-strong:font-semibold
                            prose-a:text-cta prose-a:no-underline hover:prose-a:underline
                            prose-ul:my-6 prose-ul:space-y-2"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* SEO Keyword Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-soft-border">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-heading mb-4">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="inline-block bg-cta text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </article>

                {/* Related Posts */}
                <div className="border-t border-soft-border pt-16">
                    <h3 className="text-3xl font-serif text-heading mb-12 text-center">More from the Journal</h3>
                    <div className="space-y-12">
                        {relatedPosts.map((p, i) => (
                            <Link
                                key={p.id}
                                to={`/blog/${p.id}`}
                                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 border border-soft-border rounded-xl overflow-hidden bg-white hover:shadow-xl transition-shadow duration-500 group block`}
                            >
                                <div className="w-full md:w-1/2 overflow-hidden">
                                    <img src={p.image} alt={p.title} className="w-full h-full min-h-[240px] object-cover transition-transform duration-700 group-hover:scale-105" />
                                </div>
                                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                                    <span className="text-cta tracking-widest uppercase text-[10px] font-bold block mb-2">{p.category}</span>
                                    <h4 className="text-lg font-bold uppercase tracking-wide text-heading mb-3 group-hover:text-cta transition-colors">{p.title}</h4>
                                    <div className="w-full h-px bg-soft-border mb-3"></div>
                                    <p className="text-body-text text-sm font-light leading-relaxed line-clamp-2">{p.excerpt}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
