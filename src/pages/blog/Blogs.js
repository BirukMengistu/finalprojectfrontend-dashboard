import React from 'react'
import Blog from './Blog'
import useBlog from '../../hooks/useBlog'
const Blogs = () => {
  
  const {blog , isLoading } = useBlog()
   const BlogData = blog?.data
  return (
       <div style={{ width: 340, margin: 'auto' }}>
         {!isLoading && BlogData?.map((blog ,index)=> <Blog key={index}blog ={blog}/>)}
       </div>     
  
  )
}

export default Blogs
