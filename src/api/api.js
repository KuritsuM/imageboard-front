import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        "Content-Type": "application/json",
        //"Authorization": "BEARER eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NDI2MjM3MTYsImV4cCI6MTY0MjYyNzMxNiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoia3VyaXN1bSJ9.OkS2ST2fMmz9JZ2cbILFM6QLILrOsFr1Oj-wve-UljpACzbY_-3ALSzNEeAHBP30xCb34Jkch3gpksSkgryrD3gc_CQP37lTGrjz-CgAbVxGcp7FzNTOlcvMbdcJGRD07Qqa5IZXQTbhXsKvRlUP9Y7MDroHkTGA1RfyabgY9-Buxybi7GJEJ5bbXrGTkFtSKuvwhnaW477ozadld8SR-kyRGkhqNZt4LfiOeHvKcVfFcNo_PXQG1uuDExE4_uX5IsYarbVICmYg_hlkMCmjP7BMFmX91SmQjQyzfA_9CNfeLO2gihyTEIyuLhFs7CgEAhcDG-797xpNAFNIeVAA8TkqwwW8fu6kEAF31iwinT7s2G9BaIMghc3lcrP-6D-gNRwgEYwThiIYtdTAggRMJtlm46eGNJfudfMyxiRBhsRJ0D0UVcPKk2mZUcBORYFOeQ_z5-nIrEkTFOfoCmba3oIL5Hft7ScCnWeHijyaPInYAVDbE-b-wUNaE0Cv5KTeRC0oYB2iRS0jNNZ4do9D1-LfWE03fpPmPmjnqOe8qZQ6MT9WsrCRa-FRGm3_Cgh8_oql99Y8tE_c6jx_1acKMb3sE4pbdJT-EJTfMvZ8fqPw3YoyJhRAZiWJRTsX067L8fo81VidbOmYvCmlib8pzv-PE9-sEJCZsPy87IAac78"
    },
    withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
})

axiosInstance.interceptors.response.use((config) => {
    return config;
}, async error => {
    const originalRequest = error.config;

    console.log('here');

    if (error.response.status === 401 && !originalRequest._isRetry) {
        originalRequest._isRetry = true;

        try {
            const params = new URLSearchParams();

            params.append('refresh_token', localStorage.getItem('refresh_token'));

            const config = {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }

            const response = await axios.post('http://localhost:8000/token/refresh', params, config);

            console.log(response);

            localStorage.setItem('token', response?.data?.token);
            localStorage.setItem('refresh_token', response?.data?.refresh_token);

            console.log(response);

            return axiosInstance.request(error.config);
        }
        catch (e) {
            console.log('You are unauthorized');
        }
    }
});

/*axiosInstance.interceptors.request.use(
    (config) => {
        //const token =
    }
)*/

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

export default axiosInstance;