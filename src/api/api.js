import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
});

export const getThreads = (board) => {
    return axiosInstance.get(`threads/${board}`)
        .then(response => response.data)
}

export const getPosts = (thread) => {
    return axiosInstance.get(`posts/${thread}`)
        .then(response => response.data);
}