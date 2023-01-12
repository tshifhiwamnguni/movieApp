import axios from "axios"

const baseUrl = 'https://strapi-movie-app.onrender.com/api/users'

const getAll = () => {
  return axios.get(baseUrl);
};

const get = id => {
  return axios.get(`baseUrl${id}`);
};

const create = data => {
  return axios.post(baseUrl, data);
};

const update = (id, data) => {
  return axios.put(`baseUrl${id}`, data);
};

const remove = id => {
  return axios.delete(`baseUrl${id}`);
};

const removeAll = () => {
  return axios.delete(`baseUrl`);
};

const userService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default userService;