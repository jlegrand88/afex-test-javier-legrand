import axios from 'axios';

const defaultConfig = {
  baseURL: 'https://quwnhu3hf8.execute-api.us-east-2.amazonaws.com/test/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};
const apiClient = axios.create(defaultConfig);

apiClient.queryParams = (json) => {
  const params = Object.entries(json)
    .map(([key, value]) => (`${key}=${value}`))
    .join('&');

  return encodeURI(params);
};

export default apiClient;
