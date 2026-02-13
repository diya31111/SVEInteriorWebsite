import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
    return (
        <Link to={`/blog/${post.id}`} className="group flex flex-col h-full bg-white rounded-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 block">
            {/* Image Link */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>

            {/* Content Link */}
            <div className="p-6 flex flex-col flex-1">
                {/* Metadata */}
                <div className="flex items-center gap-3 mb-3 text-[10px] sm:text-xs tracking-widest uppercase font-bold text-gray-400">
                    <span className="text-cta">{post.category || "Design"}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-serif text-heading font-bold mb-3 leading-tight group-hover:text-cta transition-colors">
                    {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                </p>

                {/* Read More */}
                <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-heading group-hover:gap-3 transition-all">
                        Read More <span className="text-cta">→</span>
                    </span>
                </div>
            </div>
        </Link>
    );
}
