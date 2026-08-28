import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const languages = ['nl', 'de', 'en'];

    return (
        <div className="flex items-center rounded-full border border-[#B58E70] bg-[#F8F3EA] p-1">
            {languages.map((language) => {
                const active = i18n.resolvedLanguage === language;

                return (
                    <button
                        key={language}
                        type="button"
                        onClick={() => i18n.changeLanguage(language)}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase transition ${
                            active
                                ? 'bg-[#8B4A32] text-white'
                                : 'text-[#5F4636] hover:bg-[#E8D8C7]'
                        }`}
                    >
                        {language}
                    </button>
                );
            })}
        </div>
    );
}
