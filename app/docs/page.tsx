'use client'
import React, { Suspense, lazy } from 'react';
import DocContnet from '@/components/common/DocContnet';
import TableOfContent from '@/components/common/TableOfContent';

// Lazy load PrivacyAnimation component
const PrivacyAnimation = lazy(() => import('../../components/canvas/PrivacyAnimation'));

const page = () => {
  return (
    <>
      <Suspense fallback={<div></div>}>
        <div className="fixed [z-index:0] overflow-hidden top-0 left-0 w-full h-full [user-select:none] pointer-events-none opacity-100 blur-sm">
          <PrivacyAnimation />
        </div>
        <div className="overflow-hidden fixed [z-index:2] top-0 left-0 w-full h-full [user-select:none] pointer-events-none">
          <PrivacyAnimation />
        </div>
      </Suspense>
      <div className='mx-auto w-full max-w-screen-lg px-8 py-12'>
        <TableOfContent />
        <DocContnet />
      </div>
    </>
  )
}

export default page;
