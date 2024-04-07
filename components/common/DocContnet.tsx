import React from 'react';
import { contentData } from '@/data';

const DocContnet = () => {
  return (
    <div>
      {contentData?.map((content) => (
        <>
          <h4 id={content.id} className='font-bold text-[18px] py-4'>
            {content?.title}
          </h4>
          {content.data.map((data) => (
            <p className='text-[#4a4a4a] py-4'>{data?.content}</p>
          ))}
        </>
      ))}
    </div>
  );
};

export default DocContnet;
