import {  useQuery,useMutation, queryClient } from 'react-query';
import { getProfile } from './quaries/getProfile';
import axios from 'axios';
import { Auth } from './utils';
import { headers } from 'next/dist/client/components/headers';
const useProfile = () => {
const {data:user ,options:Headers} = Auth.getAuthenticatedUser()

const apiUrl = process.env.API_URL || ' http://localhost:9999/api';
	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getProfile', ()=>getProfile() )

  
      const addNewProfile = async (profile) => {
        
      
        const addProfileRes=   await axios.post(`${apiUrl}/profile`, {...profile},{headers:Headers})
        
       
		return addProfileRes;
	};

	return {
		userProfile: data,
		isLoading,
		isError,
        addNewProfile
	};
};

export default useProfile;