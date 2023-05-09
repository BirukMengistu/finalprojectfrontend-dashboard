import React from 'react'
import useProject from '../../hooks/useProject'
import { Button, Accordion, ActionIcon, Box } from '@mantine/core';

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
    const {Project} = useProject()
   
  
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
                <Accordion.Panel><strong>Start -</strong> {data?.startedAt}</Accordion.Panel>
                <Accordion.Panel><strong>End -</strong>  {data?.endedAt}</Accordion.Panel>
              </Accordion.Item> 
            )
            
            }   
            
            <Button m='md' variant="outline" onClick={()=> window.location.replace('/addproject')}> Add Project</Button> 
            </Accordion>
    
     
    </div>
  )
}

export default Project
