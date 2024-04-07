import React from 'react';

const Footer = () => {
  return (
    <footer className='absolute bottom-4 left-0 space-x-2 w-full text-sm text-center text-slate-300 select-none'>
      <div className='mx-auto max-w-screen-lg dark:text-slate-800'>
        <a
          className='hover:text-blue-500'
          href='https://creativecommons.org/licenses/by-nc-sa/4.0/'
        >
          CC BY-NC-SA 4.0
        </a>
        <span className='ml-2'>2016-present © varHarrie</span>
      </div>
    </footer>
  );
};

export default Footer;
