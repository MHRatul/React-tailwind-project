
import { Link } from "react-router-dom";
// import {FaUser } from 'react-icons/fa'

const BlogCard = ({blog}) => {
    const filteredBlog = blog;
   
  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
            
            filteredBlog.map((item) => <Link key ={item.id} className="p-5 shadow-lg rounded cursor-pointer">
                <div>
                    <img src={item.image} alt='' className='w-full'/>
                </div>
                <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 items-center  cursor-pointer">{item.title}</h3>
                {/* <p className="mb-2"><FaUser className="inline-flex items-center mr-2"/>{item.author}</p> */}
                <div>
                <p className="mb-2 inline-flex items-center mr-2"><img src={item.authorPic}  className=" rounded-full  " /> {item.author}</p>
                </div>
                <div className= "float-right text-sm " >
                <p> Published: {item.published_date}</p>     
                </div>
            </Link>)
        }
    </div>
  )
}

export default BlogCard