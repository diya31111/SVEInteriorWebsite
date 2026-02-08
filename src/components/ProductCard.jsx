import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
    return (
        <div className="bg-white border border-soft-border p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded-lg" />
            <h2 className="text-xl font-serif text-heading mb-2">{product.title}</h2>
            <Link to={`/products/${product.id}`} className="text-cta uppercase text-xs font-bold tracking-wider hover:text-heading transition-colors inline-block mt-2">View Details</Link>
        </div>
    );
}
