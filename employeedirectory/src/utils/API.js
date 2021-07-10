// Callin API
import axios from "axios";
const apiURL = 'https://randomuser.me/api/'
export default {
    getEmployees: () => {
        return axios
        .get(apiURL);
    }
}