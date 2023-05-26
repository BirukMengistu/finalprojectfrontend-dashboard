import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import React,{Suspense} from 'react';
import Resume from '../../pages/Resume';
import Education from '../../pages/resume/Education';
import Reference from '../../pages/resume/Reference';
import { Activeuser}  from '../../pages/Activeuser';
import {Contact} from "../../pages/Contact"
import Faq, { FaqWithImage } from '../../pages/Faq';
import AddNewBlog from '../../pages/blog/AddNewBlog';
import AddReference from  "../../pages/resume/AddReference"
import AddEducation from "../../pages/resume/AddEducation";
import AddProject from "../../pages/resume/AddProject";
import AddJobExperiance from "../../pages/resume/AddJobExperiance";
import ServicePage from '../../pages/Services';
import AddResume from '../../pages/resume/AddResume';
import { Auth } from '../../hooks/utils';
import About from '../../pages/About';

const BlogDetails = React.lazy(()=> import("../../pages/blog/BlogDetails"))
const JobExperience = React.lazy(() => import("../../pages/resume/JobExperience"));
const ProfileById = React.lazy(() => import("../../pages/profile/ProfileById"));
const Home = React.lazy(() => import("../../pages/Home"));
const Profile = React.lazy(() => import("../../pages/profile/Profile"));
const AddProfile = React.lazy(() => import("../../pages/profile/Addprofile"));
const Blogs = React.lazy(() => import("../../pages/blog/Blogs"));
const Router = () => {
const isAuth = Auth.isAuth()
return (
		<>
		      
                <Routes>
					<Route exact={true} path='/' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Home />
			          </Suspense>
                    } />
                    {isAuth &&  <Route exact={true} path='/addnewblog' element={
                    <Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <AddNewBlog />
			          </Suspense>
                    } />}
                   
                    
					<Route exact={true} path='/hub' element={<Suspense fallback={<div><h1>...Loading</h1></div>}>
				          <Home />
			          </Suspense>} />
					<Route path='/profile' element={
                       <Suspense fallback={<div><h1>...Loading</h1></div>}>
                       <Profile />
                   </Suspense>} />
                   {isAuth && <Route path='/addresume' element={
                       <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddResume/>
                       
                   </Suspense>} />}
                   
                     <Route path='/addprofile' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddProfile />
                        </Suspense>} />

                        <Route path='/getprofilebyId/:id' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                           <ProfileById/>
                         </Suspense>
                    } />
                     {isAuth &&
					<Route path='/resume' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <Resume />
                        </Suspense>
                    } />}
                    {isAuth && <Route path='/education' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <Education />
                        </Suspense>
                    } />}
                     
                     
                     <Route path='/services' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <ServicePage/>
                        </Suspense>
                    } />
                        
                        <Route path='/aboutus' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                           <About/>
                        </Suspense>
                          }
                        />

                     {isAuth &&
                       <Route path='/addeducation' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddEducation />
                        </Suspense>
                    } />}

                 {isAuth &&
                      <Route path='/addreference' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddReference />
                        </Suspense>
                    } />}
                    <Route path='/blogdetails/:id' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <BlogDetails />
                        </Suspense>
                    } />
                    {isAuth &&
                       <Route path='/addjobexperiance' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddJobExperiance />
                        </Suspense>
                    } />
                } 
                   {isAuth &&
                    <Route path='/addproject' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <AddProject />
                        </Suspense>
                    } />}
                    {isAuth &&
                    <Route path='/reference' element={
                        <Suspense fallback={<div><h1>...Loading</h1></div>}>
                        <Reference />
                        </Suspense>
                    } />}
                    {isAuth &&
                      <Route path='/jobexperinace' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <JobExperience />
                         </Suspense>
                    } />}
                    <Route path='/activeuser' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <Activeuser />
                         </Suspense>
                    } />
                     {isAuth &&
                    <Route path='/resume/:id' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <Home />
                         </Suspense>
                    } />}
                       <Route path='/faq' element={
                         <Suspense fallback={<div><h1>...Loading</h1></div>}>
                         <FaqWithImage />
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
