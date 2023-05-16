import {  useQuery } from 'react-query';
import { getEducation } from './quaries/getEducation';
import axios from 'axios';
import { Auth } from './utils';
const useEducation = () => {

const {data:user , options:Headers} = Auth.getAuthenticatedUser()

const apiUrl = process.env.API_URL || ' http://localhost:9999/api';
	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getEducation', ()=>getEducation() )

  
      const addNewEducation =  (education) => {
        const addEducationRes =    axios.post(`${apiUrl}/education`, {...education},{headers:Headers})
		return addEducationRes;
	};
   

	const deletEducation = (id)=>{
		const response = axios.delete(`${apiUrl}/education/${id}`,{ headers :Headers})
        const deleteRes=response
		return deleteRes;
	}
	return {
		userEducation: data,
		isLoading,
		isError,
		getEducationById : (id) =>  data?.data.filter((data)=>data.userId===id),
        addNewEducation,
		deletEducation
	};
};

export default useEducation;