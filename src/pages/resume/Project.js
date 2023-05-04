import React from 'react'
import useProject from '../../hooks/useProject'
import { Group, Avatar, Text, Accordion, ActionIcon, AccordionControlProps, Box } from '@mantine/core';

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
    console.log(Project?.data)
  
    return (
    <div>
      <strong>Project</strong>
        
            <Accordion chevronPosition="left" maw={400} mx="auto"
            style={{ marginTop: 10 }}
            sx={(theme) => ({
                backgroundColor: theme.colors.gray[0],
                '&:hover': {
                backgroundColor: theme.colors.gray[1],
                },
            })}>
            {
            Project?.data?.map((data)  =>   
                <Accordion.Item value="item-1">
                {new Date().now }
                
                  

                <AccordionControl>{data?.project_title} </AccordionControl>
                <Accordion.Panel><Text>summery-</Text>{data?.summary}</Accordion.Panel>
                <Accordion.Panel><Text>Role-</Text>{data?.my_role}</Accordion.Panel>
                <Accordion.Panel><Text>Time -</Text> {data?.startedAt} - {data?.endedAt}</Accordion.Panel>
            </Accordion.Item> 
            ) 
            }   
            

            </Accordion>
    
     
    </div>
  )
}

export default Project
