import React from 'react'
import useProject from '../../hooks/useProject'
import { Button, Accordion, ActionIcon, Box } from '@mantine/core';
import {Notifications} from '@mantine/notifications'
import { IconDots } from '@tabler/icons-react';

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
const Project = () => {
     const {Project ,deleteProject} = useProject()
     const removeData =(id)=>{
     const deletResponse = deleteProject(id)
     console.log(deletResponse)
     if(deletResponse.status === 200)
     Notifications.show({
      title:'Succesfull',
      message:'Project Succesfull removed',
      autoClose: true
     })
     setTimeout(()=>{
       return window.location.replace('/resume')
     },2500)

    }
  
    return (
    <div>
            <Accordion chevronPosition="left" maw={400} mx="auto"
            style={{ marginTop: 10 }}
            sx={(theme) => ({
                backgroundColor: theme.colors.brand[0],
                '&:hover': {
                backgroundColor: theme.colors.brand[0],
                },
            })}>
            {
            Project?.data?.map((data,i)  =>   
                <Accordion.Item value={data?.project_title}>

                <AccordionControl>{data?.project_title} </AccordionControl>
                <Accordion.Panel><strong>summery-</strong>{data?.summary}</Accordion.Panel>
                <Accordion.Panel><strong>Role-</strong>{data?.my_role}</Accordion.Panel>
                <Accordion.Panel><strong>Start -</strong> {(data?.startedAt).substr(0, 10)}</Accordion.Panel>
                <Accordion.Panel><strong>End -</strong>  {(data?.endedAt).substr(0, 10)}</Accordion.Panel>
                <Accordion.Panel><Button m='xs' variant="outline" color='red' onClick={()=>removeData(data?._id)} >Remove</Button></Accordion.Panel>
              </Accordion.Item> 
            )
            
            }   
            
            <Button m='md' variant="outline" onClick={()=> window.location.replace('/addproject')}> Add Project</Button> 
            </Accordion>
    
     
    </div>
  )
}

export default Project
