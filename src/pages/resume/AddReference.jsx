import { useForm } from '@mantine/form';
import { createStyles,Button,Flex, rem, Container,  TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import useReference from '../../hooks/useReference'
import { Auth } from '../../hooks/utils'
import PageTitle from '../../components/PageTitle';
import { Notifications } from '@mantine/notifications';
import React from 'react';
import { useState } from 'react';
const useStyles = createStyles((theme) => ({
  
  root: {
    
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.brand[4] : theme.colors.brand[1]
    }`,
  },
 
  indicator: {
    backgroundImage: theme.fn.gradient({ from: 'pink', to: 'orange' }),
  },

  control: {
    border: '0 !important',
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
}));




const AddReference = () => {
  const classes = useStyles()
  const {data } = Auth.getAuthenticatedUser()
  const {addNewReference} =useReference()
  
  const form = useForm({
    initialValues: {
      Title:"",
      firstName:"",
      lastName: "", 
      email:" " ,
      company:"",
      telephone:"",
      userId:data.userId
    },
    validate: {
      firstName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      lastName: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      company: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      telephone: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      title: (value) => (value.length < 2 ? 'title must have at least 2 letters' : null),

    }
  });

  const handleSubmit=  async (newReference)=>{
    
    const {firstName,telephone,Title,lastName,email,company,userId} = newReference
    const data ={
        "Title":Title,
      "firstName":firstName ,
      "email":email,
      "lastName": lastName,
      "company": company,
      "telephone": telephone,
      "userId":userId,
      
    }
    

    const response = await addNewReference(data)
    const responseData = response.data
    
    if(responseData.statusCode ===201)
    {
      Notifications.show({
       title:'Succesfull',
       message:'Reference Succesfully added',
       autoClose: true
      })
      setTimeout(()=>{
        return window.location.replace('/resume')
      },1500)
    }
    if(responseData.statusCode!==201){

   
      Notifications.show({
        title:'Unsuccesfull',
        message:'failed to added',
        autoClose: true,
        color: 'red',
       })
       
      
      
    }
   
  }
  



  return (
       <>
       <PageTitle heading={'Add Reference'} />
       <Container className={classes.root} paddingtop='md' mt='lg'>
       <form onSubmit={form.onSubmit((values) =>handleSubmit(form.values))}>
        <TextInput mt='md'label="First Name" placeholder="firstname of the reference person "
        {...form.getInputProps("firstName")}
        classNames={classes} />
        <TextInput mt='md'label="last Name" placeholder="lastName on the reference person" 
         {...form.getInputProps("lastName")} classNames={classes}/>
        <TextInput mt='md'label="company" placeholder=" working place for reference person" 
        {...form.getInputProps("company")} classNames={classes} />
        <TextInput mt='md'label="Title" placeholder="Position on working pleace "
        {...form.getInputProps("Title")}
        classNames={classes} />
       <TextInput mt='md'label="telephone" placeholder="Telephone for the reference person" 
        {...form.getInputProps("telephone")} classNames={classes} />
        <TextInput mt='md'label="email" placeholder="email (@) for reference person" 
        {...form.getInputProps("email")} classNames={classes} />
       
      

        <Flex gap="md" mb='md' mt='md'>      
	     <Button variant="outline"
           w={200}
            type='submit'
          >
          Add Reference
        </Button>
        <Button
                 w={200} variant="outline"
                type='submit'
                
              >
                Reset Form
              </Button>
        </Flex>
        </form>
    </Container>
    </>
  )
}

export default AddReference