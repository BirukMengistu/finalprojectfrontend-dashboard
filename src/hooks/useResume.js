import {  useQuery } from 'react-query';
import { getResume } from './quaries/getResume';
import axios from 'axios';
import { Auth } from './utils';
const useResume = () => {

const {data:user , options:Headers} = Auth.getAuthenticatedUser()

const apiUrl = process.env.API_URL || ' http://localhost:9999/api';
	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getResume', () => getResume() )

  
      const addNewResume = async (resume) => {
        
        const addresumeRes=   await axios.post(`${apiUrl}/resume`, {...resume},{headers:Headers})
		return addresumeRes;
	};

	return {
		resume: data,
		isLoading,
		isError,
		getResumeById : (id) =>  data?.data.filter((data)=>data.userId===id),
        addNewResume
	};
};

export default useResume;