// Callin API
import axios from "axios";
const apiURL = 'https://randomuser.me/api/?results=100&nat=us'
export default {
    getEmployees: () => {
        return axios
        .get(apiURL);
    }
}