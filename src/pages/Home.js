import React from 'react'
import useBlog from '../hooks/useBlog'
import { Card, Image, Text, Badge, Button, Container, Grid, SimpleGrid, Skeleton ,rem ,Group, useMantineTheme } from '@mantine/core';
const PRIMARY_COL_HEIGHT = rem(300);
const Home = () => {
  const {blog,isLoading ,isError} = useBlog()
  const image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWRij83RCMCEYA5i6wCZCe0H6Hhy640RS8yw&usqp=CAU'
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
  const secondaryColor = theme.colorScheme === 'dark'
  ? theme.colors.dark[1]
  : theme.colors.gray[7];
  const filterBlog= blog?.data.filter((ob,index) => index < 1 )
  return (
    <Container my="md">

    <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={false} />
      <Grid gutter="md">
        <Grid.Col>
          <Skeleton  radius="md" animate={false} />
          {!isLoading && filterBlog.map((tblog,index)=> <div key={index}>
          <Card shadow="sm" padding="md">
            <Card.Section>
              <Image src={image} height={160} alt="Norway" />
            </Card.Section>
    
            <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color="pink" variant="light">
                latest
              </Badge>
            </Group>
    
            <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
            {tblog.body}
            </Text>
    
            <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
              Blog details
            </Button>
          </Card>
          </div>
           
           )}
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
        </Grid.Col>
        <Grid.Col span={6}>
          <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
        </Grid.Col>
      </Grid>
    </SimpleGrid>
    </Container>
  )
}

export default Home
