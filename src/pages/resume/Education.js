import React from 'react'
import useEducation from '../../hooks/useEducation'
import { Group, Avatar,Button, Text,Container, Accordion, ActionIcon, AccordionControlProps, Box } from '@mantine/core';
import {Notifications} from '@mantine/notifications'
import { IconDots } from '@tabler/icons-react';

export const AccordionLabel = ({ image , program , endedAt })=> {
    return (
      <Group noWrap>
        <Avatar src={image} radius="xl" size="lg" />
        <div>
          <Text>{program}
          {console.log("program",program)}</Text>
          <Text size="sm" color="dimmed" weight={400}>
            {endedAt}
            {console.log("endedAt",endedAt)}
          </Text>
        </div>
      </Group>
    );
  }
  function AccordionControl(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Accordion.Control {...props} />
        <ActionIcon size="lg">
          <IconDots size="1rem" />
        </ActionIcon>
      </Box>
    );
  }
  
const Education = () => {
    const {userEducation ,deletEducation} = useEducation()
    
    //delete method
    const removeData =(id)=>{
      const response = deletEducation(id)
      const deleteRes =response.data
      console.log(deleteRes)
      if(deleteRes.status === 200){
        
        setTimeout(()=>{
          Notifications.show({
            title:'Succesfull',
            message:'Education Succesfull Removed',
            autoClose: true
           })}, 1500)
          return window.location.replace('/resume')
      }
     
      
 
     }
  return (
    <div>
     <strong>Education</strong> 
  
    <Container size={'md'}>  
    <Accordion  maw={400} mx="auto"
       style={{ marginTop: 10 }}
       sx={(theme) => ({
           backgroundColor: theme.colors.brand[0],
           '&:hover': {
           backgroundColor: theme.colors.brand[0],
           },
       })}>
     {
       userEducation?.data?.map((data)  =>   
                     <Accordion.Item value={data?.program}>
                     <AccordionControl>{data?.program}</AccordionControl>
                          <Accordion.Panel> <strong>Institute -</strong>{data?.institute}</Accordion.Panel>
                          <Accordion.Panel><strong>completed -</strong>  { (data?.endedAt).substr(0, 10)}</Accordion.Panel>
                          <Accordion.Panel><Button m='xs' variant="outline" color='red' onClick={()=>removeData(data?._id)} >Remove</Button></Accordion.Panel>
                      </Accordion.Item> 
                      ) 
                    } 
            <Button m='md' variant="outline" onClick={()=>window.location.replace('/addeducation')}> Add Education</Button>          
          </Accordion>
      
     </Container>
     
    </div>
  )
}

export default Education





