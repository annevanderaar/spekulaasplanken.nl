import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import LanguageSwitcher from './LanguageSwitcher.jsx';

export default function Navigation() {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    const linkClass = ({ isActive }) =>
        `relative transition-colors duration-200 ${
            isActive
                ? 'text-[#8B4A32]'
                : 'text-[#33251C] hover:text-[#8B4A32]'
        }`;

    const mobileLinkClass = ({ isActive }) =>
        `block w-full border-b border-[#B58E70]/50 py-4 text-base transition-colors last:border-b-0 ${
            isActive
                ? 'text-[#8B4A32]'
                : 'text-[#33251C] hover:text-[#8B4A32]'
        }`;

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const navItems = [
        { link: '/', name: 'navigation.home' },
        { link: '/spekulaasplanken', name: 'navigation.products' },
        { link: '/antieke-spekulaasplanken', name: 'navigation.antiqueProducts' },
        { link: '/recept', name: 'navigation.recipe' },
        { link: '/contact', name: 'navigation.contact' }
    ]

    return (
        <header className="border-b border-[#B58E70] bg-[#D8B99D]">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between py-6">
                    <NavLink
                        to="/"
                        className="group"
                        onClick={closeMenu}
                    >
                        <div className="font-serif text-3xl font-semibold text-[#33251C]">
                            {t('site.title')}
                        </div>

                        <div className="mt-1 text-sm text-[#6E5140]">
                            {t('site.subtitle')}
                        </div>
                    </NavLink>

                    <div className="hidden md:block">
                        <LanguageSwitcher />
                    </div>
                </div>

                <div className="hidden border-t border-[#B58E70] md:block">
                    <nav className="flex items-center gap-8 py-4 text-sm font-medium">
                        {navItems.map(item =>
                            <NavLink
                                to={item.link}
                                className={linkClass}
                            >
                                {t(item.name)}
                            </NavLink>
                        )}
                    </nav>
                </div>

                <div className="border-t border-[#B58E70] md:hidden">
                    <div className="flex items-center justify-between py-3">
                        <LanguageSwitcher />

                        <button
                            type="button"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={
                                menuOpen
                                    ? t('navigation.closeMenu')
                                    : t('navigation.openMenu')
                            }
                            aria-expanded={menuOpen}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#B58E70] bg-[#F8F3EA] text-lg text-[#33251C] transition hover:bg-[#EEDCCA]"
                        >
                            <FontAwesomeIcon
                                icon={menuOpen ? faXmark : faBars}
                            />
                        </button>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            menuOpen
                                ? 'max-h-100 border-t border-[#B58E70]'
                                : 'max-h-0'
                        }`}
                    >
                        <nav className="pb-3 font-medium">
                            {navItems.map(item =>
                                <NavLink
                                    to={item.link}
                                    className={mobileLinkClass}
                                    onClick={closeMenu}
                                >
                                    {t(item.name)}
                                </NavLink>
                            )}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
}
