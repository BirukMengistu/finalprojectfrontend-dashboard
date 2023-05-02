import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import React,{Suspense} from 'react';


const Home = React.lazy(() => import("../../pages/Home"));
const About = React.lazy(() => import("../../pages/About"));
const Profile = React.lazy(() => import("../../pages/profile/Profile"));
const AddProfile = React.lazy(() => import("../../pages/profile/Addprofile"));
const Blogs = React.lazy(() => import("../../pages/blog/Blogs"));
const Router = () => {

return (
		<>
		      
                <Routes>
					<Route exact={true} path='/' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Home />
			          </Suspense>
                    } />
					<Route exact={true} path='/hub' element={<Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Home />
			          </Suspense>} />
					<Route path='/profile' element={
                       <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <About/>
                       <Profile />
                   </Suspense>} />
                   
                    <Route path='/addprofile' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddProfile />
                        </Suspense>} />
                   
					<Route path='/resume' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <Home />
                        </Suspense>
                    } />
                    <Route path='/resume/:id' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <Home />
                         </Suspense>
                    } />
					<Route path='/blog' element={ 
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                           <Blogs />
                        </Suspense>} />
				</Routes>
			<ReactQueryDevtools />
		</>)

}

export default Router;
