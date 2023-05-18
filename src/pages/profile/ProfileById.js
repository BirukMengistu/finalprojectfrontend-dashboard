import React from 'react'
import { Auth } from '../../hooks/utils'
import useProfile from '../../hooks/useProfile'
import { Notifications } from '@mantine/notifications'
import { Box, Tabs ,TextInput ,Image, createStyles, rem } from '@mantine/core';
import Container from '../../Layout/Container';
import PageTitle from '../../components/PageTitle';

import { useParams } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: rem(54),
    paddingTop: rem(18),
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: `calc(${theme.spacing.sm} / 2)`,
    zIndex: 1,
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:not(:first-of-type)': {
    borderLeft: 0,
  },

  '&:first-of-type': {
    borderTopLeftRadius: theme.radius.md,
    borderBottomLeftRadius: theme.radius.md,
  },

  '&:last-of-type': {
    borderTopRightRadius: theme.radius.md,
    borderBottomRightRadius: theme.radius.md,
  },

  '&[data-active]': {
    backgroundColor: theme.colors.blue[7],
    borderColor: theme.colors.blue[7],
    color: theme.white,
  },
}));

const ProfileById = () => {
  const {userProfile } = useProfile()
  const {id} = useParams()
  const {data} = Auth.getAuthenticatedUser()
  const { classes } = useStyles();
  const profile = userProfile?.data?.filter((temp) => (temp.userId === id))
 
  
  const redicateAddProfile =()=>{
    Notifications.show({
      title: 'User ,  About redirect',
      message: 'user not Completed his profile profile data, Professional Hub',
      type: 'Warning'
    })
    setTimeout(()=>{
      return window.location.replace('/')
    },15500)
  }

  return (
       <> 
         <PageTitle heading={'Profile'} />
       {(profile?.length === 0) ? redicateAddProfile() : 
        <Container mt='lg'>
          <Tabs defaultValue="profile_pic" orientation="vertical" placement="right">
            <Tabs.List>
            <Tabs.Tab value="profile_pic">Profile Picture</Tabs.Tab>
              <Tabs.Tab value="profile">User Profile</Tabs.Tab>
              <Tabs.Tab value="address">Address</Tabs.Tab>
            
            </Tabs.List>
            <Tabs.Panel value="profile_pic" paddingbottom = 'md' mb={100}>
              
                    <Box sx={(theme) => ({
          
          margin:theme.spacing.md,
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: 'pointer',

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }})}>
                  <Image
                    radius="md"
                    src="https://images.unsplash.com/photo-1627552245715-77d79bbf6fe2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Random unsplash image"
                    caption={'User full Name'}
                  />
                </Box>
              </Tabs.Panel>

            <Tabs.Panel value="profile" paddingbottom = 'lg' mb={100}>
              
            <Box sx={(theme) => ({
          
            margin:theme.spacing.md,
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
            cursor: 'pointer',

            '&:hover': {
              backgroundColor:
                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
            }})}>
                <TextInput mt="md" label="User full Name" readOnly value={`${profile?.[0].firstName} ${profile?.[0].lastName}`} classNames={classes} /> 
                
                <TextInput mt="md"label="Gender" readOnly value={profile?.[0].gender} classNames={classes} /> 
                
                <TextInput mt="md"label="Date of Birth" readOnly value="1987" classNames={classes} / > 
          </Box>
            </Tabs.Panel>
            <Tabs.Panel value="address">   
            <Box sx={(theme) => ({
          
          margin:theme.spacing.md,
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          cursor: 'pointer',

          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
          }})}>
                <TextInput mt="md" label="Home Address" readOnly placeholder={profile?.[0].address}  classNames={classes} />
                
                <TextInput mt="md"label="Telephone" readOnly placeholder={profile?.[0].telephone} classNames={classes} />
                
                <TextInput mt="md"label="email" readOnly placeholder={profile?.[0].email} classNames={classes} />
                
                <TextInput mt="md" label="Role" readOnly placeholder={profile?.[0].role} classNames={classes} />
                
          </Box>
          </Tabs.Panel>
           
            
                
         
        </Tabs>
        </Container>}
       </>
          )
        
}

export default ProfileById