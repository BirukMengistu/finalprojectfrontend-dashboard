

import { useForm } from '@mantine/form';
import { createStyles,SegmentedControl,Button,Flex, rem, Container, Select, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import useProfile from '../../hooks/useProfile'
import { Auth } from '../../hooks/utils'
import PageTitle from '../../components/PageTitle';
import { Notifications } from '@mantine/notifications';

const useStyles = createStyles((theme) => ({
  
  root: {
    
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.white,
    boxShadow: theme.shadows.md,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1]
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



const AddProfile = () => {
  const {data } = Auth.getAuthenticatedUser()
  const {addNewProfile} =useProfile()
  const form = useForm({
    initialValues: {
      address: '',
      telephone:'',
      role: '',
      gender: '',
      email: data.email,
     // dateOfBirth:'',
     firstName: data?.firstName,
     lastName:  data?.lastName,
     userId:data?.userId
    },
    
    validate: {
      address: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      role: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      gender: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      //dateOfBirth: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    }
  });
  console.log(data)
  const { classes } = useStyles();
	
  
   const handleSubmit= async (newProfile)=>{
    console.log(newProfile)
    const {address, telephone ,gender ,email ,userId ,role,firstName ,lastName} =newProfile
    const data ={
      "address": address,
      "telephone":telephone,
      "role": role,
      "gender": gender,
      "email": email,
      "completed":true,
      "userId":userId,
      "firstName":firstName,
      "lastName":lastName,
    }
    const responseData = await addNewProfile(data)
    
   console.log(responseData)

    if(responseData.status === 201)
    {
      Notifications.show({
       title:'Succesfull',
       message:'Profile Succesfull added',
       autoClose: true
      })
      window.location.reset('/')
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
    <><PageTitle heading={'Add Profile'} />
    <Container className={classes.root} paddingtop='md' mt='lg'>
        
      	<TextInput mt='md'label="Shipping address" placeholder="15329 Huston 21st"
        {...form.getInputProps('address')}
        classNames={classes} />
        <TextInput mt='md'label="Telephone" placeholder="070-XX" 
        {...form.getInputProps('telephone')} />

        <TextInput mt='md'label="email"  placeholder="xx@mail.com" 
        {...form.getInputProps('email')}
        classNames={classes} />
              <Select
                mt="md"
                withinPortal
                data={[
                  { value: 'Student', label: 'Student' },
                  { value: 'Jounior', label: 'Jounior' },
                  { value: 'Mentor', label: 'Mentor' },
                  { value: 'Hr', label: 'Hr' },
                  { value: 'Reviewer', label: 'Reviewer' },
                ]}
                placeholder="User Role"
                {...form.getInputProps('role')}
                label="Your role as Professional Hub user"
                classNames={classes}
              />
              <span>Gender</span>
              <SegmentedControl
                  radius="xl"
                  size="md"
                  mt='md'
                  color="#FFCA28"
                  {...form.getInputProps('gender')}
                  data={['Male', 'Famale', 'UnKnown']}
                  
                />
            
        <Flex gap="md" mb='md' mt='md'>      
	     <Button variant="outline"
       w={200}
          onClick={() =>handleSubmit(form.values)
          }
        >
          Save Profile
        </Button>
        <Button
        w={200} variant="outline"
          onClick={() =>handleSubmit(form.reset())
          }
        >
          Reset Form
        </Button>
        </Flex>
    </Container>
    </>
  )
}

export default AddProfile





