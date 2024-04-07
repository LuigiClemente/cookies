import { IconArrowRight } from '@/utils/icons';
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next';
import ShapeEffect from '../ShapeEffect/ShapeEffect';

const HomeComp = () => {
    const { t } = useTranslation();
  return (
    <main className="px-8 py-20 w-full flex-1 flex flex-col justify-center">
    <div className="absolute z-0 top-0 left-0 w-full h-full user-select-none pointer-events-none opacity-50 blur-sm">
      <ShapeEffect count={12} sizes={[30, 60]} />
    </div>
    <div className="absolute z-2 top-0 left-0 w-full h-full user-select-none pointer-events-none">
      <ShapeEffect count={12} sizes={[40, 80]} />
    </div>
    <div className="relative z-1 mx-auto max-w-screen-lg text-center">
      <h2 className="text-5xl text-slate-600 font-bold leading-10">{t('intro.title')}</h2>
      <p className="mt-6 text-3xl text-slate-400">{t('intro.description')}</p>
      <Link href="/posts">
        <button className="mt-12 py-3 px-6 inline-flex items-center bg-blue-500 active:bg-blue-600 text-blue-50 text-center gap-4 hover:gap-8 rounded-full outline-none transition-all">
          <span>{t('intro.link')}</span>
          <IconArrowRight />
        </button>
      </Link>
    </div>
  </main>
  )
}

export default HomeComp