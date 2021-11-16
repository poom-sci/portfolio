import axios from 'axios';

const fetchClient = () => {
  const defaultOptions = {
    baseURL: process.env.NEXT_PUBLIC_API_PATH,
  };

  // Create instance
  const instance = axios.create(defaultOptions);

  // Set the AUTH token for any request
  // instance.interceptors.request.use((config) => {
  //   const token = localStorage.getItem('token');
  //   // eslint-disable-next-line no-param-reassign
  //   config.headers.Authorization = token ? `Bearer ${token}` : '';
  //   return config;
  // });

  return instance;
};

export default fetchClient();
