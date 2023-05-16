import React from 'react'
import useJobExperiance from '../../hooks/useJobExperiance'
import { Button, Accordion,ActionIcon,  Box } from '@mantine/core';
import {Notifications} from '@mantine/notifications'
import { IconDots } from '@tabler/icons-react';
import { Auth } from '../../hooks/utils';
  function AccordionControl(props) {
    return (
      <Box sx={(theme) => ({ display: 'flex', alignItems: 'center', backgroundColor: theme.colors.brand[0] })} >
        <Accordion.Control {...props} />
        <ActionIcon size="lg">
          <IconDots size="1rem" />
        </ActionIcon>
      </Box>
    );
  }

const JobExperience = () => {
  const {data} = Auth.getAuthenticatedUser()
  const {JobExperiance,getJobExperianceById ,deleteExperiance} =useJobExperiance()
  
  const userJobExp= JobExperiance?.data?.filter((value)=> value.userId === data?.userId)

  const removeData =(id)=>{
    const deletResponse = deleteExperiance(id)
    console.log(deletResponse.status)
    if(deletResponse.status === 200){
        
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
      <strong>JobExperiance</strong>
        
            <Accordion chevronPosition="left" maw={400} mx="auto"
            style={{ marginTop: 10 }}
            sx={(theme) => ({
                backgroundColor: theme.colors.brand[0],
                '&:hover': {
                backgroundColor: theme.colors.brand[0],
                },
            })}>
            {
            userJobExp!==undefined && userJobExp?.map((data)  =>   
                <Accordion.Item value={data?.company}>
                {new Date().now }
                
                <AccordionControl>{data?.title} </AccordionControl>
                <Accordion.Panel><strong>Company</strong> {data?.company}</Accordion.Panel>
                <Accordion.Panel><strong>Responsiblity</strong> {data?.responsibility}</Accordion.Panel>
                <Accordion.Panel> <strong> From </strong>  {(data?.startedAt).substr(0, 10)}</Accordion.Panel>
                <Accordion.Panel> <strong> To </strong> {(data?.endedAt).substr(0, 10)} </Accordion.Panel>
                <Accordion.Panel><Button m='xs' variant="outline" color='red' onClick={()=>removeData(data?._id)} >Remove</Button></Accordion.Panel>
               </Accordion.Item> 
            ) 
            }   
            
            <Button m='md' variant="outline" Position="center"
            onClick={()=> window.location.replace('/addjobexperiance')}
            > Add Expriance</Button>
            </Accordion>
    
     
    </div>
   
  )
}

export default JobExperience
