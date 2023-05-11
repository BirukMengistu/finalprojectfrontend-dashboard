import { useForm } from '@mantine/form';
import { createStyles,Button,Flex, rem, Container,  TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import useJobExperiance from '../../hooks/useJobExperiance'
import { Auth } from '../../hooks/utils'
import PageTitle from '../../components/PageTitle';
import { Notifications } from '@mantine/notifications';
import React from 'react';
import { useState } from 'react';
const useStyles = createStyles((theme) => ({
  
  root: {
    
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.brand[1],
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




const AddJobExperiance = () => {
  const classes = useStyles()
  const {data } = Auth.getAuthenticatedUser()
  const {addNewJobExperiance} =useJobExperiance()
  const [startDate, setStartdate] = useState()
  const [completedDate, setCompleteddate] = useState()
  const form = useForm({
    initialValues: {
      company:"",
      title: "", 
      responsibility:" " ,
      userId:data.userId
    },
    validate: {
      company: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      title: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      responsibility: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),

    }
  });

  const handleSubmit=  async (newProject)=>{
    
    const {company ,title,responsibility,userId} = newProject
    const data ={
      "company": company,
      "title":title,
      "responsibility": responsibility,
      "startedAt": startDate,
      "endedAt": completedDate,
      "userId":userId,
      
    }
    

    const response = await addNewJobExperiance(data)
    const responseData = response.data
    
    if(responseData.status ===201)
    {
      Notifications.show({
       title:'Succesfull',
       message:'Profile Succesfull added',
       autoClose: true
      })
      setTimeout(()=>{
        return window.location.replace('/resume')
      },1500)
    }
    if(responseData.status!==201){

      Notifications.show({
        title:'Unsuccesfull',
        message:'Profile failed to added',
        autoClose: true,
        color: 'red',
       })
       
      
      
    }
   
  }


  return (
       <>
       <PageTitle heading={'Add Project'} />
       <Container className={classes.root} paddingtop='md' mt='lg'>
       <form onSubmit={form.onSubmit(() =>handleSubmit(form.values))}>
      	<TextInput mt='md'label="Title" placeholder="title of the project "
        {...form.getInputProps("title")}
        classNames={classes} />
        <TextInput mt='md'label="company" placeholder="short discription about project" 
        {...form.getInputProps("company")} />

        <TextInput mt='md'label="Responsibility" placeholder="your role on the project" 
         {...form.getInputProps("responsibility")}/>
       
       <DateInput  valueFormat="YYYY MM DD"
              label="Program Start"  
              value={startDate}
             onChange={setStartdate}
             />
         
         <DateInput valueFormat="YYYY MM DD" label="Completed At"  
              value={completedDate}
              onChange={setCompleteddate}
             />

        <Flex gap="md" mb='md' mt='md'>      
	     <Button variant="outline"
           w={200}
           type="submit"
          >
          Add new Project
        </Button>
        <Button
                 w={200} variant="outline"
                onClick={() =>form.reset()}
                
              >
                Reset Form
              </Button>
        </Flex>
        </form>    
    </Container>
    </>
  )
}

export default AddJobExperiance