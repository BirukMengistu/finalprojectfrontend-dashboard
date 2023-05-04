import React from 'react'
import useReference from '../../hooks/useReference'
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
const Reference = () => {
    const {reference} = useReference()
  
  
    return (
    <div>
      <strong>Reference</strong>
        
            <Accordion chevronPosition="left" maw={400} mx="auto"
            style={{ marginTop: 10 }}
            sx={(theme) => ({
                backgroundColor: theme.colors.gray[0],
                '&:hover': {
                backgroundColor: theme.colors.gray[1],
                },
            })}>
            {
            reference?.data?.map((data)  =>   
                <Accordion.Item value="item-1">
                {new Date().now }
                
                <AccordionControl>{data?.firstName} {data?.lastName}</AccordionControl>
                <Accordion.Panel>{data?.company}</Accordion.Panel>
                <Accordion.Panel><p>contact Address-</p> {data?.email}  and {data?.telephone}</Accordion.Panel>
            </Accordion.Item> 
            ) 
            }   
            

            </Accordion>
    
     
    </div>
  )
}

export default Reference
