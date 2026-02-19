import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
    return (
        <Link
            to={`/blog/${post.id}`}
            className="group flex flex-col h-full bg-[#f4e9e2] rounded-xl overflow-hidden border border-soft-border hover:shadow-2xl hover:border-cta/30 transition-all duration-500 block"
        >
            {/* Cover Image — Large */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-1">
                {/* Metadata */}
                <div className="flex items-center gap-3 mb-4 text-[10px] sm:text-xs tracking-widest uppercase font-bold">
                    <span className="text-cta">{post.category || "Design"}</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400">{post.date}</span>
                </div>

                {/* Title — Serif */}
                <h3 className="text-xl md:text-2xl font-serif text-heading font-bold mb-4 leading-snug group-hover:text-cta transition-colors duration-300">
                    {post.title}
                </h3>

                {/* Excerpt — 2 lines */}
                <p className="text-body-text text-sm leading-relaxed mb-8 line-clamp-2 font-light">
                    {post.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-auto pt-4 border-t border-soft-border">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-heading group-hover:text-cta group-hover:gap-4 transition-all duration-300">
                        Read More <span className="text-cta">→</span>
                    </span>
                </div>
            </div>
        </Link>
    );
}
