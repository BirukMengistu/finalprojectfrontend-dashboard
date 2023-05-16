import React from 'react'
import { Card, Image,Box, Text, Badge, Group, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom';


const Blog = ({blog}) => {
const {review} = blog
const image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRij83RCMCEYA5i6wCZCe0H6Hhy640RS8yw&usqp=CAU'
const theme = useMantineTheme();
const secondaryColor = theme.colorScheme === 'dark'
? theme.colors.dark[1]
: theme.colors.gray[7];
  return (
    <>{review===true &&  <Box sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[3] : theme.colors.brand[0],
      textAlign: 'center',
      padding: theme.spacing.md,
      borderRadius: theme.radius.md,
      cursor: 'pointer',
  
      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark' ? theme.colors.brand[5] : theme.colors.brand[2],
      },
    })} >
      
               <Card shadow="sm" padding="md" >
                 
                  <Card.Section>
                  <Image src={blog?.blogImage!== undefined?(blog?.blogImage):image } height={100} alt="Norway" />
                  </Card.Section>

                  <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                  <Text weight={500}>{blog.title}</Text>
                  <box>
                  {blog?.tag?.map((data)=>

                    data!==undefined?
                    <Badge color="blue" variant="light" ml='xs'>{data}</Badge>
                    :<Badge color="pink" variant="light"> known </Badge>
                                      
                    )}
                  </box>
                  
                  </Group>

                  <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                  {(blog.body).substr(0,50)}
                  </Text>
          
                  <Link variant="outline"  fullWidth style={{ marginTop: 14 }}
                      to={{ pathname : `/blogdetails/${blog._id}` 
                             } }
                     >
                     Blog details
                  </Link>
            </Card>   
  </Box> }</>
   
  
  )
}

export default Blog