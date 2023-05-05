import React from 'react'
import Blog from './Blog'
import useBlog from '../../hooks/useBlog'
import { SimpleGrid, Container,Autocomplete, Grid, createStyles, Input, TextInput} from '@mantine/core';
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
  const {blog } = useBlog()
  const BlogData = blog?.data?.map((data)=>data)
 

  return (
    <Container py="xl">
        <TextInput
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            mb='md'
          />
      <SimpleGrid cols={3} md={6} lg={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>  
            { BlogData?.map((blog ,index)=> <Blog key={index}blog ={blog}/>)}
      </SimpleGrid>     
    </Container>
  );
}

export default Blogs

