import axios from 'axios';

const baseDomain = 'https://challenge.maniak.co/api';

const axiosClient = axios.create({
    baseURL: baseDomain
});

export default axiosClient;
