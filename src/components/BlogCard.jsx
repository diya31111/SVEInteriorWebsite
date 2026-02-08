export default function BlogCard({ post }) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 border border-soft-border shadow-lg flex flex-col h-full hover:shadow-xl hover:border-cta/30">
            <div className="h-64 overflow-hidden relative shrink-0">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="p-8 flex flex-col flex-1">
                <span className="text-cta text-[10px] uppercase tracking-[0.2em] font-bold block mb-4">{post.date || "Latest Post"}</span>
                <h2 className="text-2xl font-serif text-heading mb-4 leading-snug group-hover:text-cta transition-colors">{post.title}</h2>
                <p className="text-body-text text-sm leading-loose mb-6 line-clamp-3">{post.excerpt}</p>

                <button className="mt-auto flex items-center gap-2 text-heading text-xs uppercase tracking-widest font-bold group-hover:gap-4 transition-all group-hover:text-cta">
                    Read Article <span className="text-cta">→</span>
                </button>
            </div>
        </div>
    );
}
