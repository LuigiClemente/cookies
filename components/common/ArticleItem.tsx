import { format } from 'date-fns';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { IconComments } from '@/utils/icons';

import ArticleModel from '../models/ArticleModel';
import LabelItem from './LabelItem';
import Link from 'next/link';

export type ArticleItemProps = {
  article: any;
  getLink: any;
  getLabelLink: any;
};

export default function ArticleItem(props: ArticleItemProps) {
  const { article, getLink, getLabelLink } = props;

  const { t } = useTranslation();

  // const createdAt = useMemo(() => format(new Date(article.createdAt), t('dateFormat')), [article]);

  return (
    <div className='flex flex-col justify-center h-20 border-t border-dotted border-gray-300 dark:border-gray-800'>
      <div className='flex items-center'>
        {/* <div className='hidden lg:block w-36 text-sm text-gray-400 dark:text-gray-600 text-right'>
          {article.date}
        </div> */}
        <div className='flex-1 min-w-0 truncate'>
          <Link href={getLink(article.link)}>{article.title}</Link>
        </div>
      </div>
      <div className='flex items-center mt-1'>
        <div className='hidden lg:block w-36 flex items-center justify-end text-sm text-gray-400 dark:text-gray-600 text-right'>
          {/* <div className="flex items-center gap-2 justify-end">
          <IconComments className='inline ' />
          {article.comment}
          </div> */}
        </div>
        <div className='flex text-sm text-gray-400 dark:text-gray-600'>
          {article.tags.map((label: any) => (
            <LabelItem key={label.id} label={label} getLink={getLabelLink} />
          ))}
        </div>
      </div>
    </div>
  );
}
