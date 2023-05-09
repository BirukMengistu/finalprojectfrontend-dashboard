import React from 'react'
import useJobExperiance from '../../hooks/useJobExperiance'
import { Button, Accordion,ActionIcon,  Box } from '@mantine/core';

import { IconDots } from '@tabler/icons-react';

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
  const {JobExperiance} =useJobExperiance()
  console.log(JobExperience)
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
            JobExperiance?.data?.map((data)  =>   
                <Accordion.Item value={data?.company}>
                {new Date().now }
                
                <AccordionControl>{data?.title} </AccordionControl>
                <Accordion.Panel><strong>Company</strong> {data?.company}</Accordion.Panel>
                <Accordion.Panel><strong>Responsiblity</strong> {data?.responsibility}</Accordion.Panel>
                <Accordion.Panel> <strong> From </strong>  {data?.startedAt}</Accordion.Panel>
                <Accordion.Panel> <strong> To </strong> {data?.endedAt} </Accordion.Panel>
                
               
               </Accordion.Item> 
            ) 
            }   
            
            <Button m='md' variant="outline" Position="center"> Add Expriance</Button>
            </Accordion>
    
     
    </div>
   
  )
}

export default JobExperience
