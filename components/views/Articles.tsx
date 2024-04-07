import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import ArticleItem from '../common/ArticleItem';
// import ArticleSkeleton from '../common/ArticleSkeleton';
import Pagination from '../common/Pagination';
import { usePathname } from 'next/navigation';

export default function Articles({ posts,title }: any) {
    const pathname = usePathname();
    const [page, setPage] = useState(1);
    const { t } = useTranslation();
    const pageSize = 10;
    const total = posts.length;
    const onPageChange = (page: number) => {
      setPage(page);
      console.log('Page changed to:', page);
    };
  
    const getArticleLink = useCallback((id: number) => `${pathname}/${id}`, [pathname]);
  
    // Slice the posts array to show only the items for the current page
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const visiblePosts = posts.slice(startIndex, endIndex);
  
    return (
      <main className='mx-auto w-full max-w-screen-lg px-8 py-12'>
        <h2 className='text-2xl text-gray-600'>{title}</h2>
        <div className='mt-8'>
          {visiblePosts.map((post: any, index: number) => (
            <ArticleItem
              key={index}
              article={post}
              getLink={getArticleLink}
              getLabelLink={getArticleLink}
            />
          ))}
        </div>
  
        <div className='mt-8 flex justify-center'>
          <Pagination
            page={page}
            pageSize={pageSize}
            total={total}
            onChange={onPageChange}
          />
        </div>
      </main>
    );
  }
  