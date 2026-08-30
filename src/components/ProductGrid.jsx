import ProductCard from './ProductCard.jsx';

export default function ProductGrid({products, translationPrefix}) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    translationPrefix={translationPrefix}
                />
            ))}
        </div>
    );
}
