import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import React,{Suspense} from 'react';
import Resume from '../../pages/Resume';
import Education from '../../pages/resume/Education';
import Reference from '../../pages/resume/Reference';
import JobExperience from '../../pages/resume/JobExperience';
import { Activeuser } from '../../pages/Activeuser';
import { Contact } from '../../pages/Contact';
import ProfileById from '../../pages/profile/ProfileById';


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
                        <Route path='/getprofilebyId/:id' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <ProfileById/>
                         </Suspense>
                    } />
					<Route path='/resume' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <Resume />
                        </Suspense>
                    } />
                    <Route path='/education' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <Education />
                        </Suspense>
                    } />
                    <Route path='/reference' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <Reference />
                        </Suspense>
                    } />
                      <Route path='/jobexperinace' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <JobExperience />
                         </Suspense>
                    } />
                    <Route path='/activeuser' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <Activeuser />
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
                        <Route path='/contactus' element={ 
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                           <Contact />
                        </Suspense>} />   
				</Routes>
			<ReactQueryDevtools />
		</>)

}

export default Router;
