import React from 'react';

import Skeleton from './Skeleton';

export default function ArticleSkeleton() {
  const titleWidth = `${50 + Math.random() * 50}%`;
  const labelCount = Math.floor(Math.random() * 3) + 1;

  return (
    <div className="flex flex-col justify-center h-20 border-t border-dotted border-gray-300 dark:border-gray-800">
      <div className="flex items-center">
        <div className="hidden lg:block w-36 text-sm text-gray-400 dark:text-gray-600 text-right">
          <Skeleton />
        </div>
        <div className="ml-4 flex-1 min-w-0 truncate">
          <Skeleton style={{ width: titleWidth }} />
        </div>
      </div>
      <div className="flex items-center mt-1">
        <div className="hidden lg:block w-36 text-sm text-gray-400 dark:text-gray-600 text-right">
          <Skeleton className="inline-block w-10" />
        </div>
        <div className="flex">
          {Array.from({ length: labelCount }).map((_, i) => (
            <Skeleton key={i} className="mr-4 w-10" />
          ))}
        </div>
      </div>
    </div>
  );
}
