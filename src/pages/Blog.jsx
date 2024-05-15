import React from 'react'
import BlogPage from '../components/BlogPage'

const Blog = () => {
  return (
    <div className='bg-white'>
      <div className='py-40 bg-green-100 text-center  px-4'>
        <h2 className='text-5xl lg:text-7xl leading-snug font bold mb-5'>Welcome To Blog Page</h2>
      </div>
      <div className='max-w-7xl mx-auto text-black'>
        <BlogPage/>
      </div>
    </div>
  )
}

export default Blog