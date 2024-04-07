"use client"
import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  IconPosts,
  IconProjects,
  IconSnippets,
  IconGithub,
  IconLanguage,
  IconEmail,
  IconDark,
} from '@/utils/icons';
import { changeLanguage } from 'i18next';
// import useDarkMode,{DarkModeValueContext} from '@/hooks/use-dark-mode';
import i18n from '@/i18n';
// import { loadThemeStyles } from '@/utils';
import Link from 'next/link';

const title = process.env.VITE_TITLE;
const email = process.env.VITE_EMAIL;
const githubUrl = process.env.VITE_GITHUB_URL;

export default function Navbar() {
  const { t } = useTranslation();

  //   const [darkModeEnabled, setDarkModelEnabled] = useDarkMode();

  //   useEffect(() => {/
  // loadThemeStyles('prism-theme', darkModeEnabled ? prismDark : prismLight);
  // loadThemeStyles('markdown-theme', darkModeEnabled ? mdDark : mdLight);
  //   }, [darkModeEnabled]);

  //   const onToggleDarkMode = useCallback(() => {
  //     setDarkModelEnabled(!darkModeEnabled);
  //   },
  //   [darkModeEnabled]
  // );

  const onToggleLanguage = useCallback(() => {
    changeLanguage(i18n.language === 'cn' ? 'en' : 'cn');
    localStorage.setItem('language', i18n.language);
  }, []);
  return (
    //   <div className="relative pb-16 min-h-screen flex flex-col">
    <header className='h-20 w-full'>
      <div className='mx-auto max-w-screen-lg flex px-8 items-center h-full text-slate-500 font-semibold'>
        <Link href='/' className='text-lg'>
          <span>://</span>
          <span className='mx-0.5 text-blue-500'>{title}</span>
        </Link>

        <nav className='grid gap-3 lg:gap-6 grid-flow-col ml-auto leading-5'>
          <Link
            href='/docs'
            className='opacity-60 flex cursor-pointer hover:(opacity-100 text-blue-500)'
          >
            <IconPosts className='inline lg:hidden' />
            <span className='hidden lg:inline'>{t('tab.docs')}</span>
          </Link>
          <Link
            href='/posts'
            className='opacity-60 flex cursor-pointer hover:(opacity-100 text-blue-500)'
          >
            <IconPosts className='inline lg:hidden' />
            <span className='hidden lg:inline'>{t('tab.posts')}</span>
          </Link>
          <Link
            href='/snippets'
            className='opacity-60 flex cursor-pointer hover:(opacity-100 text-blue-500)'
          >
            <IconSnippets className='inline lg:hidden' />
            <span className='hidden lg:inline'>{t('tab.snippets')}</span>
          </Link>
          <Link
            href='/projects'
            className='opacity-60 flex cursor-pointer hover:(opacity-100 text-blue-500)'
          >
            <IconProjects className='inline lg:hidden' />
            <span className='hidden lg:inline'>{t('tab.projects')}</span>
          </Link>

          <div className='w-[1px] h-full bg-gray-200 dark:bg-gray-800'></div>

          <a
            href={`mailto:${email}`}
            className='opacity-60 flex cursor-pointer hover:(opacity-100 text-blue-500)'
          >
            <IconEmail />
          </a>
          <a
            href={githubUrl}
            target='_blank'
            className='opacity-60 flex cursor-pointer hover:(opacity-100 text-blue-500)'
          >
            <IconGithub />
          </a>
          <button
            onClick={onToggleLanguage}
            className='opacity-60 flex cursor-pointer hover:(opacity-100 text-blue-500)'
          >
            <IconLanguage />
          </button>
          <button className='opacity-60 flex cursor-pointer hover:(opacity-100 text-blue-500)'>
            {/* {darkModeEnabled ? 
                <IconLight /> : 
            } */}
            <IconDark />
          </button>
        </nav>
      </div>
    </header>
  );
}
