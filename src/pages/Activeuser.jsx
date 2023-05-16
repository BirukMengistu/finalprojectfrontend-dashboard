import React , {useState}from 'react'
import { createStyles, Table, TextInput, Anchor, Text, Group, ScrollArea, rem, Button } from '@mantine/core';
import  useProfile  from '../hooks/useProfile'
import { Link } from 'react-router-dom/dist';
import {  IconSearch } from '@tabler/icons-react';


const useStyles = createStyles((theme) => ({
  progressBar: {
    '&:not(:first-of-type)': {
      borderLeft: `${rem(3)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
      }`,
    },
  },
}));



export function Activeuser() {
  const { classes, theme } = useStyles();
  const { userProfile } = useProfile()
  const [search, setSearch] = useState('');
  const rows = userProfile?.data.map((row) => {
    
    const handleSearchChange = (event) => {
      const { value } = event.currentTarget;
      setSearch(value);
       };
    return (
      
      <tr key={row._id}>
      
        <td>{row.userId}</td>
        <td>
          <Anchor component="button" fz="sm">
            {row.email}
          </Anchor>
        </td>
        <td>{row.gender}</td>
        <td>
          <Group position="apart">
            <Text  fz="xs" c='white' weight={700}>
              {row.role}
            </Text>
          </Group>
        </td>

        <td>
          <Group position="apart">
           
                <Anchor variant="outline" fz="xs"  
                  weight={700} component={Link} 
                  to={`/getprofilebyId/${row.userId}`}>
                   Profile
                </Anchor>
             
      
            <Button variant="outline" fz="xs"  weight={700}>
              Resume
            </Button>
          </Group>
        </td>
      </tr>
   
    );
  });

  return (
    <ScrollArea>
       <TextInput
        placeholder="Search by any field"
        mb="md"
        mt="lg"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        />
      <Table sx={{ minWidth: 500 }} verticalSpacing="xs"  striped highlightOnHover withBorder>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Role</th>
            <th>Links Datils </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}