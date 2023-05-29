import { useForm } from '@mantine/form';
import { createStyles,MultiSelect,Textarea,Button,Flex, rem, Container,  TextInput } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import useBlog from '../../hooks/useBlog'
import { Auth } from '../../hooks/utils'
import PageTitle from '../../components/PageTitle';
import { Notifications } from '@mantine/notifications';
import React from 'react';
import { useState } from 'react';
import isUrl from 'is-url';

const Tag = [
    { value: 'react', label: 'React' },
    { value: 'ng', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'vue', label: 'Vue' },
    { value: 'riot', label: 'Riot' },
    { value: 'next', label: 'Next.js' },
    { value: 'blitz', label: 'Blitz.js' },
  ];
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




const AddNewBlog = () => {
  const classes = useStyles()
  const {data } = Auth.getAuthenticatedUser()
  const {AddNewBlog} =useBlog()
  const [startDate, setStartdate] = useState()
  const [tagValue, setTagValue] = useState()

  const form = useForm({
    initialValues: {
        authour:"",
        tittle: "", 
        body:"",
        createdAt:"",
        review:false,
        tag:" " ,
        blogImage:"",
        userId:data.userId
    },
    validate: {
      authour: (value) => (value.length < 2  ?  null :'Name must have at least 2 letters and valid'),
      tittle: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      body: (value) => (value.length < 10 ? 'Name must have at least 10 letters' : null),
      tag: (value) => (value.length === 0 ? 'tag must have at least 1 letters' : null),
      blogImage: (value) => (isUrl(value) ?  null :'address must be valid'),
      createdAt: (value) => (value.length===0 ? 'Date must have at select' : null),
    }
  });

 


  const handleOnSubmit=  async (newProject)=>{
    
    const {authour ,body,tittle,blogImage,review, userId} = newProject
    const data ={
      "authour": authour,
      "tittle":tittle,
      "tag": tagValue,
      "body":body,
      "createdAt": startDate,
      "blogImage": blogImage,
      "review":review,
      "userId":userId,
      
    }
    

    const response = await AddNewBlog(data)
    const responseData = response.data
    
    if(responseData.statusCode ===201)
    {
      Notifications.show({
       title:'Succesfull',
       message:'Profile Succesfull added',
       autoClose: true
      })
      setTimeout(()=>{
        return window.location.replace('/blog')
      },1500)
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
       <>
       <PageTitle heading={'Add New Blog'} />
       <Container className={classes.root} paddingtop='md' mt='lg'>
        {/* form area start */}
       <form onSubmit={form.onSubmit((values) =>handleOnSubmit(form.values))} >

      	<TextInput withAsterisk mt='md'label="Authour" placeholder="title of the blog "
        {...form.getInputProps("authour")}
        classNames={classes} />
        

        <TextInput withAsterisk mt='md'label="Title" placeholder="title of the blog" 
         {...form.getInputProps("tittle")}/>
         <Textarea withAsterisk mt='md'label="body" placeholder="discription for the blog" 
        {...form.getInputProps("body")} />
          <TextInput withAsterisk mt='md'label="Image Url" placeholder="blog image url /address" 
        {...form.getInputProps("blogImage")} />
        <DateInput  valueFormat="YYYY MM DD"
              label="Program Start"  
              value={startDate}
              onChange={setStartdate}
              {...form.getInputProps("createdAt")}
             withAsterisk
             />
         <MultiSelect
         data={Tag}
         label="Blog Tags "
        placeholder="Pick all that you like"
          value={tagValue}
         onChange={setTagValue}
         {...form.getInputProps("tag")}
         withAsterisk
        />
        

        <Flex gap="md" mb='md' mt='md'>      
	     <Button variant="outline" w={200} 
            type='submit'
           //onClick={()=>handleOnSubmit(form.values)}
            >
            Save new Blog
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

export default AddNewBlog