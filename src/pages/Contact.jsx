import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faLocationDot,
    faPhone,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';
import hero from '../images/home/hero.jpeg';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <>
            <section className="bg-[#F8F3EA]">
                <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4A32]">
                        {t('contact.eyebrow')}
                    </p>

                    <h1 className="mt-4 font-serif text-4xl font-semibold text-[#33251C] sm:text-5xl">
                        {t('contact.title')}
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6E5C4E]">
                        {t('contact.description')}
                    </p>
                </div>
            </section>

            <section className="bg-[#FFFDFC]">
                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:gap-20 lg:py-20">
                    <div className="relative">
                        <div className="overflow-hidden rounded-4xl bg-[#E8DDCF]">
                            <img
                                src={hero}
                                alt={t('contact.imageAlt')}
                                className="aspect-4/3 h-full w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-5 -right-3 rounded-2xl border border-[#E5D3BF] bg-[#F8F3EA] px-6 py-4 shadow-sm sm:right-6">
                            <p className="font-serif text-xl font-semibold text-[#33251C]">
                                Anton & Willy
                            </p>

                            <p className="mt-1 text-sm text-[#7A685A]">
                                {t('contact.imageText')}
                            </p>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4A32]">
                            {t('contact.detailsEyebrow')}
                        </p>

                        <h2 className="mt-3 font-serif text-3xl font-semibold text-[#33251C] sm:text-4xl">
                            {t('contact.detailsTitle')}
                        </h2>

                        <p className="mt-5 max-w-xl leading-8 text-[#6E5C4E]">
                            {t('contact.detailsDescription')}
                        </p>

                        <div className="mt-8 space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1E2D3] text-[#8B4A32]">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>

                                <div>
                                    <p className="text-sm text-[#8A7463]">
                                        {t('contact.phone')}
                                    </p>

                                    <a
                                        href="tel:+31655162331"
                                        className="mt-1 inline-block font-medium text-[#33251C] transition hover:text-[#8B4A32]"
                                    >
                                        +31 (0)6-55162331
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1E2D3] text-[#8B4A32]">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>

                                <div>
                                    <p className="text-sm text-[#8A7463]">
                                        {t('contact.email')}
                                    </p>

                                    <a
                                        href="mailto:info@spekulaasplanken.nl"
                                        className="mt-1 inline-block font-medium text-[#33251C] transition hover:text-[#8B4A32]"
                                    >
                                        info@spekulaasplanken.nl
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F1E2D3] text-[#8B4A32]">
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </div>

                                <div>
                                    <p className="text-sm text-[#8A7463]">
                                        {t('contact.address')}
                                    </p>

                                    <address className="mt-1 not-italic leading-7 text-[#33251C]">
                                        Kobbe 28
                                        <br />
                                        9101 ZK Dokkum
                                        <br />
                                        {t('contact.country')}
                                    </address>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="mailto:info@spekulaasplanken.nl"
                                className="inline-flex items-center gap-2 rounded-full bg-[#8B4A32] px-6 py-3 font-medium text-white transition hover:bg-[#713B29]"
                            >
                                <FontAwesomeIcon icon={faEnvelope} />
                                {t('contact.emailButton')}
                            </a>

                            <a
                                href="tel:+31655162331"
                                className="inline-flex items-center gap-2 rounded-full border border-[#8B4A32] px-6 py-3 font-medium text-[#8B4A32] transition hover:bg-[#8B4A32] hover:text-white"
                            >
                                <FontAwesomeIcon icon={faPhone} />
                                {t('contact.phoneButton')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#F8F3EA]">
                <div className="mx-auto max-w-4xl px-6 py-16 text-center sm:py-20">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#F1E2D3] text-[#8B4A32]">
                        <FontAwesomeIcon icon={faMessage} />
                    </div>

                    <h2 className="mt-5 font-serif text-3xl font-semibold text-[#33251C]">
                        {t('contact.order.title')}
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#6E5C4E]">
                        {t('contact.order.description')}
                    </p>
                </div>
            </section>
        </>
    );
}
