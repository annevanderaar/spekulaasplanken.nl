import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Navigation() {
    const { t } = useTranslation();

    const linkClass = ({ isActive }) =>
        `relative transition-colors duration-200 ${
            isActive
                ? 'text-[#8B4A32]'
                : 'text-[#33251C] hover:text-[#8B4A32]'
        }`;

    return (
        <header className="border-b border-[#B58E70] bg-[#D8B99D]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between py-6">
                    <NavLink to="/" className="group">
                        <div className="font-serif text-3xl font-semibold text-[#33251C]">
                            {t('site.title')}
                        </div>

                        <div className="mt-1 text-sm text-[#6E5140]">
                            {t('site.subtitle')}
                        </div>
                    </NavLink>

                    <LanguageSwitcher />
                </div>

                <nav className="flex items-center gap-8 border-t border-[#B58E70] py-4 text-sm font-medium">
                    <NavLink to="/" className={linkClass}>
                        {t('navigation.home')}
                    </NavLink>

                    <NavLink to="/spekulaasplanken" className={linkClass}>
                        {t('navigation.products')}
                    </NavLink>

                    <NavLink
                        to="/antieke-spekulaasplanken"
                        className={linkClass}
                    >
                        {t('navigation.antiqueProducts')}
                    </NavLink>

                    <NavLink to="/recept" className={linkClass}>
                        {t('navigation.recipe')}
                    </NavLink>

                    <NavLink to="/contact" className={linkClass}>
                        {t('navigation.contact')}
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}
