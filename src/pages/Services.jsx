import React from 'react'
import ServiceCard from './services/ServiesCard'
import { Grid } from '@mantine/core';
import Container from '../Layout/Container';
//import PageTitle from './services/ServiesCard';
const BlogData = {
  "title": "Provide Platfrom for the sharing of Knowledge",
  "description": "Admins can review and publish content on all pages and access all items in the Admin Toolbar."
}
const InboxData = {
  "title": "Providing Platform Student or juniors connect with Mentors",
  "description": "user getting feedback from Seniors or Experts(Mentors)."
}
const UserData = {
  "title": "Student share resume and getting feedback each others",
  "description": "users share resume to other pages user and getting back feedback exchange information. having virtual friend ."
}

const ServicePage = () => {
  return (
    <Container>
       {/* <PageTitle heading='Admin Panel'/> */}
       <Grid justify="center" align="center">
       <Grid.Col xs={6}  md={3} lg={3}><ServiceCard title={BlogData.title} description={BlogData.description} icon={'blog'}/></Grid.Col>
       <Grid.Col xs={6} md={3} lg={3}><ServiceCard title={InboxData.title} description={InboxData.description} icon={'inbox'}/></Grid.Col>
       <Grid.Col xm={6} md={3}lg={3}><ServiceCard title={UserData.title} description={UserData.description} icon={'user'}/></Grid.Col> 
      </Grid>
    </Container>
   
  )
}

export default ServicePage
