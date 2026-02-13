import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Tag } from 'lucide-react';
import BlogCard from '../components/BlogCard';

export default function BlogPost() {
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id));

    // Suggest 3 other posts
    const relatedPosts = posts
        .filter(p => p.id !== parseInt(id))
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    if (!post) {
        return <div className="min-h-screen grid place-items-center text-heading">Post not found</div>;
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
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl"
                    >
                        <span className="text-white/80 tracking-[0.2em] uppercase text-sm font-bold block mb-4">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
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
                <article className="max-w-3xl mx-auto prose prose-lg prose-headings:font-serif prose-p:font-light prose-p:text-body-text prose-a:text-cta mb-24">
                    <p className="lead text-xl md:text-2xl font-serif italic text-heading mb-10 leading-relaxed">
                        {post.excerpt}
                    </p>
                    <div className="whitespace-pre-wrap text-lg leading-loose text-body-text">
                        {post.content || "Content for this article is being updated. Please check back soon for the full story."}
                    </div>
                </article>

                {/* Related Posts */}
                <div className="border-t border-soft-border pt-16">
                    <h3 className="text-3xl font-serif text-heading mb-12 text-center">More from the Journal</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {relatedPosts.map(p => (
                            <div key={p.id} className="h-full">
                                <BlogCard post={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
