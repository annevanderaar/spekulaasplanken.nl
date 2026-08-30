import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBowlFood,
    faClock,
    faFlask,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

export default function Recipe() {
    const { t } = useTranslation();

    const leftIngredients = [
        ['250 gr.', t('recipe.ingredients.butter')],
        ['½ tl.', t('recipe.ingredients.salt')],
        ['3', t('recipe.ingredients.eggs')],
        ['300 gr.', t('recipe.ingredients.brownSugar')],
    ];

    const rightIngredients = [
        ['600 gr.', t('recipe.ingredients.flour')],
        ['1 tl.', t('recipe.ingredients.bakingPowder')],
        ['10 gr.', t('recipe.ingredients.spices')],
    ];

    return (
        <>
            <section className="bg-[#F8F3EA]">
                <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:py-20">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#8B4A32]">
                        {t('recipe.eyebrow')}
                    </p>

                    <h1 className="mt-4 font-serif text-4xl font-semibold text-[#33251C] sm:text-5xl">
                        {t('recipe.title')}
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#6E5C4E]">
                        {t('recipe.description')}
                    </p>
                </div>
            </section>

            <section className="bg-[#FFFDFC]">
                <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
                    <div className="rounded-3xl border border-[#E5D3BF] bg-[#FBF7F2] p-8 sm:p-10">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F1E2D3] text-[#8B4A32]">
                                <FontAwesomeIcon icon={faBowlFood} />
                            </div>

                            <h2 className="font-serif text-3xl font-semibold text-[#7A452D]">
                                {t('recipe.ingredients.title')}
                            </h2>
                        </div>

                        <div className="mt-8 grid gap-10 md:grid-cols-2 md:divide-x md:divide-[#E5D3BF]">
                            <div className="space-y-4">
                                {leftIngredients.map(([amount, ingredient]) => (
                                    <div
                                        key={ingredient}
                                        className="grid grid-cols-[90px_1fr] gap-3 text-[#33251C]"
                                    >
                                        <span className="font-semibold">{amount}</span>
                                        <span>{ingredient}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4 md:pl-10">
                                {rightIngredients.map(([amount, ingredient]) => (
                                    <div
                                        key={ingredient}
                                        className="grid grid-cols-[90px_1fr] gap-3 text-[#33251C]"
                                    >
                                        <span className="font-semibold">{amount}</span>
                                        <span>{ingredient}</span>
                                    </div>
                                ))}

                                <p className="pt-2 text-sm text-[#6E5C4E]">
                                    {t('recipe.ingredients.extraFlour')}
                                </p>

                                <div className="flex items-center gap-3 pt-4 text-[#33251C]">
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        className="text-lg text-[#B26B3E]"
                                    />

                                    <p>
                                        <span className="font-semibold">
                                          {t('recipe.bakingTimeLabel')}
                                        </span>{' '}
                                        {t('recipe.bakingTime')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#F1E2D3] text-[#8B4A32]">
                                <FontAwesomeIcon icon={faFlask} />
                            </div>

                            <h2 className="font-serif text-3xl font-semibold text-[#7A452D]">
                                {t('recipe.instructions.title')}
                            </h2>
                        </div>

                        <div className="mt-8 space-y-10">
                            <div className="grid gap-6 sm:grid-cols-[56px_1fr]">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E5D3BF] bg-[#F8F3EA] font-serif text-xl font-semibold text-[#8B4A32]">
                                    1
                                </div>

                                <div className="leading-8 text-[#4F3A2D]">
                                    <p>{t('recipe.instructions.step1')}</p>
                                </div>
                            </div>

                            <div className="border-t border-[#E5D3BF]" />

                            <div className="grid gap-6 sm:grid-cols-[56px_1fr]">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#E5D3BF] bg-[#F8F3EA] font-serif text-xl font-semibold text-[#8B4A32]">
                                    2
                                </div>

                                <div className="leading-8 text-[#4F3A2D]">
                                    <p>{t('recipe.instructions.step2')}</p>

                                    <p className="mt-4 font-semibold text-[#33251C]">
                                        {t('recipe.instructions.tip')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex items-center gap-5 rounded-3xl border border-[#E5D3BF] bg-[#F8F3EA] p-8">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#E5D3BF] bg-[#FFFDFC] text-xl text-[#8B4A32]">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>

                        <div>
                            <p className="font-serif text-2xl font-semibold text-[#7A452D]">
                                {t('recipe.success.title')}
                            </p>

                            <p className="mt-1 text-[#6E5C4E]">
                                {t('recipe.success.subtitle')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
