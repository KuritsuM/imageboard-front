import axios from "axios";
//import store from "../redux/redux-state";
import {formLogin} from "../redux/loginReducer";
import axiosInstance from "./apiInterceptors";


export const getThreads = (board) => {
    return axiosInstance.get(`threads/${board}`)
        .then(response => response.data);
}

export const getPosts = (thread) => {
    return axiosInstance.get(`posts/${thread}`)
        .then(response => response.data);
}

export const createPost = (post) => {
    return axiosInstance.post(`posts/`, post)
        .then(response => { console.log(post);console.log(response); return response.data });
}

export const createThread = (thread) => {
    return axiosInstance.post(`threads/`, thread)
        .then(response => response.data);
}

export const deletePosts = (postId) => {
    return axiosInstance.delete(`posts/delete/${postId}`)
        .then(response => { console.log(response); return response.data })
}

export const uploadFiles = (files) => {
    let formdata = new FormData();
    if (files !== undefined) {
        files.map((file, index) => {
            formdata.append(index, file);
            formdata.append(index, file.name);
        })

        return axiosInstance.post(`file/`, formdata)
            .then(response => response);
    }
}

export const getUser = () => {
    return axiosInstance.get('getuser').then(response => response);
}

export default axiosInstance;