import { useForm } from '@mantine/form';
import { createStyles,Button,Flex, rem, Container,  TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import useEducation from '../../hooks/useEducation'
import { Auth } from '../../hooks/utils'
import PageTitle from '../../components/PageTitle';
import { Notifications } from '@mantine/notifications';
import React from 'react';
const useStyles = createStyles((theme) => ({
  
  root: {
    
    backgroundColor:  theme.colors.brand[1],
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




const AddEducation = () => {
  const classes = useStyles()
  const {data } = Auth.getAuthenticatedUser()
  const {addNewEducation} =useEducation()
  const form = useForm({
    initialValues: {
      program: '',
      institute:'',
      startedAt: '',
      endedAt: '',
      userId:data.userId
    },
    validate: {
        program: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      institute: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      startedAt: (value) => (value < 18 ? 'You must be at select valid Date' : null),
      endedAt: (value) => (value < 18 ? 'You must be at select valid Date' : null),
    }
  });

  const handleSubmit=  async (newEducaiton)=>{
    console.log(newEducaiton)
    const {program ,institute, startedAt ,endedAt ,userId} =newEducaiton
    const data ={
      "program": program,
      "institute":institute,
      "startedAt": startedAt,
      "endedAt": endedAt,
      "userId":userId,
      
    }
    
    const response = await addNewEducation(data)
    const responseData = response.data
    console.log( responseData.statusCode)
    if(responseData.statusCode ===201)
    {
      Notifications.show({
       title:'Succesfull',
       message:'Profile Succesfull added',
       autoClose: true
      })
      setTimeout(()=>{
        return window.location.replace('/resume')
      },500)
    }
    if(responseData.statusCode!==201){

   
      Notifications.show({
        title:'Unsuccesfull',
        message:'Profile failed to added',
        autoClose: true,
        color: 'red',
       })
       
      
      
    }
   
  }


  return (
    <><PageTitle heading={'Add Education'} />
    <Container className={classes.root} paddingtop='md' mt='lg'>
    <form onSubmit={form.onSubmit((values) =>handleSubmit(form.values))}>  
      	<TextInput mt='md'label="Program" placeholder="what program you attended "
        {...form.getInputProps('program')}
        classNames={classes} />
        <TextInput mt='md'label="Institute" placeholder="institute // schooll" 
        {...form.getInputProps('institute')} />
       
       
          <DateInput hideOutsideDates label="Program Start"  
            {...form.getInputProps('startedAt')}
             />
        
         <DateInput label="Program Completed"  
            {...form.getInputProps('endedAt')}
             /> 
        <Flex gap="md" mb='md' mt='md'>      
	     <Button variant="outline"
       w={200}
       type="submit"
        >
          Save Education
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

export default AddEducation
