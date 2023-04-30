

import { MantineProvider } from '@mantine/core';
import {  Notifications } from '@mantine/notifications'
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Routes from './Layout/Routes/index';
import { HeroImageBackground } from './pages/HeroPage';

function App() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 0,
				retry: 3
			}
		}
	});

	return (
		<MantineProvider
			withGlobalStyles={true}
			withNormalizeCSS={true}
			theme={{
				colors: {
					brand: [
            '#FFF8E1',
            '#FFECB3',
            '#FFE082',
            '#FFD54F',
            '#FFCA28',
            '#FFB300',
            '#FFA000',
            '#FF8F00',
            '#FFD740',
            '#FFC400'
					]
				},
				primaryColor: 'brand'

			}}
		>
		 <Notifications position='top-center' limit={3} />
				<QueryClientProvider client={queryClient}>
					<div id='App' className='App'>
						<BrowserRouter>
                          
							<Layout>
								 <Routes /> 
							</Layout>
						</BrowserRouter>
					</div>
				</QueryClientProvider>
    
	</MantineProvider>
  );
}

export default App;