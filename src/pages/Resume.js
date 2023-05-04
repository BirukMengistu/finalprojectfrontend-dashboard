import { Box, Container, Tabs } from '@mantine/core';
import Education from './resume/Education';
import Reference from './resume/Reference';
import { Summary } from './resume/Summary';
import Project from './resume/Project';




const Resume = () => {





	return (
		<>
			{/* <PageTitle heading='Profile' /> */}
			<Container size={'md'}>
				<Box p={15}>
					<Tabs defaultValue='Resume-Summary'>
						{/*List*/}
                             <Tabs.List align={'center'} position={'center'} grow={true}>
							<Tabs.Tab value='Portfoilo'  >
                             Project Portfoilo
							</Tabs.Tab>
					     
							<Tabs.Tab value='Resume-Summary'  >
                            Summary
							</Tabs.Tab>
							<Tabs.Tab value='Educations' >
                                  Education Info
							</Tabs.Tab>
							<Tabs.Tab value='Jobs' >
								Expriance Info
							</Tabs.Tab>
                            <Tabs.Tab value='reference' >
                                Reference Info
							</Tabs.Tab>
						

						</Tabs.List>
                       {/*Panels*/}
                        <Tabs.Panel value='Portfoilo' pt='xs'>
							<strong>Portfoilo</strong>
                            <Project/>
						</Tabs.Panel>
						
						{/*Resume-Summary*/}
						<Tabs.Panel value='Resume-Summary' pt='xs'>
							<Summary/>
						</Tabs.Panel>

						{/*Educations*/}
						<Tabs.Panel value='Educations' pt='xs'>
                            <Education/>
						</Tabs.Panel>

						{/* Expriance Info*/}
						<Tabs.Panel value='Jobs' pt='xs'>
							<Reference/>
						</Tabs.Panel>
                        <Tabs.Panel value='reference' pt='xs'>
							<Reference/>
						</Tabs.Panel>


						
					</Tabs>
				</Box>
			</Container>
		</>
	);
};

export default Resume;
