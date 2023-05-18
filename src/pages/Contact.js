import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    createStyles,
    rem,
  } from '@mantine/core';
  import { ContactIconsList } from './ContactIcons/ContactIcons';
  import { useForm } from '@mantine/form';
  import { Notifications } from '@mantine/notifications';
  import useSupport from '../hooks/useSupport'
  const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan('sm');
  
    return {
      wrapper: {
        display: 'flex',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.brand[8] : theme.colors.brand[1],
        borderRadius: theme.radius.lg,
        marginTop:rem(32),
        padding: rem(4),
        borderLeft: `${rem(1)} solid ${
          theme.colors === 'dark' ? theme.colors.dark[8] : theme.colors.gray[2]
        }`,
  
        [BREAKPOINT]: {
          flexDirection: 'column',
        },
      },
  
      form: {
        boxSizing: 'border-box',
        flex: 1,
        padding: theme.spacing.xl,
        paddingLeft: `calc(${theme.spacing.xl} * 2)`,
        borderLeft: 0,
  
        [BREAKPOINT]: {
          padding: theme.spacing.md,
          paddingLeft: theme.spacing.md,
        },
      },
  
      fields: {
        marginTop: rem(-12),
      },
  
      fieldInput: {
        flex: 1,
  
        '& + &': {
          marginLeft: theme.spacing.md,
  
          [BREAKPOINT]: {
            marginLeft: 0,
            marginTop: theme.spacing.md,
          },
        },
      },
  
      fieldsGroup: {
        display: 'flex',
  
        [BREAKPOINT]: {
          flexDirection: 'column',
        },
      },
  
      contacts: {
        boxSizing: 'border-box',
        position: 'relative',
        borderRadius: theme.radius.lg,
        backgroundColor: theme.colors[1],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: `${rem(1)} solid transparent`,
        padding: theme.spacing.xl,
        flex: `0 0 ${rem(280)}`,
  
        [BREAKPOINT]: {
          marginBottom: theme.spacing.sm,
          paddingLeft: theme.spacing.md,
        },
      },
  
      title: {
        marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  
        [BREAKPOINT]: {
          marginBottom: theme.spacing.xl,
        },
      },
  
      control: {
        [BREAKPOINT]: {
          flex: 1,
        },
      },
    };
  });
  
  export function Contact() {
    const { classes } = useStyles();
    const {AddNewSupportMessage} = useSupport()
    const form = useForm({
      initialValues: {
        name: '',
        email:'',
        message: '',
        subject: '',
        
      },
      validate: {
          name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
         subject: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
         email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
         message: (value) => (value.length < 2? 'You must be at select valid Date' : null),
      }
    });
    const handleSubmit=  async (newEducaiton)=>{
      console.log(newEducaiton)
      const {subject ,message, name ,email } =newEducaiton
      const data ={
        "subject": subject,
        "message":message,
        "name": name,
        "email": email,  
      }
      
      const response = await AddNewSupportMessage(data)
      const responseData = response.data
      console.log( responseData.statusCode)
      if(responseData.statusCode ===201)
      {
        Notifications.show({
         title:'Succesfull',
         message:'Message Succesfull sent',
         autoClose: true
        })
        setTimeout(()=>{
          return window.location.replace('/')
        },2500)
      }
      if(responseData.statusCode!==201){
  
     
        Notifications.show({
          title:'Unsuccesfull',
          message:'Message fail to sent',
          autoClose: true,
          color: 'red',
         })
         
        
        
      }
     
    }
    return (
      <Paper shadow="md" radius="lg">
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz="lg" fw={700} className={classes.title} >
              Contact information
            </Text>
  
            <ContactIconsList variant="white" />
          </div>
  
          <form className={classes.form} onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <Text fz="lg" fw={700} className={classes.title}>
              Get in touch
            </Text>
  
            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput label="Your name" placeholder="Your name" 
                 {...form.getInputProps("name")}/>
                <TextInput label="Your email" placeholder="hello@mantine.dev"
                 {...form.getInputProps("email")} required />
              </SimpleGrid>
  
              <TextInput mt="md" label="Subject" placeholder="Subject"
               {...form.getInputProps("subject")} required />
  
              <Textarea
                mt="md"
                label="Your message"
                placeholder="Please include all relevant information"
                minRows={3}
                {...form.getInputProps("message")}
              />
  
              <Group position="right" mt="md">
                <Button variant='outline' type="submit" className={classes.control}>
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    );
  }