import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function PageTitle() {
    const { pathname } = useLocation();
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const titles = {
            '/spekulaasplanken': t('navigation.products'),
            '/antieke-spekulaasplanken': t('navigation.antiqueProducts'),
            '/recept': t('navigation.recipe'),
            '/contact': t('navigation.contact'),
        };

        const pageTitle = titles[pathname];

        document.title = pageTitle
            ? `${pageTitle} | ${t('site.title')}`
            : t('site.title');
    }, [pathname, i18n.resolvedLanguage, t]);

    return null;
}
