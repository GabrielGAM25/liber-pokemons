import axios from 'axios';

export const BASE_API_URL = 'https://pokeapi.co/api/v2';

const get = (path, ...props) => (
  axios.get(`${BASE_API_URL}/${path}`, ...props)
    .then(({ data }) => data)
);

const APIClient = { get };

export default APIClient;
