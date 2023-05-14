import React, { useEffect, useState } from 'react'
import Blog from './Blog'
import useBlog from '../../hooks/useBlog'
import { SimpleGrid, Container, createStyles, TextInput, Button} from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
const useStyles = createStyles((theme) => ({


  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',

    },
    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    }
  },

  

}));




const Blogs= () =>{
  const { classes } = useStyles();
  const [search , setSearch] =useState('')
  const [filterBlog, SetFilterBlog] = useState([]);
  const { blog } = useBlog()
  
  const BlogData = blog?.map((data)=>data)
  const searchBolg = (value)=>{
    setSearch(value)
    if (search !== '') {
      const filteredData = BlogData.filter((item) => {
          return Object.values(item).join('').toLowerCase().includes(search.toLowerCase())
      })
      SetFilterBlog(filteredData)
  }
  else{
     SetFilterBlog(BlogData)
  }
  }

  return (
    <Container py="xl">
        <TextInput
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            mb='md'
            value ={search}
            onChange={(e)=>searchBolg(e.target.value)}
          />

        <Button m='md' variant='outline' onClick={()=>{
          window.location.replace('/addnewblog')
        }}> Add New Blog</Button>  
      <SimpleGrid cols={3} md={6} lg={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>  
            {search.length> 1? filterBlog?.map((blog ,index)=> <Blog key={index}blog ={blog}/>): BlogData?.map((blog ,index)=> <Blog key={index}blog ={blog}/>)}
      </SimpleGrid>  


    </Container>
  );
}

export default Blogs

