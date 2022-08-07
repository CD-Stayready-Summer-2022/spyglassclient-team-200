import axios from "axios";
const USER_BASE_API_URI = 'http:://localhost:8080:/api/v1/users';

export function createUser(user){
    return axios.post(USER_BASE_API_URI, user);
}
export function getUserById(id){
    return axios.get(`${USER_BASE_API_URI}/${id}`);
}
export function getAllUsers(){
    return axios.get(USER_BASE_API_URI);
}
export function updateUser(id, user){
    return axios.put(`${USER_BASE_API_URI}/${id}`,user)
}
export function deleteUser(id){
    return axios.delete(`${USER_BASE_API_URI}/${id}`);
}
export function getUserByEmail(email){
    return axios.get(`${USER_BASE_API_URI}/lookup?email=${email}`);
}