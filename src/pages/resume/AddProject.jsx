import { useForm } from '@mantine/form';
import { createStyles,Button,Flex, rem, Container,  TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import useProject from '../../hooks/useProject'
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




const AddProject = () => {
  const classes = useStyles()
  const {data } = Auth.getAuthenticatedUser()
  const {addNewProject} =useProject()
  const [startDate, setStartdate] = useState()
  const [completedDate, setCompleteddate] = useState()
  const form = useForm({
    initialValues: {
      project_title:"",
      summary: "", 
      my_role:" " ,
      userId:data.userId
    },
    validate: {
      project_title: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      summary: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      my_role: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),

    }
  });

  const handleSubmit=  async (newProject)=>{
    
    const {project_title ,summary,my_role,userId} = newProject
    const data ={
      "project_title": project_title,
      "summary":summary,
      "my_role": my_role,
      "startedAt": startDate,
      "endedAt": completedDate,
      "userId":userId,
      
    }
    

    const response = await addNewProject(data)
    const responseData = response.data
    
    if(responseData.statusCode ===201)
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
      	<TextInput mt='md'label="Project Title" placeholder="title of the project "
        {...form.getInputProps("project_title")}
        classNames={classes} />
        <TextInput mt='md'label="Summary" placeholder="short discription about project" 
        {...form.getInputProps("summary")} />

        <TextInput mt='md'label="Your role" placeholder="your role on the project" 
         {...form.getInputProps("my_role")}/>
       
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
            onClick={() =>handleSubmit(form.values)
            }
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
    </Container>
    </>
  )
}

export default AddProject