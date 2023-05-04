import React from 'react'
import Blog from './Blog'
import useBlog from '../../hooks/useBlog'
const Blogs = () => {
  
  const {blog } = useBlog()
   const BlogData = blog?.data?.map((data)=>data)
  return (
       <div style={{ width: 340, margin: 'auto' }}>
         { BlogData?.map((blog ,index)=> <Blog key={index}blog ={blog}/>)}
       </div>     
  
  )
}

export default Blogs
