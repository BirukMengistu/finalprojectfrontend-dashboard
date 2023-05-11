import {  useQuery } from 'react-query';
import { getBlog } from './quaries/getBlog';
import { apiUrl } from './api';
import axios from 'axios'
const useBlog = () => {
	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getBlog', ()=>getBlog() )
	const AddNewBlog = async (Project) => {
        
        const addProjectRes=   await axios.post(`${apiUrl}/blog`, {...Project},{headers:Headers})
		return addProjectRes;
	};
	const deleteBlog = (id)=>{
		const response = axios.delete(`${apiUrl}/blog/${id}`,{ headers :Headers})
        const deleteRes=response
		return deleteRes;
	}
	return {
		blog: data,
		isLoading,
		isError,
		AddNewBlog,
		deleteBlog
	};
};

export default useBlog;