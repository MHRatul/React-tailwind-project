import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

const BlogPage = () => {
    const [blog, setBlog] = useState([]);


    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:3000/blog`;

            const response = await fetch (url);
            const data = await response.json();
            console.log(data);
            setBlog(data);
        }
        fetchBlogs();
    }, [])
  return (
    <div>
        {/* Category Section */}
        <div> Page category </div>

        {/* blogCards Section */}
        <div>
            <BlogCard blog={blog}/>
        </div>

        {/* Pagination Section */}
        <div>Pagination</div>
    </div>
  )
}

export default BlogPage