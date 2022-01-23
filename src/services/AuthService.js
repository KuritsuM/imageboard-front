import axiosInstance from "../api/api";
import axios from "axios";

export default class AuthService {
    static async login(username, password) {
        return axiosInstance.post('login_check', {'username' : username, 'password' : password})
            .then(response => {
                localStorage.setItem('token', response?.data?.token);
                localStorage.setItem('refresh_token', response?.data?.refresh_token);

                return response;
            });
    }
}