import axios from "axios";

export const getAll = () => {
  const baseURL = 'http://localhost:5173/db.json';
  return axios.get(baseURL).then(response => response.data.persons);
};

