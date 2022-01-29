import axios from "axios";
import {formLogin} from "../redux/loginReducer";

let axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true
});

let store;

export const injectStore = (_store) => {
    store = _store;
}

axiosInstance.interceptors.request.use((async (config) => {
    if (!!localStorage.getItem('token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

        await axios.get('http://localhost:8000/api/getuser', { headers: { authorization: `BEARER ${localStorage.getItem('token')}`}})
            .then(response => {
                store.dispatch(formLogin(response?.data?.data?.username, response?.data?.data?.roles))
            })
            .catch(error => {
                console.log(error);
            })
    }

    return config;
}));

axiosInstance.interceptors.response.use((config) => {
        return config;
    },
    async error => {
        const originalRequest = error.config;

        //console.log('here');

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

                localStorage.setItem('token', response?.data?.token);
                localStorage.setItem('refresh_token', response?.data?.refresh_token);

                store.dispatch(formLogin(response?.data?.user?.username, response?.data?.user?.roles));

                console.log(response?.data?.user);

                return axiosInstance.request(error.config);
            }
            catch (e) {
                console.log('You are unauthorized');
            }
        }
    });

export default axiosInstance;