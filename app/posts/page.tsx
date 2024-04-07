'use client'
import Articles from '@/components/views/Articles'
import React from 'react'
import {posts} from '@/data';
const page = () => {

  return (
    <Articles posts={posts} title="Posts" />
  )
}

export default page