import React from 'react';
import { tableOfContent } from '@/data';

const TableOfContent = () => {
  return (
    <div className=''>
      <ul className='list-disc list-inside text-gray-300'>
        {tableOfContent.map((item) => (
          <li key={item.id} className='my-[10px]'>
            <a
              href={`#${item.id}`}
              dangerouslySetInnerHTML={{ __html: item.content }}
              className='text-[#ec4899] border-b border-[#ec4899] opacity-75 hover:opacity-100 text-[18px] font-medium'
            />
            {item.childList.length > 0 && (
              <ul className='list-disc list-inside text-gray-300'>
                {item.childList.map((childItem) => (
                  <li key={childItem.id} className='my-[10px] ml-[20px]'>
                    <a
                      href='#'
                      dangerouslySetInnerHTML={{ __html: childItem.content }}
                      className='text-[#ec4899] border-b border-[#ec4899] opacity-75 hover:opacity-100 text-[18px] font-medium'
                    />
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContent;
