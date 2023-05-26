import React from 'react'
import { Link } from 'react-router-dom';
import { createStyles,ActionIcon, Card, Avatar, Text, Group, Button, rem } from '@mantine/core';
import { IconBrandGithub, IconBrandYoutube, IconBrandLinkedin } from '@tabler/icons-react';
import ProfileImage from "../assets/images/birdev-img.jpg"
const aboutUs = {
  "image": "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
  "avatar": ProfileImage,
  "name": "Biruk Mengistu",
  "job": "Fullstack Developer",
  "stats": [
    {
      "value": "https://www.linkedin.com/in/biruk-mengistu-423264105/",
      "label": "Linkden"
    },
    {
      "value": "https://github.com/BirukMengistu",
      "label": "Github"
    },
    {
      "value": "https://github.com/BirukMengistu",
      "label": "Youtube"
    }
  ]
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    borderBottomColor:theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.brand[7]
  },

  avatar: {
    border: `${rem(2)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white}`,
  },
}));
 
 const handleIcon = (label ,value)=>{ 

  if(label==='Linkden'){
 return <ActionIcon size="lg">
      <Link to={value} style={{color:'#FF8F00'}}> <IconBrandLinkedin size="1.05rem"  stroke={1.5} /></Link> 
  </ActionIcon>
  }

  if(label==='Youtube') {
   return <ActionIcon size="lg">
        <Link to={value} style={{color:'#FF8F00'}}> <IconBrandYoutube size="1.05rem"  stroke={1.5} /></Link>
       
    </ActionIcon>}
if(label==='Github'){
 return  <ActionIcon size="lg">
      <Link to={value} style={{color:'#FF8F00'}}><IconBrandGithub size="1.05rem"  stroke={1.5} /></Link>
  </ActionIcon>
  }
 
 
      


 
} 




const About =()=> {
  const { classes, theme } = useStyles();
  const { image, avatar, name, job, stats } = aboutUs
  const items = stats.map((stat) => (
    <div key={stat.label}>
       <Text ta="center" fz="sm" c='demmed'>
        {stat.label}
        {handleIcon(stat.label, stat.value)}
      </Text>
    </div>
  ));

  return (
    <Card withBorder padding="xl" radius="md" mt = 'xl' className={classes.card}>
      <Card.Section sx={{ backgroundImage: `url(${image})`, height: 140 }} />
      <Avatar src={avatar} size={80} radius={80} mx="auto" mt={-30} className={classes.avatar} />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {name}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {job}
      </Text>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      <Button
        fullWidth
        radius="md"
        mt="xl"
        size="md"
        variant='outline'
      >
        Follow
      </Button>
    </Card>
  );
}

export default About