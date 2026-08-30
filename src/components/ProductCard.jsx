import { useTranslation } from 'react-i18next';

export default function ProductCard({product, translationPrefix}) {
    const { t } = useTranslation();

    return (
        <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <div className="overflow-hidden bg-[#E8DDCF]">
                <img
                    src={product.image}
                    alt={t(`${translationPrefix}.${product.id}.name`)}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div className="p-6">
                <h2 className="font-serif text-2xl font-semibold text-[#33251C]">
                    {t(`${translationPrefix}.${product.id}.name`)}
                </h2>

                <p className="mt-3 leading-7 text-[#6E5C4E]">
                    {t(`${translationPrefix}.${product.id}.description`)}
                </p>

                <div className="mt-6 space-y-2 border-t border-[#E8DDCF] pt-5 text-sm">
                    <div className="flex justify-between gap-4">
                        <span className="text-[#7A685A]">
                            {t('products.dimensions')}
                        </span>

                        <span className="font-medium text-[#33251C]">
                            {product.dimensions}
                        </span>
                    </div>

                    <div className="flex justify-between gap-4">
                        <span className="text-[#7A685A]">
                            {t('products.price')}
                        </span>

                        <span className="font-semibold text-[#8B4A32]">
                            {product.price}
                        </span>
                    </div>
                </div>
            </div>
        </article>
    );
}
