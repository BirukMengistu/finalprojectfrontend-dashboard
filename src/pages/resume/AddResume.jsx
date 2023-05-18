import { useForm } from '@mantine/form';
import { createStyles,Button,Flex,MultiSelect, rem, Container,  TextInput } from '@mantine/core';
import useResume from '../../hooks/useResume'
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




const AddResume = () => {
  const classes = useStyles()
  const {data } = Auth.getAuthenticatedUser()
  const {addNewResume} =useResume()
  const form = useForm({
    initialValues: {
      technical_Skil: '',
      summary:'',
      language:'',
      hobby:'',
      github:'',
      linkden:'',
      profileImg:'',
      youtube:'',
      userId:data.userId
    },
  
    validate: {
        technical_Skil: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
        summary: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
        hobby: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
        linkden: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
       youtube: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
       profileImg: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
       github: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
       language: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      
    }
  });

  const hobbys = [
    { value: 'reading books', label: 'reading books' },
    { value: 'ng', label: 'Angular' },
    { value: 'Watching movies', label: 'Watching movies' },
    { value: 'Playing Soccer', label: 'Playing Soccer' },
    { value: 'writing code', label: 'writing code' },
    { value: 'Gym Exercies', label: 'Gym Exercies' },
    { value: 'Hiking', label: 'Hiking' },
  ];
  const skils = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'Python', label: 'Python' },
    { value: 'Java', label: 'Java' },
    { value: 'vue', label: 'Vue' },
    { value: 'C#', label: 'C#' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
  ];
  const languages = [
    { value: 'English', label: 'English' },
    { value: 'Arbic', label: 'Arbic' },
    { value: 'Franch', label: 'Franch' },
    { value: 'Amharic', label: 'Amharic' },
    { value: 'Swedish', label: 'Swedish' },
    { value: 'Spanish', label: 'Spanish' },
    { value: 'Protugiz', label: 'Protugiz' },
    { value: 'Germany', label: 'Germany' },
    { value: 'Chainize', label: 'Chainize' },
  ];
  const handleSubmit=  async (newResume)=>{
    console.log(newResume)
    const {summary ,technical_Skil, hobby ,language,linkden,github,youtube ,userId} =newResume
    const data ={
      "summary": summary,
      "technical_Skil":technical_Skil,
      "hobby": hobby,
      "language":language ,
      "linkden":linkden,
      "github":github,
      "youtube":youtube,
      "userId":userId,
      
    }
    
    const response = await addNewResume(data)
    const responseData = response.data
    console.log( responseData.statusCode)
    if(responseData.statusCode ===201)
    {
      Notifications.show({
       title:'Succesfull',
       message:'Resume Succesfull added',
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
    <form >  
      	<TextInput mt='md'label="summary" placeholder="short summary "
        {...form.getInputProps('summary')}
        classNames={classes} />
       
       
       
          <MultiSelect
          data={hobbys}
          label="Your Hobbys"
          placeholder="Pick all that you like"
          {...form.getInputProps('hobby')}
        />
           <MultiSelect
          data={languages}
          label="speaking languages "
          placeholder="Pick all that you like"
          {...form.getInputProps('language')}
        />

        <MultiSelect
          data={skils}
          label="your Technical Skill"
          placeholder="Pick all that you like"
          {...form.getInputProps('technical_Skil')}
        /> 
         
        
         <TextInput mt='md'label="linkden addres" placeholder="linkden url" 
        {...form.getInputProps('linkden')} classNames={classes} />
         <TextInput mt='md'label="github addres" placeholder="github url" 
        {...form.getInputProps('github')} classNames={classes} />
          <TextInput mt='md'label="youtube addres" placeholder="youtube url" 
        {...form.getInputProps('youtube')} classNames={classes} />
           <TextInput mt='md'label="ProfileImg addres" placeholder="profileImg url" 
        {...form.getInputProps('profileImg')} classNames={classes} />
        <Flex gap="md" mb='md' mt='md'>      
	     <Button variant="outline"
       w={200}
       
       onClick={()=>handleSubmit(form.values)}
        >
          Save Resume
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

export default AddResume
