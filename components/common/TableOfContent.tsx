import React from 'react';
import { tableOfContent } from '@/data';

const TableOfContent = () => {
  return (
    <div className=''>
      <ul className='list-disc list-inside text-gray-300'>
        {tableOfContent.map((items) => {
          return (
            <li className='my-[10px]'>
              <a
                href={`#${items?.id}`}
                className='text-[#ec4899] border-b border-[#ec4899] opacity-75 hover:opacity-100 text-[18px] font-medium '
              >
                {items?.content}
              </a>
              {items?.childList.length >= 0 &&
                items?.childList.map((childata) => (
                    <li className='my-[10px] ml-[20px]'>
                  <a
                    href='#'
                    className='text-[#ec4899] border-b border-[#ec4899] opacity-75 hover:opacity-100 text-[18px] font-medium '
                  >
                    {childata?.content}
                  </a>
                  </li>
                ))}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TableOfContent;
