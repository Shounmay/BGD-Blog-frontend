import axios from 'axios';

const axiosInterceptorInstance = axios.create({
	baseURL: 'http://localhost:6002', // Replace with your API base URL
});

// Request interceptor

export default axiosInterceptorInstance;
