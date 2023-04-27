import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';

import Home from '../../pages/Home'

import About from '../../pages/About'


const Router = () => {
	

return (
		<>
		
                <Routes>
					<Route exact={true} path='/' element={<Home />} />
					<Route exact={true} path='/hub' element={<Home />} />
					<Route path='/profile' element={<About />} />
					<Route path='/resume' element={<About />} />
                    <Route path='/resume/:id' element={<About />} />
					<Route path='/blog' element={<About />} />
				</Routes>
			<ReactQueryDevtools />
		</>)

}

export default Router;
