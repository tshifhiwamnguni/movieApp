import axios from 'axios';
import { API, TOKEN } from '../components/environment/constant';


export const getUser = (id) => {
    return axios.get(`${API}/users/${id}?populate=*`,{
        headers: {
            Authorization: `Bearer ${TOKEN}`
        }
    })
};