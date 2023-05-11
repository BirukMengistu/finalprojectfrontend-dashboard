import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import React,{Suspense} from 'react';
import Resume from '../../pages/Resume';
import Education from '../../pages/resume/Education';
import Reference from '../../pages/resume/Reference';
import { Activeuser}  from '../../pages/Activeuser';
import {Contact} from "../../pages/Contact"
import Faq from '../../pages/Faq';
import AddNewBlog from '../../pages/blog/AddNewBlog';
const AddReference = React.lazy(()=> import("../../pages/resume/AddReference"))
const JobExperience = React.lazy(() => import("../../pages/resume/JobExperience"));
const ProfileById = React.lazy(() => import("../../pages/profile/ProfileById"));
const AddEducation = React.lazy(() => import("../../pages/resume/AddEducation"));
const AddProject = React.lazy(() => import("../../pages/resume/AddProject"));
const AddJobExperiance = React.lazy(() => import("../../pages/resume/AddJobExperiance"));
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
                    <Route exact={true} path='/addnewblog' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <AddNewBlog />
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
                       <Route path='/addeducation' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddEducation />
                        </Suspense>
                    } />
                      <Route path='/addreference' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddReference />
                        </Suspense>
                    } />
                       <Route path='/addjobexperiance' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddJobExperiance />
                        </Suspense>
                    } />
                    
                    <Route path='/addproject' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddProject />
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
                       <Route path='/faq' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <Faq />
                         </Suspense>
                    } />
					  <Route path='/blog' element={ 
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                           <Blogs />
                        </Suspense>} />
                        <Route path='/support' element={ 
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                           <Contact />
                        </Suspense>} />   
				</Routes>
			<ReactQueryDevtools />
		</>)

}

export default Router;
