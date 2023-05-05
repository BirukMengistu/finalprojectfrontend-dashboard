
import PageNav  from '../components/PageNav';
import useBlog from '../hooks/useBlog'
import React,{ Suspense } from 'react';
import WelcomeBox from '../components/WelcomeBox'
import Container from '../Layout/Container';
import useProfile from '../hooks/useProfile'
import imageProfile from '../assets/images/profile.jpg'
import imageResume from '../assets/images/418_resume.jpg'
import imageBlog from '../assets/images/blog.jpg'
import {Auth} from '../hooks/utils'
import { Feature } from '../components/Features';

const Home = () => {
  const {userProfile } = useProfile()
  const {data} = Auth.getAuthenticatedUser()
  const {isAuth} = Auth.isAuth()
  const {blog,isLoading } = useBlog()
 
  const filterBlog= blog?.data?.filter((ob,index) => index < 1 )
  return (
    <Container my="md">
          <Suspense fallback={<div>Loading...</div>}>
				  <WelcomeBox user={blog} state={isLoading} />
				{isAuth && <PageNav path='/profile' text='Profile' src={imageProfile} alt='' />}
				<PageNav
					path='/activeuser'
					text='Active User'
					src={imageResume}
					alt='image'
				/>
				<PageNav path='/services' text='Services' src={imageBlog} alt='services' />
				
				<PageNav text='Lates Blogs' alt='' path='/blog' src={imageBlog} />
			
			</Suspense>
     <Feature/>
    </Container>
  )
}

export default Home
