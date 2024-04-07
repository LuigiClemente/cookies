import DocContnet from '@/components/common/DocContnet'
import TableOfContent from '@/components/common/TableOfContent'
import React from 'react'

const page = () => {
  return (
    <div className='mx-auto w-full max-w-screen-lg px-8 py-12'>
        <TableOfContent />
        <DocContnet />
    </div>
  )
}

export default page