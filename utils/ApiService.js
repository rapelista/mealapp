import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

class ApiService {
    get(endpoint) {
        return new Promise((resolve, reject) => {
            api
                .get(endpoint)
                .then(response => resolve(response.data))
                .catch(error => reject(error));
        });
    }
}

export default new ApiService();