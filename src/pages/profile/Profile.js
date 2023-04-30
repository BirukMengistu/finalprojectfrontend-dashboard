import React from 'react'
import { Auth } from '../../hooks/utils'
import useProfile from '../../hooks/useProfile'
import { Notifications } from '@mantine/notifications'
const Profile = () => {
  const {userProfile , isLoading} = useProfile()
  const {data} = Auth.getAuthenticatedUser()
  
  const currentProfile = userProfile?.data?.filter((temp)=> (temp.userId === data.userId))
  console.log('Auth data',data.userId)
  console.log('userProfile', currentProfile)
  const Authorized = Auth.isAuth()
  const redicateAddProfile =()=>{
    Notifications.show({
      title: 'User does not exit',
      message: 'Add profile data, Professional Hub',
      type: 'Warning'
    })
    setTimeout(()=>{
      return window.location.replace('/addprofile')
    },1500)
  }
  console.log(Authorized)
  return (
    <div>
      {Authorized &&  <p>User is Authorized </p>}
      {(currentProfile?.length===0)?redicateAddProfile():null} 
    </div>
  )
}

export default Profile
