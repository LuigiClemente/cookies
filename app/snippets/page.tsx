'use client'
import Articles from '@/components/views/Articles'
import React from 'react'
import {sinppits} from '@/data';
const page = () => {

  return (
    <Articles posts={sinppits} title="Snippets" />
  )
}

export default page