import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
    }
});

export const getThreads = (board) => {
    return axiosInstance.get(`threads/${board}`)
        .then(response => response.data)
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