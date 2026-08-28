import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import hero from '../images/home/hero.jpeg';
import heart from '../images/home/heart.jpeg';
import owl from '../images/home/owl.jpeg';
import santa from '../images/home/santa.jpeg';
import antique from '../images/home/antique.jpg';

export default function Home() {
    const { t } = useTranslation();

    const featuredProducts = [
        {
            id: 1,
            image: heart,
            name: t('home.featured.products.first.name'),
        },
        {
            id: 2,
            image: owl,
            name: t('home.featured.products.second.name'),
        },
        {
            id: 3,
            image: santa,
            name: t('home.featured.products.third.name'),
        },
    ];

    return (
        <>
            <section className="bg-[#F8F3EA]">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-24">
                    <div>
                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4A32]">
                            {t('home.hero.eyebrow')}
                        </p>

                        <h1 className="max-w-xl font-serif text-4xl font-semibold leading-tight text-[#33251C] sm:text-5xl lg:text-6xl">
                            {t('home.hero.title')}
                        </h1>

                        <p className="mt-6 max-w-xl text-lg leading-8 text-[#6E5C4E]">
                            {t('home.hero.description')}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/spekulaasplanken"
                                className="rounded-full bg-[#8B4A32] px-6 py-3 font-medium text-white transition hover:bg-[#713B29]"
                            >
                                {t('home.hero.productsButton')}
                            </Link>

                            <Link
                                to="/contact"
                                className="rounded-full border border-[#8B4A32] px-6 py-3 font-medium text-[#8B4A32] transition hover:bg-[#8B4A32] hover:text-white"
                            >
                                {t('home.hero.contactButton')}
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-[2rem] bg-[#E8DDCF]">
                            <img
                                src={hero}
                                alt={t('home.hero.imageAlt')}
                                className="aspect-[4/3] h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white px-6 py-4 shadow-sm sm:block">
                            <p className="font-serif text-lg font-semibold text-[#33251C]">
                                {t('home.hero.cardTitle')}
                            </p>

                            <p className="mt-1 text-sm text-[#7A685A]">
                                {t('home.hero.cardText')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
                    <div className="order-2 lg:order-1">
                        <div className="overflow-hidden rounded-[2rem] bg-[#E8DDCF]">
                            <img
                                src={hero}
                                alt={t('home.about.imageAlt')}
                                className="aspect-[4/3] h-full w-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4A32]">
                            {t('home.about.eyebrow')}
                        </p>

                        <h2 className="font-serif text-3xl font-semibold text-[#33251C] sm:text-4xl">
                            {t('home.about.title')}
                        </h2>

                        <p className="mt-6 leading-8 text-[#6E5C4E]">
                            {t('home.about.description')}
                        </p>

                        <p className="mt-4 leading-8 text-[#6E5C4E]">
                            {t('home.about.descriptionSecond')}
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8F3EA]">
                <div className="mx-auto max-w-7xl px-6 py-20">
                    <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                        <div>
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4A32]">
                                {t('home.featured.eyebrow')}
                            </p>

                            <h2 className="font-serif text-3xl font-semibold text-[#33251C] sm:text-4xl">
                                {t('home.featured.title')}
                            </h2>

                            <p className="mt-4 max-w-2xl leading-7 text-[#6E5C4E]">
                                {t('home.featured.description')}
                            </p>
                        </div>

                        <Link
                            to="/spekulaasplanken"
                            className="font-medium text-[#8B4A32] transition hover:text-[#713B29]"
                        >
                            {t('home.featured.viewAll')} →
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {featuredProducts.map((product) => (
                            <Link
                                key={product.id}
                                to="/spekulaasplanken"
                                className="group overflow-hidden rounded-2xl bg-white"
                            >
                                <div className="overflow-hidden bg-[#E8DDCF]">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="font-serif text-xl font-semibold text-[#33251C]">
                                        {product.name}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4A32]">
                            {t('home.antique.eyebrow')}
                        </p>

                        <h2 className="font-serif text-3xl font-semibold text-[#33251C] sm:text-4xl">
                            {t('home.antique.title')}
                        </h2>

                        <p className="mt-6 max-w-xl leading-8 text-[#6E5C4E]">
                            {t('home.antique.description')}
                        </p>

                        <Link
                            to="/antieke-spekulaasplanken"
                            className="mt-8 inline-flex rounded-full border border-[#8B4A32] px-6 py-3 font-medium text-[#8B4A32] transition hover:bg-[#8B4A32] hover:text-white"
                        >
                            {t('home.antique.button')}
                        </Link>
                    </div>

                    <div className="overflow-hidden rounded-[2rem] bg-[#E8DDCF]">
                        <img
                            src={antique}
                            alt={t('home.antique.imageAlt')}
                            className="aspect-[4/3] h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-[#A84A32]">
                <div className="mx-auto max-w-4xl px-6 py-20 text-center text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                        {t('home.contact.eyebrow')}
                    </p>

                    <h2 className="mt-4 font-serif text-3xl font-semibold sm:text-4xl">
                        {t('home.contact.title')}
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/80">
                        {t('home.contact.description')}
                    </p>

                    <Link
                        to="/contact"
                        className="mt-8 inline-flex rounded-full bg-[#F8F3EA] px-7 py-3 font-medium text-[#8B4A32] transition hover:bg-white"
                    >
                        {t('home.contact.button')}
                    </Link>
                </div>
            </section>
        </>
    );
}
