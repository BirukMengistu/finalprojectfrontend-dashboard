import React from 'react'
import useEducation from '../../hooks/useEducation'
import { Group, Avatar, Text, Accordion, ActionIcon, AccordionControlProps, Box } from '@mantine/core';

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
  function AccordionControl(props: AccordionControlProps) {
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
    const {userEducation} = useEducation()
    
  return (
    <div>
     <strong>Education</strong> 
    {/*  <Accordion  iconPosition="right" >
     
           
            >
       <Accordion.Item icon={"../../assets/Icons/profile-pic.svg"}>
          <Text> program={userEducation?.data?.[0].program}src="../../assets/Icons/profile-pic.svg" </Text>
          <Text>endedAt={userEducation?.data?.[0].endedAt} </Text> 
         
      </Accordion.Item>
       </Accordion>
      {/* ... other items */}
    
    <Accordion chevronPosition="left" maw={400} mx="auto"
       style={{ marginTop: 10 }}
       sx={(theme) => ({
           backgroundColor: theme.colors.gray[0],
           '&:hover': {
           backgroundColor: theme.colors.gray[1],
           },
       })}>
     {
       userEducation?.data?.map((data)  =>   
        <Accordion.Item value="item-1">
        { }
        <AccordionControl>{data?.program}</AccordionControl>
        <Accordion.Panel>{data?.institute}</Accordion.Panel>
        <Accordion.Panel><strong>completed -</strong>  { new Date(data?.endedAt).toDateString()}</Accordion.Panel>
      </Accordion.Item> 
       ) 
     }   
      

      </Accordion>
    
     
    </div>
  )
}

export default Education





