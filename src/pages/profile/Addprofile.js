
import { useState } from 'react';
import { useForm } from '@mantine/form';
import { createStyles,SegmentedControl,Button,Flex, rem, Container, Select, TextInput } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import useProfile from '../../hooks/useProfile'
import { Auth } from '../../hooks/utils'
import { async } from 'q';
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

const useStylesSegments = createStyles((theme) => ({
  root: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
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

  label: {
    '&, &:hover': {
      '&[data-active]': {
        color: theme.white,
      },
    },
  },
}));


const AddProfile = () => {
  const {data ,options } = Auth.getAuthenticatedUser()
  const {addNewProfile} =useProfile()
  const form = useForm({
    initialValues: {
      address: '',
      role: '',
      gender: '',
      email: '',
     // dateOfBirth:'',
      userId:data.userId
    },
    validate: {
      address: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      role: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      gender: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      //dateOfBirth: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    }
  });

  const { classes } = useStyles();
	const {classSeg}=useStylesSegments()
  
   const handleSubmit= (newProfile)=>{
    const {address ,gender ,email ,userId} =newProfile
    const data ={
      "address": address,
      "role": gender,
      "gender": email,
      "email": userId,
      "completed":true,
      "userId":userId
    }
    addNewProfile(data)
  }
  return (

    <Container className={classes.root} paddingtop='md' mt='lg'>
        
      	<TextInput mt='md'label="Shipping address" placeholder="15329 Huston 21st"
        {...form.getInputProps('address')}
        classNames={classes} />
        <TextInput mt='md'label="Telephone" placeholder="070-XX" 
        {...form.getInputProps('email')}
        classNames={classes} />
              <Select
                mt="md"
                withinPortal
                data={['user','null']}
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
             {/*  <DatePickerInput
                mt="md"
                mb="md"
                popoverProps={{ withinPortal: true }}
                label="Departure date"
                placeholder="When will you leave?"
                {...form.getInputProps('dateOfBirth')}
                classNames={classes}
                clearable={false}
              /> */}
        <Flex gap="md" mb='md' mt='md'>      
	     <Button
       w={200}
          onClick={() =>handleSubmit(form.values)
          }
        >
          Save Profile
        </Button>
        <Button
        w={200}
          onClick={() =>handleSubmit(form.reset())
          }
        >
          Reset Form
        </Button>
        </Flex>
    </Container>
  )
}

export default AddProfile





