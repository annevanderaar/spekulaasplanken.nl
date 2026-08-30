import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();

    const footerItems = [
        { link: '/', name: 'navigation.home' },
        { link: '/spekulaasplanken', name: 'navigation.products' },
        { link: '/antieke-spekulaasplanken', name: 'navigation.antiqueProducts' },
        { link: '/recept', name: 'navigation.recipe' },
        { link: '/contact', name: 'navigation.contact' }
    ]

    return (
        <footer className="bg-[#33251C] text-[#F8F3EA]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
                    <div>
                        <Link
                            to="/"
                            className="font-serif text-2xl font-semibold"
                        >
                            {t('site.title')}
                        </Link>

                        <p className="mt-4 max-w-sm leading-7 text-[#CDBEAF]">
                            {t('footer.description')}
                        </p>
                    </div>

                    <div>
                        <h2 className="font-serif text-xl">
                            {t('footer.navigation')}
                        </h2>

                        <nav className="mt-5 flex flex-col items-start gap-3 text-[#CDBEAF]">
                            { footerItems.map(item =>
                                <Link
                                    to={item.link}
                                    className="transition-colors hover:text-white"
                                >
                                    {t(item.name)}
                                </Link>
                            )}
                        </nav>
                    </div>

                    <div>
                        <h2 className="font-serif text-xl">
                            {t('footer.contact')}
                        </h2>

                        <div className="mt-5 space-y-4 text-[#CDBEAF]">
                            <div>
                                <p className="text-sm text-[#9F8D7D]">
                                    {t('contact.phone')}
                                </p>

                                <a
                                    href="tel:+31655162331"
                                    className="mt-1 inline-block transition-colors hover:text-white"
                                >
                                    +31 (0)6-55162331
                                </a>
                            </div>

                            <div>
                                <p className="text-sm text-[#9F8D7D]">
                                    {t('contact.email')}
                                </p>

                                <a
                                    href="mailto:info@spekulaasplanken.nl"
                                    className="mt-1 inline-block transition-colors hover:text-white"
                                >
                                    info@spekulaasplanken.nl
                                </a>
                            </div>

                            <div>
                                <p className="text-sm text-[#9F8D7D]">
                                    {t('contact.address')}
                                </p>

                                <address className="mt-1 not-italic leading-6">
                                    Kobbe 28
                                    <br />
                                    9101 ZK Dokkum
                                    <br />
                                    {t('contact.country')}
                                </address>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 border-t border-white/10 py-6 text-sm text-[#9F8D7D] sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} {t('site.title')}
                    </p>

                    <p>
                        {t("footer.by")}

                        <a
                            href="https://everlastingwild.nl/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative ml-1 inline-block font-semibold hover:text-white"
                        >
                            Everlasting Wild
                            <span className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
