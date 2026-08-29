import { useTranslation } from 'react-i18next';

import ProductGrid from '../components/ProductGrid.jsx';
import { antiqueProducts } from '../data/products.js';

export default function AntiqueProducts() {
    const { t } = useTranslation();

    return (
        <>
            <section className="bg-[#F8F3EA]">
                <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4A32]">
                        {t('antiqueProducts.eyebrow')}
                    </p>

                    <h1 className="mt-4 font-serif text-4xl font-semibold text-[#33251C] sm:text-5xl">
                        {t('antiqueProducts.title')}
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6E5C4E]">
                        {t('antiqueProducts.description')}
                    </p>
                </div>
            </section>

            <section className="bg-[#FFFDFC]">
                <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
                    <ProductGrid
                        products={antiqueProducts}
                        translationPrefix="antiqueProducts.items"
                    />
                </div>
            </section>
        </>
    );
}
