import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard';

const BlogPage = () => {
    const [blog, setBlog] = useState([]);
    const [currentPage,setCurrentPage] = useState (1);
    const pageSize= 12 //blog per page 
    const [selectedCategory, setSelectedCategory] = useState (null);
    const [activeCategory, SetActiveCategory] = useState(null);


    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:3000/blog?page=${currentPage}&limit=${pageSize}`;

            // Filter by Category
            if(selectedCategory){
                url +=`&category=${selectedCategory}`;
            }

            const response = await fetch (url);
            const data = await response.json();
            setBlog(data);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory])

    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
        SetActiveCategory(category)
    }
  return (
    <div>
        {/* Category Section */}
        <div> Page category </div>

        {/* blogCards Section */}
        <div>
            <BlogCard blog={blog} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={PageSize}/>
        </div>

        {/* Pagination Section */}
        <div>
            
        </div>
    </div>
  )
}

export default BlogPage