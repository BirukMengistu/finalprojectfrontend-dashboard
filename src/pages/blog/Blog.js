import React from 'react'
import { Card, Image,Box, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';


const Blog = ({blog}) => {

const image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRij83RCMCEYA5i6wCZCe0H6Hhy640RS8yw&usqp=CAU'
const theme = useMantineTheme();
const secondaryColor = theme.colorScheme === 'dark'
? theme.colors.dark[1]
: theme.colors.gray[7];
  return (
    <Box sx={(theme) => ({
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[0],
        textAlign: 'center',
        padding: theme.spacing.md,
        borderRadius: theme.radius.md,
        cursor: 'pointer',
    
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },
      })} >
        
                    <Card shadow="sm" padding="md" >
                   
                    <Card.Section>
                    <Image src={image} height={100} alt="Norway" />
                    </Card.Section>
 
                    <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
                    <Text weight={500}>{blog.title}</Text>
                    <Badge color="pink" variant="light">
                        latest
                    </Badge>
                    </Group>
 
                    <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
                    {blog.body}
                    </Text>
            
                    <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
                       Blog details
                    </Button>
              </Card>
       
                 
                
        
    </Box>
  )
}

export default Blog