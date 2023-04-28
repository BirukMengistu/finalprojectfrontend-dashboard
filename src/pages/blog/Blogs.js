import React from 'react'
import useBlog from '../../hooks/useBlog'
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
const Blogs = () => {
  const {blog,isLoading ,isError} = useBlog()
  const image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRij83RCMCEYA5i6wCZCe0H6Hhy640RS8yw&usqp=CAU'
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark'
  ? theme.colors.dark[1]
  : theme.colors.gray[7];
 
  return (
    <div style={{ width: 340, margin: 'auto' }}>
       Home

       {!isLoading && blog?.data.map((tblog,index)=> <div key={index}>
        
       <Card shadow="sm" padding="md">
        <Card.Section>
          <Image src={image} height={160} alt="Norway" />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            latest
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {tblog.body}
        </Text>

        <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
          Blog details
        </Button>
      </Card>
        
        </div>
       
       )}
         
    </div>
  )
}

export default Blogs
