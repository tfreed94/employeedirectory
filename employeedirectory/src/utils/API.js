// Callin API
import axios from "axios";
const API = 'https://randomuser.me/api/'
export default {
    getEmployees: () => {
        return axios
        .get(API);
    }
}