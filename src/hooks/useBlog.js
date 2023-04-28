import {  useQuery } from 'react-query';
import { getBlog } from './quaries/getBlog';
const useBlog = () => {
	
	const {
		data,
		isLoading,
		isError,
	} = useQuery('getBlog', ()=>getBlog() )

	
	return {
		blog: data,
		isLoading,
		isError
	};
};

export default useBlog;