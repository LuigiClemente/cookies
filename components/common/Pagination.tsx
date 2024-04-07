import React, { useCallback, useMemo } from 'react';
import { IconArrowLeft, IconRight } from '@/utils/icons';

import { clamp } from '@/utils';

export type PaginationProps = {
  page: number;
  pageSize: number;
  total: number;
  onChange?: (page: number) => void;
};

 const Pagination = (props: PaginationProps) => {
  const { page, pageSize, total, onChange } = props;

  const totalPages = useMemo(() => Math.ceil(total / pageSize), [total, pageSize]);

  const pages = useMemo(() => {
    if (totalPages < 1) return [];

    const RADIUS = 2;
    const RANGE = 2 * RADIUS;
    const start = clamp(
      page + RADIUS > totalPages ? totalPages - RANGE : page - RADIUS,
      1,
      totalPages,
    );

    const end = clamp(start + RANGE, start, totalPages);
    const length = end - start + 1;

    return Array.from({ length }).map((_, i) => start + i);
  }, [page, totalPages]);

  const hasPrevious = page > 1;
  const hasNext = page < totalPages;

  const onGoto = useCallback(
    (e: React.MouseEvent<HTMLLIElement>) => {
      const to = (e.target as HTMLLIElement).dataset.page;
      if (to) onChange?.(parseInt(to, 10));
    },
    [onChange],
  );

  const onPrevious = useCallback(() => {
    if (hasPrevious) onChange?.(page - 1);
  }, [page, hasPrevious, onChange]);

  const onNext = useCallback(() => {
    if (hasNext) onChange?.(page + 1);
  }, [page, hasNext, onChange]);

  if (totalPages <= 0) return null;

  return (
    <ul className="space-x-4 flex items-center">
      <li className={`w-8 h-8 flex items-center justify-center rounded-sm text-gray-300 cursor-pointer ${!hasPrevious && 'opacity-30 cursor-not-allowed'}`} onClick={onPrevious}>
        <IconArrowLeft />
      </li>
      {pages.map((i) => (
        <li key={i} className={`w-8 h-8 flex items-center justify-center rounded-sm text-gray-300 cursor-pointer ${i === page && 'bg-blue-500 text-white'}`} onClick={onGoto} data-page={i}>
          {i}
        </li>
      ))}
      <li className={`w-8 h-8 flex items-center justify-center rounded-sm text-gray-300 cursor-pointer ${!hasNext && 'opacity-30 cursor-not-allowed'}`} onClick={onNext}>
        <IconRight />
      </li>
    </ul>
  );
};

export default Pagination