import React from 'react'
import useReference from '../../hooks/useReference'
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
const Reference = () => {
    const {reference} = useReference()
  
  
    return (
    <div>
      <strong>Reference</strong>
        
            <Accordion chevronPosition="left" maw={400} mx="auto"
            style={{ marginTop: 10 }}
            sx={(theme) => ({
                backgroundColor: theme.colors.brand[0],
                '&:hover': {
                backgroundColor: theme.colors.brand[0],
                },
            })}>
            {
            reference?.data?.map((data)  =>   
                <Accordion.Item value={data?.email}>
                {new Date().now }
                
                <AccordionControl>{data?.firstName} {data?.lastName}</AccordionControl>
                <Accordion.Panel><strong>Company</strong> {data?.company}</Accordion.Panel>
               
                <Accordion.Panel> <strong> Telephone </strong>  {data?.telephone}</Accordion.Panel>
                <Accordion.Panel> <strong> Email </strong> {data?.email} </Accordion.Panel>
                
               
               </Accordion.Item> 
            ) 
            }   
            
            <Button m='md' variant="outline" Position="center"> Add Reference</Button>
            </Accordion>
    
     
    </div>
  )
}

export default Reference
