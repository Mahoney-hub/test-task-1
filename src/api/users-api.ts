import axios from 'axios';
import {RootObject} from '../types/types';

export const usersAPI = {
    getUsers() {
        return axios.get<RootObject[]>('https://jsonplaceholder.typicode.com/users/')
    },
}